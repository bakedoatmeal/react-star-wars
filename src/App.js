import logo from './logo.svg';
import './App.css';
import Home from './Home';
import StarWars from './StarWars';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import Display from './Display';

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Home />
      <StarWars />
      <Display />
    </Provider>
  );
}

export default App;
