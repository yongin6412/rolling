import FadeInOut from "../../components/animation/FadeInOut";
import PaperPostForm from "./components/PaperPostForm";

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
