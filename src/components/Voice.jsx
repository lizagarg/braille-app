import React from "react";
import { useNavigate } from "react-router-dom";

export function Voice() {
  const navigate = useNavigate();

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);  
  };

  const startListening = () => {
    const speechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!speechReco) {
      alert("Your browser does not support speech recognition");
      speak("Sorry, your browser does not support speech recognition.");
      return;
    }

    const reco = new speechReco();
    reco.lang = "en-US";

    reco.onresult = (e) => {
      const command = e.results[0][0].transcript.toLowerCase();
      if (!command) {
        // If command is empty, ignore it
        console.log("Empty speech detected, ignoring...");
        return;
      }
      if (command.includes("home")) {
        speak("Navigating to Home Page");
        navigate("/home");
      } else if (command.includes("contact")) {
        speak("Opening Contact Page");
        navigate("/contact");
      } else if (command.includes("upload")) {
        speak("Opening Upload Section");
        navigate("/upload");
      } else if (command.includes("book")) {
        speak("Opening Braille Book Library");
        navigate("/book");
      } else if (command.includes("news")) {
        speak("Opening Braille News");
        navigate("/news");
      } else if (command.includes("click")) {
        speak("Clicking the button");
        navigate("/upload");
      } else {
        speak("Sorry, I didn't understand the command.");
        alert("Sorry, I didn't understand.");
      }
    };

    reco.start();
  };

  const handleButtonClick = () => {
    speak("I am listening. Please say a command.");
    setTimeout(() => {
      startListening();
    }, 2000); // Wait 2 seconds, THEN start listening
  };

  return (
    <div className="flex justify-center mt-8">
      <button 
        onClick={handleButtonClick} 
        className="px-10 py-3 font-small bg-blue-500 rounded-md hover:bg-blue-700 text-white"
      >
        Speak Command
      </button>
    </div>
  );
}
