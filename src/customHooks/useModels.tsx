import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { scrollToTop } from "../utilities/utilities";
import { useGetAllModelsQuery } from "../redux-store/modelsApi";


export const useModels = () => {

    const [typeModels] = useState<string>(" ");
    const [searchParams] = useSearchParams();
    const postQuery: string = searchParams.get("sort") || "all";
    const pageFromHistory: string = searchParams.get("page") || '1';
    const [currentPage, setCurrentPage] = useState(pageFromHistory);

    const queryParams = () => ({
        sortParam: (postQuery !== undefined) ? postQuery : "all",
        page: pageFromHistory,
    });

    const { data, isLoading, error } = useGetAllModelsQuery(queryParams());

    useEffect(() => {
        scrollToTop()
    }, [typeModels, currentPage])

    const pageNumbers = [];
    for (let index = 1; index <= Number(data?.totalPages); index++) {
        pageNumbers.push(index)
    }
    return { postQuery, data, isLoading, error, pageNumbers, setCurrentPage }
}