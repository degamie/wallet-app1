import React,{useState} from 'react';
const ErrorDisplay =()=>{
    const [error,setError]=useState(null);

    const handleButtonClick=()=>{
        try{

        }
        catch(error){
            setError('An Error Occured.Pls Try again later');
        }

    };
    return (
        <div>
        <button onClick={handleButtonClick}>Trigger Error</button>
        </div>
    );

};
export default ErrorDisplay;
