import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const BookForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [isbn, setIsbn] = useState(initialData?.isbn || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, description, isbn });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input
        label="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookForm;