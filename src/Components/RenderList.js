import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './RenderList.css';
import {  useState } from 'react';
const RenderList = (props) => {
    const { dataArr, handleClick } = props
    const [selectedIDs,setselectedIDs]= useState([])
    const handleList = (data) => {
        const selectedData ={
            id:data.id,
           class:'selected'
        }
        if(props.page==='userlist'){
            setselectedIDs([selectedData])
        }else{
            setselectedIDs((prev)=>[...prev,selectedData])
        }
        
        handleClick && handleClick(data)
    }
    
    return <div className="container">
    <ul className={props.page==='startcon'?'main-selectedusers':'main'}>
        {dataArr?.map((data) => {
            return <li key={data?.id} onClick={() => handleList(data)} className="renderList">
                <Avatar className={selectedIDs?.some((val)=>val.id===data.id)?'selected':'avatar'} size={50} icon={<UserOutlined />} />
                <p>{data?.name || data?.title || data?.content}</p>
            </li>
        })}
    </ul>
    </div>
}
export default RenderList