import { Route, Routes } from 'react-router-dom';
import Issuepage from './pages/Issuepage';
import Layout from './components/layouts/Layout';
import IssueDetailpage from './pages/IssueDetailpage';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Issuepage />} />
          <Route path='/detail/:id' element={<IssueDetailpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
