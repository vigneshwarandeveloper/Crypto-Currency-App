import React from 'react';
import "../style/table.css";


const Table = ({setsearch,search,currency}) => {
  return (
    <main>

    <div className='bg'>
      <h1 className='crypto-header'>Crypto Currency App👋 </h1>
    <input type='text' placeholder='search...'
      onChange={(e)=>setsearch(e.target.value)}
      className='search-input'
    />
    <table >
      <thead>
        <tr>
          <th className='table-header'>Rank</th>
      
          <th className='table-header'>Symbol</th>
          <th className='table-header'>Name</th>
          <th className='table-header'>Market Cap</th>
          <th className='table-header'>Price</th>
          <th className='table-header'>Available Supply</th>
          <th className='table-header'>Volume</th>
        </tr>
      </thead>
     
      <tbody>
      {currency.filter((val)=>{
          return val.name.toLowerCase().includes(search.toLowerCase()
          ) 
        }).map((val)=>{
            
          return <tr key={val.rank}>
            <td className='table-data'>{val.rank}</td>

            <td className='table-data'>
              <a href={val.websiteUrl}>
                <img src={val.icon}/>
              </a>
              <p className='name'>{val.name}</p>
            </td>


            <td className='table-data'>{val.symbol}</td>
            <td className='table-data'>{val.marketCap}</td>
            <td className='table-data'>₹{val.price.toFixed(2)}</td>
            <td className='table-data'>{val.availableSupply}</td>
            <td className='table-data'>{val.volume.toFixed(0)}</td>
          </tr>
        })}
     </tbody>
    </table>
    </div>
   </main>
  )
}

export default Table
