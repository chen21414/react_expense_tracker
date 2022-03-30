import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, 
       Switch, 
       Route} from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header';
import AddExpense from './pages/add-expense';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/add-expense' component={AddExpense}/>
      </Switch>
      <div>Footer</div>
    </Router>
  );
}

export default App;
