import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ investmentParams }) => {
  const investmentResults = calculateInvestmentResults(investmentParams);
  console.log(investmentResults);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result, index) => {
          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>
                {formatter.format(
                  result.valueEndOfYear -
                    result.annualInvestment * result.year -
                    investmentParams.initialInvestment
                )}
              </td>
              <td>
                {formatter.format(
                  investmentParams.initialInvestment +
                    investmentParams.annualInvestment * result.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
