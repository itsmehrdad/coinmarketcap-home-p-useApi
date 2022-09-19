import './header.css'
import { Link, Route, Routes } from 'react-router-dom';
import {ConnectButton} from 'web3uikit'
import Swap from '../swap-crypto/swap-crypto';

const Header = ()=>{
      return(
            <div className="bg-dark h-auto d-flex">
                   <img className='my-3 mx-3' width={220} src="https://watcher.guru/assets/img/cmc-logo.png?h=78b2aa1bd993094643beb0e4d531eca0"></img>
                  <div className=" my-3 mx-3 w-100 d-flex align-items-center justify-content-center ">
                     <div className="d-flex gap-4 mx-5 ">
                       <a className="a" href="">Cryptocurrencies</a>
                       <a className="a" href="">Exchanges</a>
                       <a className="a" href="">NFT</a>
                       <a className="a" href="">Cryptown</a>
                       <a className="a" href="">Portfolio</a>
                       <a className="a" href="">Watchlist</a>
                       <a className="a" href="">Swap</a>
                       <a className="a" href="">Learn</a>
                       {/* <ConnectButton/> */}
                        <button className='connect-btn  px-3 ' >Connect Walet</button> 
                     </div>
                  </div>
            </div>
      )
}
export default Header