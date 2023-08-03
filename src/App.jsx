import "./App.css";
import Home from './views/Home';
import Details from './views/Details';
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

{/* <GridExample key={puppy.id} puppy={puppy} /> */}