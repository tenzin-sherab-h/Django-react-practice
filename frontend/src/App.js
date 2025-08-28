import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/books/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Books List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {books.map((book, index) => (
          <Card
            key={index}
            title={book.title}
            author={book.author}
            description={book.description} // if your Django API has description field
          />
        ))}
      </div>
    </div>
  );
}

export default App;
