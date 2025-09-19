import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Container from '../../../components/Container';
import LineBreak from '../../../components/LineBreak';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import MethodCard from '../../../components/MethodCard';
import AppButton from '../../../components/AppButton';
import { AppImages } from '../../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Standard Shipping - Free',
    subTitle: '(Shipping 4-6 working days)',
  },
  { id: 2, title: 'Next day- $30', subTitle: '(Shipping 4-6 working days)' },
];

const DeliveryMethod = () => {
  const nav = useNavigation();
  const [isSelected, setIsSelected] = useState({ id: 1 });

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Delivery Method'}
          isChange={true}
          centerTextFontBold={true}
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

export default DeliveryMethod;
