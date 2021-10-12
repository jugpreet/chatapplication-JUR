import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './RenderList.css'
const RenderList = (props) => {
    const { dataArr, handleClick } = props
    const handleList = (data) => {
        handleClick && handleClick(data)
    }
    
    return <div className="container">
    <ul className={props.page==='startcon'?'main-selectedusers':'main'}>
        {dataArr?.map((data) => {
            return <li key={data?.id} onClick={() => handleList(data)} className="renderList">
                <Avatar className='avatar' size={50} icon={<UserOutlined />} />
                <p>{data?.name || data?.title || data?.content}</p>
            </li>
        })}
    </ul>
    </div>
}
export default RenderList