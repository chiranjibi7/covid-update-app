import React, { useEffect, useState } from 'react';
import './App.module.css';
import axios from 'axios';
import classes from './App.module.css';
import Country from './Components/Country';

function App() {

  const[datas,setData]=useState([]);
  const[search,setSearch]=useState('');

  useEffect(()=>{
    axios.get(" https://coronavirus-19-api.herokuapp.com/countries")
    .then(response=>{
      console.log(response.data);
      setData(response.data);
    });
  },[]);

  const inputChangedHandler=event=>{
    setSearch(event.target.value);
  };

  const submitHandler=event=>{
    event.preventDefault();
    let searchedData='';
    searchedData=datas.filter(data=>{
      return data.country===search;
    });
    setData(searchedData); 

  }


  return (
    <div className={classes.App}>
      <div className={classes.Heading}>
        <h1>Live Covid-19 Cases by Chiranjibi Karki</h1>
      </div>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input className={classes.Input} type="text" placeholder="search country" onChange={inputChangedHandler}/>
        <button className={classes.Button} type="submit">Search</button>
      </form>

      <div className={classes.Country}>
        {datas.map(({country,cases,a,deaths,b,recovered,active,critical})=>(
          <Country 
          country={country}
          key={country}
          cases={cases}
          deaths={deaths}
          recovered={recovered}
          active={active}
          critical={critical}
         />
        ))}
      </div> 
    </div> 
  );
}

export default App;
