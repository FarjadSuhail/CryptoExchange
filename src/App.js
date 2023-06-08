import './App.css';
// import MyApp from './classComponent/myApp.jsx';
//import MyApp from './functionalComponent/MyApp.jsx';
import MyApp from './Components/MyApp';
// import MyApp2 from './Components/MyApp2';
import Footer from './Components/Footer';
import Login from './Components/Login';
import RouterFile from './Components/RouterFile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MyApp /> */}
      {/* <MyApp2 /> */}
      {/* <RouterFile /> */}
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/about" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
