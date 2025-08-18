import ProjectDetails from '../ProjectDetails'; // Adjust path as needed

const imageList = [
  'SS1.png',
  'SS2.png', 
  'SS3.png',
  'SS4.png'
];

const communityHubData = {
  title: "Community Hub",
  description: "This web application serves as a vibrant hub for communities to share posts, comment in real-time, and interact with rich features — powered by Next.js, Express.js, and MySQL. Built to foster meaningful connections and discussions in digital communities with modern web technologies.",
  techStack: [
    "Next.js",
    "Tailwind CSS",
    "TypeScript", 
    "Node.js",
    "Express.js",
    "MySQL",
    "Socket.io",
    "React Query",
    "JWT Authentication",
    "Prisma ORM"
  ],
  highlights: [
    "📝 Create and share posts with rich text editor support, markdown formatting, and media attachments",
    "💬 Real-time commenting system for instant discussions with live notifications and thread management",
    "👍 Interactive voting system with upvote and downvote functionality for posts and comments",
    "⚡ Live updates without page refreshing using WebSocket connections for seamless user experience",
    "🔐 Secure user authentication and authorization with role-based access control and profile management",
    "🎨 Modern, responsive UI with dark/light theme support and customizable user preferences",
    "📊 Community analytics dashboard showing engagement metrics, trending posts, and user activity",
    "🔍 Advanced search and filtering capabilities to discover relevant content and active discussions",
    "📱 Mobile-optimized design ensuring smooth experience across all devices and screen sizes",
    "🚀 Performance optimized with server-side rendering, caching strategies, and lazy loading"
  ],
  imageList: imageList,
  imagePath: "/samriddi_setu/",
  githubUrl: "https://github.com/maneeshkumarr/Samriddhi-Setu-Community-Hub.git",
  //liveUrl: "https://community-hub-demo.vercel.app"
};

export default function CommunityHubPage() {
  return (
    <ProjectDetails
      title={communityHubData.title}
      description={communityHubData.description}
      techStack={communityHubData.techStack}
      highlights={communityHubData.highlights}
      imageList={communityHubData.imageList}
      imagePath={communityHubData.imagePath}
      githubUrl={communityHubData.githubUrl}
      //liveUrl={communityHubData.liveUrl}
    />
  );
}