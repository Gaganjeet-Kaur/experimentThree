import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !isbn) return;

        onAddBook({ title, author, isbn });
        setTitle('');
        setAuthor('');
        setIsbn('');
    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter book title"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter author name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                    type="text"
                    id="isbn"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder="Enter ISBN"
                    required
                />
            </div>
            <button type="submit" className="submit-btn">Add Book</button>
        </form>
    );
};

export default BookForm;
