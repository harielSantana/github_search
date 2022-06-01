import React, { Component } from 'react';
import { Container } from './styles';

interface RepositoryProps {
  id: number,
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  forks_count: number;
  stargazers_count: number;
  issues: IssueProps[]
  issues_url: string;
  open_issues_count: number;
}

export function Card({ data }) {
  return (
    <Container>
    </Container>
  );
}