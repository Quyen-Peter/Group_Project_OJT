import { StyleSheet, View, Text, Image, ScrollView, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Background from "../../../assets/dashboardImage/background.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Astronaut from "../../../assets/dashboardImage/astronaut.png";
import Boy from "../../../assets/dashboardImage/boy.png";
import Brisa from "../../../assets/dashboardImage/brisa.png";
import Eye from "../../../assets/dashboardImage/eye.png";
import Hug from "../../../assets/dashboardImage/hug.png";
import Magic from "../../../assets/dashboardImage/magic.png";
import Spring from "../../../assets/dashboardImage/spring.png";
import Tea from "../../../assets/dashboardImage/tea.png";

const recentDesigns = [
  { id: '1', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'The house', edited: '1', size: '1 GB', lastViewed: 'N/A' },
  { id: '2', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Garden', edited: '3', size: '12 MB', lastViewed: 'N/A' },
  { id: '3', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Tea', edited: '1', size: '3.8 MB', lastViewed: 'N/A' },
  { id: '4', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Character', edited: '3', size: '2 GB', lastViewed: 'N/A' },
  { id: '5', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Floor Lamp', edited: '2', size: '3.06 MB', lastViewed: '5 days ago' },
  { id: '6', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Handle', edited: '5', size: '4.92 MB', lastViewed: '5 days ago' },
  { id: '7', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Panel Curtain', edited: '2', size: '4.76 MB', lastViewed: '5 days ago' },
  { id: '8', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'The house', edited: '1', size: '1 GB', lastViewed: 'N/A' },
  { id: '9', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Garden', edited: '3', size: '12 MB', lastViewed: 'N/A' },
  { id: '10', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Tea', edited: '1', size: '3.8 MB', lastViewed: 'N/A' },
  { id: '11', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Character', edited: '3', size: '2 GB', lastViewed: 'N/A' },
  { id: '12', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Floor Lamp', edited: '2', size: '3.06 MB', lastViewed: '5 days ago' },
  { id: '13', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Handle', edited: '5', size: '4.92 MB', lastViewed: '5 days ago' },
  { id: '14', imageUrl: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', name: 'Panel Curtain', edited: '2', size: '4.76 MB', lastViewed: '5 days ago' },
];

const { width, height } = Dimensions.get("window");

const DashboardMain = () => {
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Background Section */}
        <View style={styles.backgroundSection}>

          <Image source={Background} style={styles.backgroundImage} />
          <View style={styles.overlay}>
            {/* Icon with Circles */}
            <View style={styles.iconWrapper}>
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                  <Ionicons name="sparkles" size={26} color="black" />
                </View>
              </View>
            </View>

            {/* Text */}
            <View style={styles.textWrapper}>
              <Text style={styles.title}>
                Visualize your design ideas with AI Image
              </Text>
              <Text style={styles.subtitle}>
                Turn inspiration into design in no time. Simply upload an image
                and Magic Design™ will whip up a curated selection of templates
                just for you.
              </Text>
            </View>
          </View>

        </View>

        {/* Explore Section */}
        <Text style={styles.explore}>Explore</Text>

        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image source={Brisa} style={styles.image} />
            <Text style={styles.imageText}>Text to Image</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Tea} style={styles.image} />
            <Text style={styles.imageText}>Text effects</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Hug} style={styles.image} />
            <Text style={styles.imageText}>Erasers</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Spring} style={styles.image} />
            <Text style={styles.imageText}>Vectors</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image source={Astronaut} style={styles.image} />
            <Text style={styles.imageText}>3D to Image</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Magic} style={styles.image} />
            <Text style={styles.imageText}>Upscale</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Boy} style={styles.image} />
            <Text style={styles.imageText}>Personalized</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={Eye} style={styles.image} />
            <Text style={styles.imageText}>Sketch</Text>
          </View>
        </View>

        {/* Recent designs */}
        <Text style={styles.explore}>Recent designs</Text>

        <View style={styles.recentContainer}>

          <View style={styles.HeaderTable}>
            <View style={[styles.Colum, { flex: 5 }]}>
              <Text style={styles.TextHeaderTable}>Name</Text>
            </View>
            <View style={[styles.Colum, { flex: 2 }]}>
              <Text style={styles.TextHeaderTable}>Size</Text>
            </View>
            <View style={[styles.Colum, { flex: 3 }]}>
              <Text style={styles.TextHeaderTable}>Last viewed</Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              data={recentDesigns}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.AllItem}>
                  <View style={[styles.Colum, { flex: 5 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View>
                        <Image source={{ uri: item.imageUrl }} style={styles.ImageOfAllItem} />
                      </View>
                      <View>
                        <Text style={[styles.TextOfAllItem, { marginLeft: 15, }]}>{item.name}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.Colum, { flex: 2 }]}>
                    <Text style={styles.TextOfAllItem}>{item.size}</Text>
                  </View>
                  <View style={[styles.Colum, { flex: 2 }]}>
                    <Text style={styles.TextOfAllItem}>{item.edited} days ago</Text>
                  </View>
                  <TouchableOpacity style={[styles.Colum, { flex: 1 }]}>
                    <AntDesign name="ellipsis1" size={20} />
                  </TouchableOpacity>
                </View>
              )}
            />

          </View>
        </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  backgroundSection: {
    marginBottom: 20,
    height: 180,
    justifyContent: "center",
    width: '106.8%',
    paddingLeft: 26,
    paddingTop: 50,

  },
  backgroundImage: {
    width: "90%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  overlay: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    backgroundColor: "#FFFFFF",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  innerCircle: {
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  explore: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 26,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageWrapper: {
    alignItems: "flex-start",
  },
  imageText: {
    fontSize: 13,
    color: "#000",
    marginTop: 8,
    fontFamily: "Arial",
    marginLeft: 5,
  },
  image: {
    width: 270,
    height: 160,
    borderRadius: 10,
    marginTop: 20,

  },
  recentContainer: {
    marginHorizontal: 26,
    marginBottom: 20,
  },
  HeaderTable: {
    flexDirection: 'row',
  },
  TextHeaderTable: {
    fontSize: 13,
    marginTop: 15,
    color: '#484848',
  },
  Colum: {
    justifyContent: 'center',
  },
  ImageOfAllItem: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  TextOfAllItem: {
    fontFamily: "Arial",
    fontSize: 11,
    fontWeight: 'bold',
  },
  AllDesign: {
    marginTop: 25,
  },
  buttonAllDesign: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  borderIconAntDesign: {
    width: 30,
    height: 30,
    borderColor: '#989898',
    borderWidth: 1.2,
    borderRadius: 7,
  },
  AllItem: {
    flexDirection: 'row',
    alignItems: 'center', 
    gap: 10,
    marginTop: 10,
},
});

export default DashboardMain;
