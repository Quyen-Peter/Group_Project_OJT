import { ScrollView, StyleSheet, View } from "react-native"
import MenuLeft from "../components/menuCompos/menuLeft";
import MenuTop from "../components/menuCompos/menuTopTwo";


import Home from "../components/dashboard/dashboardMain";
import Discovery from "../components/dashboard/dashTwo";
import MyProject from "../components/dashboard/MyProject";
import TrashList from "../components/dashboard/TrashList";
import AiEdit from "../components/generate/aiEdit";
import { useState } from "react";

const home = () => {

     const [activeScreen, setActiveScreen] = useState("Home");

     const handleScreenChange = (screen) => {
          setActiveScreen(screen);
     };

     return (
          <View style={styles.container}>
               <MenuTop />
               <View style={styles.contentContainer}>
                    <MenuLeft onScreenChange={handleScreenChange} activeScreen={activeScreen} />

                    <View style={{ flex: 1 }}>
                         {activeScreen === "Home" && (
                              <View style={{ width: "99%", height: "38.6%" }} >
                                   <Home />
                              </View>
                         )}
                         {activeScreen === "AiEdit" && (
                              <View style={{ width: "99%", height: "100%" }}>
                                   <AiEdit />
                              </View>
                         )}
                         {activeScreen === "Discovery" && (
                              <View style={{ width: "99%", height: "52.5%" }}>
                                   <Discovery />
                              </View>

                         )}
                         {activeScreen === "MyProject" && (
                              <View style={{ width: "99%", height: "100%" }}>
                                   <MyProject />
                              </View>
                         )}
                         {activeScreen === "TrashList" && (
                              <View style={{width: "99%", height: "65%"}}>
                                   <TrashList/>
                              </View>
                         )}

                    </View>

               </View>
          </View>

     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: '#E8E8E8',
          width: "100%",
          height: "100%",
     },
     contentContainer: {
          marginLeft: 20,
          flexDirection: "row",
          justifyContent: "space-between",
     },
});

export default home