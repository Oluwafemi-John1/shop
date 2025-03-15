import axios from "axios"
import Navbar from "../components/Navbar"

const Ai = () => {
    const endpoint: string = 'http://localhost:5453'
    axios.get(endpoint)

    return (
        <>
            <Navbar />
            <div className="col-lg-7 col-10 mx-auto p-lg-4 p-2 shadow mt-lg-4 mt-2 rounded-2">
                <h3 className="text-center my-3">Gen AI</h3>
                <input type="text" className="form-control my-2 form-control-sm shadow-none" placeholder="Enter prompt" />
                <button className="btn btn-dark btn-sm w-100 my-2 fw-bold">Make Prompt</button>
            </div>
        </>
    )
}

export default Ai