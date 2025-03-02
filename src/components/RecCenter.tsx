
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { RecCenter as RecCenterType } from '../utils/data';

interface RecCenterProps {
    center: RecCenterType;
    layout?: 'grid' | 'list';
}

const RecCenter = ({ center, layout = 'grid' }: RecCenterProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const renderRatingStars = (rating: number) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${
                            i < Math.floor(rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : i < rating
                                    ? 'text-yellow-400 fill-yellow-400 opacity-50'
                                    : 'text-gray-300'
                        }`}
                    />
                ))}
                <span className="ml-2 text-sm font-medium">
          {rating.toFixed(1)} ({center.reviews})
        </span>
            </div>
        );
    };

    if (layout === 'list') {
        return (
            <div className="group relative overflow-hidden bg-white rounded-xl shadow-sm border border-border/50 hover-scale">
                <Link to={`/center/${center.id}`} className="flex flex-col md:flex-row w-full h-full">
                    <div className="md:w-1/3 relative aspect-video md:aspect-square overflow-hidden">
                        <div className={`absolute inset-0 bg-secondary/20 flex items-center justify-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                        </div>
                        <img
                            src={center.imageUrl}
                            alt={center.name}
                            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                        <div className="mb-auto">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{center.name}</h3>
                                {renderRatingStars(center.rating)}
                            </div>

                            <div className="mt-2 flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-4 w-4 text-primary/70" />
                                <span>{center.city}, {center.state}</span>
                            </div>

                            <p className="mt-3 text-sm line-clamp-2 text-foreground/80">{center.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {center.amenities.slice(0, 3).map((amenity, index) => (
                                    <span key={index} className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                    {amenity}
                  </span>
                                ))}
                                {center.amenities.length > 3 && (
                                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                    +{center.amenities.length - 3} more
                  </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap justify-between gap-4">
                            <div className="flex items-center text-sm">
                                <Phone className="mr-1 h-4 w-4 text-primary/70" />
                                <span>{center.phone}</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Clock className="mr-1 h-4 w-4 text-primary/70" />
                                <span>Open today: {center.hours.monday}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden bg-white rounded-xl shadow-sm border border-border/50 hover-scale">
            <Link to={`/center/${center.id}`} className="block h-full">
                <div className="relative aspect-video overflow-hidden">
                    <div className={`absolute inset-0 bg-secondary/20 flex items-center justify-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    </div>
                    <img
                        src={center.imageUrl}
                        alt={center.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full py-1 px-2 flex items-center">
                        {renderRatingStars(center.rating)}
                    </div>
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{center.name}</h3>

                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4 text-primary/70" />
                        <span>{center.city}, {center.state}</span>
                    </div>

                    <p className="mt-3 text-sm line-clamp-2 text-foreground/80">{center.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {center.amenities.slice(0, 3).map((amenity, index) => (
                            <span key={index} className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                {amenity}
              </span>
                        ))}
                        {center.amenities.length > 3 && (
                            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                +{center.amenities.length - 3} more
              </span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecCenter;
