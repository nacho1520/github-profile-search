"use client";

import heroImg from "../assets/hero-image-github-profile.png";

import { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import Feed from "@/components/Feed";
import useFetch from "@/hooks/useFetch";

const Home = () => {
  const { get } = useFetch();
  const [ profile, setProfile ] = useState({});

  useEffect(() => {
    get('https://api.github.com/users/github')
      .then(profileData => {
        setProfile(profileData);
        return get(profileData.repos_url);
      })
      .then(reposData => {
        console.log(reposData);
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
        name={ profile.name }
        bio={ profile.bio }
        avatar={ profile.avatar_url }
        followers={ profile.followers }
        following={ profile.following }
        location={ profile.location }
      />
      <Feed 
      />
    </main>
  );
};

export default Home;
