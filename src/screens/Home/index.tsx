import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { WorkSans_500Medium, WorkSans_600SemiBold, WorkSans_700Bold } from '@expo-google-fonts/work-sans'

import AppLoading from 'expo-app-loading';

import GithubSVG from '../../assets/icon-header.svg';
import { SearchInput } from '../../components/Input/Search';

import { Container, Header } from './styles';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

export function Home() {
  const [search, setSearch] = useState();

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header>
        <GithubSVG width={40} height={40} />
      </Header>

      <SearchInput />
    </Container>
  )
}