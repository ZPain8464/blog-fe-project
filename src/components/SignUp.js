import { useState } from "react";

const SignUp = () => {
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const getUsername = (e) => {
        const username = e.target.value;
        setUsername(username)
    }

    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:1337/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password,
                "provider": "local",
                "confirmed": false,
                "blocked": false
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    return(
        <div className="signup_form_container">
            <h2>Sign up for an account:</h2>
            <form 
                className="signup_form"
                onSubmit={(e) => handleSubmit(e)}
                >
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => getEmail(e)} type="text" name="email" id="email"/>
                <label htmlFor="username">Username:</label>
                <input onChange={(e) => getUsername(e)} type="text" name="username" id="username" />
                <label htmlFor="password">Password:</label>
                <input onChange={(e) => getPassword(e)} type="password" id="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp;