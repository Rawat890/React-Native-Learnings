import { View, Text, Pressable, StyleSheet } from "react-native";
import Child1 from "./Child1";

function Parent1() {

  function getChild() {
    return <Child1 parentName='setNumber1 - Parent1' />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is parent number 1</Text>
      <Pressable onPress={getChild} style={styles.btn} android_ripple={{ color: '#ccc' }}>
        <Text style={styles.btnText}>Get Child</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    width: '50%',
    borderWidth: 3
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold', fontSize: 18
  }
})

export default Parent1;