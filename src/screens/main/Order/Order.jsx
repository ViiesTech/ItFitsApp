/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Container from './../../../components/Container';
import AuthHeader from './../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppText from '../../../components/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Order = ({ navigation }) => {
  const data = [
    { id: 1, title: 'Processing' },
    { id: 2, title: 'Shipped' },
    { id: 3, title: 'Delivered' },
    { id: 4, title: 'Returned' },
  ];
  const data2 = [
    { id: 1, title: 'Order #456765', quantity: '4 items' },
    { id: 2, title: 'Order #456765', quantity: '2 items' },
    { id: 3, title: 'Order #456765', quantity: '1 items' },
  ];
  const [activeTab, setActiveTab] = useState('Processing');
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Orders'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <View style={{ height: 2, width: '100%', backgroundColor: '#E1E1D9' }} />
      <View style={{}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: responsiveHeight(2),
            padding: responsiveHeight(2),
            paddingBottom: responsiveHeight(1),
          }}
          horizontal
          data={data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setActiveTab(item.title)}
                style={{
                  backgroundColor:
                    item.title === activeTab ? '#32A73D' : '#F4F4F4',
                  width: responsiveWidth(25),
                  alignItems: 'center',
                  padding: responsiveHeight(1),
                  paddingVertical: responsiveHeight(1.5),
                  borderRadius: responsiveHeight(3),
                }}
              >
                <AppText
                  textSize={1.7}
                  title={item.title}
                  textColor={
                    item.title === activeTab ? AppColors.WHITE : AppColors.BLACK
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ padding: responsiveHeight(2) }}>
        <FlatList
          data={data2}
          contentContainerStyle={{ gap: responsiveHeight(2) }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('MyOrderDetail')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: responsiveHeight(1),
                  alignItems: 'center',
                  paddingHorizontal: responsiveWidth(3),
                  paddingVertical: responsiveHeight(3),
                  backgroundColor: '#F4F4F4',
                }}
              >
                {/* Left content */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveHeight(2),
                  }}
                >
                  <Ionicons name="receipt-outline" size={25} />
                  <View>
                    <AppText title={item.title} textSize={1.9} />
                    <AppText
                      textColor="#8E8E8E"
                      title={item.quantity}
                      textSize={1.9}
                    />
                  </View>
                </View>

                {/* Right icon */}
                <View>
                  <Ionicons name="chevron-forward-outline" size={25} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Container>
  );
};

export default Order;
