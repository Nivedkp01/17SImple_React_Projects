import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagContext=createContext(null)

export default function FeatureFlagGlobalState({children})
{

    const [enableFlags,setEnableFlags]=useState({})
    const [loading,setLoading]=useState(true)


    async function fetchFeatureflag()
    {
        setLoading(true)
        const res=await featureFlagsDataServiceCall()
        console.log(res)
        setEnableFlags(res)
        setLoading(false)

    }
    
    useEffect(()=>{
        fetchFeatureflag()
    },[])
    return <FeatureFlagContext.Provider value={{loading,enableFlags}}>
        {children}
    </FeatureFlagContext.Provider>
}