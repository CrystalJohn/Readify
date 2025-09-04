import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link href="/books" className="text-white hover:text-gray-300">Books</Link>
                </li>
                <li>
                    <Link href="/authors" className="text-white hover:text-gray-300">Authors</Link>
                </li>
                <li>
                    <Link href="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;