import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(newInvestmentParams) {
    setInvestmentParams(newInvestmentParams);
  }

  return (
    <>
      <Header />
      <InputArea investmentParams={investmentParams} onChange={handleChange} />
      <Table investmentParams={investmentParams} />
    </>
  );
}

export default App;
