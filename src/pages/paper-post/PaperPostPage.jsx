import FadeInOut from "../../components/animation/FadeInOut";
import PaperPostForm from "./components/paper-form/PaperPostForm";

function PaperPostPage() {
  return (
    <div className="page-wrapper dark-paper-post">
      <FadeInOut>
        <PaperPostForm />
      </FadeInOut>
    </div>
  );
}

export default PaperPostPage;
