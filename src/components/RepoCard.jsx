
import nesting from "../assets/Nesting.svg";
import star from "../assets/Star.svg";

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

const RepoCard = () => {
    return(
        <div className="rounded-xl p-5 bg-gradient-to-r from-dark-card to-card">
            <p className="text-xl text-white-font font-semibold mb-3">.github</p>
            <p className="text-base text-dark-gray-font font-medium">Community health files for the @GitHub organization</p>
            <div className="inline-flex flex-wrap gap-6 mt-5 items-center">
                <div className="inline-flex flex-wrap gap-3">
                    <ImageLabel  img={ nesting } label="2,369" />
                    <ImageLabel  img={ star } label="703" />
                </div>
                <p className="text-xs text-dark-gray-font font-semibold">updated 4 days ago</p>
            </div>
        </div>
    );
};

export default RepoCard;