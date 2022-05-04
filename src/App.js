import logo from './logo.svg';
import './App.css';
import Home from './Home';
import StarWars from './StarWars';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Home />
      <StarWars />
    </Provider>
  );
}

export default App;
