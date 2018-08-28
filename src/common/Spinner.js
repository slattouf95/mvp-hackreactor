import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size, color }) => {
  return (
    <View style={styles.SpinnerStyles}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = {
  SpinnerStyles: {
    flex: 1,
    justifyContent: "center"
  }
};

export { Spinner };
