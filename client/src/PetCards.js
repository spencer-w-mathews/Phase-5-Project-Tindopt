import React from "react";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import "./PetCards.css"
import SwipeButtons from "./SwipeButtons";

function PetCards({user}){
    const [userPets, setUserPets] = useState([])
    const [isFlipped, setIsFlipped] = useState(false)
    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch('/animals')
          .then(res=>res.json())
          .then(petsData => setPets(petsData))
      },[])

    function handleClick(){
        setIsFlipped(isFlipped=>!isFlipped)
    }

    
    function onSwipe(direction, pet){
        if(direction==="right"){
            setUserPets([...userPets, pet])
            fetch("/favorite", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: pet.name, image: pet.image, url: pet.url, user_id: user.id}),
              }).then((r) => {
                if (r.ok) {
                  r.json().then((fav) => (fav));
                }
              });
        }
    }
    

    return(
        <div >
            <div className="petCards__frontCardContainer">
                {pets.map(pet=>(
                    <TinderCard
                    className="swipe"
                    key={pet.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(direction)=>onSwipe(direction, pet)}
                    >        
                        <div 
                        style={isFlipped ? {background: "white"} : {backgroundImage: `url(${pet.image}`}}
                        className="card"
                        onClick={handleClick}
                        
                        >
                            <h3 style={isFlipped ? {display: 'none'} : {color: "white"}}>name: {pet.name}</h3>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Location: {pet.location}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Species: {pet.species}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Breed: {pet.breed}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Age: {pet.age}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Gender: {pet.gender}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Size: {pet.size}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Weight: {pet.weight}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Color: {pet.color}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Spayed/Neutered: {pet.fixed}</h4>
                            <h4 style={isFlipped ? {color: "black"} : {display: 'none'}}>Housetrained: {pet.housetrained}</h4>

                        </div>
                    </TinderCard>
                ))}
            </div> 
            <SwipeButtons />
        </div>

    )
}

export default PetCards;