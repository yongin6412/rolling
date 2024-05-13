import FadeInOut from "../../components/animation/FadeInOut";
import MessagePostForm from "./components/MessagePostForm";

function MessagePostPage() {
  return (
    <div className="page-wrapper">
      <FadeInOut>
        <MessagePostForm />
      </FadeInOut>
    </div>
  );
}

export default MessagePostPage;
