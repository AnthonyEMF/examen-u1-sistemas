import { View, Text, TextProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

interface Props extends TextProps {
  variant?: "h1" | "h2";
  color?: string;
}

const ThemeText = ({
  children,
  variant = "h2",
  color = Colors.textPrimary,
}: Props) => {
  return (
    <View>
      <Text
        style={[
          { color: color },
          variant === "h1" && globalStyles.h1,
          variant === "h2" && globalStyles.h2,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default ThemeText;
