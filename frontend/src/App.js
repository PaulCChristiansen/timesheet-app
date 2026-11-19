import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/timesheet")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div>
      <h1>Timesheet Frontend (React)</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
