import React from 'react'
import styled from 'styled-components';
import Image from './Logo.PNG';
import {Button} from '@material-ui/core';
import {auth,provider} from '../firebase'; 
function Login() {
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => 
        alert(error.message));
        }
    return (
       <LoginContainer>
           <LoginInnerContainer>
                <h1>Sign In </h1>
                <img src={Image} alt="" />
                <p>Welcome to college community</p>
                <Button onClick={signIn}><strong>Sign in with Google</strong></Button>
           </LoginInnerContainer>
       </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display: grid;
    place-items: center;
    
`;

const LoginInnerContainer = styled.div`
    padding:50px 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 10px;
    }
    > h1{
        margin-bottom:5vh;
        color:orange;
        border: 2px solid  red;
        width: 100%;
        border-radius: 50px;
        font-weight: 500;
        font-size:20px;
    }
    > Button{
        background-color: green;
        margin-top: 20px;
        width:100%;
        color: white;
        opacity: 0.7;
        :hover{
            opacity: 1;
            color: orange;
            background-color:green;
        }
    }

    > p{
        font-weight: 300;
        color:gray;
    }
`;