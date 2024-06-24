import InfoContainer from "./InfoContainer";


const Profile = ({ name, bio, avatar }) => {
    return(
        <div className="flex flex-col w-[70%] 2xl:w-[60%] relative">
            <img 
                className="w-[120px] h-[120px] rounded-[20px] border-8 border-primary-bg absolute top-[-30%]"
                src={ avatar }
            />
            <div className="inline-flex flex-wrap gap-5 ml-36 p-3 mb-5 self-center">
                    <InfoContainer 
                        label="Followers"
                        info="27839"
                    />
                    <InfoContainer 
                        label="Following"
                        info="0"
                    />
                    <InfoContainer 
                        label="Location"
                        info="San Francisco, CA"
                    />
            </div>
            <p className="text-[32px] text-white-font font-semibold mb-2">GitHub</p>
            <p className="text-base text-dark-gray-font font-bold">How people build software.</p>
        </div>
    );
};

export default Profile;