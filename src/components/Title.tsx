import React from 'react';
import { Text, StyleSheet, TextStyle, View } from 'react-native';

interface TitleProps {
  mainText: string;
  highlightText?: string;
  highlightColor?: string;
}

const Title: React.FC<TitleProps> = ({ mainText, highlightText, highlightColor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {mainText}
        {highlightText && (
          <Text style={[styles.highlightText, { color: highlightColor || '#81B622' }]}>
            {highlightText}
          </Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  highlightText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Title;
