import React from 'react';
import AuthorForm from '../../../components/author-form';

const CreateAuthorPage = () => {
    const handleSubmit = async (data) => {
        // Handle form submission logic here
        // e.g., send data to the API to create a new author
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Author</h1>
            <AuthorForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateAuthorPage;