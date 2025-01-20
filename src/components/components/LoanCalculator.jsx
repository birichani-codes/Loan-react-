import React, { useState } from 'react';

const LoanCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTermYears: '',
    loanTermMonths: '',
    compoundFrequency: 'Annually',
    paybackFrequency: 'Monthly',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API call logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Loan Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            className="form-control"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            className="form-control"
            value={formData.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTermYears">Loan Term (Years)</label>
          <input
            type="number"
            id="loanTermYears"
            name="loanTermYears"
            className="form-control"
            value={formData.loanTermYears}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTermMonths">Loan Term (Months)</label>
          <input
            type="number"
            id="loanTermMonths"
            name="loanTermMonths"
            className="form-control"
            value={formData.loanTermMonths}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="compoundFrequency">Compound Frequency</label>
          <select
            id="compoundFrequency"
            name="compoundFrequency"
            className="form-control"
            value={formData.compoundFrequency}
            onChange={handleChange}
            required
          >
            <option value="Annually">Annually</option>
            <option value="Semi-Annually">Semi-Annually</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Monthly">Monthly</option>
            <option value="Daily">Daily</option>
            <option value="Continuously">Continuously</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paybackFrequency">Payback Frequency</label>
          <select
            id="paybackFrequency"
            name="paybackFrequency"
            className="form-control"
            value={formData.paybackFrequency}
            onChange={handleChange}
            required
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annually">Annually</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Calculate</button>
      </form>
    </div>
  );
};

export default LoanCalculator;
