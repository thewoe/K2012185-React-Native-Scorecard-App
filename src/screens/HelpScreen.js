import { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HelpScreen = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>Help Me</Text>
          <Text style={styles.content}>Help message goes here</Text>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  title: {

  },
  content: {
    
  }
});

export default HelpScreen;