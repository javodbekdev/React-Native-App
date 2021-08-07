import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'

const Search = () => {
    return (
       <>
            <Text style={styles.text}>Online Shopping</Text>
            <View style={styles.box}>
                <TextInput style={styles.input} placeholder="Search..." />
                <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Click</Text>
                </TouchableOpacity>
            </View>
       </> 
    )
}

export default Search

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        top: 10,
        justifyContent: 'space-around'
      },
      text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 30
      },
      input: {
        width: 250,
        height: 40,
        borderWidth: 0.5,
        borderColor: '#fff',
        paddingLeft: 10,
        borderRadius: 20,
        color: '#fff',
        fontSize: 16,
        bottom: 10
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        bottom: 10

      },
      btntext: {
        fontSize: 18,
        fontWeight: '700'
      }
})
