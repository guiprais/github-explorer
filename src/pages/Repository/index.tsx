/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repositories {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

export const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repositories | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

    // async function loadData() {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);

    //   console.log(repository);
    //   console.log(issues);
    // }

    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Eplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};
