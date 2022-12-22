import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B8FA5",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
  },
  containerSubtitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
    width: 320,
    marginTop: 60,
  },
  form: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20

  },
  input: {
    width: 320,
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 10,
    color: '#FFF'

  },
  buttonLogin:{
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19343C',
    height: 50,
    padding: 10,
    margin: 12,
    borderRadius: 10,
  },
  buttonCadastrar:{
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A7083',
    height: 50,
    padding: 10,
    margin: 12,
    borderRadius: 10,
  },

});

export default styles;
