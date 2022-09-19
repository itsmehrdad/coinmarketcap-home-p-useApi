import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './camponants/header/header';
import CMCtable from './camponants/table-crypto/cmctable';
import { FcBearish } from "react-icons/fc";


function App() {
  return (
    <div className="App w-100 h-auto bg-light">
      {/* <topheader></topheader> */}
     
     <Header/>
   <h2><p class="font-weight-bold p-3">Today's Cryptocurrency Prices by Market Cap</p></h2>
   <h3><p className=' p-3' >The global crypto market cap is $939.30B, <FcBearish/> a 5.95% decrease over the last day.</p></h3>
        <div className='d-flex justify-content-center p-3'>
        <CMCtable/> 
        </div> 
    </div>
  );
}
//align-items-center
export default App;
