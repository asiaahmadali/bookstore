import { useNavigate } from "react-router-dom";

function Card(Props) {
  const books = Props.booksdata;
  const navigate = useNavigate();
  console.log(books);

  return (
    <>
      {books.map((item) => {
        let imageSource =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        let title = item.volumeInfo.title;
        let pages = item.volumeInfo.pageCount;

        if (imageSource != undefined) {
          return (
            <div
              className="flex flex-col items-center justify-center border-2 border-gray-500 bg-gradient-to-r from-orange-300 via-orange-100 to-orange-200 m-4 p-3 shadow-lg hover:scale-105 transition-transform duration-300"
              key={item.id}
              onClick={() => {
                navigate("itemInfo", { state: { bookItem: item } });
              }}
            >
              <img
                src={imageSource}
                alt={title}
                className="w-[200px] h-[200px] object-cover rounded-lg shadow-md shadow-orange-800"
              />
              <div className="flex flex-col items-center mt-2">
                <h2 className="font-medium text-gray-800 text-sm  mb-2">
                  {title}
                </h2>
                <p className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 text-white text-center p-2 rounded-md h-[40px] flex items-center justify-center w-[150px]">
                  pages: {pages}
                </p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Card;
