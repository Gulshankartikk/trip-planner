export const upDestinations = [
    {
        id: 'agra',
        title: 'Agra',
        category: 'Heritage',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657451dd6?auto=format&fit=crop&w=800&q=80',
        description: 'World Heritage & Mughal History. Home to the legendary Taj Mahal.',
        attractions: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'],
        timings: 'Taj Mahal: 30 min before sunrise to 30 min before sunset. Closed on Fridays.',
        tips: 'Sunrise visit is best for fewer crowds and great photos.',
        stay: '1–2 days'
    },
    {
        id: 'varanasi',
        title: 'Varanasi',
        category: 'Spiritual',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
        description: 'Spiritual Capital of India. One of the oldest living cities in the world.',
        attractions: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Assi Ghat'],
        thingsToDo: ['Evening Ganga Aarti', 'Sunrise boat ride', 'Old Banaras walk'],
        tips: 'Morning or late night darshan usually less crowded.',
        stay: '2 days'
    },
    {
        id: 'ayodhya',
        title: 'Ayodhya',
        category: 'Spiritual',
        image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
        description: 'Ram Janmabhoomi. A city of immense religious and historical importance.',
        attractions: ['Ram Mandir'],
        timings: 'Entry starts around 6:30 AM.',
        tips: 'Visit early morning; crowd increases after 10 AM.',
        stay: '1 day'
    },
    {
        id: 'prayagraj',
        title: 'Prayagraj',
        category: 'Spiritual',
        image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80',
        description: 'Sangam & Kumbh City. Where Ganga, Yamuna & Saraswati meet.',
        attractions: ['Triveni Sangam'],
        thingsToDo: ['Boat ride to Sangam', 'Holy dip', 'Allahabad Fort'],
        stay: '1 day'
    },
    {
        id: 'lucknow',
        title: 'Lucknow',
        category: 'Culture & Food',
        image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80',
        description: 'Nawabi Culture & Food. Known for its architecture and hospitality.',
        attractions: ['Bara Imambara', 'Rumi Darwaza', 'Hazratganj'],
        foodTip: 'Must try: Tunday kebab, Lucknow biryani, and Kulfi.',
        stay: '2 days'
    },
    {
        id: 'dudhwa',
        title: 'Dudhwa',
        category: 'Wildlife',
        image: 'https://images.unsplash.com/photo-1616128417859-3a984dd35f02?auto=format&fit=crop&w=800&q=80',
        description: 'National Park - Wildlife & Nature. Tigers, rhinos, and 450+ bird species.',
        attractions: ['Wildlife Safari', 'Bird watching'],
        timings: 'Closed during monsoon (mid-June to mid-Nov).',
        stay: '2 days'
    }
];

export const upRoutes = [
    {
        name: 'Popular Route',
        path: 'Agra → Lucknow → Ayodhya → Prayagraj → Varanasi',
        duration: '7–10 Days',
        type: 'Cultural & Spiritual'
    },
    {
        name: 'Nature + Culture',
        path: 'Lucknow → Dudhwa → Ayodhya → Varanasi',
        duration: '7–10 Days',
        type: 'Wildlife & Heritage'
    }
];
