/// <reference types="react" />
interface Props {
    props: {
        confirmation: any;
        modalState: boolean;
        message: string;
        loading: boolean;
    };
    setConfirmationModalState: any;
}
declare const ConfirmationModal: ({ props, setConfirmationModalState }: Props) => JSX.Element;
export default ConfirmationModal;
