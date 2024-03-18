import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Component/Global/Store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'



let persistStor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <Provider store={store}>
    <PersistGate loading={null} persistor={persistStor}>
        <App />
    </PersistGate>
   </Provider>
  </React.StrictMode>,
);
