import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card.js";
import CardSection from "./CardSection.js";
import SettingsButton from "./SettingsButton.js";

const SongDetail = props => {
  const { thumbnail_image, title } = props.album;
  const { thumbnailStyle, queueStyle, settingsButtonStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={queueStyle}>
          <Text>{props.index + ". "}</Text>
        </View>

        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <Text>{title}</Text>
        <View style={settingsButtonStyle}>
          <SettingsButton />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  queueStyle: {
    justifyContent: "center",
    marginRight: 3
  },
  settingsButtonStyle: {
    justifyContent: "center"
  }
};

export default SongDetail;
