export interface IssueProps {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export interface RepositoryProps {
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
