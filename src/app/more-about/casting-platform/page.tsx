import ProjectDetails from '../ProjectDetails';

const imageList = [
  'splash-1.png', 'splash-2.png', 'splash-3.png', 'login.png',
  'forgot-password.png', 'enter-otp.png', 'set-password.png', 'reset-success.png',
  'signup-1.png', 'signup-2.png', 'signup-3.png', 'signup-4.png', 'signup-5.png',
  'talent-feed.png', 'message-talent.png', 'profile-talent.png', 'sucess-logout.png',
  'post-audition.png', 'find-talent.png', 'rersource.png', 'new-aud-1.png',
  'new-aud-2.png', 'aud-posted.png', 'post-view.png', 'my-resource.png', 'add-res-1.png',
  'add-res-2.png', 'res-live.png', 'settings.png'
];

const castingPlatformData = {
  title: "Casting Platform",
  description: "A sleek, production-ready platform built for aspiring talents and casting teams with seamless UX, robust backend, and mobile-first design. This comprehensive solution bridges the gap between talent seekers and performers with intuitive interfaces and powerful features.",
  techStack: [
    "Next.js",
    "Tailwind CSS", 
    "TypeScript",
    "Node.js",
    "MySQL",
    "Framer Motion",
    "React Hook Form",
    "JWT Authentication"
  ],
  highlights: [
    "🧑‍🎤 Comprehensive actor & admin onboarding with customizable profiles and portfolio management",
    "🎬 Advanced casting call management system with detailed filtering and search capabilities",
    "📲 Mobile-first responsive UI with elegant transitions and micro-interactions",
    "🔐 Enterprise-grade security with JWT authentication, role-based access control, and secure media storage",
    "🎯 Real-time messaging system between talents and casting directors",
    "📊 Analytics dashboard for tracking audition performance and engagement metrics",
    "🔍 Advanced search and filtering system for finding the perfect talent match",
    "☁️ Cloud-based media management with optimized image and video handling"
  ],
  imageList: imageList,
  imagePath: "/casting_platform/",
  githubUrl: "https://github.com/username/casting-platform",
  liveUrl: "https://casting-platform-demo.vercel.app" // Optional - remove if no live demo
};

export default function CastingPlatformPage() {
  return (
    <ProjectDetails
      title={castingPlatformData.title}
      description={castingPlatformData.description}
      techStack={castingPlatformData.techStack}
      highlights={castingPlatformData.highlights}
      imageList={castingPlatformData.imageList}
      imagePath={castingPlatformData.imagePath}
      githubUrl={castingPlatformData.githubUrl}
      liveUrl={castingPlatformData.liveUrl}
    />
  );
}