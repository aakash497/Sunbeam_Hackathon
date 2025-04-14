import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path=''
          element={<SignIn />}
        />
        <Route
          path='signup'
          element={<SignUp />}
        />
       
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
