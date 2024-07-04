"use client";

import heroImg from "../assets/hero-image-github-profile.png";

import { useEffect, useState, useReducer } from "react";
import useFetch from "@/hooks/useFetch";
import profileReducer from "@/reducers/profile.reducer";
import loaderReducer from "@/reducers/loading.reducer";

import Profile from "@/components/Profile";
import Feed from "@/components/Feed";
import SearchBar from "@/components/SearchBar";
import SearchCard from "@/components/SearchCard";
import LoaderSpinner from "@/components/LoaderSpinner";

const profile = {
  user: "github",
  name: "",
  bio: "",
  avatarImg: "",
  followers: "",
  following: "",
  location: "",
  repositories: [],
  viewAll: false,
};


const loading = {
  loadingProfile: true,
  loadingResults: false,
}

const Home = () => {
  const { get } = useFetch();
  const { ACTIONS, reducer } = profileReducer;
  const { LOADING_ACTIONS, loadingReducer } = loaderReducer;
  const [ state, dispatch ] = useReducer(reducer, profile);
  const [ loadingState, loadingDispatch ] = useReducer(loadingReducer, loading); 
  // const [ loading, setLoading ] = useState(true);
  const [ query, setQuery ] = useState("");
  const [ searchResult, setSearchResult ] = useState({});

  const fetchData = () => {
    loadingDispatch({ type: LOADING_ACTIONS.LOAD_PROFILE });
    get(`https://api.github.com/users/${ state.user }`)
      .then(profileData => {
        dispatch({ type: ACTIONS.SET_PROFILE, payload: {
          user: profileData.login,
          name: profileData.name,
          bio: profileData.bio,
          avatarImg: profileData.avatar_url,
          followers: profileData.followers,
          following: profileData.following,
          location: profileData.location,
          viewAll: false,
        }})
        return get(profileData.repos_url);
      })
      .then(reposData => {
        dispatch({ type: ACTIONS.SET_REPOSITORIES, payload: reposData });
        loadingDispatch({ type: LOADING_ACTIONS.STOP_LOADING_PROFILE });
      })
      .catch(error => {
        console.log("Error:", error);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    setQuery("");
  }, [state.user]);

  useEffect(() => {
    if(query != "") {
      const getData = setTimeout(() => {
          console.log("Test", query);
          get(`https://api.github.com/search/users?q=${ query }&page=1&per_page=1`)
            .then(profiles => {
              return get(profiles.items[0].url);
            })
            .then(userData => {
              setSearchResult(userData);
            })
            .catch(error => console.log("Search fetch error:", error));
      }, 2000);

      return () => clearTimeout(getData);
    } else {
      setSearchResult({});
    }
  }, [query]);

  const handleInput = (value) => {
    setQuery(value);
  };

  const handleProfileSelection = () => {
    console.log('Click');
    dispatch({ type: ACTIONS.SET_USER, payload: searchResult.login });
  };

  const handleViewAll = () => {
    dispatch({ type: ACTIONS.SET_ALL_REPOSITORIES });
  };

  const handleNavigation = (url) => {
    window.open(url);
  };


  return (
    <main className="flex flex-col items-center">
      <img 
        src={ heroImg.src }
        className="w-full h-[240px] object-cover"
      />
      <div className="w-full flex flex-col items-center justify-center absolute top-[32px] left-0">
        <SearchBar  
          input={ query }
          setInput={ handleInput }
        />
        {
          Object.keys(searchResult).length > 0 ? (
            <SearchCard 
              name={ searchResult.name }
              bio={ searchResult.bio }
              avatar={ searchResult.avatar_url }
              manageClick={ () => handleProfileSelection() }
            />
          ) : ''
        }
      </div>
      {
        loadingState.loadingProfile ? 
        (
          <div className="pt-12">
            <LoaderSpinner
              size={ 60 }
            />
          </div>
        ) :
        (
          <>
            <Profile 
              name={ state.name }
              bio={ state.bio }
              avatar={ state.avatarImg }
              followers={ state.followers }
              following={ state.following }
              location={ state.location }
            />
            <Feed 
              data={ state.viewAll ? state.repositories : state.repositories.slice(0,4) }
              handleBtn={ () => handleViewAll() }
              allRepositories={ state.viewAll }
              handleNavigation={ handleNavigation }
            />
          </>
        )
      }
      
    </main>
  );
};

export default Home;
