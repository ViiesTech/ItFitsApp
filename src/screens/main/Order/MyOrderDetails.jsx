/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import AppText from '../../../components/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LineBreak from '../../../components/LineBreak';
const MyOrderDetails = () => {
  const data = [
    { id: 1, title: 'Delivered', date: '28 May' },
    { id: 2, title: 'Shipped', date: '28 May' },
    { id: 3, title: 'Order Confirmed ', date: '28 May' },
    { id: 4, title: 'Order Placed', date: '28 May' },
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
          centerText={'Order #456765'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <View style={{ height: 2, width: '100%', backgroundColor: '#E1E1D9' }} />
      <View style={{}}>
        <FlatList
          contentContainerStyle={{
            gap: responsiveHeight(2),
            padding: responsiveHeight(2),
            paddingBottom: responsiveHeight(1),
          }}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: responsiveHeight(2),
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        item.title === 'Delivered' ? '#EAF5ED' : '#2EA036',
                      padding: responsiveHeight(1.3),
                      borderRadius: responsiveHeight(2.5),
                    }}
                  >
                    <Ionicons
                      size={20}
                      color={AppColors.WHITE}
                      name="checkmark-sharp"
                    />
                  </View>
                  <AppText
                    textSize={2}
                    title={item.title}
                    textColor={
                      item.title === 'Delivered' ? '#939393' : AppColors.BLACK
                    }
                  />
                </View>
                <AppText
                  title={item.date}
                  textColor={
                    item.title === 'Delivered' ? '#939393' : AppColors.BLACK
                  }
                />
              </View>
            );
          }}
        />
      </View>

      <View
        style={{ padding: responsiveHeight(2), marginTop: responsiveHeight(1) }}
      >
        <AppText textSize={2.4} title="Order Items" />
        <LineBreak space={2} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: responsiveHeight(1.5),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveHeight(2),
            }}
          >
            <Ionicons name="receipt-outline" size={25} />
            <AppText textSize={2} title="4 items" />
          </View>
          <AppText textSize={2} title="View All" textColor="#0052b4" />
        </View>
        <LineBreak space={2} />
        <AppText textSize={2.4} title="Shipping details" />
        <LineBreak space={3} />
        <AppText
          textSize={2}
          title="2715 Ash Dr. San Jose, South Dakota 83475"
        />
        <AppText textSize={2} title="121-224-7890" />
      </View>
    </Container>
  );
};

export default MyOrderDetails;
