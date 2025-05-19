import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import grid from '../src/assets/grid.png'


function App() {
  return (
    <div className="App fixed overflow-hidden h-screen w-screen">
      <img src={grid} alt="Grid Background" className="absolute w-full h-full object-cover pointer-events-none"/>
      {/* Gradient Blobs */}
        <div className="absolute rounded-full float filter blur-3xl opacity-60" style={{background: "rgba(19, 70, 151, 0.85)",width: "300px",height: "300px",top: "5%",left: "2%",mixBlendMode: "screen",}}></div>
        <div className="absolute rounded-full float-reverse filter blur-3xl opacity-60" style={{ background: "rgba(19, 151, 30, 0.85)", width: "300px", height: "300px",top: "60%",right: "5%",mixBlendMode: "screen",}}></div>
        <div className="absolute rounded-full filter blur-3xl float opacity-60" style={{ background: "rgba(151, 19, 133, 0.73)", width: "200px", height: "200px",top: "50%",left: "45%",mixBlendMode: "screen",}}></div>
      <Dashboard />
      
    </div>
  );
}

export default App;
