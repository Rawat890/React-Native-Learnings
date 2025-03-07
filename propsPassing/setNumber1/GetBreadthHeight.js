import { useWindowDimensions } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

function GetBreadthHeight() {

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Width of the device is {width}</Text>
      <Text style={styles.text}>The Height of the device is {height}</Text>
    </View>
  )
}

export default GetBreadthHeight;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})