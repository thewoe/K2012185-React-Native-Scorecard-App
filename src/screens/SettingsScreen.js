import { View, Text } from 'react-native';
// Styles
const styles = {
    app: {
      flex: 4, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: 400,
      backgroundColor: "red"
    },
    row: {
      flexDirection: "row"
    },
    "1col":  {
      backgroundColor:  "lightblue",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  1
    },
    "2col":  {
      backgroundColor:  "green",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  1
    },
    "3col":  {
      backgroundColor:  "orange",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  3
    },
    "4col":  {
      flex:  4,
      backgroundColor: 'pink'
    }
  };
  
  // RN Code
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }
  
  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
  
  function SettingsScreen()  {
    return (
      <View style={styles.app}>
        <Row>
          <Col numRows={2}>
            <Text>First column</Text>
          </Col>
          <Col numRows={2}>
            <Text>Second column</Text>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
            <Text>First column</Text>
          </Col>
          <Col numRows={3}>
            <Text>Second Column</Text>
          </Col>
        </Row>
        <Row>
            <Col numRows={4}>
                <Text>Full Width</Text>
            </Col>
        </Row>
      </View>
    )
  }

  export default SettingsScreen;