import { useParams } from "react-router-dom";
import MyPaperCardList from "./components/MyPaperCardList";
import MyPageHeader from "./myPageHeader/MyPageHeader";

function MyPaperPage() {
  const { id } = useParams();
  return (
    <>
      <MyPageHeader />
      <div className="page-wrapper">
        <MyPaperCardList id={id} />
      </div>
    </>
  );
}

export default MyPaperPage;
