import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Redbutton from "./components/Redbutton";
import Bluebutton from "./components/Bluebutton";
import "./tailwind.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInverted, setIsInverted] = useState(false);
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
      <Bluebutton
        blueColor={isInverted}
        setBlueColor={(newColor) => setIsInverted(!newColor)}
      />
      <br />
      <Redbutton
        redColor={isInverted}
        setRedColor={(newColor) => setIsInverted(!newColor)}
      />
    </div>
  );
}

export default App;
