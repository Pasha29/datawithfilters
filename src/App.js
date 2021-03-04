import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
import MainBlockContainer from './Components/MainBlock/MainBlockContainer';
import FiltersContainer from './Components/Filters/FiltersContainer';

function App() {
  return (
    <Provider store={store}>
    <div className={"mainWrapper"}>
      <FiltersContainer />
      <MainBlockContainer />
    </div>
    </Provider>
  );
}

export default App;
