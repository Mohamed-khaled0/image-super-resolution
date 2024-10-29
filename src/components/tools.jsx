import React from "react";
import {
  FaImage,
  FaFileImage,
  FaTiktok,
  FaVideo,
  FaCrop,
  FaCompressAlt,
  FaRedo,
  FaDiceD20,
  FaPaintBrush,
  FaTachometerAlt,
  FaUndoAlt,
  FaAdjust,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Tools() {
  return (
    <section
      id="explore-tools"
      className="py-12 bg-white dark:bg-gray-900 dark:text-white "
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-fuchsia-400">
            Explore More Tools
          </h2>
          <p className="text-2xl text-center mt-2 dark:text-white/[.7] text-gray-700 mb-8 px-8">
            Discover a variety of online tools to enhance your photos and videos
            easily with AI technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8  cursor-pointer mt-14">
          {tools.map((tool) => (
            <motion.div
              key={tool.title}
              className="dark:bg-gray-800  bg-white p-6 dark:text-white rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <tool.icon className="text-5xl mb-4 text-gray-800 dark:text-white" />
              <h3 className="text-xl font-semibold mb-2 ">{tool.title}</h3>
              <p className="text-lg mb-4 text-gray-800 dark:text-white">{tool.description}</p>
              <a
                href={tool.link}
                className="inline-block px-6 py-2 text-white font-semibold bg-fuchsia-600 rounded-lg shadow-md transition duration-300 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600"
              >
                Explore Tool
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tools = [
  {
    title: "Remove Image Background",
    description:
      "Easily remove the background from images with just a few clicks.",
    link: "/remove-background",
    icon: FaImage,
  },
  {
    title: "GIF to PNG",
    description: "Convert GIF files to PNG format effortlessly.",
    link: "/gif-to-png",
    icon: FaFileImage,
  },
  {
    title: "Remove TikTok Watermark",
    description: "Remove TikTok video watermarks in a snap.",
    link: "/remove-tiktok-watermark",
    icon: FaTiktok,
  },
  {
    title: "Remove Video Watermark",
    description: "Easily remove watermarks from videos.",
    link: "/remove-video-watermark",
    icon: FaVideo,
  },
  {
    title: "Crop Images",
    description: "Crop images to the size you need.",
    link: "/crop-images",
    icon: FaCrop,
  },
  {
    title: "Rotate Images",
    description: "Rotate images to any angle.",
    link: "/rotate-images",
    icon: FaRedo,
  },
  {
    title: "Compress Images",
    description: "Compress images without losing quality.",
    link: "/compress-images",
    icon: FaCompressAlt,
  },
  {
    title: "Add Filters",
    description: "Apply various filters to enhance your images.",
    link: "/add-filters",
    icon: FaDiceD20,
  },
  {
    title: "Adjust Colors",
    description: "Adjust colors and brightness of your images.",
    link: "/adjust-colors",
    icon: FaPaintBrush,
  },
  {
    title: "Resize Images",
    description: "Resize images to your desired dimensions.",
    link: "/resize-images",
    icon: FaTachometerAlt,
  },
  {
    title: "Undo Changes",
    description: "Undo changes made to your images easily.",
    link: "/undo-changes",
    icon: FaUndoAlt,
  },
  {
    title: "Adjust Brightness",
    description: "Adjust the brightness of your images.",
    link: "/adjust-brightness",
    icon: FaAdjust,
  },
  {
    title: "Convert PDF to Image",
    description: "Convert PDF pages to image formats.",
    link: "/pdf-to-image",
    icon: FaFileAlt,
  },
  {
    title: "Download YouTube Videos",
    description: "Download videos from YouTube easily.",
    link: "/download-youtube-videos",
    icon: FaDownload,
  },
];
