import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Input } from 'antd';
import { routes } from "../../Config/routes";
import { useHistory } from 'react-router-dom';
import { setConvTitle } from "../../Services/action";
import RenderList from "../../Components/RenderList";
import './StartConversation.css'
const StartConversation = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const selectedUsers = useSelector(state => state.data?.SelectedUsers)

    const startConversationCall = async () => {
        dispatch(setConvTitle(title))
        history.push(routes.chatRoom.path)

    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    return <div>
        <h1>Give title to start conversation with {selectedUsers?.length} participants</h1>
        <div className='startConv'>
            <RenderList dataArr={selectedUsers} page='startcon'/>
        </div>

        <Input placeholder="Basic usage" className='inputfieldstartconv' onChange={(e) => handleTitleChange(e)} />
        {
            title && <Button className='startConButton' onClick={() => startConversationCall()}>Start Conversation</Button>
        }
    </div>
}
export default StartConversation