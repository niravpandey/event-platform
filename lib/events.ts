export interface EventItem {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "Melbourne Tech Summit 2025",
        slug: "melbourne-tech-summit-2025",
        location: "Melbourne Convention & Exhibition Centre",
        date: "2025-02-14",
        time: "09:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "AI Startup Founder Night",
        slug: "ai-startup-founder-night",
        location: "Cremorne, Victoria",
        date: "2025-03-05",
        time: "06:30 PM",
    },
    {
        image: "/images/event3.png",
        title: "UniMelb Data Science Community Day",
        slug: "unimelb-data-science-community-day",
        location: "University of Melbourne, Parkville",
        date: "2025-02-28",
        time: "11:00 AM",
    },
    {
        image: "/images/event4.png",
        title: "Frontend Developer Festival",
        slug: "frontend-developer-festival",
        location: "RMIT Storey Hall",
        date: "2025-04-10",
        time: "10:00 AM",
    },
    {
        image: "/images/event5.png",
        title: "48-Hour Global Hackathon",
        slug: "48-hour-global-hackathon",
        location: "Online / Hybrid",
        date: "2025-05-01",
        time: "08:00 AM",
    },
    {
        image: "/images/event6.png",
        title: "Coffee & Code Meetup",
        slug: "coffee-and-code-meetup",
        location: "St. Ali Coffee Roasters, South Melbourne",
        date: "2025-02-20",
        time: "07:30 AM",
    },
];