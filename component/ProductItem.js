import React from 'react'
import {View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

class ProductItem extends React.Component {
    render(){
    return(
       <View styles={styles.product}>
        <View style={styles.touchable}>
       
         <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:this.props.image}} ></Image>
          </View>
          <View style={styles.details}>
          <Text style={styles.details}>{this.props.title}</Text>
          <Text style={styles.price}>{this.props.price}</Text>
          </View>
         </View>
        
        </View>

       </View>

    )
    }
}

export default ProductItem


const styles = StyleSheet.create({
    product: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 300,
      margin: 20
    },
    touchable: {
      borderRadius: 10,
      overflow: 'hidden'
    },
    imageContainer: {
      width: '100%',
      height: '60%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      alignItems: 'center',
      height: '15%',
      padding: 10
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 18,
      marginVertical: 2
    },
    price: {
      //fontFamily: 'open-sans',
      fontSize: 14,
      color: '#888'
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '25%',
      paddingHorizontal: 20
    }
  });