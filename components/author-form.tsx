import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AuthorForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [bio, setBio] = useState(initialData?.bio || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, bio });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Author Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        label="Biography"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
        textarea
      />
      <Button type="submit">Save Author</Button>
    </form>
  );
};

export default AuthorForm;