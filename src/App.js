import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  return (
    <div>
      <Input message={input} onTyped={(text) => setInput(text)} />

      <Button
        input={input}
        messages={messages}
        sendMessages={(newMessages) => setMessages(newMessages)}
      />
      <div>{JSON.stringify(messages)}</div>
      <div>
        {messages.map((message) => {
          return (
            <div>
              <div>{message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
