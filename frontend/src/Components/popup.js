import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'


const PopUp=props=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    let userId = 0;

    function handleLogin(e) {
        e.preventDefault()
        const apiUrl = `http://127.0.0.1:8000/login/?param1=${username}&param2=${password}`
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                setUsername("")
                setPassword("")
            }
            else {
                setLoggedIn(true)
                return response.json()
            }
        })
        .then(data => {
            console.log(data.id)
        })
    }
    if (loggedIn) {
        return <Navigate to="/login/:loginid" />;
      }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                    <button type="button" onClick={props.hclose}>Exit</button>
                </form>
            </div>
        </div>
    )
}
export default PopUp