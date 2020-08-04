import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { images } from './LogoDB';

/* one Button : title + logo */
class MainButton extends Component{
  static defaultProps = {
    title: 'untitled',
    src: images.Default.src,
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }


  render(){
    return (
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <View style={styles.btnImage}>
                <Image style={styles.logo}
                    source={this.props.src}/>
            </View>
            <View style={styles.btnText}>
                            <Text>{this.props.title}</Text>
                        </View>
        </TouchableOpacity>
    );
  }
}
/* aligned Buttons */
export default class MainButtonsTable extends Component{
 constructor(props) {
     super(props);
     const elementButton = (p_title, p_src) => (
            <MainButton
                title={p_title}
                src={p_src}
                onPress={() => this._alertIndex(p_title)} />
     );

     this.state = {
       tableData1: [
         [elementButton('출입증 발급', images.main_btn1.src), elementButton('입주자 등록', images.main_btn2.src)],
         [elementButton('출입증 로그', images.main_btn3.src), elementButton('임시 출입증', images.main_btn4.src)],

       ],
       tableData2: [
         ['',elementButton('출입하기', images.main_btn5.src),'']
       ]
     }
   }

   _alertIndex(value) {
     Alert.alert(`This is ${value}`);
   }

   render() {
     const state = this.state;
     return (
       <View style={styles.container}>
         <Table>
           <TableWrapper style={{flex:1 }}>
             <Rows data={state.tableData1} heightArr={[120, 120]}/>
             <Rows data={state.tableData2} flexArr={[1,2,1]}/>
           </TableWrapper>
         </Table>
       </View>
     )
   }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems:'center',
    flexDirection:'column',
    alignItems:'center',
 },
   button: {
      width: 130,
      height: 90,
      alignItems: "center",
      backgroundColor: '#D8D8D8', // RGB(235,235,235) #ebebeb
      borderRadius: 10,
      padding: 10,
      margin: 10,
    },
    btnText:{
      flex: 1,
      justifyContent: "flex-end",
    },
    btnImage: {
      flex: 2,
      width: '100%',
    },
    logo: {
       marginTop: 5,
       height:'100%',
       width:'100%',
       resizeMode:'contain'
    },
});