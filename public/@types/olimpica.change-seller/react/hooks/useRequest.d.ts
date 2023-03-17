declare const useRequest: (schema?: any) => {
    state: {
        data: any;
        loading: boolean;
        error: boolean;
    };
    getData: (endpoint: any) => Promise<void>;
};
export default useRequest;
