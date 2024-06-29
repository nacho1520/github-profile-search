import RepoCard from "./RepoCard";

const Feed = ({ data }) => {
    return(
        <div className="w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-y-[34px] gap-x-8 mt-[34px] pb-6">
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
    );
};

export default Feed;