import  {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RenderList from "../../Components/RenderList";
import { setSelectedUsers} from "../../Services/action";
import { useHistory } from 'react-router-dom';
import { routes } from "../../Config/routes";
import { Button } from 'antd';
import '../../comman.css'
const SelectUsersForConv = () => {
    const history=useHistory()
    const dispatch= useDispatch()        
    const [selectedUsers, setSelectedUser] = useState([])
    const users = useSelector((state) => state?.data?.Users)
    const userInfo = useSelector((state) => state?.data)
    const getRemainingUsersList = () => {
        users.forEach((data, index) => {
            if (data?.id === userInfo?.userID) {
                users.splice(index, 1)
            }
        })
        return users
    }
    const handleSelectedUsers = (id) => {
        setSelectedUser((prev) => [...prev, id])
    }

    const handleStartConversation = () => {
        history.push(routes.startConversation.path)
        const tempSelectedUsers= new Set(selectedUsers)
        dispatch(setSelectedUsers([...tempSelectedUsers]))

    }
    return <div>
        <h1>Welcome {userInfo?.userName}</h1>
        <p>You don't have any conversations</p>
        <h1>Select contacts to message</h1>
        <RenderList dataArr={getRemainingUsersList()} handleClick={handleSelectedUsers} />

        {selectedUsers.length > 0 && <Button className='continuebutton' onClick={() => handleStartConversation()}>Continue</Button>}
    </div>
}
export default SelectUsersForConv