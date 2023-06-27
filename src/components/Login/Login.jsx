import { useState } from "react";
import axios from "axios";

const Login = () => {

    const [dataUser, setDataUser] = useState({});
    const [message, setMessage]  = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', dataUser)
            .then((res) => { console.log('it worked'), setMessage('you are logged') })
            .catch((err) => { console.error(err), setMessage('wrong credentials') })
    }


    return (

        <>
        
        <form style={{ display: "flex", flexDirection: 'column', width: '50%', padding: '30px' }} onSubmit={(e) => { handleSubmit(e) }} >
            <label htmlFor="email"> Email</label>
            <input type="text" name="email" id="form-email" onChange={(e) => { setDataUser({ ...dataUser, email: e.target.value }) }} />
            <label htmlFor="password"> password</label>
            <input type="password" name="password" id="form-password" onChange={(e) => { setDataUser({ ...dataUser, password: e.target.value }) }} />
            <button> submit </button>
        </form>
        <h1> {message }</h1>
        </>

        

    );
}

export default Login;