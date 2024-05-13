import FadeInOut from "../../components/animation/FadeInOut";
import PaperPostForm from "./components/PaperPostForm";

function PaperPostPage() {
  return (
    <div className="page-wrapper">
      <FadeInOut>
        <PaperPostForm />
      </FadeInOut>
    </div>
  );
}

export default PaperPostPage;
