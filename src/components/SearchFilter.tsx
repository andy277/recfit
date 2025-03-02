
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchFilterProps {
    onSearch: (query: string) => void;
}

const SearchFilter = ({ onSearch }: SearchFilterProps) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    const handleClear = () => {
        setQuery('');
        onSearch('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={`relative rounded-lg border ${
            isFocused ? 'border-primary shadow-sm ring-1 ring-primary/20' : 'border-border'
        } transition-all duration-200`}>
            <div className="flex items-center px-3 py-2">
                <Search className={`h-5 w-5 ${isFocused ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-200`} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search by name, location, or amenities..."
                    className="flex-1 bg-transparent border-0 outline-none focus:ring-0 text-foreground placeholder:text-muted-foreground px-3 py-1"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {query && (
                    <button
                        onClick={handleClear}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Clear search"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>

            <div className={`absolute left-0 right-0 top-full mt-1 rounded-lg border border-border bg-background shadow-md transition-all duration-200 overflow-hidden ${
                isFocused && query.length > 1 ? 'max-h-60' : 'max-h-0 opacity-0 pointer-events-none'
            }`}>
                <div className="p-2">
                    <p className="text-xs text-muted-foreground px-2 py-1">
                        Popular searches:
                    </p>
                    {['Swimming pool', 'Basketball', 'Fitness center', 'Yoga', 'Portland', 'Tennis'].map((term) => (
                        <button
                            key={term}
                            className="block w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-secondary transition-colors"
                            onClick={() => {
                                setQuery(term);
                                onSearch(term);
                            }}
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
