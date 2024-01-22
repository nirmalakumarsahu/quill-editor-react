import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import Container from "./Container";

let CustomQuillEditor = () => {
  const [value, setValue] = useState("");
  const fonts = [
    "Arial, sans-serif",
    "Times New Roman, serif",
    "Courier New, monospace",
    "Georgia, serif",
  ];

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <div className="editor">
      <ReactQuill
        modules={modules}
        theme="snow"
        onChange={setValue}
        placeholder="Write your content here"
      />
      <Container>{value}</Container>
    </div>
  );
};

export default CustomQuillEditor;
