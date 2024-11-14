import Signup from './LoginForm/Signup';
import Login from './LoginForm/Login'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Groups from './Pages/Groups'
import Friends from './Pages/Friends'
import AddExpensePage from './Components/AddExpense';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path='/Home' element={
          <Home/>
          }/>
        <Route path='/Groups' element={
          <Groups/>
          }/>
        <Route path='/Friends' element={
          <Friends/>
          }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
