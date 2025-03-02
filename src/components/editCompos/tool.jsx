import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Image2 from "../../../assets/image/icons/image2.png";
import Image3 from "../../../assets/image/icons/image3.png";
import Image4 from "../../../assets/image/icons/image4.png";
import Image5 from "../../../assets/image/icons/image5.png";

const ToolMenu = () => {
  const [selectedTool, setSelectedTool] = useState(null); // Lưu trạng thái công cụ được chọn

  // Các công cụ trong menu
  const tools = [
    { id: 1, label: "Upscale", icon: Image2 },
    { id: 2, label: "Adjust", icon: Image3 },
    { id: 3, label: "Eraser", icon: Image4 },
    { id: 4, label: "Extend", icon: Image5 },
  ];

  return (
    <View style={styles.container}>
      {tools.map((tool) => (
        <TouchableOpacity
          key={tool.id}
          style={[
            styles.toolButton,
            selectedTool === tool.id && styles.selectedButton, // Hiển thị trạng thái được chọn
          ]}
          onPress={() => setSelectedTool(tool.id)}
        >
          {/* Biểu tượng */}
          <Image
            source={tool.icon}
            style={[
              styles.icon,
              selectedTool === tool.id && styles.selectedIcon,
            ]}
          />
          {/* Nhãn */}
          <Text
            style={[
              styles.label,
              selectedTool === tool.id && styles.selectedLabel,
            ]}
          >
            {tool.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "transparent", // Làm nền trong suốt
    borderRadius: 12,
  },
  toolButton: {
    flex: 1, // Đảm bảo các nút có độ lớn bằng nhau
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: "#ffffff", // Nền khi được chọn
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 8,
  },
  selectedIcon: {
    tintColor: "#000000", // Màu biểu tượng khi được chọn
  },
  label: {
    fontSize: 14,
    color: "#6b6b6b",
  },
  selectedLabel: {
    color: "#000000", // Màu chữ khi được chọn
  },
});

export default ToolMenu;
