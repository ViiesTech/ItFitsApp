import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppText';
import AppTextInput from '../../../components/AppTextInput';
import Octicons from 'react-native-vector-icons/Octicons';
import AppButton from '../../../components/AppButton';
import { AppImages } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import OrderPlacedModal from '../../../components/OrderPlacedModal';

const Checkout = () => {
  const nav = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Checkout'}
          isChange={true}
          centerTextFontBold={true}
        />
        <OrderPlacedModal visible={visible} />
        <LineBreak space={4} />
        <View>
          <AppText
            title={'Delivery method'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textFontWeight
            textAlignment={'center'}
          />
          <LineBreak space={1} />
          <TouchableOpacity onPress={() => nav.navigate('DeliveryMethod')}>
            <AppTextInput
              inputPlaceHolder={'Choose a delivery method'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.GRAY}
              borderBottomColor={AppColors.LIGHTGRAY}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.GRAY}
                />
              }
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={4} />
        <View>
          <AppText
            title={'Shipping address'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textFontWeight
            textAlignment={'center'}
          />
          <LineBreak space={1} />
          <TouchableOpacity onPress={() => nav.navigate('ShippingAddress')}>
            <AppTextInput
              inputPlaceHolder={'Add a Billing address'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.GRAY}
              borderBottomColor={AppColors.LIGHTGRAY}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.GRAY}
                />
              }
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={4} />
        <View>
          <AppText
            title={'Payment method'}
            textColor={AppColors.BLACK}
            textSize={2.5}
            textFontWeight
            textAlignment={'center'}
          />
          <LineBreak space={1} />
          <TouchableOpacity onPress={() => nav.navigate('PaymentMethod')}>
            <AppTextInput
              inputPlaceHolder={'Select Payment Methods'}
              borderBottomWidth={1}
              placeholderTextColor={AppColors.GRAY}
              borderBottomColor={AppColors.LIGHTGRAY}
              inputWidth={80}
              editable={false}
              rightIcon={
                <Octicons
                  name={'arrow-right'}
                  size={responsiveFontSize(3)}
                  color={AppColors.GRAY}
                />
              }
            />
          </TouchableOpacity>
        </View>
        <LineBreak space={5} />
        <AppButton
          title={'PAY • $460'}
          textSize={2}
          handlePress={() => nav.navigate('FinalShipping')}
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

export default Checkout;
