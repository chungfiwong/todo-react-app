import React, {useState} from 'react';
import { toast } from "react-toastify";
import { createContact } from '../db/store'; //{} typed /named imports


//to read values from form inputs in react forms
//mutable -> useRef() hook
//immutable -> state and on Change method

const getRandom =()=>{
    return Math.round(Math.random()*1000); //Random id
}

function Create(props){

// const [state,handler()]=useState(initialValue)

    const [fname,setFName] = useState('')
    const [femail,setFEmail] = useState('')
    const [fmobile,setFMobile] = useState('')
    const [fimage,setFImage] = useState('')
    const [faddress,setFAddress] = useState('')

    const submitHandler = async (e)=>{
        e.preventDefault();
        let data= {
            id:getRandom(),
            name: fname,
            email: femail,
            mobile: fmobile,
            image: fimage,
            address: faddress
        };
        console.log('new conatct =', data);
        createContact(data)
        // toast.success('Successfully submitted')
        
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-4 text-success'>Create new </h3>
                </div>
            </div>
            <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form autoComplete='off' onSubmit={submitHandler}>
                            <div className='form-group mt-2'>
                                <label htmlFor="name">Name</label>
                                <input type='name' id="name" className='form-control' value={fname} onChange={(e)=> setFName(e.target.value)} required></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="email">Email</label>

                                <input type='email' id="email" className='form-control' value={femail} onChange={(e)=> setFEmail(e.target.value)} required></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="mobile">Mobile</label>
                                <input type='number' name="mobile" id="mobile" className='form-control' value={fmobile} onChange={(e)=> setFMobile(e.target.value)} required></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="image">Image</label>
                                <input type='url' id="image" name='image'  className='form-control' value={fimage} onChange={(e)=> setFImage(e.target.value)} required></input>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="address">Address</label>
                                <input name='address' id="address" cols="30" row="5" className='form-control' value={faddress} onChange={(e)=> setFAddress(e.target.value)} required></input>
                            </div>
                            <div className='form-group mt-2'>
                            <input type='submit' value='Create' className='btn btn-outline-success'/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Create;