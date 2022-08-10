
import { Routes, Route } from 'react-router-dom'
import './index.scss';
import { HomePage, AccPage } from './pages'
import HomeLayer from './layers/homeLayer';
import MainLayer from './layers/mainLayer';

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
          <MainLayer>
            <AccPage />
          </MainLayer>
        } />
      </Routes>
    </div>
  );
}

export default App;
