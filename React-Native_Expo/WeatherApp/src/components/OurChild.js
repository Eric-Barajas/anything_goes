import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const OurChild = (props) => {
    const { message } = props
    return (
        <SafeAreaView>
            <View style={{ height: 200, width: 200, backgroundColor: 'lightblue' }}>
                <Text>{message}</Text>
            </View>
        </SafeAreaView>
    )
}

export default OurChild