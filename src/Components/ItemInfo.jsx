import { useLocation } from "react-router-dom";

function ItemInfo() {
  const location = useLocation();
  const { bookItem } = location.state;

  // item information
  let imgSrc =
    bookItem.volumeInfo.imageLinks &&
    bookItem.volumeInfo.imageLinks.smallThumbnail;
  let title = bookItem.volumeInfo.title;
  let author = bookItem.volumeInfo.authors;
  let publisher = bookItem.volumeInfo.publisher;
  let publishDate = bookItem.volumeInfo.publishedDate;
  let description = bookItem.volumeInfo.description;

  return (
    <>
      <div className="p-4 bg-purple-300 flex flex-col items-center gap-3">
        <div className="w-[60%] ">
          <div className="md:flex md:gap-8 justify-center p-4 m-4 items-center bg-blue-200">
            <div>
              <img src={imgSrc} alt="" className="w-[220px] h-[250px]" />
            </div>
            <div>
              <h1 className="text-2xl text-white">
                Title :<span className="text-xl ml-3">{title}</span>
              </h1>
              <h2 className="text-2xl text-white">
                Author :<span className="text-xl ml-3">{author}</span>
              </h2>
              <p className="text-2xl text-white">
                Publisher :<span className="text-xl ml-3">{publisher}</span>
              </p>
              <p className="text-2xl text-white">
                Date :<span className="text-xl ml-3">{publishDate}</span>
              </p>
              <button className="p-2 border-none bg-orange-200 w-[100px]">
                More
              </button>
            </div>
          </div>

          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
