import React, { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";

const ViewMarks = () => {
  const [marksData, setMarksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/marks") // Update backend route if needed
      .then((res) => {
        setMarksData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch marks");
        setLoading(false);
      });
  }, []);

  return (
    <div className="form-container">
      <h2>All Student Marks</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error-msg">{error}</p>}

      {!loading && marksData.length === 0 && (
        <p className="error-msg">No marks data found.</p>
      )}

      {!loading && marksData.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Marks</th>
              <th style={thStyle}>Grade</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((mark, index) => (
              <tr key={index}>
                <td style={tdStyle}>{mark.name}</td>
                <td style={tdStyle}>{mark.subject}</td>
                <td style={tdStyle}>{mark.marks}</td>
                <td style={tdStyle}>{mark.grade || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

export default ViewMarks;
