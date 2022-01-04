import SelectedBook from "./components/SelectedBook";
import BooksList from "./components/BooksList";
import PageTitle from "../../UI-components/PageTitle";
import useBooksList from "./ViewControllers/useBooksList";

// View (UI layer that users interact with)
const BooksListPage = () => {
  const {
    booksList,
    isLoading,
    selectedBook,
    setSelectedBook
  } = useBooksList();

  if (isLoading) {
    return <h1>Loading books</h1>;
  }

  if (!booksList) {
    return null;
  }

  return (
    <>
      <PageTitle title="Books List" />
      <div>
        <a href="./authors">Authors Page</a>
      </div>
      {selectedBook && <SelectedBook selectedBook={selectedBook} />}
      <BooksList booksList={booksList} handleBookSelect={setSelectedBook} />
    </>
  );
};

export default BooksListPage;
