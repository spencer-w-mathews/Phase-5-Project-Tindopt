import React from "react";


import ReplayIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashIcon from '@mui/icons-material/Pets';
import IconButton from '@mui/material/IconButton';

import "./SwipeButtons.css"

function SwipeButtons({swipe}){
    return(
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat" onClick={() => swipe('left')}>
            <ReplayIcon fontSize="large" />
            </IconButton>
            {/* <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
            </IconButton> */}
            <a href="https://kcpetproject.org/donate/" target="_blank" rel="noreferrer">
            <IconButton className="swipeButtons__star">
                <VolunteerActivismIcon fontSize="large" />
            </IconButton>
            </a>
            {/* <IconButton className="swipeButtons__right">
            <FavoriteIcon  fontSize="large" />
            </IconButton> */}
            <IconButton className="swipeButtons__lightning" onClick={() => swipe('right')}>
            <FlashIcon  fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;