/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Container from '../../../components/Container';
import AuthHeader from '../../../components/AuthHeader';
import { AppColors, responsiveHeight, responsiveWidth } from '../../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../../../components/AppTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const messages = [
  {
    id: '1',
    text: 'If you have any questions, please contact us for assistance.',
  },
  {
    id: '2',
    text: 'How are you doing today? Please tell us how we can assist you',
  },
  {
    images: [
      { uri: 'https://picsum.photos/200/200?1' },
      { uri: 'https://picsum.photos/200/200?2' },
      { uri: 'https://picsum.photos/200/200?3' },
    ],
  },
];

const images = [
  { id: '1', uri: 'https://picsum.photos/200/200?1' },
  { id: '2', uri: 'https://picsum.photos/200/200?2' },
  { id: '3', uri: 'https://picsum.photos/200/200?3' },
  { id: '4', uri: 'https://picsum.photos/200/200?4' },
  { id: '5', uri: 'https://picsum.photos/200/200?5' },
  { id: '6', uri: 'https://picsum.photos/200/200?6' },
  { id: '7', uri: 'https://picsum.photos/200/200?7' },
  { id: '8', uri: 'https://picsum.photos/200/200?8' },
];

const Support = () => {
  const [isShowImages, setIsShowImages] = useState(false);
  const nav = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1, backgroundColor: AppColors.WHITE }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.WHITE }}>
        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
          <AuthHeader
            centerText={'Support'}
            isChange={true}
            centerTextFontBold={true}
          />

          <View style={styles.container}>
            {/* Messages */}
            <View style={styles.messagesContainer}>
              {messages.map(msg => (
                <View key={msg.id} style={styles.messageWrapper}>
                  {!msg.images?.length && (
                    <>
                      <Text style={styles.avatar}>BM</Text>
                      <View style={styles.bubble}>
                        <Text style={styles.messageText}>{msg.text}</Text>
                      </View>{' '}
                    </>
                  )}
                  {msg?.images?.map(item => (
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                      <View>
                        <Image
                          source={{ uri: item.uri }}
                          style={styles.imageThumb}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              ))}
            </View>

            {/* Input bar */}
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <View style={styles.inputBar}>
                <TouchableOpacity
                  onPress={() => setIsShowImages(!isShowImages)}
                >
                  <Ionicons
                    name={isShowImages ? 'chevron-down' : 'camera-outline'}
                    size={22}
                    color="#000"
                  />
                </TouchableOpacity>
                <AppTextInput
                  inputPlaceHolder={'Write a message'}
                  borderBottomWidth={1}
                  inputWidth={70}
                />
                <TouchableOpacity>
                  <Ionicons name="send" size={22} color="#1E90FF" />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              {/* Image actions */}
              {isShowImages && (
                <View style={styles.actionsRow}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => nav.navigate('CaptureImage')}
                  >
                    <Ionicons name="camera-outline" size={24} />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {isShowImages && (
              <View>
                {/* Image grid */}
                <FlatList
                  data={images}
                  numColumns={4}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <Image
                      source={{ uri: item.uri }}
                      style={styles.imageThumb}
                    />
                  )}
                  contentContainerStyle={{ paddingBottom: 20 }}
                />
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    padding: 10,
    flexGrow: 0,
  },
  messageWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#ddd',
    textAlign: 'center',
    lineHeight: 35,
    marginRight: 8,
    fontWeight: '600',
  },
  bubble: {
    backgroundColor: '#dbeafe', // light blue
    borderRadius: 8,
    padding: 10,
    maxWidth: '85%',
  },
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
  },
  actionsRow: {
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 0,
  },
  iconButton: {
    padding: 6,
    paddingHorizontal: 0,
  },
  imageThumb: {
    width: responsiveWidth(22),
    height: responsiveHeight(10),
    margin: 2,
  },
});
