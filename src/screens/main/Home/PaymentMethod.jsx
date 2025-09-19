import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Container from '../../../components/Container';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from '../../../components/LineBreak';
import { useNavigation } from '@react-navigation/native';
import MethodCard from '../../../components/MethodCard';
import AppButton from '../../../components/AppButton';
import { AppImages } from '../../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';
import { AppIcons } from '../../../assets/icons';

const data = [
  {
    id: 1,
    title: 'Visa - •••• •••• 2940',
    icon: AppIcons.visa,
  },
  { id: 2, title: 'Paypal', icon: AppIcons.paypal },
  { id: 3, title: 'Master Card', icon: AppIcons.master_card },
  { id: 4, title: 'Apple Pay', icon: AppIcons.apple_pay },
];

const PaymentMethod = () => {
  const nav = useNavigation();
  const [isSelected, setIsSelected] = useState({ id: 1 });
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Payment Method'}
          isChange={true}
          centerTextFontBold={true}
          rightIcon={
            <TouchableOpacity onPress={() => nav.navigate('AddNewCard')}>
              <Feather
                name={'plus'}
                size={responsiveFontSize(3)}
                color={AppColors.GRAY}
              />
            </TouchableOpacity>
          }
        />
        <LineBreak space={1} />
        <FlatList
          data={data}
          ItemSeparatorComponent={<LineBreak space={2} />}
          renderItem={({ item }) => (
            <MethodCard
              title={item.title}
              isSelected={isSelected.id == item.id}
              cardOnPress={() => setIsSelected({ id: item.id })}
              paymentMethod={'paymentMethod'}
              icon={item.icon}
            />
          )}
        />
        <LineBreak space={5} />
        <AppButton
          title={'Done'}
          textSize={2}
          handlePress={() => nav.goBack()}
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

export default PaymentMethod;
