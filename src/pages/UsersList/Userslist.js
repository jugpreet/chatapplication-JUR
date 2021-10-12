import { getUsers } from "../../api/apis"
import { useEffect, useState } from 'react'
import './Userlist.css'
import '../../comman.css'
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
import { setUserId, setUsers } from "../../Services/action";
import { routes } from "../../Config/routes";
import { useHistory } from 'react-router-dom';
import RenderList from "../../Components/RenderList";
const UserList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [users, setUser] = useState([])
    const [active, setActive] = useState(false)
    const getUser = async () => {
        const res = await getUsers()
        setUser(res)
        dispatch(setUsers(res))
    }
    useEffect(() => {
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleUsers = (obj) => {
        const id = obj.id;
        const name = obj.name
        setActive(true)

        dispatch(setUserId({ id: id, name: name }))
    
    }
    
    const redirectOnCLick = () => {
        history.push(routes.active.path)
    }
    return <div><h1>Let us know who you are</h1>
        <RenderList dataArr={users} handleClick={handleUsers} />

        {active && <Button className='continuebutton' onClick={redirectOnCLick}>Continue</Button>}

    </div>
}

export default UserList