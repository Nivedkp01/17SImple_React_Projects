import React, { useContext } from 'react'
import { FeatureFlagContext } from './Context/Context'


import DarkLight from '../7DarkLight/DarkLight';
import Star from '../2Star/Star';
import ImageSlider from '../3ImageSlider/ImageSlider';
import TabTest from '../9Tabs/TabTest';

function FeatureFlag() {
  const {loading,enableFlags}=useContext(FeatureFlagContext)
  if(loading ===true)
  {
    console.log('Loading Please Wait')
    return(<h1>Loading Please Wait...</h1>)
  }



  const componentsToRender=[
    {
      key:'showLightAndDark',
      component: <DarkLight /> 
    },
    {
      key:'star',
      component:<Star number={5} />
    },
    {
      key:'ImageSlider',
      component:<ImageSlider url={'https://picsum.photos/v2/list?page=1&'} limit={30}/>
    },
    {
      key:'Tab',
      component:<TabTest />
    }
  ]

  function check(getCurrentView)
  {
    return enableFlags[getCurrentView]
  }

  return (
    <div style={{textAlign:'center'}}>
  
        <h1>Feature Flags</h1>
        {componentsToRender.map((item)=>{
          return(
            check(item.key)? item.component:null

          )
        })}
    </div>
  )
}

export default FeatureFlag