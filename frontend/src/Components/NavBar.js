import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const {userAccount_no} = useParams();
    const GoTransact=()=>{
      return (
      navigate(`/login/transactions/${userAccount_no}`)
      )
    }
    const GoDash=()=>{
      return (
      navigate(`/login/${userAccount_no}`)
      )
    }
    return (
    <div className='navigation-bar'>
        <button onClick={GoDash}>
          Home
        </button>
        <button onClick={GoTransact}>
          Transaction History
        </button>
        <button>
          Friends
        </button>
        <button>
          Groups
        </button>
        <button>
          Inbox
        </button>
        <button>
          Vault
        </button>
    </div>
  )
}

export default NavBar