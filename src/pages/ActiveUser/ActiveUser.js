
import { useEffect, useState } from 'react'
import { Button } from 'antd';
import { getConversations } from "../../api/apis"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { routes } from "../../Config/routes";
import { setLastMessages ,setConvTitle} from "../../Services/action";
import RenderList from "../../Components/RenderList";
import SelectUsersForConv from '../SelectUsersForConv/SelectUsersForConv';
import './ActiveUser.css'
//const ActionCable = require('actioncable')
const ActiveUser = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    // const socket = new WebSocket(
    //     `${process.env.REACT_APP_WS_URL}`
    //     );
    //     socket.onmessage = function(){
    //         //Subscribe to the channel
    //         socket.send(JSON.stringify({
    //             command: 'subscribe',
    //             identifier: JSON.stringify({
    //             channel: 'NotificationsChannel',
    //             }),
    //             }))
    //       }  

    //     socket.recieve = (event)=> {
    //         console.log(JSON.parse(event.data).message,15);

    //             };



    // var cable = ActionCable.createConsumer(process.env.REACT_APP_WS_URL)

    // cable.subscriptions.create('NotificationsChannel', {
    //   // normal channel code goes here...

    // });

    const [activeconversations, setActiveConversations] = useState([])
    

    const userInfo = useSelector((state) => state?.data)

    const getActiveConversations = async () => {
        try {
            const res = await getConversations(userInfo?.userID)
            setActiveConversations([res])
        }
        catch (e) {
            console.log(e)

        }
    }
    useEffect(() => {
        getActiveConversations()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getMessagesOfConversation = (data) => {
        dispatch(setConvTitle(data?.title))
        dispatch(setLastMessages(data?.id))
        history.push(routes.chatRoom.path)

    }
    const handleSeeMessages=()=>{
        history.push(routes.startNewConv.path)
    }

    return <div>
        {
            activeconversations.length ? < > <h1>Your Conversations</h1>
                <RenderList dataArr={activeconversations} handleClick={getMessagesOfConversation} />
                <Button className='createConv' onClick={()=>handleSeeMessages()} >Create New Conversation</Button>
            </> :
                <SelectUsersForConv />
        }
    </div>
}

export default ActiveUser