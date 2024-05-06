import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function ContentEditor({ name, onChange }) {
  const editorRef = useRef();

  const handleContentChange = () => {
    const newContent = editorRef.current.getInstance().getMarkdown();
    onChange(name, newContent);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        initialValue="메시지를 입력하세요."
        placeholder="메시지를 입력하세요."
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
