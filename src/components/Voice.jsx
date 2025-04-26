import React from "react";
import { useNavigate } from "react-router-dom";

export function Voice() {
  const navigate= useNavigate();
  const startListening=()=> {
    const speechReco= window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!speechReco) {
        alert("Your browser does not support speech recognition");
        return;
    }
    const reco= new speechReco;
    reco.lang="en-US";
    reco.onresult=(e)=>{
        const command= e.results[0][0].transcript.toLowerCase();
        if (command.includes("home")) {
            navigate("/home");
          } else if (command.includes("contact")) {
            navigate("/contact");
          } else if (command.includes("upload")) {
            navigate("/upload");
          } else if (command.includes("book")) {
            navigate("/book");
          } else if (command.includes("news")) {
            navigate("/news");
          } else {
            alert("Sorry, I didn't understand.");
          }
    };
    reco.start();
  }

  return (
    <div>
      <button onClick={startListening} className="px-10 py-3 font-small">
         Speak Command
      </button>
    </div>
  );
}
