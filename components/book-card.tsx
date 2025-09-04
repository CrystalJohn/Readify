import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  description: string;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverImage, description, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img className="w-full" src={coverImage} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;