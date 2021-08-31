import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import CartCheckout from './components/CartCheckout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route path='/cart' exact component={CartCheckout} />
          <Route path='/payment' exact>Complete the payment process</Route>
          <Route>404 Not Found!!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
