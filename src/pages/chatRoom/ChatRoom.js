import { Button, Input } from 'antd';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getALLMessages, setMessages } from "../../api/apis"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../comman.css'
import './ChatRoom.css'
const ChatRoom = () => {
    const messages = JSON.parse(localStorage.getItem('messages'));
    const [message, setMessageText] = useState('')
    const [messageList, setMessageList] = useState(messages||[])
    const [sent, setSent] = useState(false)
    //const selectedUsers = useSelector(state => state.data?.SelectedUsers)
    const userInfo = useSelector((state) => state?.data)
    const title = useSelector((state) => state?.data?.Title)
    const convId = useSelector((state) => state?.data?.Messages)
    localStorage.setItem('messages', JSON.stringify(messageList))
    
    useEffect(()=>{
        setConv()
        return()=>{localStorage.clear()}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const setConv = async () => {
        const res = await getALLMessages(convId)
        setMessageList(res);
    }

    const handleSetMessage = (e) => {
        setMessageText(e.target.value)
    }
    const handleSendMessage = async () => {
        
        if(message.length){
            setSent(true)
        await setMessages(userInfo?.userID, message).then((res) => {
            setSent(false)
            setMessageList((prev) => [...prev, res])
        })}

        setMessageText('')
    }
    
    return <div>
        <h1 className='title'>{title}</h1>
        < ul className='messages'>
            {!!messageList?.length && <>
                {messageList.map((data) => {
                    return <li key={data?.id} className='chatroom'>
                        <Avatar className='avatar' size={64} icon={<UserOutlined />} />
                        <p>{data?.content}</p>
                    </li>
                })}
            </>}
        </ul>
        {sent && messageList.length>0 ? <p className='sending'>Sending...</p> : <p className='sending'>Sent</p>}
        <div className='footerchatroom'>

            <Input className='inputfield' placeholder="Send Something..." onChange={(e) => handleSetMessage(e)} value={message} />
            <Button className='inputfieldbutton' onClick={() => handleSendMessage()}>Send</Button>
        </div>
    </div>
}
export default ChatRoom