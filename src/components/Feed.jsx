import RepoCard from "./RepoCard";

const Feed = ({ data, handleBtn }) => {
    return(
        <div className="w-[70%] mt-[34px] pb-6 flex flex-col items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-[34px] gap-x-8 mb-[46px]">
            {
                data.map(item => (
                    <RepoCard 
                        name={ item.name }
                        description={ item.description }
                        forks={ item.forks }
                        stars={ item.stargazers_count }
                        license={ item.license ? item.license.spdx_id : null }
                        key={ item.id }
                    />
                ))
            }
            </div>
            <button 
                className="text-base font-semibold text-dark-gray-font"
                onClick={ handleBtn }    
            >
                View all repositories
            </button>
        </div>
    );
};

export default Feed;