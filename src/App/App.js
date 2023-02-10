
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from '../Routes/Routes';
import AuthProvider from '../context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
