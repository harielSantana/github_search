import React from 'react';
import { Image } from 'react-native';
import * as Component from './styles';

export interface DataProps {
  id: string;
  image_url: string;
  repository: string;
  description: string;
}

export function Card({ data }: DataProps) {
  return (
    <Component.Container>
      <Component.RepositoryIcon
        source={{ uri: data.image_url }}
      />
      <Component.TextContainer>
        <Component.Title>{data.repository}</Component.Title>
        <Component.SubTitle>{data.description}</Component.SubTitle>
      </Component.TextContainer>
    </Component.Container>
  );
}

