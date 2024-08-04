import ItemInfo from "./Components/ItemInfo";
import { Routes, Route } from "react-router-dom";
import BookStore from "./Components/BookStore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookStore></BookStore>}></Route>
        <Route path="/itemInfo" element={<ItemInfo></ItemInfo>}></Route>
      </Routes>
    </>
  );
}

export default App;
