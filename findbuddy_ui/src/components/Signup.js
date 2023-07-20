import { useState, useReducer } from 'react';

function Signup(){
    const [state, setState]=useState({
        formDetails:{
            email:'',
            password:'',
            name:'',
            country:'',
        },
        validateDetails:{
            emailMsg:'',
            emailStatus:false,
            passwordMsg:'',
            passwordStatus:false,
            nameMsg:'',
            nameStatus:false,
            countryMsg:'',
            countryStatus:false
        }
    })

    const handleChange=(e)=>{
        console.log(state);
        setState(prevData=>({
            ...prevData,
            formDetails:{
                ...prevData.formDetails,
                name:e.target.value
            }
        }))
    }

    const validate=(inputType, value)=>{
        if(inputType='name' && value.length<4){
            setState(prevData=>({
                ...prevData,
                validateDetails:{
                    ...prevData.validateDetails,
                    nameMsg:'Name must be more than 3 characters',
                    nameStatus:false
                }
            }))
        }
    }

    // const onClick=()=>{
        
    // }

    return(
        <div className='container w-50 mt-5'>
            <form>
                <h5>Registration Form</h5>
                <div className='form-row mt-3'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email'
                         id='email' className='form-control'/>      
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                         <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' id='name' 
                        onChange={handleChange} 
                        value={state.formDetails.name}
                        className='form-control'/>      
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country</label>
                         <input type="text" className="form-control" id="country"/>
                    </div>
                </div> 
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </div>
    )
}

export default Signup;