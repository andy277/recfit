
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Check, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCenterById, RecCenter, Program } from '../utils/data';

const RecCenterDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [center, setCenter] = useState<RecCenter | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'info' | 'programs' | 'amenities'>('info');
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const fetchCenter = () => {
            if (id) {
                const foundCenter = getCenterById(id);
                if (foundCenter) {
                    setCenter(foundCenter);
                } else {
                    // Center not found, navigate to 404 or centers page
                    navigate('/centers');
                }
            }

            setLoading(false);
        };

        fetchCenter();
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg">Loading center details...</p>
                </div>
            </div>
        );
    }

    if (!center) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Recreation Center Not Found</h2>
                    <p className="mt-2 mb-6 text-muted-foreground">The center you're looking for doesn't exist or has been removed.</p>
                    <Link
                        to="/centers"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90"
                    >
                        Browse All Centers
                    </Link>
                </div>
            </div>
        );
    }

    const renderProgramCard = (program: Program) => (
        <div key={program.id} className="bg-white rounded-xl shadow-sm border border-border/50 p-5 hover-scale">
            <h3 className="text-lg font-semibold">{program.name}</h3>
            <p className="mt-2 text-sm text-foreground/80">{program.description}</p>

            <div className="mt-4 space-y-2">
                <div className="flex items-start">
                    <Calendar className="mt-0.5 mr-2 h-4 w-4 text-primary/70 flex-shrink-0" />
                    <span className="text-sm">{program.schedule}</span>
                </div>
                <div className="flex items-center">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
            {program.ageGroup}
          </span>
                </div>
                <div className="font-medium text-primary">{program.price}</div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20 pb-16">
                <div className="relative mb-8 h-[40vh] md:h-[50vh] overflow-hidden bg-secondary/30">
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    </div>
                    <img
                        src={center.imageUrl}
                        alt={center.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                        <div className="container mx-auto">
                            <Link
                                to="/centers"
                                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to all centers
                            </Link>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{center.name}</h1>
                            <div className="flex items-center mt-2 text-white/90">
                                <MapPin className="mr-1 h-4 w-4" />
                                <span>{center.address}, {center.city}, {center.state} {center.postalCode}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/3">
                            <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
                                <div className="border-b border-border">
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => setActiveTab('info')}
                                            className={`px-5 py-4 text-sm font-medium flex items-center transition-colors ${
                                                activeTab === 'info'
                                                    ? 'border-b-2 border-primary text-primary'
                                                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/30'
                                            }`}
                                        >
                                            Overview
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('programs')}
                                            className={`px-5 py-4 text-sm font-medium flex items-center transition-colors ${
                                                activeTab === 'programs'
                                                    ? 'border-b-2 border-primary text-primary'
                                                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/30'
                                            }`}
                                        >
                                            Programs
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('amenities')}
                                            className={`px-5 py-4 text-sm font-medium flex items-center transition-colors ${
                                                activeTab === 'amenities'
                                                    ? 'border-b-2 border-primary text-primary'
                                                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/30'
                                            }`}
                                        >
                                            Amenities
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {activeTab === 'info' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-4">About {center.name}</h2>
                                            <p className="text-foreground/80 mb-6">{center.description}</p>

                                            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center">
                                                    <Phone className="mr-3 h-5 w-5 text-primary/70" />
                                                    <span>{center.phone}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mail className="mr-3 h-5 w-5 text-primary/70" />
                                                    <a href={`mailto:${center.email}`} className="text-primary hover:underline">{center.email}</a>
                                                </div>
                                                <div className="flex items-center">
                                                    <Globe className="mr-3 h-5 w-5 text-primary/70" />
                                                    <a href={center.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                        {center.website.replace(/^https?:\/\//, '')}
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-semibold mb-3">Hours of Operation</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Monday</span>
                                                    <span>{center.hours.monday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Tuesday</span>
                                                    <span>{center.hours.tuesday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Wednesday</span>
                                                    <span>{center.hours.wednesday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Thursday</span>
                                                    <span>{center.hours.thursday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Friday</span>
                                                    <span>{center.hours.friday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Saturday</span>
                                                    <span>{center.hours.saturday}</span>
                                                </div>
                                                <div className="flex justify-between py-1 border-b border-border/50">
                                                    <span className="font-medium">Sunday</span>
                                                    <span>{center.hours.sunday}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'programs' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-4">Programs</h2>
                                            <p className="text-foreground/80 mb-6">
                                                Check out the programs offered at {center.name}. Contact the center directly for registration details and availability.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                {center.programs.map(renderProgramCard)}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'amenities' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                                            <p className="text-foreground/80 mb-6">
                                                {center.name} offers a wide range of amenities designed to enhance your experience. Explore the facilities available at this recreation center.
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                                {center.amenities.map((amenity, idx) => (
                                                    <div key={idx} className="flex items-center py-2">
                                                        <div className="mr-3 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                                            <Check className="h-4 w-4" />
                                                        </div>
                                                        <span className="text-foreground/80">{amenity}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/3">
                            <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 sticky top-24">
                                <h3 className="text-lg font-semibold mb-4">Hours Today</h3>
                                <div className="flex items-center mb-6">
                                    <Clock className="mr-2 h-5 w-5 text-primary/70" />
                                    <span className="font-medium">{center.hours.monday}</span>
                                </div>

                                <h3 className="text-lg font-semibold mb-3">Location</h3>
                                <address className="not-italic text-foreground/80 mb-4">
                                    {center.address}<br />
                                    {center.city}, {center.state} {center.postalCode}
                                </address>

                                <div className="aspect-video bg-secondary/30 rounded-lg mb-6 overflow-hidden">
                                    {/* Placeholder for map */}
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        Map view
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href={`https://maps.google.com/?q=${center.address},${center.city},${center.state},${center.postalCode}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-colors"
                                    >
                                        <MapPin className="mr-2 h-4 w-4" />
                                        Get Directions
                                    </a>

                                    <a
                                        href={`tel:${center.phone}`}
                                        className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-colors"
                                    >
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Center
                                    </a>

                                    <a
                                        href={center.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
                                    >
                                        <Globe className="mr-2 h-4 w-4" />
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white py-8 border-t border-border/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
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
        </div>
    );
};

export default RecCenterDetail;
