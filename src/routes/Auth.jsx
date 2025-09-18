import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './../screens/auth/Splash';
import OnBoarding from './../screens/auth/OnBoarding';
import Welcome from './../screens/auth/Welcome';
import EnterEmail from './../screens/auth/EnterEmail';
import ConfirmPassword from './../screens/auth/ConfirmPassword';
import FillYourDetails from './../screens/auth/FillYourDetails';
import UploadAvatar from './../screens/auth/UploadAvatar';
import Gallery from './../screens/auth/Gallery';
import ChooseYourAvatar from './../screens/auth/ChooseYourAvatar';
import EditYourAvatar from './../screens/auth/EditYourAvatar';
import ForgotPassword from './../screens/auth/ForgotPassword';
import EmailVerification from './../screens/auth/EmailVerification';
import NewPassword from './../screens/auth/NewPassword';
const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
      <Stack.Screen name="FillYourDetails" component={FillYourDetails} />
      <Stack.Screen name="UploadAvatar" component={UploadAvatar} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="ChooseYourAvatar" component={ChooseYourAvatar} />
      <Stack.Screen name="EditYourAvatar" component={EditYourAvatar} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default Auth;
