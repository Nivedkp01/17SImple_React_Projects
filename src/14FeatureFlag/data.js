const dummyApiResponse={
    showLightAndDark:true,
    Tab:true,
    ImageSlider:true



}


function featureFlagsDataServiceCall()
{
    return new Promise((resolve,reject)=>{
        
            if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
            else reject('Some Erro Occured Please Try Again!')
        
    })
}

export default featureFlagsDataServiceCall