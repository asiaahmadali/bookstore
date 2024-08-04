import Home from "./Home";
import About from "./About";
import Search from "./Search";

function BookStore() {
  return (
    <>
      <div className="p-2">
        <Home></Home>
        <About></About>
        <Search></Search>
      </div>
    </>
  );
}

export default BookStore;
