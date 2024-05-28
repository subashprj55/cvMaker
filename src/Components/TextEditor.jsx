import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
    }),
    []
  );
  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={5}
        onBlur={(newContent) => setContent(newContent)}
        config={config}
      />
    </>
  );
};

export default TextEditor;
