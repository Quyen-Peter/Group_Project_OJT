import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Home from "../dashboard/dashboardMain";
import Discovery from "../dashboard/dashTwo";
import MyProject from "../dashboard/MyProject";
import TrashList from "../dashboard/TrashList";


const Stack = createStackNavigator();

const menuLeft = ({navigation}) => {

  //const [activeScreen, setActiveScreen] = useState("Home");
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, }}>
        {/* Group 1 */}

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={22} color="black" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Discovery")}>
          <FontAwesome name="safari" size={19} color="black" />
          <Text style={styles.text}>Discovery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("MyProject")}>
          <Feather name="folder" size={20} color="black" />
          <Text style={styles.text}>My Project</Text>
        </TouchableOpacity>



        {/* Divider */}
        <View style={styles.divider} />

        {/* Group 2 */}

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("TrashList")}>
          <Feather name="trash-2" size={20} color="black" />
          <Text style={styles.text}>Trash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="settings" size={20} color="black" />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 name="question-circle" size={20} color="black" />
          <Text style={styles.text}>Get Help</Text>
        </TouchableOpacity>


        {/* Section Below */}
        <View style={styles.bottomSection}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Projects</Text>
              <Text style={styles.cardCounter}>6/20</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.cardSubText}>
              Monthly usage resets in 29 days
            </Text>
            <Text style={styles.planManager}>PLAN MANAGER</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Discovery">
      <Stack.Screen name="MenuLeft" component={menuLeft} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discovery" component={Discovery} />
        <Stack.Screen name="MyProject" component={MyProject} />
        <Stack.Screen name="TrashList" component={TrashList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
//export default menuLeft;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  menuItem: {
    flexDirection: "row", // Icon and text in the same row
    alignItems: "center", // Center vertically
    marginVertical: 10, // Add spacing between items
    marginLeft: 20,
  },
  text: {
    marginLeft: 10, // Space between icon and text
    fontSize: 15,
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc", // Light gray line
    marginVertical: 20, // Space above and below the line,
    width: 280,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 130,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: 280,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  cardCounter: {
    fontSize: 14,
    color: "gray",
  },
  progressBar: {
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginVertical: 10,
    overflow: "hidden",
  },
  progressFill: {
    width: "30%",
    height: "100%",
    backgroundColor: "green",
  },
  cardSubText: {
    fontSize: 12,
    color: "gray",
    marginVertical: 5,
  },
  planManager: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginVertical: 5,
  },
  upgradeButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 10,
  },
  upgradeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  screenRight: {
    
  }
});