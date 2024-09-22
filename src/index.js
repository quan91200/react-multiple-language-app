import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EN, VN } from './translations'
import i18next from "i18next"
import { I18nextProvider } from 'react-i18next'
import './index.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: EN,
    },
    vn: {
      global: VN,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
