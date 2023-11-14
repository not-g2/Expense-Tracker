import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const GoTransact=()=>{
      return (
      navigate('/login/:loginid/transactions')
      )
    }
    const GoDash=()=>{
      return (
      navigate('/login/:loginid')
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