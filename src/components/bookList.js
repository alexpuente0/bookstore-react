import Book from './book';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'John Dies at the End',
      author: 'David Wong',
    },
    {
      id: 2,
      title: 'IT',
      author: 'Stephen King',
    },
    {
      id: 3,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
  ];
  return (
    <main>
      <ul>
        {books.map(({ id, title, author }) => (
          <Book key={id} title={title} author={author} />
        ))}
      </ul>
    </main>
  );
};

export default BookList;
