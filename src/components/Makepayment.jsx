import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Makepayment = () => {
    const { product } = useLocation().state || {}
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        setMessage('Please wait as we process...')

        const data = new FormData()
        data.append('phone', phone)
        data.append('amount',product )

       
        const response = await axios.post('https://eguman.pythonanywhere.com/api/mpesa_payment', data);

        setMessage(response.data.message)
       
    }

    return (
        <div className="row justify-content-center m-4">
            <div className="col-md-6 card shadow p-4">
                <form onSubmit={submit}>
                    <h2 className="text-success"><b>LIPA NA MPESA</b></h2>
                    {message}
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-success mt-4 w-50">Pay Now</button>
                </form>
               
            </div>
        </div>
    )
}

export default Makepayment;
