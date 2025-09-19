/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { AppImages } from '../../../assets/images';
import Container from '../../../components/Container';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import MyCartCard from '../../../components/MyCartCard';
import { useNavigation } from '@react-navigation/native';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import AppTextInput from '../../../components/AppTextInput';
import SVGXml from '../../../components/SVGXML';
import { AppIcons } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';

const data = [
  {
    id: 1,
    image: AppImages.image,
    name: 'Panic Beg x 1',
    size: 'L',
    color: 'Brown',
    price: '$230',
  },
  {
    id: 2,
    image: AppImages.image,
    name: 'Panic Beg x 1',
    size: 'L',
    color: 'Brown',
    price: '$230',
  },
];

const receptData = [
  { id: 1, title: 'SubTotal', price: '$200' },
  { id: 2, title: 'Shipping Cost', price: '$8.00' },
  { id: 3, title: 'Tax', price: '$0.00' },
  { id: 4, title: 'Total', price: '$208' },
];

const OrderDetail = () => {
  const nav = useNavigation();

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Order Detail'}
          isChange={true}
          centerTextFontBold={true}
        />
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingHorizontal: responsiveWidth(4) }}
        renderItem={({ item }) => (
          <MyCartCard
            item={item}
            buttonOnPress={() => nav.navigate('OrderDetail')}
            orderDetail={'orderDetail'}
          />
        )}
      />
      <LineBreak space={2} />
      <TouchableOpacity>
        <AppText
          title={'Remove All'}
          textColor={AppColors.BLACK}
          textSize={2}
          textAlignment={'center'}
        />
      </TouchableOpacity>
      <LineBreak space={2} />
      <FlatList
        data={receptData}
        contentContainerStyle={{ paddingHorizontal: responsiveWidth(4) }}
        ItemSeparatorComponent={<LineBreak space={1} />}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AppText
              title={item.title}
              textColor={AppColors.GRAY}
              textSize={1.8}
            />
            <AppText
              title={item.price}
              textColor={AppColors.BLACK}
              textSize={1.8}
            />
          </View>
        )}
      />
      <LineBreak space={2} />
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AppTextInput
          inputPlaceHolder={'Enter Coupon Code'}
          containerBg={AppColors.cardColor}
          borderBottomWidth={-1}
          inputHeight={6}
          logo={<SVGXml icon={AppIcons.code} width={25} height={25} />}
          rightIcon={
            <TouchableOpacity>
              <SVGXml icon={AppIcons.arrow_right} width={30} height={30} />
            </TouchableOpacity>
          }
          inputWidth={68}
        />

        <LineBreak space={2} />

        <AppButton
          title={'CHECKOUT • NEXT'}
          textSize={2}
          handlePress={() => nav.navigate('Checkout')}
          btn_bg={AppImages.btn_bg}
          textColor={AppColors.WHITE}
          leftIcon={<View />}
          rightIcon={
            <Octicons
              name={'arrow-right'}
              size={responsiveFontSize(3)}
              color={AppColors.WHITE}
            />
          }
        />
      </View>
    </Container>
  );
};

export default OrderDetail;
