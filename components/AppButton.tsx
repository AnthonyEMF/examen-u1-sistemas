import { Pressable, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";

interface Props {
  label: string;
  onPress?: () => void;
  position?: "left" | "right";
}

export default function AppButton({
  label,
  onPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        globalStyles.floatingButton,
        position === "right" ? globalStyles.positioRight : globalStyles.positionLeft,
        pressed ? {opacity: 0.5} : {opacity: 1}
      ]}
    >
      <Text style={globalStyles.floatingButtonText}>{label}</Text>
    </Pressable>
  );
}
