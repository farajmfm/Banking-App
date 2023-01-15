import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLogIn } from '../Actions'

const LogIn = () => {
    const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn)
    const dispatch = useDispatch()
    const handleLogIn = () => {
        dispatch(toggleLogIn)

    }
    
    return (
        <>
        <h1 className='is-size-3'>
            {isLoggedIn ? 'You are logged in' : 'You are logged out'}
        </h1>
        <button className='button is-success' onClick={handleLogIn}>
            { isLoggedIn ? 'Log out' : 'Log in' }
        </button>
        </>
    )
}

export default LogIn