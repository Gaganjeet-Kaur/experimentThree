import React from 'react';

const BookList = ({ books, onRemoveBook }) => {
    if (books.length === 0) {
        return (
            <div className="no-books">
                <p>Your library is empty. Add some books to get started!</p>
            </div>
        );
    }

    return (
        <div className="book-grid">
            {books.map(book => (
                <div key={book.id} className="book-card">
                    <div className="book-cover-placeholder">
                        📖
                    </div>
                    <div className="book-info">
                        <h3>{book.title}</h3>
                        <p className="author">by {book.author}</p>
                        <div className="book-meta">
                            <span>ISBN</span>
                            <span>{book.isbn}</span>
                        </div>
                    </div>
                    <div className="book-actions">
                        <button
                            className="remove-btn"
                            onClick={() => onRemoveBook(book.id)}
                        >
                            Remove from Library
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
