import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Landingpage from './pages/Landingpage'
import * as mdb from 'mdb-ui-kit'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Landingpage/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </>
    )
}

export default App
