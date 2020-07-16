import React from "react";

export default function Button({ sendMessages, messages, input }) {
  return (
    <div>
      <button
        onClick={() => {
          sendMessages([...messages, input]);
        }}
      >
        Envoyez
      </button>
    </div>
  );
}
