import { useState } from "react";
import { StyleSheet, View, Button, Image, TouchableOpacity, Text } from "react-native"
import { Platform } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import background from '../../../assets/dashboardImage/Grid Visualization.png';

const aiEdit = () => {

    const [image, setImage] = useState(null);
    const uploatImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    return (
        <View style={style.Container}>
            
            <View style={style.backgroundGenerate}>
                <TouchableOpacity style={style.generate}>
                    <Ionicons name='sparkles-sharp' size={20} />
                    <Text style={style.textGenerate}>Generate</Text>
                </TouchableOpacity>
            </View>

            <View>
                {Platform.OS === "web" ? (
                    <View >
                        {image ? (
                            <View style={style.backgroundImage}>
                                <Image source={{ uri: image }} style={style.image} />
                            </View>
                        ) : (
                            <View style={style.backgroundImage}>
                                <TouchableOpacity onPress={() => document.getElementById("fileInput").click()} style={style.chooceImage}>
                                    <View style={{ alignItems: "center", }}>
                                        <input id="fileInput" type="file" accept="image/*" onChange={uploatImage} style={{ display: "none" }} />
                                        <Ionicons name="image-outline" size={50} color='#A8A8A8' />
                                        <Text style={style.textUploadImage}>Upload a reference image</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )}

                    </View>
                ) : (
                    <TouchableOpacity onPress={() => { }}>
                        <Text >Choose Image</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

export default aiEdit

const style = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    backgroundImage: {
        width: 1080,
        height: 555,
        borderWidth: 3,
        borderColor: '#A8A8A8',
        borderRadius: 5,
        marginTop: 40,
        alignItems: "center",
        
        marginLeft: 20,
        marginBottom: 40,
    },
    chooceImage: {
        borderColor: '#A8A8A8',
        borderBottomWidth: 2,
        width: 300,
        height: 150,
        marginTop: 200,
    },
    textUploadImage: {
        color: '#A8A8A8',
        fontFamily: 'Arial',
        fontSize: 17,
        marginTop: 5,
    },
    generate: {
        marginTop: 10,
        alignItems: "center",
    },
    textGenerate: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 10,
    },
    backgroundGenerate: {
        backgroundColor: '#3EB8AF',
        width: 50,
        height: 50,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 45,
    }
})

