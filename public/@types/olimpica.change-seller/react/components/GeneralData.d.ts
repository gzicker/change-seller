/// <reference types="react" />
interface Props {
    orders: any;
    message: string;
    paymentMethod: any;
    paymentMethods: string[];
}
declare const GeneralData: (props: Props) => JSX.Element;
export default GeneralData;
