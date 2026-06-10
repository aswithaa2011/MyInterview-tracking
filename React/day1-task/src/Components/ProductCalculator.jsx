import { useState } from "react";

const StudentGradeSystem = () => {
  const [studentName, setStudentName] = useState("");
  const [mark, setMark] = useState("");
  const [result, setResult] = useState("");

  const calculateGrade = () => {
    const score = Number(mark);

    const grade =
      score >= 90
        ? "Grade A"
        : score >= 75
        ? "Grade B"
        : score >= 50
        ? "Grade C"
        : "Fail";

    setResult(`${studentName} : ${grade}`);
  };

  return (
    <div>
      <h2>Student Grade System</h2>

      <div>
        <label>Student Name: </label>
        <input
          type="text"
          value={studentName}
          onChange={({ target: { value } }) => setStudentName(value)}
        />
      </div>

      <br />

      <div>
        <label>Mark: </label>
        <input
          type="number"
          value={mark}
          onChange={({ target: { value } }) => setMark(value)}
        />
      </div>

      <br />

      <button onClick={calculateGrade}>Get Grade</button>

      {result && <h3>Result: {result}</h3>}
    </div>
  );
};

export default StudentGradeSystem;