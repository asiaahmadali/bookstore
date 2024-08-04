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
  const moreInfo = bookItem.volumeInfo.previewLink;

  return (
    <div className="p-4 bg-gradient-to-r from-teal-500 via-blue-300 to-blue-500 min-h-screen flex items-center justify-center ">
      <div className="bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 rounded-lg shadow-lg md:w-[70%] w-full overflow-hidden shadow-white">
        <div className="md:flex md:gap-6 p-6">
          <div className="md:w-[30%] flex justify-center items-center">
            <img
              src={imgSrc}
              alt="Book Cover"
              className="md:w-[80%] w-[60%] h-auto max-w-xs rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-[70%] w-full flex flex-col justify-center md:p-6 mt-4 space-y-4">
            <h1 className="text-sm md:text-2xl  text-white font-medium">
              Title:
              <span className="text-sm md:text-xl text-gray-800 font-normal">
                {title}
              </span>
            </h1>
            <h2 className=" text-sm  md:text-2xl text-white font-medium">
              Author:
              <span className="text-sm md:text-xl text-gray-800 font-normal">
                {author}
              </span>
            </h2>
            <p className="text-sm md:text-2xl text-white font-medium">
              Publisher:
              <span className="text-sm md:text-xl text-gray-800 font-normal">
                {publisher}
              </span>
            </p>
            <p className="text-sm md:text-2xl text-white font-medium">
              PublishDate:
              <span className="text-sm md:text-xl text-gray-800 font-normal">
                {publishDate}
              </span>
            </p>

            <button className="p-2 bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600 text-gray-800 font-semibold rounded-md shadow-md shadow-white hover:bg-purple-300 transition duration-300 hover:shadow-lg">
              <a href={moreInfo}>More</a>
            </button>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 text-purple-800">
          <h1 className="text-center font-medium text-2xl mb-4">Description</h1>
          <p className="text-sm  text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
