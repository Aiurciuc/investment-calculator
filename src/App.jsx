import Header from "./components/Header";
import InputArea from "./components/InputArea";
import { useState } from "react";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initial: 0,
    annual: 0,
    expected: 0,
    duration: 0,
  });

  function handleChange(newInvestmentParams) {
    setInvestmentParams(newInvestmentParams);
    console.log(investmentParams)
  }

  return (
    <>
      <Header />
      <InputArea investmentParams={investmentParams} onChange={handleChange} />
    </>
  );
}

export default App;
