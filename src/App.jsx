import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Person from './models/Person';
import Student from './models/Student';
import Teacher from './models/Teacher';
import PersonCard from './components/PersonCard';
function App() {
  const people = [
    new Person("John Doe", 45),
    new Student("Alice Smith", 20, "S12345", "Computer Science"),
    new Teacher("Dr. Bob Jones", 50, "T98765", "Mathematics"),
    new Student("Charlie Brown", 19, "S67890", "Physics"),
    new Teacher("Ms. Sarah Lee", 35, "T54321", "History"),
  ];
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      stock: 10,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
      stock: 5,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
      stock: 0,
    },
  ];
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061120084",
    },
    { id: 3, title: "1984", author: "George Orwell", isbn: "9780451524935" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <Routes>
      <Route
        path="/experiment_1"
        element={
          <div className="app-wrapper">
            <Navbar />
            <main className="app-container">
              <h1 className="page-title">Featured Products</h1>
              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                  />
                ))}
              </div>
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/experiment_2"
        element={
          <div className="app-container">
            <Header />

            <main className="main-content">
              <section className="form-section">
                <h2>Add New Book</h2>
                <BookForm onAddBook={addBook} />
              </section>

              <section className="list-section">
                <div className="list-header">
                  <h2>Book List</h2>
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                </div>
                <BookList books={filteredBooks} onRemoveBook={removeBook} />
              </section>
            </main>
          </div>
        }
      />
      <Route
        path="/experiment_3"
        element={
          <div className="app-container">
            <header className="app-header">
              <div className="logo-container">
                <span className="logo-icon">✨</span>
                <h1>Academic Directory</h1>
              </div>
              <p className="header-subtitle">
                Explore our diverse community of students and teachers
              </p>
            </header>

            <main className="card-grid">
              {people.map((person, index) => (
                <PersonCard key={index} person={person} />
              ))}
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
