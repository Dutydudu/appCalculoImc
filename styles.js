import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 450,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    margin: 10,
    fontSize: 16,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  titulo: {
    fontSize: 22,
  },
});

export {styles};