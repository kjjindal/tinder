import React from 'react';
import {Person,Forum,ArrowBackIos} from '@material-ui/icons';
// import PersonIcon from '@material-ui/icons/Person';
// import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import IconButton from "@material-ui/core/IconButton";
import {Link, useHistory} from 'react-router-dom';


function Header({backbutton}){
    const history =useHistory();
    return (
        <>
        <div className="header">
        
       
        {backbutton ? ( <IconButton   onClick={()=>(history.replace(backbutton))}  ><ArrowBackIos  fontSize="large" className="header__icon" /> </IconButton>      ) : (<IconButton> <Person  fontSize="large" className="header__icon" />          </IconButton>)}
        


<Link to="/">
<img src="../tinder.png" alt="tinder" className="header__logo"  />

</Link>
         

         <Link to="/chat">
             <IconButton>
           <Forum fontSize="large" className="header__icon" />

           </IconButton>
         </Link>
           
           
        </div>


        </>
    )
}


export default Header;