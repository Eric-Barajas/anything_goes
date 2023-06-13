import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    // props: from the parent to the child, dt_txt, min, and max 
    // are being passed down to the child from the parent (Upcomingweather)
    const { dt_txt, min, max, conditon } = props
    // const { item, temp, date } = styles
    // ^^ allows us to get rid of "styles." on line 10 & line 12-14
    // look at UpcomingWeather for more information (example)
    return (
        <View style={styles.item} >
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    }
})

export default ListItem