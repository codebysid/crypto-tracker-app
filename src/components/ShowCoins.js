import React from 'react'
import '../styling/ShowCoins.css'
export default function ShowCoins({coinsData}) {

  return (
    <div>
        <table>
        {coinsData?coinsData.map((ele,key)=>{
            let symbol=(ele.symbol).toUpperCase()
            let priceChange = ele.price_change_percentage_24h
            return (
                <tr className='coinProfile' key={key}>
                    <td><img className="coinImage" alt="" src={ele.image} /></td>
                    <td><p className="name">{ele.name}</p></td>
                    <td><p className="symbol">{symbol}</p></td>
                    <td><p className="price">${ele.current_price}</p></td>
                    {priceChange>0?<td><p className='priceChange green'>{priceChange}%</p></td>:<td><p className='priceChange red'>{priceChange}%</p></td>}
                    <td><p className="mktCap">${ele.market_cap}</p></td>
                    <td><p className="volume">${ele.total_volume}</p></td>
                </tr>
            );
        }):null}
        </table>
    </div>
  )
}
