import React from 'react'
import Styles from './main.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

export const Footer=()=>{
    return(
        <div className={Styles.footer}>
            <a href="https://github.com/Mahmood787/CovideApp" ><GitHubIcon /> </a>
            <a href="https://www.facebook.com/profile.php?id=100007120710392"><FacebookIcon/> </a>
        </div>
    )
}