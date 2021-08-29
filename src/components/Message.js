import React from 'react'
import styled from 'styled-components';

function Message(message,timestamp,user,userImage) {
    //console.log( Date.now() - new Date(message['timestamp']['seconds']).getTime());
    return (
        <MessageContainer>
            <img src={message['userImage']} alt=""/>
            <MessageInfo>
                <h4>{message['user']}
                    <span>now</span>
                </h4>
                {/* {new Date(message['timestamp'])} */}
                <p>{message['message']}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message
const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin:8px;
    
    border-radius:20px;
    box-shadow: 2px 5px 10px  lightgray;
   
    > img{
        height:50px;
        border-radius: 8px;
        border: 1px solid  #3135C7;
        width:50px;
    }
`;

const MessageInfo = styled.div`
    padding-left:10px;
    > h4 >span{
        color:gray;
        font-weight: 300;
        margin-left: 4px;
        font-size:10px;
    }
`;