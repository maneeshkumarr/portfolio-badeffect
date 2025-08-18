import ProjectDetails from '../ProjectDetails'; // Adjust path as needed

const imageList = [
  'FR1.png', 'FR2.png', 'FR3.png',
  'FR4.png', 'FR5.png', 'FR6.png',
];

const foodRescueData = {
  title: "Food Rescue App",
  description: "We are a team of 2 building a platform where restaurants donate leftover food to NGOs — with clean UI, real-time pickup status, and location tracking. This innovative solution tackles food waste while supporting community organizations through seamless donation coordination.",
  techStack: [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "Google Maps API",
    "JWT Authentication"
  ],
  highlights: [
    "🍽️ Restaurants can list surplus food with detailed expiry windows, portion sizes, and dietary information",
    "🚚 NGOs can browse available donations, request pickups, and track real-time delivery status updates",
    "🗺️ Integrated live map tracking system for couriers and volunteers with route optimization",
    "🔐 Comprehensive security features including secure authentication, media uploads, and role-based dashboards",
    "📱 Mobile-responsive design optimized for on-the-go restaurant staff and delivery personnel",
    "⏰ Smart notification system for time-sensitive donations and pickup reminders",
    "📊 Analytics dashboard showing donation impact, waste reduction metrics, and community reach",
    "🤝 Community matching algorithm that connects restaurants with nearby NGOs based on capacity and preferences"
  ],
  imageList: imageList,
  imagePath: "/Food_Rescue/",
  githubUrl: "https://github.com/maneeshkumarr/Food-Rescue-App.git",
  //liveUrl: "https://food-rescue-demo.vercel.app" // Uncomment if you have a live demo
};

export default function FoodRescuePage() {
  return (
    <ProjectDetails
      title={foodRescueData.title}
      description={foodRescueData.description}
      techStack={foodRescueData.techStack}
      highlights={foodRescueData.highlights}
      imageList={foodRescueData.imageList}
      imagePath={foodRescueData.imagePath}
      githubUrl={foodRescueData.githubUrl}
     // liveUrl={foodRescueData.liveUrl}
    />
  );
}