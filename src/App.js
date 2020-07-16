import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Redbutton from "./components/Redbutton";
import Bluebutton from "./components/Bluebutton";
import "./tailwind.css";

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
      <div>
        {messages.map((message) => {
          return (
            <div>
              <div>{message}</div>
            </div>
          );
        })}
      </div>
      <br />
      <Bluebutton />
      <br />
      <Redbutton />
    </div>
  );
}

export default App;
