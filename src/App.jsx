import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/CarouselEffect";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CarouselEffect />
    </>
  );
}

export default App;
