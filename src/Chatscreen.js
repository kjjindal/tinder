import React, { useState } from 'react';
import {Avatar} from '@material-ui/core';
import './Chatscreen.css';

function Chatscreen(){
    const [input,setinput]=useState();
    const [messages,setmessages]=useState([
        {
            name:'Kalpit',
            image:'https://media.gettyimages.com/photos/-picture-id474639939?k=6&m=474639939&s=612x612&w=0&h=enU3Rg4feVmEcmddm2ngaYxeCujbOr0zIFLwS--DkU4=',
            message:'Whats up :)'
        },
        {
            name:'Kalpit',
            image:'https://media.gettyimages.com/photos/-picture-id474639939?k=6&m=474639939&s=612x612&w=0&h=enU3Rg4feVmEcmddm2ngaYxeCujbOr0zIFLwS--DkU4=',
            message:'Hows it going'
        },
        {
            
            message:'All is well but something is wrong '
        },

    ]);

    function handlesend(e){
        e.preventDefault();
        setmessages([...messages,{message:input}]);
        setinput("");

    }
    return (
        <>

        <div className="chatscreen">
        <p className="chatscreen__timestamp"> You matched with kalpit on 18/05/1999  </p>
        {messages.map((message)=>(
            message.name?
          (  <div className="chatscreen__message"> 
            <Avatar className="chatscreen__image" src={message.image} alt={message.name}  />
            <p className="chatscreen__text">
                {message.message}
            </p>


            </div>):
            (  
                <div className="chatscreen__message">
                <p className="chatscreen__textuser">{message.message}  </p>


                </div>

             )
        ))}
            <form className="chatscreen__input">
                <input type="text" className="chatscreen__inputfield"  onChange={(e)=>setinput(e.target.value)} placeholder="Type message here ..."   />
                <button className="chatscreen__inputbutton" type="submit" onClick={handlesend} > Send </button>
            </form>

        </div>



        </>
    )
}

export default Chatscreen;