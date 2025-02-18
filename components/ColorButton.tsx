import { Text, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";

interface Props {
  label: string;
  backgroundColor?: string;
  doubleSize?: boolean;
  onPress?: () => void;
}

const ColorButton = ({
  label,
  backgroundColor = Colors.blue,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default ColorButton;
