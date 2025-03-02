
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
            <div
                className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
                    isLoaded ? 'opacity-15' : 'opacity-0'
                }`}
                aria-hidden="true"
            />

            <div className="container relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6 max-w-5xl mx-auto">
                <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="text-sm md:text-base font-medium tracking-wider uppercase text-primary mb-4">Discover Your Community</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                        Find the Perfect <span className="text-primary">Recreation Center</span> Near You
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 text-balance">
                        Explore top-rated facilities, programs, and amenities designed to enhance your active lifestyle and connect with your community.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            to="/centers"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                        >
                            Browse Centers
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium transition-all duration-300 hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
                            <div className="w-1 h-2 bg-primary/50 rounded-full mx-auto animate-[bounce_2s_infinite]"></div>
                        </div>
                        <span className="text-xs text-primary/70 mt-2">Scroll to explore</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
