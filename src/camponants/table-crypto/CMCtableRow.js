import { FcBearish } from "react-icons/fc";
const CMCtableRow = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol = '---',
  price = '----',
  hRate = '---',
  dRate = '---',
  hRateIsIncrement,
  dRateIsIncrement,
  marketCapValue = '---',
  volumeValue = '---',
  volumeCryptoValue = '---',
  circulatingSupply = '---',
}) => {
  const graphImages = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
  ]

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1
    return graphImages[rndInt]
  }

  const formatNum = num => {
    return Number(num.toFixed(2)).toLocaleString()
  }

  return (
      <tbody className="text-dark">
      <tr >   
      <td >{starNum}</td>  
           <td >
               {/* <img src={coinIcon}  width={20} height={20} /> */}
               {coinName}
           </td>
        <td  >
          <p>${formatNum(price)}</p>
        </td>
        <td>
          
      <FcBearish/>{`${formatNum(hRate)}%`} 
        </td>
        <td>
        <FcBearish/>{`${formatNum(dRate)}%`} 
        </td>
        <td>   
            <p>${formatNum(marketCapValue)}</p>    
        </td>
        <td>     
            {formatNum(volumeValue)}
            <p className='text-muted'>
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>       
        </td>
        <td>
            <p>{formatNum(circulatingSupply)}</p>        
        </td>
        <td>
          <img src={getRandomGraph()} width={150} height={60} alt='' />
        </td>
      </tr>  
      </tbody>  
  )
}

export default CMCtableRow