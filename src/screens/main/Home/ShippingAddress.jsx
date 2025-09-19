import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import AuthHeader from '../../../components/AuthHeader';
import LineBreak from '../../../components/LineBreak';
import Container from '../../../components/Container';
import Feather from 'react-native-vector-icons/Feather';
import MethodCard from '../../../components/MethodCard';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from '../../../assets/images';
import AppButton from '../../../components/AppButton';
import Octicons from 'react-native-vector-icons/Octicons';

const data = [
  {
    id: 1,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 2,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 3,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 4,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 5,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 6,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 7,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
  {
    id: 8,
    title: '57 Naci Terrace, Hunidpis',
    subTitle: 'Francis Delgado - 755 707 1486',
  },
];

const ShippingAddress = () => {
  const nav = useNavigation();
  const [isSelected, setIsSelected] = useState({ id: 1 });
  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Shipping Address'}
          isChange={true}
          centerTextFontBold={true}
          rightIcon={
            <TouchableOpacity onPress={() => nav.navigate('AddAddress')}>
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
              subTitle={item.subTitle}
              isSelected={isSelected.id == item.id}
              cardOnPress={() => setIsSelected({ id: item.id })}
              shippingAddress={'shippingAddress'}
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

export default ShippingAddress;
