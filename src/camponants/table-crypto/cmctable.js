import {useState,useEffect} from 'react'
import getTopTenCoins from '../../api/top-ten-crypto'
import btc from '../../assets/btc.png'
import CMCtableRow from './CMCtableRow'


const CMCtable = () => {
  let [coinData, setCoinData] = useState(null)
      useEffect(() => {
        setData()
      }, [])
    
          const setData = async () =>{
            
            try {
                 const apiResponse = await getTopTenCoins()
                 let filteredResponse = []              
                 for (let i =0; i<apiResponse.length; i++){
                  const item = apiResponse[i]
                  if(item.cmc_rank <= 10) 
                  filteredResponse.push(item)                                    
                 }
                 setCoinData(filteredResponse)                    
                } catch (e) {
                  console.log(e.message)
                }  
              }     
              console.log(coinData)


      return(
        <table className='text-dark table'>
          <thead>
           <tr>
            <th scope="col" ><b># &nbsp;</b></th>
            <th scope="col" >Name</th>
            <th scope="col">Price</th>
            <th scope="col">24h %</th>
            <th scope="col">7d %</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Volume(24h)</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Last 7 days</th>
        </tr>
        </thead>
            {coinData && coinData ? (
              coinData.map((coin, index) => {
                return (
                  <CMCtableRow 
                    key={index}
                    starNum={coin.cmc_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                   // coinIcon={btc}
                    showBuy={true}
                    hRate={coin.quote.USD.percent_change_24h}
                    dRate={coin.quote.USD.percent_change_7d}
                    hRateIsIncrement={true}
                    price={coin.quote.USD.price}
                    marketCapValue={coin.quote.USD.market_cap}
                    volumeCryptoValue={coin.quote.USD.volume_24h}
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                
                )
              })
            ) : (
              <></>
            )}
        
        
      </table>
      
      
      
      
      )
}

export default CMCtable