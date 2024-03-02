//Internal 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
// import './App.css';

//Pages
// import Dashboard from './Components/Test';
import PricingPage from './Pages/Pricing';

function App() {


  return (
    // <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/" element={<PricingPage />} />
        {/* <Route path="/results" element={<Analytics/>} /> */}
      </Routes>
    </BrowserRouter>
    // </StateProvider>
  );
}

export default App;