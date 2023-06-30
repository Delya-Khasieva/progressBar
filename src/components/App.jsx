import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './ui/NavBar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import AdminPage from './pages/AdminPage';
import ListPage from './pages/ListPage';
import ListItemPage from './pages/ListItemPage';
import QuestionPage from './pages/QuestionPage';
import AdminListPage from './pages/AdminListPage';
import AddUserPage from './pages/AddUserPage';
import AllListsInProcess from './pages/AllListsInProcess';
import MyListsInProcess from './pages/MyListsInProcess';

export default function App({ allLists }) {
  return (
    <div className="container" style={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lists/:listId" element={<ListPage allLists={allLists} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/lists/process/all" element={<AllListsInProcess />} />
        <Route path="/admin/lists/process/:id" element={<MyListsInProcess />} />
        <Route path="/admin/lists/:id" element={<ListItemPage />} />
        <Route path="/admin/lists/:id/questions" element={<QuestionPage />} />
        <Route path="/admin/lists/my" element={<AdminListPage />} />
        <Route path="/admin/users" element={<AddUserPage />} />
      </Routes>
    </div>
  );
}
