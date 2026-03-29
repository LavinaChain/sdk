import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendPrompt = async () => {
    const res = await fetch("http://localhost:5000/api/ai/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>LAVINA AI</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask LAVINA..."
      />
      <button onClick={sendPrompt}>Send</button>
      <p>{response}</p>
    </div>
  );
}
