import axios from "axios"
import Navbar from "../components/Navbar"
import { useState } from "react"

const Ai = () => {
    const [prompt, setprompt] = useState('')
    const payload = {prompt}
    const endpoint: string = 'http://localhost:5453/ai'

    const getResponse = () => {
        axios.post(endpoint, payload)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <Navbar />
            <div className="col-lg-7 col-10 mx-auto p-lg-4 p-2 shadow mt-lg-4 mt-2 rounded-2">
                <h3 className="text-center my-3">Gen AI</h3>
                <input type="text" className="form-control my-2 form-control-sm shadow-none" name='prompt' value={prompt} placeholder="Enter prompt" onChange={(e)=>{setprompt(e.target.value)}} />
                <button onClick={getResponse} className="btn btn-dark btn-sm w-100 my-2 fw-bold">Make Prompt</button>
            </div>
        </>
    )
}

export default Ai