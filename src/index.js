import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { persistor } from './redux/store/store';
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react';
import i18n from './translation/i18n'
import { I18nextProvider } from 'react-i18next'
// import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
