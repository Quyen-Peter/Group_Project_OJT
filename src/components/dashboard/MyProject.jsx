import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import menuLeft from '../menuCompos/menuLeft';

const folders = [
    { id: '1', name: 'Account', files: 12 },
    { id: '2', name: 'Documents', files: 5 },
    { id: '3', name: 'Presentations', files: 2 },
    { id: '4', name: 'Finance', files: 4 },
    { id: '5', name: 'Product Team', files: 32 },
    { id: '6', name: 'News', files: 8 },
    { id: '7', name: 'Content Pro', files: 11 },
    { id: '8', name: 'Goals', files: 15 },
    { id: '9', name: 'Dev Ops', files: 25 },
    { id: '10', name: 'Management', files: 4 },
    { id: '11', name: 'Operations', files: 9 },
    { id: '12', name: 'Performance', files: 32 },
];

const MyProject = () => {
    return (

        <View style={Styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 26, marginBottom: 20, justifyContent: "space-between" }}>
                    <View>
                        <Picker style={Styles.Picker}>
                            <Picker.Item label="Sort: Newest first" value="newest" />
                            <Picker.Item label="Sort: Oldest first" value="oldest" />
                        </Picker>
                    </View>
                    <View style={{ flexDirection: "row", marginRight: 26}}>
                        <View>
                            <TouchableOpacity style={Styles.borderIconAntDesign}>
                                <AntDesign name="bars" size={27} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={[Styles.borderIconAntDesign, { marginLeft: 20, paddingTop: 3, paddingLeft: 3, }]}>
                                <AntDesign name="appstore-o" size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: 60, }}>
                    <View style={Styles.ContaierItem}>
                        {folders.map((foder) => (
                            <View style={Styles.Item}>
                                <TouchableOpacity style={Styles.BackgroundFolder}>
                                    <View style={Styles.IconFolder}>
                                        <Icon style={Styles.IconFolderImage} name="folder" size={60} color="dodgerblue" />
                                        <AntDesign name="ellipsis1" size={23} />
                                    </View>
                                    <View style={{ marginTop: 15, marginLeft: 5, }}>
                                        <Text style={Styles.FolderName}>{foder.name}</Text>
                                        <Text style={Styles.FolderNumber}>{foder.files} Files</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View >

    );
};

const Styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        marginBottom: 115,
    },
    Picker: {
        width: 120,
        height: 30,
        borderColor: '#989898',
        borderWidth: 1.2,
        borderRadius: 10,
        padding: 4,
        fontSize: 11,
    },
    borderIconAntDesign: {
        width: 30,
        height: 30,
        borderColor: '#989898',
        borderWidth: 1.2,
        borderRadius: 7,
    },
    ContaierItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Item: {
        width: '25%',
        marginTop: 20,

    },
    IconFolder: {
        flexDirection: 'row',
    },
    BackgroundFolder: {
        backgroundColor: '#E8E8E8',
        width: 230,
        height: 130,
        paddingLeft: 15,
        borderRadius: 10,
        paddingTop: 10,
    },
    IconFolderImage: {
        marginRight: 115,
    },
    FolderName: {
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: 'bold',
    },
    FolderNumber: {
        fontSize: 11,
        fontFamily: "Arial",
        color: '#484848',
        marginTop: 6,
    }

});

export default MyProject;