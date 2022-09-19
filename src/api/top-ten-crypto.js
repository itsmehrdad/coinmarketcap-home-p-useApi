// const axios = require('axios')

// export default function handler (resolve, reject){
  
//    const getData =  async () => {
    
//    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${'3cd3c5e4-2b5e-43cb-8189-05fe5795ab03'}`, {
    
//       headers: {
//         'Access-Control-Allow-Origin'  : '*' , // 'Accept': '*/*',// 'Access-Control-Allow-Methods' : 'GET',// 'Content-Type' : 'application/x-www-form-urlencoded'
//       }
//     })
//     const data = await response.data.data
//     console.log(data)
 
//   }
//   getData()
  
// };


const axios = require('axios');

let response = null;
export default async function getTopTenCoins (resolve, reject) {
  try {
    response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${'3cd3c5e4-2b5e-43cb-8189-05fe5795ab03'}`, {
      headers: {
        
      },
    }) ;
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
  //  success : true
    const json = response.data.data;
   // console.log(json);
    return json;
  }
};
