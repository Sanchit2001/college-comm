import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
function Header() {
    const [user] = useAuthState(auth);
    console.log(user);
    return( <HeaderContainer>
        {/*Header Left*/}
        <HeaderLeft>
            <HeaderAvatar onClick={()=> auth.signOut() } src={user?.photoURL}
                alt={user?.displayName}
            />

            <AccessTimeIcon/>
        </HeaderLeft>
        {/*Header Search*/}
        <HeaderSearch>
           <SearchIcon/>
           <input placeholder="Search your work"/>
        </HeaderSearch>
        {/*Header */}
        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>

    </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: var(--slack-color);
    color:white;
`;
const HeaderLeft = styled.div`
    flex:0.3;
    align-items: center;
    display: flex;
    margin-left: 20px;
    > .MuiSvgIcon-root{
        margin-left:auto !important;
        margin-right:30px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;
const HeaderSearch = styled.div`
    flex:0.4;
    opacity:1;
    padding:0 50px;
    border-radius: 6px;
    display: flex;
    text-align: center;
    background-color: #3135C7;
    color: white;
    border:1px solid gray;
    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`;

const HeaderRight = styled.div`
    flex:0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        margin-left:auto !important;
        margin-right:20px;
    }
`;