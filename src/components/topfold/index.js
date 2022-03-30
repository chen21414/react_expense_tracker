import React, { useState } from 'react'
import './topfold.css'
import {Search, AddCircleOutline, ArrowCircleLeft, Cancel} from '@mui/icons-material/';
import {Link} from 'react-router-dom';

const Topfold = () => {
  const [query, setQuery] = useState("")
  const handleQuery=(e)=>{
    setQuery(e.target.value)
  }
  return (
    <div className='topfold'>
      {window.location.pathname ==='/'?
      <div className='home-topfold'>
          <div className='searchbar'>
            <Search/> <input value={query} placeholder='Search for expenses' onChange={(e)=>handleQuery(e)}></input>
          </div>
          <Link to='/add-expense'>
          <div className='add-button'>
            <AddCircleOutline/> <label>Add</label>
          </div>
          </Link>
      </div>
      :
      <div className='add-topfold'>
        <Link to='/'>
        <div className='add-topfold-button'>
          <ArrowCircleLeft/>
          <label>Back</label>
        </div>
        </Link>
        <Link to='/'>
        <div className='add-topfold-button'>
          <Cancel/>
          <label>Cancel</label>
        </div>
        </Link>
      </div>}
    </div>
  )
}

export default Topfold