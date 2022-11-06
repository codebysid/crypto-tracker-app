import React from 'react'
import '../styling/TopSixCoins.css'
export const TopSixCoins = ({topSix}) => {
  return (
    <div className='mainParent'>
            {topSix.map((ele,key)=>{
                let symbol = ele.symbol.toUpperCase();
                let priceChange = ele.price_change_percentage_24h;
                return (
                <div className='topCoinProfile' key={key}>
                        <img className="topImage" alt="" src={ele.image} />
                        <p className="topName">{ele.name}</p>
                        <p className="topSymbol">{"("+symbol+")"}</p>
                        <p className="topPrice">Price:${ele.current_price}</p>
                        {priceChange>0?<p className='priceChange green'>Price Change:{priceChange}%</p>:<p className='=topPriceChange red'>Price Change:{priceChange}%</p>}
                        <p className="topMktCap">Market Capital:${ele.market_cap}</p>
                        <p className="topVolume">Total Volume:${ele.total_volume}</p>
                </div>
                )
            })}
    </div>
  )
}
