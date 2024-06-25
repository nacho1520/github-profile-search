const SearchCard = ({ name, bio, avatar }) => {
    return(
        <div className="w-[484px] bg-dark-blue rounded-xl p-2 inline-flex flex-wrap gap-3 items-center z-10 mb-2 cursor-pointer">
            <img 
                src={ avatar }
                className="size-[72px] rounded-xl"
            />
            <div className="flex-col">
                <p className="text-base font-semibold text-white-font mb-2">{ name }</p>
                <p className="text-xs font-medium text-dark-gray-font">{ bio }</p>
            </div>
        </div>
    );
};

export default SearchCard;