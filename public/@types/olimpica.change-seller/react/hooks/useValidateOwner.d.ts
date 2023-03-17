export declare const UseGetCurrentUser: () => Promise<any>;
export declare const UseGetRole: (userID: string) => Promise<boolean>;
declare const useValidateOwner: () => {
    owner: boolean;
    message: string;
};
export default useValidateOwner;
