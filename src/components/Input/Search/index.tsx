import React from 'react';

import { useTheme } from 'styled-components';
import * as Component from './styles';

export function SearchInput() {
  const theme = useTheme()

  return (
    <Component.Container>
      <Component.HeaderText>Search</Component.HeaderText>
      <Component.Wrapper>

        <Component.Input placeholder="Search for a repository... " />
        <Component.Ionics
          name="search"
          size={24}
          color={theme}
        />
      </Component.Wrapper>
    </Component.Container>
  );
}

export function Search() {
}