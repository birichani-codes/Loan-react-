import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const LoanResults = ({ loanResultDTO }) => {
  useEffect(() => {
    if (loanResultDTO) {
      const ctx = document.getElementById('amortizationChart').getContext('2d');

      // Destroy the chart instance if it exists
      if (window.amortizationChart) {
        window.amortizationChart.destroy();
      }

      // Create a new chart instance
      window.amortizationChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: loanResultDTO.periods, // Periods (e.g., 1, 2, 3, ...)
          datasets: [
            {
              label: 'Principal Payments',
              data: loanResultDTO.principalPayments,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
            {
              label: 'Interest Payments',
              data: loanResultDTO.interestPayments,
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Period',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Amount',
              },
            },
          },
        },
      });
    }
  }, [loanResultDTO]);

  if (!loanResultDTO) {
    return <p>Loading loan results...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Loan Results</h1>

      {/* Loan Summary */}
      <div className="mt-4">
        <h3>Payment Per Period: {loanResultDTO.paymentPerPeriod}</h3>
        <h3>Total Payments: {loanResultDTO.totalPayments}</h3>
        <h3>Total Interest: {loanResultDTO.totalInterest}</h3>
      </div>

      {/* Amortization Schedule Table */}
      <h4 className="mt-5">Amortization Schedule</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Period</th>
            <th>Beginning Balance</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Ending Balance</th>
          </tr>
        </thead>
        <tbody>
          {loanResultDTO.amortizationEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.period}</td>
              <td>{entry.beginningBalance}</td>
              <td>{entry.interest}</td>
              <td>{entry.principal}</td>
              <td>{entry.endingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart.js Amortization Graph */}
      <h4 className="mt-5">Amortization Graph</h4>
      <canvas id="amortizationChart" width="400" height="200"></canvas>
    </div>
  );
};

export default LoanResults;
