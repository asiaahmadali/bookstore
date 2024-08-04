import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";
import SwiPer from "./Swiper";
function Search() {
  const [search, setSearch] = useState("");
  const [booksData, setBooksData] = useState([]);

  const SearchBook = (e) => {
    if (e.key === "Enter") {
      const apidata = axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyAQbMjjErLzuM2G-YaK1BUUON-rzMSmj2Q" +
          "&maxResults=40"
      );
      apidata
        .then((res) => {
          setBooksData(res.data.items);
          console.log(booksData);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="p-4 flex items-center justify-center gap-2">
        <div>
          <h2 className="font-medium text-2xl m-2">Search your desired book</h2>

          <div className="flex justify-between border-2 border-gray-500 p-2 rounded-lg w-[280px]">
            <input
              type="text"
              placeholder="Search...."
              className="outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={SearchBook}
            />
            <FaSearch className="w-[20px] h-[20px] cursor-pointer"></FaSearch>
          </div>
        </div>
      </div>
      <SwiPer></SwiPer>
      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 gap-4 w-[80%] md:grid-cols-2 lg:grid-cols-4">
          {<Card booksdata={booksData}></Card>}
        </div>
      </div>
    </>
  );
}

export default Search;
