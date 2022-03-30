import React from 'react'
import './header.css'
import {CreditCard, GitHub} from '@mui/icons-material';
import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <Grid  className='header-logo' direction="row" alignItems="center">
                Xpensr <CreditCard fontSize="large"/>
            </Grid>
            <div className='header-button'>
              <a href='https://github.com' target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="small"/>Star
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header