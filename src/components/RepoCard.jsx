
import nesting from "../assets/Nesting.svg";
import star from "../assets/Star.svg";
import chield from "../assets/Chield_alt.svg";

const ImageLabel = ({ img, label }) => {
    return(
        <div className="inline-flex flex-wrap gap-1 items-center">
            <img 
                src={ img.src }
                className="size-6"
            />
            <p className="text-base font-semibold text-dark-gray-font">{ label }</p>
        </div>
    );
};

const RepoCard = ({ name, description, forks, stars, license }) => {
    return(
        <div className="rounded-xl p-5 bg-gradient-to-r from-dark-card to-card">
            <p className="text-xl text-white-font font-semibold mb-3">{ name }</p>
            <p className="text-base text-dark-gray-font font-medium">{ description }</p>
            <div className="inline-flex flex-wrap gap-6 mt-5 items-center">
                <div className="inline-flex flex-wrap gap-3">
                    {
                        license ? (
                            <ImageLabel  img={ chield } label={ license } />
                        ) : ''
                    }
                    <ImageLabel  img={ nesting } label={ forks } />
                    <ImageLabel  img={ star } label={ stars } />
                </div>
                <p className="text-xs text-dark-gray-font font-semibold">updated 4 days ago</p>
            </div>
        </div>
    );
};

export default RepoCard;