import { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { db } from '../firebase'

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat',
            headerBackTitle: 'Chats'
        })
    }, [navigation])

    const createChat = () => {
        db.collection('chats')
            .add({ chatName: input })
            .then(() => { navigation.goBack() })
            .catch((error) => alert(error))
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter a chat name'
                value={input}
                onChangeText={setInput}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon
                        name='wechat'
                        type='antdesign'
                        size={24}
                        color='black'
                    />
                }
            />

            <Button
                disabled={!input}
                onPress={createChat}
                title='Create new chat'
            />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    }
})