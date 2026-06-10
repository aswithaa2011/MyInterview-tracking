import React, { useState } from "react";

function EmployeeSalaryBonus() {
  const [employeeName, setEmployeeName] = useState("");
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);

  const calculateBonus = (e) => {
    e.preventDefault();

    const sal = Number(salary);
    let calculatedBonus = 0;

    if (sal > 30000) {
      calculatedBonus = 5000;
    } else if (sal > 20000) {
      calculatedBonus = 3000;
    } else {
      calculatedBonus = 1000;
    }

    setBonus(calculatedBonus);
    setFinalSalary(sal + calculatedBonus);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Salary Bonus Calculator</h2>

      <form onSubmit={calculateBonus}>
        <div>
          <label>Employee Name:</label>
          <br />
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Salary:</label>
          <br />
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Calculate</button>
      </form>

      {finalSalary > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result</h3>
          <p><strong>Employee Name:</strong> {employeeName}</p>
          <p><strong>Salary:</strong> ₹{salary}</p>
          <p><strong>Bonus:</strong> ₹{bonus}</p>
          <p><strong>Final Salary:</strong> ₹{finalSalary}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeSalaryBonus;