import { motion } from 'framer-motion'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const PopUp=props=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const [userAccountNo, setUserAccountNo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn && userAccountNo !== null) {
            navigate(`/login/${userAccountNo}`);
        }
      }, [loggedIn, userAccountNo, navigate]);

    function handleLogin(e) {
        e.preventDefault()
        const apiUrl = `http://127.0.0.1:8000/login/?param1=${username}&param2=${password}`
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(async response => {
            if (!response.ok) {
                setUsername("");
                setPassword("");
            } else {
                const jsonData = await response.json();
                setUserAccountNo(jsonData.account_no);
                setLoggedIn(true);
            }
        })
    }

    return (
        <motion.div className="popup" animate={{x:100,scale:1}} initial={{scale:0}} >
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
                    <button type="submit" onClick={props.name}>Login</button>
                    <button type="button" onClick={props.hclose}>Exit</button>
                </form>
            </div>
        </motion.div>
    )
}
export default PopUp