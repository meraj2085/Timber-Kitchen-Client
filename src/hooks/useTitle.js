import { useEffect } from "react"

const useTitle = title =>{
     useEffect(()=>{
          document.title = `${title} - Timber Kitchen`;
     },[title])
};

export default useTitle;