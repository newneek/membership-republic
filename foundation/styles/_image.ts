import { StyleSheet } from 'react-native';

const resize = StyleSheet.create({
  cover: { resizeMode: 'cover' },
  contain: { resizeMode: 'contain' },
  stretch: { resizeMode: 'stretch' },
  repeat: { resizeMode: 'repeat' },
  center: { resizeMode: 'center' },
});

export default { ...resize };
