import "./App.css";
import Home from './components/Home';
import Details from './components/Details';
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

{/* <GridExample key={puppy.id} puppy={puppy} /> */}