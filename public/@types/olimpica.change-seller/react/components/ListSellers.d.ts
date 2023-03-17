/// <reference types="react" />
interface Props {
    modalState: boolean;
    close: any;
    handleConfirmation: any;
    isLoading: boolean;
    originSeller: string;
}
declare const ListSellers: (props: Props) => JSX.Element;
export default ListSellers;
