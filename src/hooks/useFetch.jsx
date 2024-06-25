const useFetch = () => {
    const get = async (endpoint) => {
        const service = await fetch(endpoint);
        const response = await service.json();
        return response;
    }

    return { get };
};

export default useFetch;