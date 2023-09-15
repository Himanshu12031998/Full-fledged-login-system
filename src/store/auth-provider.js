// import React,{useState} from 'react'
// import { authContext } from './auth-context'

//  const AuthProvider=(props)=>{

//     // const [isLogIn, setIsLogin]=useState('')

//     let username=localStorage.getItem('username')

//     const authContext=React.createContext({
//         isLoggedIn:!!username
//     })

//     return (
//         <authContext.Provider value={authContext}>

//         {props.children}
//         </authContext.Provider>
//     )
    
//  }
//  export default AuthProvider