import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Platform
} from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }} 
                resizeMode='cover'
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 100 : 80,
        borderBottomWidth: 3,
        borderBottomColor: '#822DFF',
        justifyContent: 'center',
    },
    image: {
        height: 60,
        width: 250,
        marginTop: 20,
    },
})
