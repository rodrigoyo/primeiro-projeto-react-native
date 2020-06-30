import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 160px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const UserAvatar = styled.Image`
  /* width: 186px;
  height: 186px; */

  width: 134px;
  height: 134px;
  border-radius: 98px;
  align-self: center;
`;
