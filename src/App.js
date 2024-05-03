
import './App.css'
import Star from './2Star/Star';
import ImageSlider from './3ImageSlider/ImageSlider';
import LoadButton from './4LoadMoreButtons/LoadButton';
import Navbar from './5RecursiveNavbar/Navbar';
import Qr from './6QRgenerator/Qr';
import Theme from './1CustomHook/Theme';
import Data from './5RecursiveNavbar/Data';
import DarkLight from './7DarkLight/DarkLight';
import ScrollIndicator from './8ScrollIndicator/ScrollIndicator';
import Tab from './9Tabs/Tab';
import TabTest from './9Tabs/TabTest';
import ModalTest from './10Modals/ModalTest';
import Github from './11Github/Github';
import FeatureFlagGlobalState from './14FeatureFlag/Context/Context';
import FeatureFlag from './14FeatureFlag/FeatureFlag';
// import Test from './16UseOnclickOutSide/Test';
import Test from './17USeWindowResize/Test';
import Scroll from './18ScrollToBottom/Scroll';
import ScrollSection from './19ScrollToSection/ScrollSection';


function App() {
  return (
    <div className="App">

      {/* useLocalstorage custom hook test <Theme /> */}

      {/*2nd Problem <Star number={5} /> */}


      {/*#rd <ImageSlider url={'https://picsum.photos/v2/list?page=1&'} limit={30}/> */}


      {/* <LoadButton /> */}


      {/* <Navbar data={Data} /> */}

      {/* <Qr /> */}
{/* 

      <DarkLight /> */}



      {/* <ScrollIndicator  url='https://dummyjson.com/products?limit=1000'/> */}



      {/* <TabTest /> */}


      {/* <ModalTest /> */}


      {/* <Github /> */}


      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}


      {/* //useFetch call */}
      {/* <Test /> */}


      {/* useOnClickOutSide */}
      {/* <Test /> */}
      


      {/* useWindowResize */}
      {/* <Test /> */}




      {/* <Scroll /> */}


{/* 
      <ScrollSection /> */}
    </div>
  );
}

export default App;
