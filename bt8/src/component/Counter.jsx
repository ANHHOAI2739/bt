import { React, useState, useEffect } from "react";

function Counter() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleCount = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const words = text.split(" ");

    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    const s = setInterval(() => {
      setWordCount(wordCount);
    }, 5000);
  }, [text]);

  return (
    <div className="container">
      <div>
        <textarea
          name=""
          id=""
          cols="100"
          rows="10"
          value={text}
          onChange={handleCount}
          placeholder="Enter text.."
        ></textarea>
        <div>
          <p className="word-count">Word(s): {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
