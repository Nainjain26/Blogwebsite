// pages/index.tsx

import React from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    image: "/s1.jpeg",
    tag: ["Featured", "Marketing"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s5.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s3.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s4.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s2.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/v1.jpeg",
    tag: ["Featured", "Marketing"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/v4.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s3.jpeg",
    tag: ["Marketing", "Featured"],
    title: "Roblox launches new ad format, strengthens partnership with Google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
];

const BlogCard = ({ image, tag, title, date, readTime }) => (
  <div className="space-y-4">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />

    <div className="flex gap-2 flex-wrap">
      {tag.map((t, i) => (
        <span
          key={i}
          className="bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded"
        >
          {t}
        </span>
      ))}
    </div>

    <h3 className="text-sm font-semibold leading-tight">{title}</h3>
    <div className="flex items-center text-gray-500 text-xs space-x-2">
      <FaRegCalendarAlt />
      <span>{date}</span>
      <FaRegClock />
      <span>{readTime}</span>
    </div>
  </div>
);

export default function FeatureBlog() {
  return (
    <div className="bg-[#fafafa]">
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-10 flex items-center gap-2">
        <span className="h-10 w-1 bg-yellow-500 inline-block"></span>
        Marketing Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            tag={blog.tag}
            title={blog.title}
            date={blog.date}
            readTime={blog.readTime}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          View all
        </button>
      </div>
    </section></div>
  );
}
