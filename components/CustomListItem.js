import { StyleSheet } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>
                    Chat
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    This is a Test Subtitle This is a Test Subtitle This is a Test Subtitle
                    This is a Test Subtitle This is a Test Subtitle This is a Test Subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})