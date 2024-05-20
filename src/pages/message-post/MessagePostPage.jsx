import FadeInOut from "../../components/animation/FadeInOut";
import MessagePostForm from "./components/message-form/MessagePostForm";

function MessagePostPage() {
  return (
    <div className="page-wrapper dark-message-form">
      <FadeInOut>
        <MessagePostForm />
      </FadeInOut>
    </div>
  );
}

export default MessagePostPage;
