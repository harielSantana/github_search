import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};

  padding: 0 30px;  
`;

export const Header = styled.View`
  width: 100%;
  padding-top: ${RFValue(50)}px;

  align-items: center;

`;

