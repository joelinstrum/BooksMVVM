import ListItem from "../../../UI-components/ListItem";
import { TBook } from "../../../Models/BooksModel";

type Props = {
  booksList: TBook[];
  handleBookSelect: (book: TBook) => void;
};

// View (UI layer that users interact with)
const BooksList = ({ booksList, handleBookSelect }: Props) => {
  return (
    <section>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {booksList?.map((book) => (
          <ListItem
            key={book.id}
            title={`Book title: ${book.title}`}
            subtitle={`Number of pages: ${book.pageCount}`}
            handleClick={() => handleBookSelect(book)}
          />
        ))}
      </ul>
    </section>
  );
};

export default BooksList;
