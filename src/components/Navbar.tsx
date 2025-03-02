import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-80"
                    >
                        RecHub
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                location.pathname === '/' ? 'text-primary' : 'text-foreground/90'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/centers"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                location.pathname.includes('/centers') || location.pathname.includes('/center/') ? 'text-primary' : 'text-foreground/90'
                            }`}
                        >
                            Recreation Centers
                        </Link>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                location.pathname === '/about' ? 'text-primary' : 'text-foreground/90'
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                location.pathname === '/contact' ? 'text-primary' : 'text-foreground/90'
                            }`}
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center">
                        <button
                            className="p-2 md:p-3 rounded-full text-foreground/80 hover:text-primary hover:bg-secondary transition-colors mr-1 md:mr-2"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        <button
                            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className={`px-4 py-2 text-base font-medium transition-colors ${
                                    location.pathname === '/' ? 'text-primary bg-secondary/50 rounded-md' : 'hover:text-primary hover:bg-secondary/30 rounded-md'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/centers"
                                className={`px-4 py-2 text-base font-medium transition-colors ${
                                    location.pathname.includes('/centers') || location.pathname.includes('/center/') ? 'text-primary bg-secondary/50 rounded-md' : 'hover:text-primary hover:bg-secondary/30 rounded-md'
                                }`}
                            >
                                Recreation Centers
                            </Link>
                            <Link
                                to="/about"
                                className={`px-4 py-2 text-base font-medium transition-colors ${
                                    location.pathname === '/about' ? 'text-primary bg-secondary/50 rounded-md' : 'hover:text-primary hover:bg-secondary/30 rounded-md'
                                }`}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className={`px-4 py-2 text-base font-medium transition-colors ${
                                    location.pathname === '/contact' ? 'text-primary bg-secondary/50 rounded-md' : 'hover:text-primary hover:bg-secondary/30 rounded-md'
                                }`}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
