import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveFontSize, responsiveWidth } from '../../../utils';
import Stepper from '../../../components/Stepper';
import LineBreak from '../../../components/LineBreak';
import { AppImages } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import MyCartCard from '../../../components/MyCartCard';
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

const FinalShipping = () => {
  const nav = useNavigation();
  const [step, setStep] = useState(1);

  return (
    <Container>
      <View style={{ paddingHorizontal: responsiveWidth(4) }}>
        <AuthHeader
          centerText={'Shipping'}
          isChange={true}
          centerTextFontBold={true}
        />
        <LineBreak space={4} />
        <Stepper currentStep={step} />
        <LineBreak space={1} />
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingHorizontal: responsiveWidth(4) }}
        renderItem={({ item }) => (
          <MyCartCard
            item={item}
            buttonOnPress={() => nav.navigate('Rating')}
            orderDetail={step === 1 ? 'orderDetail' : false}
            finalShipping={step === 3}
          />
        )}
      />
      <LineBreak space={5} />
      {step === 1 && (
        <View style={{ paddingHorizontal: responsiveWidth(4) }}>
          <AppButton
            title={'Shipping'}
            textSize={2}
            handlePress={() => setStep(3)}
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
      )}
    </Container>
  );
};

export default FinalShipping;
