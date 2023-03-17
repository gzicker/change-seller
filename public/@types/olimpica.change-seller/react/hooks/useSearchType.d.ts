interface Props {
    input: string;
    page: number;
    per_page?: number;
}
declare const useSearchType: ({ input, page, per_page }: Props) => any[];
export default useSearchType;
