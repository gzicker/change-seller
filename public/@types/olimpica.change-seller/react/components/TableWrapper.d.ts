/// <reference types="react" />
import '../styles/OrderDetails.css';
interface Props {
    orders: any;
    onChange: any;
    items: any;
}
declare const TableWrapper: ({ orders, onChange, items }: Props) => JSX.Element;
export default TableWrapper;
