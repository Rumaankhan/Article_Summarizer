import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const summarize = async () => {
    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
      params: {
        url: text,
        lang: "en",
        engine: "2",
      },
      headers: {
        "x-rapidapi-key": "864ffb92c5mshafb6c0161e29c61p142481jsn1668e8274efd",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setSummary(response.data.summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 text-gray-800 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        Article Summarizer
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter the article URL"
          className="w-80 px-4 py-2 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          onChange={handleInput}
        />
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all transform hover:scale-105"
          onClick={summarize}
        >
          Summarize
        </button>
      </div>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 text-gray-700 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-teal-600">Summary</h2>
        <p className="whitespace-pre-wrap">{summary || "Your summary will appear here."}</p>
      </div>
    </div>
  );
}

export default App;
