import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemList from './pages/ItemList/ItemList';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/item-detail" component={ItemDetail} />
          <Route exact path="/item-detail:productId" component={ItemDetail} />
          <Route exact path="/item-list" component={ItemList} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
