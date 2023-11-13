import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'


const PopUpR=props=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);

    function handleRegister(e) {
        e.preventDefault()
        if (password1===password){
            setLoggedIn(true);
        }
        else{
            setUsername("")
            setPassword("")
            setPassword1("")
        }
    }
    if (loggedIn) {
        return <Navigate to="/login/:loginid" />;
      }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleRegister}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <label>
                        Cofnirm Password:
                        <input type="password1" value={password1} onChange={e => setPassword1(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>
                    <button type="button" onClick={props.hclose}>Exit</button>
                </form>
            </div>
        </div>
    )
}
export default PopUpR