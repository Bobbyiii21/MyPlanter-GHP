import React from 'react';
import { View, ScrollView, StyleSheet, Text , Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const Boxwidth = (width - 40)

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 1</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 2</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 3</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 4</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 5</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 6</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 7</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 8</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 9</Text>
        </View>
        <View style={styles.rectangleBox}>
          <Text style={styles.textBoxText}>Box 10</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  rectangleBox: {
    width: Boxwidth,
    height: 80,
    backgroundColor: 'gray',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
