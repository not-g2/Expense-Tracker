import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'


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
        <motion.div className="popup" animate={{x:100,scale:1}} initial={{scale:0}}>
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
        </motion.div>
    )
}
export default PopUpR