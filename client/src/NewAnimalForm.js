import React from "react";

import "./NewAnimalForm.css"
import {useState} from "react"

function NewAnimalForm({user}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [species, setSpecies] = useState("")
    const [breed,setBreed] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [color, setColor] = useState("")
    const [fixed, setFixed] = useState("")
    const [housetrained, setHousetrained] = useState("")
    const [url, setUrl] = useState("")
   
    function handleSubmit3(e) {
        e.preventDefault();
        e.target.reset();

        fetch("/animal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            image,
            location,
            species,
            breed,
            age,
            gender,
            size,
            weight,
            color,
            fixed,
            housetrained,
            url,
            user_id: user.id,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((animal) => console.log(animal));
          }
        });
      }

    return(
        <div>
            <form className="animalForm" onSubmit={handleSubmit3}>
                <h1>Add a Future Adoptee!</h1>
                <label htmlFor="name">name</label>
                <input
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="image">image</label>
                <input
                type="text"
                id="image"
                autoComplete="off"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="location">location</label>
                <input
                type="text"
                id="location"
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="species">species</label>
                <input
                type="text"
                id="species"
                autoComplete="off"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                />
                <label htmlFor="breed">breed</label>
                <input
                type="text"
                id="breed"
                autoComplete="off"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                />
                <label htmlFor="age">age</label>
                <input
                type="text"
                id="age"
                autoComplete="off"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="gender">gender</label>
                <input
                type="text"
                id="gender"
                autoComplete="off"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="size">size</label>
                <input
                type="text"
                id="size"
                autoComplete="off"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                /><label htmlFor="weight">weight</label>
                <input
                type="text"
                id="weight"
                autoComplete="off"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                /><label htmlFor="color">color</label>
                <input
                type="text"
                id="color"
                autoComplete="off"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                /><label htmlFor="fixed">fixed</label>
                <input
                type="text"
                id="fixed"
                autoComplete="off"
                value={fixed}
                onChange={(e) => setFixed(e.target.value)}
                /><label htmlFor="housetrained">housetrained</label>
                <input
                type="text"
                id="housetrained"
                autoComplete="off"
                value={housetrained}
                onChange={(e) => setHousetrained(e.target.value)}
                /><label htmlFor="url">url</label>
                <input
                type="text"
                id="url"
                autoComplete="off"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                />
                
   
                <button type="submit" >Add new pet!</button>
            </form>
        </div>
    )
}

export default NewAnimalForm;