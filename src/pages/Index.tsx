
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecCenterList from '../components/RecCenterList';
import { recCenters } from '../utils/data';

const Index = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const scrollToExplore = () => {
        const exploreSection = document.getElementById('explore-section');
        if (exploreSection) {
            exploreSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />

            <div id="explore-section" className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Explore Recreation Centers</h2>
                        <p className="text-lg text-foreground/80">
                            Discover the perfect recreation facility for your needs. Browse our curated selection of top-rated centers.
                        </p>
                    </div>

                    <RecCenterList centers={recCenters} />
                </div>
            </div>

            <div className="bg-secondary/30 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Our Platform</h2>
                                <p className="text-lg text-foreground/80 mb-6">
                                    We provide comprehensive information about recreation centers to help you make informed decisions about your fitness and leisure activities.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Detailed information about facilities and amenities',
                                        'Real user reviews and ratings',
                                        'Up-to-date program schedules and pricing',
                                        'Easy comparison between different centers',
                                        'Mobile-friendly access to information on the go'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 5L4.5 8.5L11 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                                    alt="People enjoying a recreation center"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold mb-4">RecHub</h3>
                            <p className="text-foreground/80 max-w-md">
                                Your ultimate guide to recreation centers. Find the perfect place for your fitness, social, and leisure activities.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-foreground/80 hover:text-primary">Home</a></li>
                                <li><a href="/centers" className="text-foreground/80 hover:text-primary">Recreation Centers</a></li>
                                <li><a href="/about" className="text-foreground/80 hover:text-primary">About Us</a></li>
                                <li><a href="/contact" className="text-foreground/80 hover:text-primary">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact Us</h4>
                            <address className="not-italic text-foreground/80">
                                <p>1234 Recreation Ave.</p>
                                <p>Portland, OR 97205</p>
                                <p className="mt-2">info@rec-hub.com</p>
                                <p>(503) 555-1234</p>
                            </address>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-foreground/60">
                            © {new Date().getFullYear()} RecHub. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-4">
                            <a href="#" className="text-foreground/60 hover:text-primary">Terms</a>
                            <a href="#" className="text-foreground/60 hover:text-primary">Privacy</a>
                            <a href="#" className="text-foreground/60 hover:text-primary">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>

            <button
                onClick={scrollToExplore}
                className={`fixed bottom-24 right-6 z-30 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-md transition-all duration-300 ${
                    showBackToTop ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                aria-label="Scroll to explore"
            >
                <ArrowDown className="h-5 w-5" />
            </button>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-30 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-md transition-all duration-300 ${
                    showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Back to top"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10L10 5L15 10M10 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default Index;
