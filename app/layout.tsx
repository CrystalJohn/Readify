import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    {/* Navigation component can be added here */}
                </header>
                <main>{children}</main>
                <footer>
                    {/* Footer content can be added here */}
                </footer>
            </body>
        </html>
    );
};

export default Layout;