import InfoContainer from "./InfoContainer";


const Profile = ({ name, bio, avatar, followers, following, location }) => {
    return(
        <div className="flex flex-col w-[80%] lg:w-[70%] 2xl:w-[50%] relative">
            <img 
                className="w-[120px] h-[120px] rounded-[20px] border-8 border-primary-bg absolute top-[-20%] lg:top-[-30%]"
                src={ avatar }
            />
            <div className="flex flex-col gap-y-2 lg:flex-row lg:inline-flex lg:flex-wrap lg:gap-5 ml-36 p-3 mb-5 self-center">
                    <InfoContainer 
                        label="Followers"
                        info={ followers }
                    />
                    <InfoContainer 
                        label="Following"
                        info={ following }
                    />
                    <InfoContainer 
                        label="Location"
                        info={ location }
                    />
            </div>
            <p className="text-[32px] text-white-font font-semibold mb-2">{ name }</p>
            <p className="text-base text-dark-gray-font font-bold">{ bio }</p>
        </div>
    );
};

export default Profile;