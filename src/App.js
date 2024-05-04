import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PaperListPage from "./pages/PaperListPage/PaperListPage";
import PaperPostPage from "./pages/PaperPostPage/PaperPostPage";
import MyPaperPage from "./pages/MyPaperPage/MyPaperPage";
import PaperEditPage from "./pages/PaperEditPage/PaperEditPage";
import MessagePostPage from "./pages/MessagePostPage/MessagePostPage";
import GlobalHeader from "./components/Layout/GlobalHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalHeader isCreateButton={true} />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="list" element={<PaperListPage />} />
            <Route path="post">
              <Route index element={<PaperPostPage />} />
              <Route path=":id" element={<MyPaperPage />} />
              <Route path=":id/edit" element={<PaperEditPage />} />
              <Route path=":id/message" element={<MessagePostPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
