import { useState } from "react";
import "./atoms.css";

const Filter = ({ setText }) => {
  const [inputText, setInputText] = useState("");

  const onChangeText = (e) => {
    let text = e.target.value;
    const words = text.split(" ");

    const capitalizeWords = words
      .map((word) => {
        if (words) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join(" ");

    setInputText(capitalizeWords);
  };

  return (
    <div className="input-group mb-3 input-search">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a specified full character name.."
        onChange={onChangeText}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setText(inputText)}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
