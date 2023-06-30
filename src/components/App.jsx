import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ListPage from './pages/ListPage';
import ListItemPage from './pages/ListItemPage';
import QuestionPage from './pages/QuestionPage';
import AdminListPage from './pages/AdminListPage';
import AddUserPage from './pages/AddUserPage';
import AllListsInProcess from './pages/AllListsInProcess';
import MyListsInProcess from './pages/MyListsInProcess';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';

export default function App({ allListsProcess, allLists, user, allUsers, myLists }) {
  return (
    <div className="container" style={{ height: '100vh', width: '100vw' }}>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lists/:listId" element={<ListPage allLists={allLists} />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/admin/lists/process/all"
          element={<AllListsInProcess allListsProcess={allListsProcess} />}
        />
        <Route path="/admin/lists/process" element={<MyListsInProcess myLists={myLists} />} />
        <Route path="/admin/lists/:id" element={<ListItemPage />} />
        <Route path="/admin/lists/:id/questions" element={<QuestionPage />} />
        <Route path="/admin/lists/my" element={<AdminListPage />} />
        <Route path="/admin/users" element={<AddUserPage allUsers={allUsers} />} />
        <Route path="/main" element={<MainPage user={user} />} />
      </Routes>
    </div>
  );
}
