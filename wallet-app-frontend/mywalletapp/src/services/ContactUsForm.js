import React,{useState} from 'react';
const Contactus=()=>{
    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        Subject:'',
        message:'',
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(FormData);
        setFormData({name:'',email:'',message:''});
    
    }

};
return(
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input 
                type="text"
                name="name"
                value={FormData.name}
                onChange={handleChange}
                required
                /> 
                </label>
                <label>
                Email:
                <input 
                    type="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
            <label>
                message:
                <textarea
                    name="message"
                    value={FormData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    />      
            </label>
            <button type="submit">submit</button>
    </form>

);
export default Contactus;