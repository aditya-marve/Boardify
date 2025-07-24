import React, { useEffect, useState } from "react";
import axios from "axios";
import "../form.css";

const Performance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/performance") // Update with your real API if different
      .then((response) => {
        setPerformanceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching performance data:", error);
      });
  }, []);

  return (
    <div className="form-container">
      <h2>Student Performance</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Subjects</th>
            <th>Average Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.length > 0 ? (
            performanceData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.totalSubjects}</td>
                <td>{entry.averageMarks}</td>
                <td>{entry.averageMarks >= 40 ? "Pass" : "Fail"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No performance data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Performance;
