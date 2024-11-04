import React, { useState } from "react";
import useLogger from "./useLogger";

function LoggerComponent() {
  const [scope, setScope] = useState("");
  const [message, setMessage] = useState("");
  const [methodType, setMethodType] = useState("log");
  const [loggedMessage, setLoggedMessage] = useState(""); // New state for submitted message

  // Call useLogger when the loggedMessage changes, which happens only on form submission
  useLogger(methodType, loggedMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update loggedMessage on submit, which will trigger useLogger
    setLoggedMessage(
      `[${scope.toUpperCase()}] ${new Date().toLocaleString()} ${message}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          maxWidth: "800px",
          border: "2px solid black",
          padding: "40px",
          boxSizing: "border-box",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Logger</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              placeholder="SCOPE"
              style={{
                flexGrow: 1,
                padding: "15px",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            />
            <select
              value={methodType}
              onChange={(e) => setMethodType(e.target.value)}
              style={{
                width: "120px",
                padding: "15px",
                fontSize: "1.2rem",
              }}
            >
              <option value="log">LOG</option>
              <option value="warn">WARN</option>
              <option value="error">ERROR</option>
              <option value="debug">DEBUG</option>
            </select>
            <button
              type="submit"
              style={{
                padding: "15px 25px",
                fontSize: "1.2rem",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.2rem",
            }}
          />
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            fontSize: "1.2rem",
            height: "200px",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>Console Output:</h4>
          <div>
            {loggedMessage} {/* Display the logged message here */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoggerComponent;
