import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import { responsiveHeight, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../../components/AppText';
const Notification = () => {
    const data = [
        {id:1,title:'Gilbert, you placed and order check your order history for full details',badge:true},
        {id:2,title:'Gilbert, Thank you for shopping with us we have canceled order #24568.'},
        {id:3,title:'Gilbert, your Order #24568 has been  confirmed check  your order history for full details'},
    ]
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Notifications'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <View style={{ height: 2, width: '100%', backgroundColor: '#E1E1D9' }} />

      <View style={{padding:responsiveHeight(2)}}>
        <FlatList data={data} contentContainerStyle={{gap:responsiveHeight(2)}} renderItem={({item,index}) => {
            return(
                <TouchableOpacity style={{flexDirection:'row',gap:responsiveHeight(2),borderRadius:responsiveHeight(1),alignItems:'center',padding:responsiveWidth(3),paddingVertical:responsiveHeight(3),backgroundColor:'#F4F4F4'}}>
<Ionicons name='notifications-outline' size={25}/>
<AppText textwidth={75} title={item.title} textSize={1.9}/>
                </TouchableOpacity>
            )
        }}/>
      </View>
    </Container>
  );
};

export default Notification;
