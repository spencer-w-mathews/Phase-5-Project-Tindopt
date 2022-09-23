import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";

function ShelterAnimals({user}){
    const [animals, setAnimals] = useState(user.animals)
    function handleDelete(fav){
        setAnimals(current=>
            current.filter(pet=>{
                return pet.id !== fav.id;
            })
        )
        fetch(`/animals/${fav.id}`, { method: 'DELETE' })
        .then(() => console.log({ status: 'Delete successful' }));
    }
if(animals.length==0){
    return(
        <div>
            <h1>No Pets from your shelter posted</h1>
        </div>
    )
}else{
    return(
        <div  style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {animals.map(fav=>(
   <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     component="img"
     height="140"
     image={fav.image}
     alt="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {fav.name}
     </Typography>
     <Typography variant="body2" color="text.secondary">
        
     </Typography>
   </CardContent>
   <CardActions>
     <Button onClick={()=>handleDelete(fav)} size="small">Delete</Button>
     <a href={fav.url} target="/"><Button size="small">Learn More</Button></a>
   </CardActions>
 </Card>
    ))
}
</div>
)}
}

export default ShelterAnimals;