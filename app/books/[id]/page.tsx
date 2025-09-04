import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BookDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchBook = async () => {
                try {
                    const response = await fetch(`/api/books/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch book details');
                    }
                    const data = await response.json();
                    setBook(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchBook();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Published: {book.publishedDate}</p>
        </div>
    );
};

export default BookDetailPage;