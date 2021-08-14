import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/72233319?v=4"
            alt="Gui Prais"
          />
          <div>
            <strong>guiprais/github-explorer</strong>
            <p>Github Explorer made during GoStack bootcamp</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/72233319?v=4"
            alt="Gui Prais"
          />
          <div>
            <strong>guiprais/github-explorer</strong>
            <p>Github Explorer made during GoStack bootcamp</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/72233319?v=4"
            alt="Gui Prais"
          />
          <div>
            <strong>guiprais/github-explorer</strong>
            <p>Github Explorer made during GoStack bootcamp</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
