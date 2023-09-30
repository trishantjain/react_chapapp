import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Chatpage = () => {
    const [chats, setChats] = useState([])


    const fetchData = async () => {
        const { data } = await axios.get('/api/chat')

        setChats(data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {chats.map((chat) =>
                (<div key={chat._id}>{chat.chatName}</div>))}
        </div>
    )
}

export default Chatpage
