export interface RecCenter {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;
    website: string;
    hours: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    };
    amenities: string[];
    programs: Program[];
    imageUrl: string;
    rating: number;
    reviews: number;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export interface Program {
    id: string;
    name: string;
    description: string;
    schedule: string;
    ageGroup: string;
    price: string;
}

export const recCenters: RecCenter[] = [
    {
        id: "rc-001",
        name: "Oakridge Recreation Center",
        description: "A modern recreation facility offering a wide variety of programs and amenities for all ages and interests. The center features state-of-the-art equipment, professional instruction, and a welcoming environment for the community.",
        address: "1234 Oakridge Blvd",
        city: "Portland",
        state: "Oregon",
        postalCode: "97205",
        phone: "(503) 555-1234",
        email: "info@oakridgerec.com",
        website: "https://www.oakridgerec.com",
        hours: {
            monday: "6:00 AM - 10:00 PM",
            tuesday: "6:00 AM - 10:00 PM",
            wednesday: "6:00 AM - 10:00 PM",
            thursday: "6:00 AM - 10:00 PM",
            friday: "6:00 AM - 10:00 PM",
            saturday: "8:00 AM - 8:00 PM",
            sunday: "8:00 AM - 6:00 PM"
        },
        amenities: [
            "Olympic-sized swimming pool",
            "Fitness center",
            "Basketball court",
            "Tennis courts",
            "Yoga studio",
            "Childcare services",
            "Café"
        ],
        programs: [
            {
                id: "p-001",
                name: "Adult Swim Lessons",
                description: "Swimming lessons for adults of all skill levels.",
                schedule: "Tuesdays and Thursdays, 7:00 PM - 8:00 PM",
                ageGroup: "18+",
                price: "$120 per 8-week session"
            },
            {
                id: "p-002",
                name: "Youth Basketball",
                description: "Basketball program for youth focusing on skills development and team play.",
                schedule: "Mondays and Wednesdays, 4:00 PM - 5:30 PM",
                ageGroup: "8-14",
                price: "$95 per 10-week session"
            },
            {
                id: "p-003",
                name: "Senior Yoga",
                description: "Gentle yoga classes designed for seniors and beginners.",
                schedule: "Fridays, 10:00 AM - 11:00 AM",
                ageGroup: "55+",
                price: "$60 per 8-week session"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        rating: 4.7,
        reviews: 256,
        coordinates: {
            lat: 45.5189,
            lng: -122.6751
        }
    },
    {
        id: "rc-002",
        name: "Riverside Community Center",
        description: "Located along the scenic river, this center offers outdoor activities and indoor facilities for the whole family. Enjoy riverside trails, water sports, and community events throughout the year.",
        address: "567 River Walk",
        city: "Salem",
        state: "Oregon",
        postalCode: "97301",
        phone: "(503) 555-6789",
        email: "contact@riversidecc.org",
        website: "https://www.riversidecc.org",
        hours: {
            monday: "7:00 AM - 9:00 PM",
            tuesday: "7:00 AM - 9:00 PM",
            wednesday: "7:00 AM - 9:00 PM",
            thursday: "7:00 AM - 9:00 PM",
            friday: "7:00 AM - 9:00 PM",
            saturday: "8:00 AM - 7:00 PM",
            sunday: "9:00 AM - 5:00 PM"
        },
        amenities: [
            "Indoor pool",
            "Fitness center",
            "River access",
            "Multipurpose rooms",
            "Walking trails",
            "Climbing wall",
            "Community garden"
        ],
        programs: [
            {
                id: "p-004",
                name: "Family Kayaking",
                description: "Guided kayaking tours for families along the scenic river.",
                schedule: "Saturdays, 9:00 AM - 11:00 AM",
                ageGroup: "All ages (children under 12 with adult)",
                price: "$25 per person, per session"
            },
            {
                id: "p-005",
                name: "After-School Program",
                description: "Supervised activities, homework help, and recreation for school-age children.",
                schedule: "Monday to Friday, 3:00 PM - 6:00 PM",
                ageGroup: "5-12",
                price: "$200 per month"
            },
            {
                id: "p-006",
                name: "Community Fitness",
                description: "Group fitness classes for all levels, including HIIT, Zumba, and more.",
                schedule: "Various times throughout the week",
                ageGroup: "16+",
                price: "$75 monthly membership or $10 drop-in"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        rating: 4.5,
        reviews: 189,
        coordinates: {
            lat: 44.9429,
            lng: -123.0351
        }
    },
    {
        id: "rc-003",
        name: "Pinewood Sports Complex",
        description: "A premier sports facility catering to athletes and teams of all levels. With multiple fields, courts, and training areas, it's the perfect place for sports enthusiasts and competitions.",
        address: "8901 Pine Street",
        city: "Eugene",
        state: "Oregon",
        postalCode: "97401",
        phone: "(541) 555-4321",
        email: "info@pinewoodsports.com",
        website: "https://www.pinewoodsports.com",
        hours: {
            monday: "5:30 AM - 11:00 PM",
            tuesday: "5:30 AM - 11:00 PM",
            wednesday: "5:30 AM - 11:00 PM",
            thursday: "5:30 AM - 11:00 PM",
            friday: "5:30 AM - 11:00 PM",
            saturday: "6:00 AM - 10:00 PM",
            sunday: "6:00 AM - 10:00 PM"
        },
        amenities: [
            "Indoor track",
            "Soccer fields",
            "Baseball diamonds",
            "Tennis courts",
            "Basketball courts",
            "Training facility",
            "Pro shop",
            "Sports medicine clinic"
        ],
        programs: [
            {
                id: "p-007",
                name: "Youth Sports Academy",
                description: "Comprehensive training program for young athletes across multiple sports.",
                schedule: "Weekday evenings and Saturday mornings",
                ageGroup: "6-17",
                price: "$350 per 12-week session"
            },
            {
                id: "p-008",
                name: "Adult Soccer League",
                description: "Recreational and competitive soccer leagues for adults.",
                schedule: "Games on weekday evenings",
                ageGroup: "18+",
                price: "$120 per person, per season"
            },
            {
                id: "p-009",
                name: "Sports Performance Training",
                description: "Professional training for serious athletes focusing on strength, speed, and agility.",
                schedule: "By appointment",
                ageGroup: "14+",
                price: "$75 per hour, packages available"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
        rating: 4.8,
        reviews: 312,
        coordinates: {
            lat: 44.0521,
            lng: -123.0868
        }
    },
    {
        id: "rc-004",
        name: "Highland Community Center",
        description: "A family-friendly center nestled in the highland neighborhood, offering a variety of recreational and educational programs for all ages. The center is surrounded by beautiful parkland and features both indoor and outdoor facilities.",
        address: "2345 Highland Drive",
        city: "Bend",
        state: "Oregon",
        postalCode: "97701",
        phone: "(541) 555-7890",
        email: "info@highlandcc.org",
        website: "https://www.highlandcc.org",
        hours: {
            monday: "8:00 AM - 8:00 PM",
            tuesday: "8:00 AM - 8:00 PM",
            wednesday: "8:00 AM - 8:00 PM",
            thursday: "8:00 AM - 8:00 PM",
            friday: "8:00 AM - 9:00 PM",
            saturday: "9:00 AM - 6:00 PM",
            sunday: "10:00 AM - 5:00 PM"
        },
        amenities: [
            "Heated indoor pool",
            "Outdoor playground",
            "Multipurpose rooms",
            "Art studio",
            "Computer lab",
            "Senior center",
            "Community kitchen"
        ],
        programs: [
            {
                id: "p-010",
                name: "Pottery Workshop",
                description: "Hands-on pottery classes for beginners and intermediate artists.",
                schedule: "Tuesdays, 6:00 PM - 8:00 PM",
                ageGroup: "16+",
                price: "$150 per 8-week session, materials included"
            },
            {
                id: "p-011",
                name: "Senior Social Club",
                description: "Weekly gatherings for seniors featuring games, crafts, and social activities.",
                schedule: "Wednesdays, 1:00 PM - 3:00 PM",
                ageGroup: "65+",
                price: "$5 per session or $40 for 10 sessions"
            },
            {
                id: "p-012",
                name: "Youth Art Camp",
                description: "Summer art camp for kids exploring various media and techniques.",
                schedule: "Monday-Friday, 9:00 AM - 12:00 PM, Summer sessions",
                ageGroup: "7-13",
                price: "$175 per week, all materials provided"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1533551068443-c4c84bae366c",
        rating: 4.6,
        reviews: 178,
        coordinates: {
            lat: 44.0582,
            lng: -121.3153
        }
    },
    {
        id: "rc-005",
        name: "Oceanview Aquatic Center",
        description: "A premier aquatic facility featuring Olympic-sized pools, water slides, and dedicated areas for all swimming abilities. The center offers comprehensive swim programs, aquatic fitness classes, and recreational swimming in a state-of-the-art environment.",
        address: "789 Coastal Highway",
        city: "Newport",
        state: "Oregon",
        postalCode: "97365",
        phone: "(541) 555-2468",
        email: "swim@oceanviewaquatic.com",
        website: "https://www.oceanviewaquatic.com",
        hours: {
            monday: "5:30 AM - 9:00 PM",
            tuesday: "5:30 AM - 9:00 PM",
            wednesday: "5:30 AM - 9:00 PM",
            thursday: "5:30 AM - 9:00 PM",
            friday: "5:30 AM - 9:00 PM",
            saturday: "7:00 AM - 7:00 PM",
            sunday: "9:00 AM - 5:00 PM"
        },
        amenities: [
            "Olympic-sized lap pool",
            "Leisure pool with water features",
            "Water slides",
            "Hot tub",
            "Steam room",
            "Diving platforms",
            "Swim shop",
            "Café"
        ],
        programs: [
            {
                id: "p-013",
                name: "Competitive Swim Team",
                description: "Year-round competitive swimming program for dedicated swimmers.",
                schedule: "Weekday practices, weekend meets",
                ageGroup: "6-18",
                price: "$120 monthly, plus annual registration fee"
            },
            {
                id: "p-014",
                name: "Aqua Fitness",
                description: "Low-impact water aerobics classes for all fitness levels.",
                schedule: "Monday, Wednesday, Friday, 9:00 AM - 10:00 AM",
                ageGroup: "18+",
                price: "$8 per class or $60 for 10 classes"
            },
            {
                id: "p-015",
                name: "Parent & Tot Swim",
                description: "Swimming lessons for infants and toddlers with a parent or guardian.",
                schedule: "Saturdays, 10:00 AM - 10:30 AM",
                ageGroup: "6 months - 3 years",
                price: "$90 per 6-week session"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7",
        rating: 4.9,
        reviews: 312,
        coordinates: {
            lat: 44.6368,
            lng: -124.0530
        }
    },
    {
        id: "rc-006",
        name: "Greenfield Parks & Recreation",
        description: "An expansive recreation complex situated on 50 acres of parkland, featuring indoor and outdoor facilities for sports, fitness, and community gatherings. The center serves as a hub for seasonal events, tournaments, and recreational programming.",
        address: "456 Park Avenue",
        city: "Medford",
        state: "Oregon",
        postalCode: "97501",
        phone: "(541) 555-1357",
        email: "info@greenfieldparks.org",
        website: "https://www.greenfieldparks.org",
        hours: {
            monday: "6:00 AM - 9:00 PM",
            tuesday: "6:00 AM - 9:00 PM",
            wednesday: "6:00 AM - 9:00 PM",
            thursday: "6:00 AM - 9:00 PM",
            friday: "6:00 AM - 9:00 PM",
            saturday: "8:00 AM - 8:00 PM",
            sunday: "8:00 AM - 6:00 PM"
        },
        amenities: [
            "Indoor gymnasium",
            "Outdoor sports fields",
            "Tennis courts",
            "Skate park",
            "Fitness center",
            "Walking trails",
            "Picnic areas",
            "Event spaces"
        ],
        programs: [
            {
                id: "p-016",
                name: "Youth Summer Camp",
                description: "Full-day summer camp featuring sports, arts, and outdoor adventures.",
                schedule: "Monday-Friday, 8:00 AM - 5:30 PM, June-August",
                ageGroup: "5-12",
                price: "$225 per week, discounts for multiple weeks"
            },
            {
                id: "p-017",
                name: "Adult Volleyball League",
                description: "Recreational and competitive volleyball leagues for adults.",
                schedule: "Thursday evenings, 10-week seasons",
                ageGroup: "18+",
                price: "$75 per person, team discounts available"
            },
            {
                id: "p-018",
                name: "Fitness Boot Camp",
                description: "High-intensity interval training classes led by certified trainers.",
                schedule: "Monday, Wednesday, Friday, 6:00 AM - 7:00 AM",
                ageGroup: "16+",
                price: "$120 for 8-week session"
            }
        ],
        imageUrl: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4",
        rating: 4.4,
        reviews: 215,
        coordinates: {
            lat: 42.3265,
            lng: -122.8756
        }
    }
];

export const getCenterById = (id: string): RecCenter | undefined => {
    return recCenters.find(center => center.id === id);
};

export const filterCenters = (query: string): RecCenter[] => {
    const lowerCaseQuery = query.toLowerCase();

    return recCenters.filter((center) => {
        return (
            center.name.toLowerCase().includes(lowerCaseQuery) ||
            center.city.toLowerCase().includes(lowerCaseQuery) ||
            center.amenities.some(amenity =>
                amenity.toLowerCase().includes(lowerCaseQuery)
            ) ||
            center.programs.some(program =>
                program.name.toLowerCase().includes(lowerCaseQuery)
            )
        );
    });
};
