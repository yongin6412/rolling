import { useState, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function ContentEditor({ name, onChange }) {
  const [content, setContent] = useState("");
  const editorRef = useRef();

  const handleContentChange = () => {
    const newContent = editorRef.current.getInstance().getMarkdown();
    setContent(newContent);
    onChange(name, content);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        initialValue=" "
        placeholder="Write your message to recipient."
        previewStyle="tab"
        height="260px"
        hideModeSwitch={true}
        useCommandShortcut={true}
        toolbarItems={[
          ["bold", "italic"],
          ["ul", "ol"],
        ]}
        onChange={handleContentChange}
      />
    </div>
  );
}

export default ContentEditor;
