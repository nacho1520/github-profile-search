import heroImg from "../assets/hero-image-github-profile.png";


const Home = () => {
  return (
    <main className="">
      <img 
        src={ heroImg.src }
        className="w-full h-[240px] object-cover"
      />
    </main>
  );
};

export default Home;
