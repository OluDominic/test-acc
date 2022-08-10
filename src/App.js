
import { Routes, Route } from 'react-router-dom'
import './index.scss';
import { HomePage, AccPage } from './pages'
import HomeLayer from './layers/homeLayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          <HomeLayer>
            <HomePage />
          </HomeLayer>
        } />
        <Route path="newaccount" element={
          <AccPage />
        } />
      </Routes>
    </div>
  );
}

export default App;
