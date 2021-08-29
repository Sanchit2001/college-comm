import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption.js';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TableChartIcon from '@material-ui/icons/TableChart';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
function SideBar() {
     //eslint-disable-next-line  
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    return (
        
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Your Community</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user.displayName}
                    </h3> 
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>
            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={TableChartIcon} title="Timetable"/>
            <SideBarOption Icon={DraftsIcon} title="Saved items"/>
            <SideBarOption Icon={BookmarkIcon} title="Channel Browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="Groups"/>
            <SideBarOption Icon={AppsIcon} title="Projects"/>
            <SideBarOption Icon={LibraryBooksIcon} title="Browse Materials"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title="Channels"/>
            
            {channels?.docs.map(doc=>(
                <SideBarOption 
                    key={doc.id}  
                    id={doc.id} 
                    title={doc.data().name}
                />
            ))}
            <hr/>

            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

        </SideBarContainer>
        
    );
}

export default SideBar

const SideBarContainer = styled.div`
    color: white;
    background-color:var(--slack-color);
    flex:0.3;
    border-top: 1px solid  #3135C7;
    max-width: 260px;
    margin-top:60px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none !important;
    }
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid  #3135C7;
    }
    
`;

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid  #3135C7;
    padding:13px;
    > .MuiSvgIcon-root{
        padding:8px;
        color: #3135C7;
        font-size: 18px;
        background-color:white;
        border-radius: 999px;
    }
`;

const SideBarInfo = styled.div`
    flex:1;
    > h2{
        font-size:15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color:green;
    }
`;

