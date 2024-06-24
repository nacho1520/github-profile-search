const InfoContainer = ({ label, info }) => {
    return(
        <div className="bg-dark-blue rounded-xl inline-flex flex-wrap items-center">
            <p className="text-base text-gray-font font-semibold px-5 py-4">{ label }</p>
            <p className="text-base text-gray-font font-semibold">|</p>
            <p className="text-base text-white-font font-semibold px-5 py-4">{ info }</p>
        </div>
    );
};

export default InfoContainer;