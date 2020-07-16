import React from "react";

export default function Input({onTyped,message}) {
    
  return (
    <div>
      <input 
        value={message}
        onChange={e=> onTyped(e.target.value)}
      ></input>
    </div>
  );
}
