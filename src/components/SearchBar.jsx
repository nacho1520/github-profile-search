import search from "../assets/Search.svg";

const SearchBar = ({ input, setInput }) => {
    return(
        <div className="w-[484px] p-4 bg-primary-bg rounded-xl inline-flex flex-wrap gap-3 mb-2">
            <img 
                src={ search.src }
                className="size-6"
            />
            <input
                value={ input }
                onChange={ (e) =>  setInput(e.target.value) }
                placeholder="username"
                className="w-3/4 bg-transparent outline-none placeholder-gray-font text-gray-font text-base font-semibold"
            />
        </div>
    );
};

export default SearchBar;