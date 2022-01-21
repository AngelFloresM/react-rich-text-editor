import React, { useRef, SyntheticEvent, useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  const paragraphRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(
    "This is something that can be selected, entirely or just a portion of it"
  );

  const handleSelect = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const start = paragraphRef.current?.selectionStart as number;
    const end = paragraphRef.current?.selectionEnd as number;
    const selectedText = e.currentTarget.value.substring(start, end);

    if (selectedText !== "") {
      console.log(selectedText);
      const newText = text.replace(selectedText, "texto remplazado");
      setText(newText);
    }
  };

  return (
    <div className="App">
      <textarea
        ref={paragraphRef}
        onSelect={handleSelect}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setText(event.currentTarget.value)
        }
        cols={40}
        rows={5}
        value={text}
      />
    </div>
  );
}

export default App;
