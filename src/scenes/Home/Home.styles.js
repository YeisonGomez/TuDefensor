import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 18,
    fontWeight: '900',
    color: '#ffff'
  },
  containerDrop: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  panel: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 35,
    paddingTop: 35
  },
  panelHeader: {
    height: 50,
    flex: 1, backgroundColor: '#A1A1A1',
    flexDirection: "column",
    textAlign: "center",
    paddingTop: 20,
  },
  sectionTitle: {
    color: "#333",
    fontSize: 22,
    fontWeight: "bold"
  },
  sectionSubTitle: {
    color: "#888888",
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 15,
    fontWeight: "100",
  },
  sectionCopy: {
    color: "#9F9F9F",
    fontWeight: "100",
    fontSize: 16,
    textAlign: "center"
  },
  "sectionCopy--empty": {
    marginVertical: 10
  },
  btnShareLocation: {
    backgroundColor: "#EBEDF0",
    color: "#333",
    padding: 16,
    borderRadius: 10,
    marginVertical: 15
  },
  btnShareLocation__text: {
    color: "#333",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  }
});