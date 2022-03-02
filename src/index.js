import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import "./styles/globals.scss"
import { BlogProvider } from './redux/context';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BlogProvider>
        <App />
      </BlogProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
