/// <reference types="react" />
import '../styles/SelectOrder.css';
interface Props {
    page: number;
    setPage: any;
}
declare const Pagination: ({ page, setPage }: Props) => JSX.Element;
export default Pagination;
