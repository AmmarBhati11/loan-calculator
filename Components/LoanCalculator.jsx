import { useState } from 'react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [termYears, setTermYears] = useState('');
  const [emiDetails, setEmiDetails] = useState([]);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const months = parseInt(termYears) * 12;
    const monthlyRate = annualRate / 12 / 100;

    const calculatedEMI = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                          (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(calculatedEMI.toFixed(2));

    let balance = principal;
    let breakdown = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalComponent = calculatedEMI - interest;
      balance -= principalComponent;

      breakdown.push({
        month: i,
        interest: interest.toFixed(2),
        principal: principalComponent.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00"
      });
    }

    setEmiDetails(breakdown);
  };

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded shadow w-full">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">Loan Calculator</h2>
      <div className="space-y-3">
        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded cursor-pointer"
        />
        <input
          type="number"
          placeholder="Interest Rate (Annual %)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border rounded cursor-pointer"
        />
        <input
          type="number"
          placeholder="Loan Term (in years)"
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          className="w-full p-2 border rounded cursor-pointer"
        />
        <button onClick={calculateEMI} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
          Calculate EMI
        </button>
      </div>

      {emi && (
        <>
          <div className="mt-4 font-semibold text-gray-800 dark:text-white">
            Monthly EMI: ₹{emi}
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm table-auto border-collapse min-w-[500px]">
              <thead className="bg-gray-100 dark:bg-gray-700 text-left">
                <tr>
                  <th className="p-2 border">Month</th>
                  <th className="p-2 border">Principal</th>
                  <th className="p-2 border">Interest</th>
                  <th className="p-2 border">Balance</th>
                </tr>
              </thead>
              <tbody>
                {emiDetails.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                    <td className="p-2 border">{item.month}</td>
                    <td className="p-2 border">₹{item.principal}</td>
                    <td className="p-2 border">₹{item.interest}</td>
                    <td className="p-2 border">₹{item.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
