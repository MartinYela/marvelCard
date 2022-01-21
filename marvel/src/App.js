import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Header from './pages/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/pokemon/:id'>

        </Route>
        <Route path='/'>
          <Landing></Landing>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
