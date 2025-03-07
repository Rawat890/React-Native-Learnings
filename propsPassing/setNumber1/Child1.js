import { View, Text, StyleSheet } from 'react-native'

function Child1({ parentName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am child of {parentName}</Text>
    </View>
  )
}

export default Child1;
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})