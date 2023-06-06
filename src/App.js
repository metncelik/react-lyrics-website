import { BrowserRouter,Route, Routes,  } from "react-router-dom";
import Home from './Screens/Home';
import Navbar from "./Components/Navbar";
import Lyrics from "./Screens/Lyrics";
import Admin from "./Screens/Admin";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/:id" element={<Lyrics/>}/>
          <Route path="/admin" element={<Admin/>}/>
          
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
