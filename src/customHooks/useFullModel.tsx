import { useEffect } from "react";
import { useGetModelByIdQuery } from "../redux-store/modelsApi";
import { scrollToTop } from "../utilities/utilities";


export const useFullModel = ()=>{

    const idFromPath: string = window.location.pathname.split('/')[3];

    const { data: model, error, isLoading } = useGetModelByIdQuery(idFromPath);
    
    useEffect(() => {
      scrollToTop()
    }, [isLoading])

    return{
        model,error
    }
}
