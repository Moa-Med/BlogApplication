import { useState, useEffect } from "react";
const useFetch = (url) => {
  
    const [data , setData] = useState (null);
    const [error,setError] = useState(null)

    useEffect(() => {

         /* abort for the cleaner useEffect and add it as a second argument in fetch*/
      const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error ('Could not fetch the data ')
            }
            return res.json();
        }).then(data => {
            setData(data);
        }).catch(err =>{   
            if(err !== 'AbortError'){
                console.log('Fetch Aborted');
              }else{
                setError(err.message)
              }
        });
        return () => abortCont.abort(); 
    },[url]);
    return {data,error}
}
 
export default useFetch;