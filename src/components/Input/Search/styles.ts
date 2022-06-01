import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather, Ionicons } from "@expo/vector-icons";


export const Container = styled.View`
  margin-top: ${RFValue(38)}px;
`;

export const HeaderText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};

  margin-bottom: 12px;
`;

export const TextContainer = styled.TextInput`
  border-radius: 6px;

  background-color:${({ theme }) => theme.colors.gray};
  padding: 12px 14px;
`;


export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
    
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  margin-bottom: 18px;
`;

export const Ionics = styled(Ionicons)`
  margin: 15px 17px;
`;

export const Input = styled.TextInput`
  margin-left: 20px;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.black}
`;


