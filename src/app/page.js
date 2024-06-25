"use client";

import heroImg from "../assets/hero-image-github-profile.png";

import { useEffect, useState, useReducer } from "react";
import Profile from "@/components/Profile";
import Feed from "@/components/Feed";
import useFetch from "@/hooks/useFetch";
import SearchBar from "@/components/SearchBar";
import profileReducer from "@/reducers/profile.reducer";
import searchReducer from "@/reducers/search.reducer";

const profile = {
  name: "",
  bio: "",
  avatarImg: "",
  followers: "",
  following: "",
  location: "",
  repositories: [],
};

const search = {
  query: "",
  searchResults: []
};

const Home = () => {
  const { get } = useFetch();
  const { ACTIONS, reducer } = profileReducer;
  const { ACTIONS: SEARCH_ACTION, reducer: queryReducer  } = searchReducer;
  const [ state, dispatch ] = useReducer(reducer, profile);
  const [ searchState, searchDispatch ] = useReducer(queryReducer, search);

  useEffect(() => {
    get('https://api.github.com/users/github')
      .then(profileData => {
        dispatch({ type: ACTIONS.SET_PROFILE, payload: {
          name: profileData.name,
          bio: profileData.bio,
          avatarImg: profileData.avatar_url,
          followers: profileData.followers,
          following: profileData.following,
          location: profileData.location,
        }})
        return get(profileData.repos_url);
      })
      .then(reposData => {
        dispatch({ type: ACTIONS.SET_REPOSITORIES, payload: reposData });
      })
      .catch(error => {
        console.log("Error:", error);
      })
  }, []);

  const handleInput = (value) => {
    searchDispatch({ type: SEARCH_ACTION.SET_QUERY, payload: value });
  };


  return (
    <main className="flex flex-col items-center">
      <img 
        src={ heroImg.src }
        className="w-full h-[240px] object-cover"
      />
      <div className="w-full flex justify-center absolute top-[32px] left-0">
        <SearchBar  
          input={ searchState.query }
          setInput={ handleInput }
        />
      </div>
      <Profile 
        name={ state.name }
        bio={ state.bio }
        avatar={ state.avatarImg }
        followers={ state.followers }
        following={ state.following }
        location={ state.location }
      />
      <Feed 
        data={ state.repositories.slice(0,4) }
      />
    </main>
  );
};

export default Home;
