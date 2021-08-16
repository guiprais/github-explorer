import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/index';
import { Repository } from '../pages/Repository/index';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);
