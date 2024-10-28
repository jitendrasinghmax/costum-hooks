import { useEffect, useState } from "react";

const useFetch=(url)=>{
    let [finalData,setFinaldata]=useState({});
    let [loading,setLoading]=useState(false);
    async function getdata() {
      setLoading(true);
      const resp=await fetch(url);//the control waits for the response
                                  //and all the below code executed after the response. 
      const data=await resp.json();
      setFinaldata(data);
      setLoading(false)
    }
    useEffect(()=>{
      getdata();
    },[url])//every time the url is updated,use effect triggrs.
    return {finalData,loading};
}

export default useFetch;