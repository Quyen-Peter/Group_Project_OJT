import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Slider } from "@miblanchard/react-native-slider"

interface SliderProps {
  label?: string
  maximumValue?: number
  minimumValue?: number
  initialValue?: number
  fixedPoint?: number
  step?: number
  isPercent?: boolean
  onValueChange: (value: number) => void
}

/**
 * Component Slide Bar
 * @param label Nhãn hiển thị cho Slider
 * @param maximumValue Giá trị lớn nhất của Slider
 * @param minimumValue Giá trị nhỏ nhất của Slider
 * @param fixedPoint Số chữ số thập phân
 * @param step Bước nhảy khi kéo Slider
 * @param isPercent Hiển thị giá trị dưới dạng phần trăm
 * @param onValueChange Hàm callback trả về giá trị khi thay đổi
 */
const SlideBar: React.FC<SliderProps> = ({
  label = "Unknown slide",
  minimumValue = 0,
  maximumValue = 100,
  initialValue = 0,
  fixedPoint = 0,
  step,
  isPercent = true,
  onValueChange,
}) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (val: number | number[]) => {
    const newValue = Array.isArray(val) ? val[0] : val
    setValue(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  let fixedValue = value.toFixed(fixedPoint)

  return (
    <View style={styles.container}>
      <View style={styles.slideInfo}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueBox}>
          <Text style={styles.value}>
            {isPercent ? `${fixedValue}%` : `${fixedValue}`}
          </Text>
        </View>
      </View>
      <Slider
        minimumValue={minimumValue}
        minimumTrackTintColor="#CFEB92"
        maximumValue={maximumValue || 100}
        maximumTrackTintColor="gray"
        value={value}
        step={step}
        onValueChange={handleChange}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  thumb: {
    width: 15,
    height: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#CFEB92",
    position: "absolute",
  },
  track: {
    height: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  slideInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
  valueBox: {
    width: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
  value: {
    fontFamily: "Roboto",
  },
})

export default SlideBar
