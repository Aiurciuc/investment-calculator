import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ investmentParams }) => {
  const investmentResults = calculateInvestmentResults(investmentParams);
  console.log(investmentResults);

  return (
    <table id="result">
      <thead>
        <th>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </th>
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
                  result.interest +
                    (investmentResults[index - 1]?.interest ?? 0)
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
