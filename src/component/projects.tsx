import React, { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoProject {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoId: string;
}

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  onClick: () => void;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  onClick,
}) => {
  return (
    <section id="Projects">
      <div
        onClick={onClick}
        className="group relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer hover:scale-[1.02]"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Play Button Overlay */}
          <div className=" absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoId,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-slate-900 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full h-full"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const projects: VideoProject[] = [
    {
      id: "1",
      title: "IBM APP Connect Demo",
      description: "IBM APP Connect REST API",
      thumbnailUrl: "https://img.youtube.com/vi/q-I23hkDPwI/maxresdefault.jpg",
      videoId: "q-I23hkDPwI",
    },
    {
      id: "2",
      title: "Consultant Service Portal Demo",
      description: "FDM Consultant service Portal demonstration",
      thumbnailUrl: "https://img.youtube.com/vi/6PdqN2zBK5w/maxresdefault.jpg",
      videoId: "6PdqN2zBK5w",
    },
    {
      id: "3",
      title: "Mentions Crawler",
      description:
        "Fullstack application with React, Material UI, Express",
      thumbnailUrl: "https://img.youtube.com/vi/eoHvDXE8yk4/maxresdefault.jpg",
      videoId: "eoHvDXE8yk4",
    },
    {
      id: "4",
      title: "Image Compression",
      description:
        "MATLAB program demonstrating JPEG compression using discrete cosine transformation",
      thumbnailUrl: "https://img.youtube.com/vi/0tReKY53FXc/maxresdefault.jpg",
      videoId: "0tReKY53FXc",
    },
    {
      id: "5",
      title: "Peer to Peer TCP Download Application",
      description:
        "Python torrent-like application using TCP sockets for local area network file sharing",
      thumbnailUrl: "https://img.youtube.com/vi/5zl6P-1v1X4/maxresdefault.jpg",
      videoId: "5zl6P-1v1X4",
    },
    {
      id: "6",
      title: "VGA Driver",
      description:
        "VGA driver for Xilinx Spartan-3E FPGA enabling Pong game display ",
      thumbnailUrl: "https://img.youtube.com/vi/s38G3kd-XLY/maxresdefault.jpg",
      videoId: "s38G3kd-XLY",
    },
    {
      id: "7",
      title: "Jarknoid",
      description:
        "Brick breaker game built with Java Swing ",
      thumbnailUrl: "images/project7.webp",
      videoId: "1_43MkpMEbk",
    },
    {
      id: "8",
      title: "Ping Pong Ball Detection",
      description:
        "Computer vision system using Raspberry Pi 4 ",
      thumbnailUrl: "https://img.youtube.com/vi/eCVxcNpz7TI/maxresdefault.jpg",
      videoId: "eCVxcNpz7TI",
    },
    {
      id: "9",
      title: "Python Application",
      description: "Python server to download files.",
      thumbnailUrl: "https://i.ytimg.com/vi/1_43MkpMEbk/maxresdefault.jpg",
      videoId: "5zl6P-1v1X4",
    },
  ];

  const handleOpenVideo = (project: VideoProject) => {
    setSelectedVideo(project);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Project Demonstrations
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Video walkthroughs of my recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <VideoCard
                key={project.id}
                title={project.title}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
                onClick={() => handleOpenVideo(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={handleCloseVideo}
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
        />
      )}
    </>
  );
};

export default Projects;
