import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'


const Signin = ()=>{
    const [email,setEmail]= useState ("")
    const [password,setPassword]= useState ("")
    const [loading,setLoading]= useState ("")
    const [success,setSuccess]= useState ("")
    const [error,setError]= useState ("")
    const  navigate = useNavigate()

    const submit = async (e) =>{
        e.preventDefault()
        setLoading('Please wait...')
        
        try{
            // create form data 
            const data = new FormData()
            data.append("email",email)
            data.append("password",password)

            const response = await axios.post("https://eguman.pythonanywhere.com/api/signin",data)


            setLoading("")

            if(response.data.user){
                setSuccess('login success')
                // todo save the details to local storage
                localStorage.setItem("user",JSON.stringify(response.data.user))

                navigate('/')

            }else{
                setError('Login failed')
            }
        }
        catch (error){ 
            setLoading("")
            setError("something went wrong!")

        }
        


    }
    return(
        <div className=' signinstyle row justify-content-center p-4'>
            <div className='col-md-6 card shadow'>
              <form onSubmit={submit}>
                <h2>Sign in</h2>

                {loading}
                {success}
                {error}

                <input 
                type="email" 
                placeholder='your email'
                className='form-control mt-3 '
                onChange={(e) =>setEmail(e.target.value)}
                
                />

                <input 
                type="password" 
                placeholder='password'
                className='form-control mt-3'
                onChange={(e) => setPassword(e.target.value)}
                
                />
                <button type="submit"
                 className='btn bg-primary my-3 px-5 '>
                    Sign in 😊
                </button>
                
                </form>
            </div>
        </div>

    )
}
export default Signin