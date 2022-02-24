import { useState, useEffect } from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../firebase'

const CustomListItem = ({ id, chatName, enterChat }) => {

    const [chatMessages, setChatMessages] = useState([])

    useEffect(() =>
        db.collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            ), [])

    return (
        <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
            <Avatar
                rounded
                source={{ uri: chatMessages?.[0]?.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>
                    {chatName}
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem