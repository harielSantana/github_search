import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  

  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  padding: 10px;
  margin-top: 12px;
`;

export const RepositoryIcon = styled.Image`
  width: 54px;
  height: 54px;

  border-radius: 6px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.text};
  max-width: 98%;
`;
