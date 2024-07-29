import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard: FunctionComponent = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});

export default Dashboard;