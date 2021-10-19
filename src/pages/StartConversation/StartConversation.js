import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Input  } from 'antd';
import { routes } from "../../Config/routes";
import { useHistory } from 'react-router-dom';
import { setConvTitle } from "../../Services/action";
import RenderList from "../../Components/RenderList";
import { openNotification } from "../../Utils/Notifocations";
import './StartConversation.css'
const StartConversation = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const selectedUsers = useSelector(state => state.data?.SelectedUsers)
    const userInfo = useSelector((state) => state?.data)
    
    const startConversationCall = async () => {
       if(title?.length){     dispatch(setConvTitle(title))
            history.push(routes.chatRoom.path)}
            else{
                const text='Enter title to start conversation'
                openNotification(text)
            }

    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    return <div>
        <h1>Welcome {userInfo?.userName}</h1>
        <h3>Give title to start conversation with {selectedUsers?.length} participants</h3>
        <div className='startConv'>
            <RenderList dataArr={selectedUsers} page='startcon' />
        </div>
        <div className='startConvFooter'>
        <Input placeholder="Please enter title here..." className='inputfieldstartconv' onChange={(e) => handleTitleChange(e)} />

        <Button className='startConButton' onClick={() => startConversationCall()}>Start Conversation</Button>
        </div>
    </div>
}
export default StartConversation