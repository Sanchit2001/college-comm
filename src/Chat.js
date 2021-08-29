import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {useSelector} from 'react-redux';
import {selectRoomId} from './features/appSlice';
import ChatInput from './components/ChatInput';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import {db} from './firebase';
import Message from './components/Message';

function Chat() {
    //eslint-disable-next-line
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId); 
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessage,loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp","asc")
    );
    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    },[roomId,loading])
    return (
        <ChatContainer>
            {(roomDetails && roomMessage)?
                <>
                <Header>
                     <HeaderLeft>
                         <h4><strong>#{roomDetails?.data().name}</strong>
                         </h4>
                         <StarBorderOutlinedIcon/>
                     </HeaderLeft>
                     <HeaderRight>
                         <p>
                            <InfoOutlinedIcon/> Details
                         </p>
                     </HeaderRight>
                 </Header>
     
                 <ChatMessages>
                     {roomMessage?.docs.map(doc => {
                         const {message, timestamp, user, userImage} = doc.data();
                         
                         return(
                             <Message
                                 key={doc.id}
                                 message={message}
                                 timestamp={timestamp}
                                 user={user}    
                                 userImage={userImage}
                             />
                         )
                     })}
                     <ChatBottom ref={chatRef}/>               
                 </ChatMessages>
     
                 <ChatInput
                     chatRef={chatRef}
                     channelName={roomDetails?.data().name}
                     channelId={roomId}
                 />
                </>
            :<h1 style={{color:'blue',position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-25%, -50%)'}}>Welcome To Your College Community<br/><br/> Select Any Channel To Start</h1>} 
           
        </ChatContainer>
    )
}

export default Chat
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid  lightgray;
`;
const HeaderLeft = styled.div`
   display: flex;
   align-items:center;
   >h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
   } 
   >.MuiSvgIcon-root{
       margin-left: 10px;
       font-size: 21px;
   }

`;
const HeaderRight = styled.div`
    >p{
        display: flex;
        align-items: center;
        font-size: 14 px;
    }
    >p >.MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size:16px;
    }
`;


const ChatMessages = styled.div`

`;
const ChatBottom = styled.div`
    padding-bottom:200px;
`;


const ChatContainer = styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none !important;
    }
    margin-top:60px;
`;