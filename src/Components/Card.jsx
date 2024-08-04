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

        if (imageSource != undefined) {
          return (
            <>
              <div
                className=" flex flex-col items-center justify-center border-2 border-purple-200 m-4 p-3 shadow-md shadow-purple-600 bg-purple-300"
                key={item.id}
                onClick={() => {
                  navigate("itemInfo", { state: { bookItem: item } });
                }}
              >
                <img src={imageSource} alt="" className="w-[200px] h-[200px]" />
                <div className="flex flex-col items-center">
                  <h2 className="fonct-medium text-blue-600 text-xl m-2">
                    {title}
                  </h2>
                  <p className="w-[150px] bg-purple-600 text-center p-1 h-[30px]">
                    1000 PKR
                  </p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
