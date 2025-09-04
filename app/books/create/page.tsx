import React from 'react';
import BookForm from '../../../components/book-form';

const CreateBookPage = () => {
    const handleSubmit = async (formData) => {
        // Logic to handle form submission, e.g., API call to create a new book
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Handle successful creation, e.g., redirect or show a success message
        } else {
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div>
            <h1>Create a New Book</h1>
            <BookForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateBookPage;