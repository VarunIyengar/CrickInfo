import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

export const AddPlayer = (props) => {
    const[name,setname] = useState("");
    const [description, setdescription] = useState("");
    const [photo, setphoto] = useState("");
    // const[image,setimage] = useState(null);

    const submit = (e)=>{
        e.preventDefault();
        if(!name)
        {
            alert("You have not entered the name of player");
            return null;
        }
        if(!description)
        {
            alert("You have not entered the description");
            return null;
        }
        
        if(!photo)
        {
            alert("You have not choosen the photo of player");
            return null;
        }
        props.addPlayer(name,description,photo);
        setname("");
        setdescription("");
        setphoto("");
    }
    const urlgiver = (e)=>{
       const imagefile = e.target.files[0];
       const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setphoto(e.target.result);
      });

      reader.readAsDataURL(imagefile);
    }

    // const { register, handleSubmit,formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
      
    
    return (
        
        <div>
            <h3 className = "text-center text-light">Add a Player</h3>
            <form className = "center">
                <div className="mb3">
                    <label htmlFor="name">Name Of Player</label>
                    <input type="text" className = "form-control" value = {name} placeholder='Enter name of Player' required onChange={(e)=>setname(e.target.value)} />
                    
                </div>
                <div className="mb3">
                    <label htmlFor="description">Description</label>
                    <input type="text" className = "form-control"  value = {description} placeholder='Enter description of Player'onChange={(e)=>setdescription(e.target.value)} />
                </div>
                <div className="mb3">
                    <label htmlFor="name">Photo Of Player</label>
                    <input type="file" className = "form-control" defaultValue = {photo} required onChange={urlgiver} required />
                </div>
                
        <br />
                <button type = "Submit" className = "btn btn-primary my-3" onClick={submit}>Add Player</button>
            </form>
            <hr className = "text-light"/>
        </div>
    )
}
