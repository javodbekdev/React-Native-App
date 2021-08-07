import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

const prodacs = [
    {
        id: 1,
        name: 'Gentra',
        price: '$ 15 000',
        color: 'Qora',
        img: 'https://i.ytimg.com/vi/20OTYo6dw2Q/hqdefault.jpg',
        button: 'Buy'
    },
    {
        id: 2,
        name: 'Malibu',
        price: '$ 33 000',
        color: 'Qora',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO36CiXnMynQOLa_DHGFX6pmqY3lm9rdUNZQ&usqp=CAU',
        button: 'Buy'
    },
    {
        id: 3,
        name: 'Tracker',
        price: '$ 18 000',
        color: 'Kok',
        img: 'https://apollo-olx.cdnvideo.ru/v1/files/8kbmtisriqxg1-UZ/image;s=644x461',
        button: 'Buy'
    },
    {
        id: 4,
        name: 'Equinox',
        price: '$ 36 000',
        color: 'Oq',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTXunl-1ja-1bDJXfU4At6KJALbfvXH351WMTbZUxnCwXFsMQVXm1UW6BjOgjv2Me66Y&usqp=CAU',
        button: 'Buy'
    },
    {
        id: 5,
        name: 'BMW X5',
        price: '$ 80 000',
        color: 'Qora',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-bmw-x5-black-vermilion-edition-101-1625852653.jpg?crop=0.998xw:0.750xh;0.00160xw,0.135xh&resize=1200:*',
        button: 'Buy'
    },
    {
        id: 6,
        name: 'Lada',
        price: '$ 14 000',
        color: 'Oq',
        img: 'https://autompv.ru/wp-content/uploads/2020/09/novaya-lada-4x4-black-2021-niva-foto.jpg',
        button: 'Buy'
    },
    {
        id: 7,
        name: 'Mersedes Benz',
        price: '$ 120 000',
        color: 'Qora',
        img: 'https://i.pinimg.com/originals/e5/4b/dc/e54bdc6d10af5f574b5f35b4e29f72ba.jpg',
        button: 'Buy'
    },
]
const Pradacts = () => {
    return (
        <ScrollView>
        <View style={styles.block}>
            {
               prodacs.map(task => (
                   <View style={styles.contact} key={task.id}>
                            <Image style={styles.image} source={{uri: task.img}} />
                            <Text style={styles.form}>Name: {task.name}</Text>
                            <Text style={styles.form}>Price: {task.price}</Text>
                            <Text style={styles.form}>Color: {task.color}</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.btnText}>
                                    {task.button}
                                </Text>
                            </TouchableOpacity>
                   </View>
               )) 
            }
        </View>
        </ScrollView>
    )
}

export default Pradacts

const styles = StyleSheet.create({
    block: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    contact: {
        width: 330,
        height: 420,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 15,
        borderRadius: 10,
        marginBottom: 30
    },
    form: {
        width: 200,
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        paddingTop: 10
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 6
    },
    button: {
        width: 220,
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        top: 20
    },
    btnText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    }
});
