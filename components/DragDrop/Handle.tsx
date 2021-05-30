import React from "react";
import { View, StyleProp, TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type DragHandleIconProps = {
  size: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};
const DragHandleIcon = ({ size, color, style }: DragHandleIconProps) => {
  return <MaterialIcons name="drag-handle" size={size} color={color} style={style} />;
};

const DefaultHandle: React.FC = () => (
  <View
    style={{
      borderRightWidth: 1,
      borderRightColor: "black",
      height: "100%",
      justifyContent: "center",
      paddingHorizontal: 5,
    }}
  >
    <DragHandleIcon size={25} />
  </View>
);

export default DefaultHandle;
