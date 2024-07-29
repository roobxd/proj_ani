import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FrostedOverlayProps {
  imgUrl: string;
  title: string;
  description: string;
  onPress: () => void;
}

const FrostedOverlayComponent: FunctionComponent<FrostedOverlayProps> = ({ imgUrl, title, description, onPress }) => {
  const image = { uri: imgUrl };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <View style={styles.innerContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={{ borderRadius: 20 }}
        >
          <BlurView
            intensity={60}
            style={styles.blurView}
          >
            <Text style={styles.overlayText}>{title}</Text>
            <Text numberOfLines={2} style={styles.overlayDescription}>{description}</Text>
          </BlurView>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 20,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 20, // Apply border radius to the inner container
    overflow: 'hidden', // Ensure children respect the border radius
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  blurView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    maxHeight: 70,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: "hidden",
    paddingHorizontal: 16
  },
  overlayText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayDescription: {
    color: 'grey',
    fontSize: 16,
  }
});

export default FrostedOverlayComponent;
