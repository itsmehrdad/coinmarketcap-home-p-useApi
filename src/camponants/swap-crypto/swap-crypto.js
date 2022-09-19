
import {daiAddress,mehrdadAddress,usdcAddress,dogeAddress
      ,daiAbi,dogeAbi,mehrdadAbi,usdcAbi} from "../../lib/addres"
import { useEffect,useState } from "react"
const Swap = () =>{
      const [currentAccount, setCurrentAccount] = useState('')
      const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
      const [fromToken, setFromToken] = useState('ETH')
      const [toToken, setToToken] = useState('')
      const [amount, setAmount] = useState('')

      const getContractAddress = () => {
            if (fromToken === 'Dai') return daiAddress
            if (fromToken === 'Dogecoin') return dogeAddress
            if (fromToken === 'Mehrdadcoin') return mehrdadAddress
            if (fromToken === 'Usdc') return usdcAddress
          }
          const getToAddress = () => {
            if (fromToken === 'Dai') return daiAddress
            if (fromToken === 'Dogecoin') return dogeAddress
            if (fromToken === 'Mehrdadcoin') return mehrdadAddress
            if (fromToken === 'usdc') return usdcAddress
          }
          const getToAbi = () => {
            if (toToken === 'Dai') return daiAbi
            if (toToken === 'Dogecoin') return dogeAbi
            if (toToken === 'Mehrdadcoin') return mehrdadAbi
            if (toToken === 'Usdc') return usdcAbi
          }

      return(<></>)
}
export default Swap