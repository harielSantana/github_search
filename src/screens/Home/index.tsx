import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, View } from 'react-native';
import GithubSVG from '../../assets/icon-header.svg';
import { SearchInput } from '../../components/Input/Search';

import { Container, Header } from './styles';

import { Card, DataProps } from '../../components/Card';
import { api } from '../../service/api';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const newData: DataProps = {
  id: "id_21nj3ds",
  image_url: "https://avatars.githubusercontent.com/u/69631?v=4",
  repository: 'facebook/react',
  description:
    "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
}

export function Home() {
  const [search, setSearch] = useState();
  const [data, setData] = useState(undefined);

  async function handleFindRepository(search) {
    try {
      const request = await api.get(`/repos/${search}`)
      console.log(request)
      setData(request)
    } catch (error) {
      console.log(error.mesage)
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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
          <Card data={newData} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}