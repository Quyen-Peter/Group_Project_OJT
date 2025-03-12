import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const categories = ["3D Renders", "Nature", "Travel", "Animals", "People", "Food & Drink", "Arts & Culture"];
const filters = [
  { name: "Recent", icon: "clock" },
  { name: "Hot", icon: "fire" },
];

const gridData = [
  [
    { uri: "https://img.freepik.com/premium-photo/display-beauty-products-with-bottle-liquid-shelf_192217-624.jpg?w=360", height: 500 },
    { uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMV9zYXR1cm5faW5fdGhlX3N0eWxlX29mX3Bhc3RlbF9kcmVhbXlfY2hhcm1pbmdfd19hNTM4MGNkYi00ZGNmLTQzODYtYWEyZS03YzZlZDczNjI3ODRfMi5qcGc.jpg", height: 300 },
    { uri: "https://img.freepik.com/premium-photo/hand-hold-like-button-icon-social-media-sign-chat-application-technology-community-background-banner-concept-3d-cartoon-illustration_56104-1740.jpg?w=360", height: 280 },
  ],
  [
    { uri: require("../../../assets/dashboardImage/AIImages/house.jpg"), height: 330 },
    { uri: require("../../../assets/dashboardImage/AIImages/tree.jpg"), height: 300 },
    { uri: require("../../../assets/dashboardImage/AIImages/ballon.jpg"), height: 400 },
  ],
  [
    { uri: "https://img.freepik.com/free-photo/easter-decorative-eggs-arrangement_23-2150245764.jpg", height: 450, text: { title: "Helen", date: "02.03.2023", description: "Save, share and use your image however you please." } },
    { uri: "https://img.freepik.com/foto-premium/un-illustrazione-digitale-di-uno-stand-gastronomico-mco_852323-60.jpg", height: 300 },
    { uri: require("../../../assets/dashboardImage/AIImages/tank.jpg"), height: 280 }
  ],
  [
    { uri: require("../../../assets/dashboardImage/AIImages/monkey.jpg"), height: 300 },
    { uri: "https://img.freepik.com/premium-photo/chinese-asian-cartoon-background-illustrations-kids-cartoon-style-ai-generated_755721-1470.jpg", height: 250 },
    { uri: "https://cdn.prod.website-files.com/61854e3ef69d07a1f22d8d6f/62278e0a0810f907e2d24955_instant-win-wink.jpg", height: 240 },
    { uri: "https://img.freepik.com/free-photo/fantasy-landscape-with-gradient-cube_23-2149312128.jpg", height: 280 },
  ],
];

const dashTwo = () => {
  const [selectedFilter, setSelectedFilter] = useState("Recent");
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}
          >
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() => setSelectedCategory(item)} // Cập nhật trạng thái khi bấm
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item ? styles.boldText : null, // Nếu được chọn, đổi màu
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.filterWrapper}>
            <View style={styles.filterContainer}>
              {filters.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => setSelectedFilter(item.name)}
                  style={[
                    styles.filterButton,
                    selectedFilter === item.name && styles.activeFilterButton,
                  ]}
                >
                  <FontAwesome5
                    name={item.icon}
                    size={14}
                    color="black"
                    style={styles.icon}
                  />
                  <Text style={styles.filterText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {gridData.map((column, columnIndex) => (
            <View key={columnIndex} style={styles.column}>
              {column.map((image, imageIndex) => (
                <View key={imageIndex} style={{ position: "relative" }}>
                  <Image
                    source={
                      typeof image.uri === "string"
                        ? { uri: image.uri } // Nếu là URL, dùng `uri`
                        : image.uri // Nếu là ảnh cục bộ, truyền trực tiếp
                    }
                    style={{
                      width: "100%",
                      height: image.height,
                      borderRadius: 12,
                      marginBottom: 20,
                    }}
                    resizeMode="cover"
                  />
                  {image.text && (
                    <View style={styles.overlay}>
                      <View style={styles.overlayContainer}>
                        <Image
                          source={{
                            uri: "https://static.univid.io/profile/toyfaces/coloredbg/ToyFaces_Colored_BG_63.jpg",
                          }}
                          style={styles.overlayImage}
                        />
                        <Text style={styles.overlayTitle}>
                          {image.text.title}
                        </Text>
                        <Text style={styles.overlayDate}>
                          {image.text.date}
                        </Text>
                      </View>

                      <Text style={styles.overlayDescription}>
                        {image.text.description}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: { width: "100%", height: "100%", backgroundColor: "#f8f8f8", padding: 0 , borderRadius: 10,},
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: "center" ,marginLeft:20},
  categoryContainer: { flexDirection: "row", flex: 1 },
  categoryButton: { paddingHorizontal: 10, paddingVertical: 5 },
  categoryText: { fontSize: 16, color: "#333" }, // Mặc định là màu đen
  boldText: { fontWeight: "bold", color: "#000000" }, // Khi được chọn thì màu xanh

  filterWrapper: {
    alignItems: "flex-end",
    paddingRight: 10, // Đẩy container Recent/Hot vào sát lề phải khoảng 10px  
    paddingTop: 5
  },

  filterContainer: { flexDirection: "row", borderRadius: 10, backgroundColor: "#F7F7F7", padding: 5 },
  filterButton: { flexDirection: "row", alignItems: "center", padding: 8, borderRadius: 10 },
  activeFilterButton: { backgroundColor: "white" },
  filterText: { marginLeft: 5, color: "#333" },

  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,  // Chỉnh khoảng cách ngang 10px  
    paddingHorizontal: 20, // Đảm bảo hình không sát lề  
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,

    
  },
  overlayContainer:{flexDirection:"row"},
  overlayImage: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight: 5,
  },
  overlayTitle: { color: "black", fontWeight: "bold", fontSize: 16 },
  overlayDate: { color: "black", fontSize: 14, marginLeft:150 },
  overlayDescription: { color: "black", fontSize: 14 },
});

export default dashTwo;
