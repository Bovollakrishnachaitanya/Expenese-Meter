import React from 'react';

import  Header from './components/Header';
import Balance from './components/Balance';
import IncomExpense from './components/IncomExpense';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        < Balance />
        < IncomExpense />
        < Transaction />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
