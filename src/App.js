import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { setCurrentUser, setUserAuth } from './redux/user';
import NavRoutes from './routes/NavRoutes';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { isAuth } = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
        <NavRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
