import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { readContact , updateContact } from '../db/store';
import { Toast } from 'bootstrap';
import { toast } from "react-toastify";


function Update(props){
    const params = useParams();
    const [fname,setFName] = useState('')
    const [femail,setFEmail] = useState('')
    const [fmobile,setFMobile] = useState('')
    const [fimage,setFImage] = useState('')
    const [faddress,setFAddress] = useState('')

        useEffect(()=>{
            let data =readContact(params.id)
            setFName(data.name)
            setFEmail(data.email)
            setFMobile(data.mobile)
            setFImage(data.image)
            setFAddress(data.address)
        },[])

        const submitHandler = (e) => {
            e.preventDefault();
            try{
                let data={
                    name:fname,
                    email:femail,
                    image:fimage,
                    mobile:fmobile,
                    address:faddress
                };
                console.log('updated data =', data)
                updateContact(params.id,data)
            } catch(err){
                toast.error(err.message)
            }
        }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-4 text-success'>Update {params.id}</h3>
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
                            <input type='submit' value='update' className='btn btn-outline-success'/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Update;