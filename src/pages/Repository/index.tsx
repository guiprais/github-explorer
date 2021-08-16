import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

export const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <div>
      <h1>Repository: {params.repository}</h1>
    </div>
  );
};
