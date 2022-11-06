import './App.css';
import ShowCoins from './components/ShowCoins'
import {useState,useEffect} from 'react'
import { TopSixCoins } from './components/TopSixCoins';

function App() {
  const [coinsData,setCoinsData]=useState([])
  const [search,setSearch]=useState("")
  const top6=coinsData.splice(0,6)

  const makeRequest=async()=>{
    try{
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      const data=await response.json()
      setCoinsData(data)
    }
    catch(err){
        console.log("Error while fetching data",err)
    }
  }

  useEffect(()=>{
    makeRequest()
  },[search])

  let coinFilter=coinsData.filter((ele)=>{
    if (ele.name.toLowerCase().includes(search.toLowerCase())){
      return ele
    }
  })

  return (
    <div className="App">
      <div className="searchContainer">
        <h1 className="cryptoHead">Crypto Tracker</h1>
        <input
          className="inputSearch"
          type="text"
          placeholder="Search Coin..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.trim());
          }}
        />
      </div>
      {search.length>0?<ShowCoins coinsData={coinFilter}/> :null}
      {top6.length ? <TopSixCoins topSix={top6} /> : null}
      <ShowCoins coinsData={coinFilter} />

    </div>
  );
}

export default App;
