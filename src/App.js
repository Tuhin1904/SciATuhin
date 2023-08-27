import "./index.css"
import Team from './Routes/Team';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Team/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    </>
  );
}

export default App;
