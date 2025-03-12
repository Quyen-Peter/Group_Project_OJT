import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';



const TrashColum = ({ data }) => {
    return (

        <View style={Style.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Style.ContaierItem}>
                    {data.map((Item) => (
                        <View style={Style.Item}>
                            <Image source={{ uri: Item.imageUrl }} style={Style.ImageItem} />
                            <Text style={Style.TextName}>{Item.name}</Text>
                            <Text style={Style.TextDay}>Edited {Item.edited} days ago</Text>
                        </View>

                    ))}
                </View>

            </ScrollView>
        </View >

    )


}

const Style = StyleSheet.create({
    Container: {
        marginLeft: 25,
        marginRight: 15,
        height: "100%",
        width: "97%",
    },
    ImageItem: {
        width: 280,
        height: 160,
        borderRadius: 10,
    },
    ContaierItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Item: {
        width: '25%',
        marginTop: 10.9,
        marginBottom: 20
    },
    TextName: {
        fontSize: 15,
        fontFamily: "Arial",
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 3,
    },
    TextDay: {
        fontSize: 12,
        fontFamily: "Arial",
        color: '#484848',
        marginLeft: 3,
    }

})

export default TrashColum