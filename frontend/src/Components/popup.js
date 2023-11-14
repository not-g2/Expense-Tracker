import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'


const PopUp=props=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin(e) {
        e.preventDefault()
        if (username==="abcd" && password=="abcd"){
            setLoggedIn(true);
        }
        else{
            setUsername("")
            setPassword("")
        }
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