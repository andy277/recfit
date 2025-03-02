import { useState } from 'react';
import { Layout, Grid } from 'lucide-react';
import RecCenter from './RecCenter';
import SearchFilter from './SearchFilter';
import { RecCenter as RecCenterType, filterCenters } from '../utils/data';

interface RecCenterListProps {
    centers: RecCenterType[];
}

export const RecCenterList = ({ centers }: RecCenterListProps) => {
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCenters, setFilteredCenters] = useState(centers);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredCenters(centers);
        } else {
            setFilteredCenters(filterCenters(query));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold">Recreation Centers</h2>

                <div className="flex items-center space-x-3">
                    <span className="text-sm text-muted-foreground">View:</span>
                    <button
                        onClick={() => setLayout('grid')}
                        className={`p-2 rounded-md transition-colors ${
                            layout === 'grid'
                                ? 'bg-secondary text-primary'
                                : 'hover:bg-secondary/50 text-muted-foreground'
                        }`}
                        aria-label="Grid view"
                    >
                        <Grid className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setLayout('list')}
                        className={`p-2 rounded-md transition-colors ${
                            layout === 'list'
                                ? 'bg-secondary text-primary'
                                : 'hover:bg-secondary/50 text-muted-foreground'
                        }`}
                        aria-label="List view"
                    >
                        <Layout className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <SearchFilter onSearch={handleSearch} />

            {filteredCenters.length === 0 ? (
                <div className="py-8 text-center">
                    <p className="text-lg text-muted-foreground">No centers found matching "{searchQuery}"</p>
                    <button
                        onClick={() => handleSearch('')}
                        className="mt-4 text-primary hover:underline"
                    >
                        Clear search
                    </button>
                </div>
            ) : (
                <div className={`grid ${
                    layout === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'grid-cols-1 gap-5'
                }`}>
                    {filteredCenters.map((center) => (
                        <RecCenter key={center.id} center={center} layout={layout} />
                    ))}
                </div>
            )}

            {filteredCenters.length > 0 && searchQuery && (
                <div className="text-center animate-fade-in">
                    <p className="text-sm text-muted-foreground">
                        Showing {filteredCenters.length} results for "{searchQuery}"
                        <button
                            onClick={() => handleSearch('')}
                            className="ml-2 text-primary hover:underline"
                        >
                            Clear
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default RecCenterList;
