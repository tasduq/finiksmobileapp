import {Dimensions, Platform, PixelRatio} from 'react-native';
import FiniksApi from '../src/api/api';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const wp = percentage => {
  return SCREEN_WIDTH * (percentage / 100);
};

export const hp = percentage => {
  return SCREEN_HEIGHT * (percentage / 100);
};

// based on iphone 13 pro scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const Axiosfetcher = (...args) =>
  FiniksApi.get(...args).then(res => res.data);

export const Montserrat = 'Montserrat';
export const MontserratBold = 'Montserrat-Bold';
export const MontserratSemiBold = 'Montserrat-SemiBold';
export const MontserratMedium = 'Montserrat-Medium';
export const MontserratExtraBold = 'Montserrat-ExtraBold';
