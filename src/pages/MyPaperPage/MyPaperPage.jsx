import { useParams } from "react-router-dom";
import MyPaperCardList from "./components/MyPaperCardList";

function MyPaperPage() {
  const { id } = useParams();
  return (
    <div className="page-wrapper">
      <MyPaperCardList id={id} />
    </div>
  );
}

export default MyPaperPage;
