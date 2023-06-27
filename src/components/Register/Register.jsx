import { useState } from "react";
import axios from "axios";

const Register = () => {


    const [dataUser, setDataUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/user', dataUser).then((res) => { console.log('it worked') }).catch((err) => { console.err(err) })
    }


    return (

        <form style={{ display: "flex", flexDirection: 'column', width: '50%', padding: '30px' }} onSubmit={(e) => { handleSubmit(e) }} >
            <label htmlFor="firstname"> First name</label>
            <input type="text" name="firstname" id="form-firstname" onChange={(e) => { setDataUser({ ...dataUser, firstname: e.target.value }) }} />
            <label htmlFor="lastname"> last name</label>
            <input type="text" name="lastname" id="form-lastname" onChange={(e) => { setDataUser({ ...dataUser, lastname: e.target.value }) }} />
            <label htmlFor="email"> Email</label>
            <input type="text" name="email" id="form-email" onChange={(e) => { setDataUser({ ...dataUser, email: e.target.value }) }} />
            <label htmlFor="password"> password</label>
            <input type="password" name="password" id="form-password" onChange={(e) => { setDataUser({ ...dataUser, password: e.target.value }) }} />
            <button> submit </button>
        </form>

    );
}

export default Register;