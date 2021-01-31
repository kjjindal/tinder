import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercard.css';
import db from './Firebase';



const Tindercard=()=>{
    const [people,setpeople]=useState([
        {name:'Kalpit Jindal',url:'https://media.gettyimages.com/photos/facebook-cofounder-chairman-and-ceo-mark-zuckerberg-testifies-before-picture-id944827400?k=6&m=944827400&s=612x612&w=0&h=1EyysmNPbogzHaWME02CXCkza2IleMUospGwcAtpRmU='},
        {name:'Mohit Jindal',url:'https://media.gettyimages.com/photos/-picture-id474639939?k=6&m=474639939&s=612x612&w=0&h=enU3Rg4feVmEcmddm2ngaYxeCujbOr0zIFLwS--DkU4='}
    ]);

    useEffect(() => {

        db.collection('people').onSnapshot(snapshot=>(
          setpeople(snapshot.docs.map((doc)=>(
                doc.data()
            )))
        ))
       
    }, [])

    return (
        <>
        <div className="tindercard">
        <div className="tindercard__cardcontainer">
          {people.map(person=>(
          <TinderCard  className="swipe"  key={person.name} preventSwipe={['up','down']} >
          <div className="card"   style={{backgroundImage:`url(${person.url})`}}>

          <h3> {person.name}  </h3>

          </div>

          </TinderCard>

      ))   }   
        </div>
     
            
        </div>



        </>
    )
}


export default Tindercard