"use client";

import heroImg from "../assets/hero-image-github-profile.png";

import { useEffect, useState, useReducer } from "react";
import Profile from "@/components/Profile";
import Feed from "@/components/Feed";
import useFetch from "@/hooks/useFetch";
import profileReducer from "@/reducers/profile.reducer";

const profile = {
  name: "",
  bio: "",
  avatarImg: "",
  followers: "",
  following: "",
  location: "",
  repositories: [],
};

const Home = () => {
  const { get } = useFetch();
  const { ACTIONS, reducer } = profileReducer;
  const [ state, dispatch ] = useReducer(reducer, profile);
  // const [ profile, setProfile ] = useState({});

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


  return (
    <main className="flex flex-col items-center">
      <img 
        src={ heroImg.src }
        className="w-full h-[240px] object-cover"
      />
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
