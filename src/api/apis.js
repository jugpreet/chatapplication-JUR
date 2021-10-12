import axios from 'axios'

const baseURL = process.env.REACT_APP_URL

export const getUsers = async () => {
    const result = await axios.get(`${baseURL}/contacts`)
    return result?.data
}

export const getConversations = async (id) => {
    const result = await axios.get(`${baseURL}/conversations/${id}`, {
        headers: {
            user_id: id,
            'Content-Type': 'application/json'
        }
    })
    return result?.data
}
export const getConversationsOfID = async (id) => {
    const result = await axios.get(`${baseURL}/conversations/${id}`, {
        headers: {
            user_id: id,
            'Content-Type': 'application/json'
        }
    })
    return result?.data
}
export const setConversations = async (id,users,title) => {
    const result = await axios.post(`${baseURL}/conversations`, 
       {
            "title": title,
            "contact_ids": users
        },{
        headers: {
            user_id: id,
            'Content-Type': 'application/json'
        }, 
       
    })
    return result?.data
}

export const setMessages = async (id,data) => {
    const result = await axios.post(`${baseURL}/conversations/${id}/messages`, 
       {
            "content": data
        },{
        headers: {
            user_id: id,
            'Content-Type': 'application/json'
        }, 
       
    })
    return result?.data
}




export const getALLMessages = async (id) => {
    const result = await axios.get(`${baseURL}/conversations/${id}/messages`, 
      {
        headers: {
            user_id: id,
            'Content-Type': 'application/json'
        }, 
       
    })
    return result?.data
}
