import { Button, Input } from 'antd';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getALLMessages, setMessages } from "../../api/apis"
import { Avatar } from 'antd';
import { UserOutlined, SmileOutlined } from '@ant-design/icons';
import '../../comman.css'
import './ChatRoom.css'
import { openNotification } from '../../Utils/Notifocations';
import Picker from 'emoji-picker-react';

const ChatRoom = () => {
    const messages = JSON.parse(localStorage.getItem('messages'));
    const [message, setMessageText] = useState('')
    const [messageList, setMessageList] = useState(messages || [])
    const [sent, setSent] = useState(false)
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false)
    const userInfo = useSelector((state) => state?.data)
    const title = useSelector((state) => state?.data?.Title)
    const convId = useSelector((state) => state?.data?.Messages)
    localStorage.setItem('messages', JSON.stringify(messageList))

    useEffect(() => {
        setConv()
        return () => { localStorage.clear() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const setConv = async () => {
        const res = await getALLMessages(convId)
        setMessageList(res);
    }


    const onEmojiClick = (event, emojiObject) => {
        // setChosenEmoji(emojiObject);
        setMessageText(message + emojiObject?.emoji)
    };


    const handleSetMessage = (e) => {
        setMessageText(e.target.value)
    }
    const handleSendMessage = async () => {
        if (message.length) {
            setSent(true)
            await setMessages(userInfo?.userID, message).then((res) => {
                setSent(false)
                setMessageList((prev) => [...prev, res])
            })

        }
        else {
            const message = 'Please type some message'
            openNotification(message)
        }
        setOpenEmojiPicker(false)
        setMessageText('')
    }
    console.log(messageList.length);
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
        {openEmojiPicker &&<div  className='emojipicker'> <Picker onEmojiClick={onEmojiClick}/></div>}
        {messageList.length > 0 && <> {sent ? <p className='sending'>Sending...</p> : <p className='sending'>Sent</p>}</>}
        
        <div className='footerchatroom'>
            <Input placeholder="Send Something..." className='inputfieldchat' onChange={(e) => handleSetMessage(e)} value={message} />
            <SmileOutlined  className='emoji' onClick={() => setOpenEmojiPicker(!openEmojiPicker)} />
            <Button className='inputfieldbutton' onClick={() => handleSendMessage()}>Send</Button>
        </div>
    </div>
}
export default ChatRoom