import "./styles/global.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Thread from "./pages/Thread";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="thread/:id" element={<Thread />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
