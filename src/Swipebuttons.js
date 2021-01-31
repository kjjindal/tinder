import React from 'react'
import './Swipebuttons.css';
import {Replay,Close,StarRate,FlashOn,Favorite} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const Swipebuttons = () => {
    return (
        <>
        <div className="swipebuttons">
        <IconButton className="swipebuttons__repeat"  > <Replay  fontSize="large" /></IconButton>
        
        <IconButton className="swipebuttons__left"  ><Close fontSize="large" /></IconButton>
      
        <IconButton className="swipebuttons__star"  >   <StarRate  fontSize="large" />   </IconButton>
        <IconButton className="swipebuttons__right"  ><Favorite  fontSize="large" /> </IconButton>
        <IconButton className="swipebuttons__lighting"  ><FlashOn  fontSize="large" /></IconButton>


       
        
        

        </div>


        </>
    )
}

export default Swipebuttons
