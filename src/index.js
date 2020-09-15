import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes/routes'
import store from './store'
import { history } from './routes/urlLocations'
import ruDictionary from './locales/ru'
import enDictionary from './locales/en'
import './index.css'

const APPDictionary = {
  ru: ruDictionary,
  en: enDictionary
}
let lang = window.localStorage.getItem('lang')
if (!lang) {
  window.localStorage.setItem('lang', 'ru')
  lang = window.localStorage.getItem('lang')
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={lang} messages={APPDictionary[lang]}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
