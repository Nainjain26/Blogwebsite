// pages/index.tsx

import React from "react";

const blogs = [
  {
    image: "/s1.jpeg",
    tag: "Featured",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s5.jpeg",
    tag: "Marketing",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s3.jpeg",
    tag: "Marketing",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s4.jpeg",
    tag: "Featured",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/s2.jpeg",
    tag: "Marketing",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "v1.jpeg",
    tag: "Featured",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "/v4.jpeg",
    tag: "Marketing",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
  {
    image: "s3.jpeg",
    tag: "Featured",
    title: "Roblox launches new ad format, strengthens partnership with google",
    date: "Apr 05, 2025",
    readTime: "14 min read",
  },
];

const BlogCard = ({
  image,
  tag,
  title,
  date,
  readTime,
}) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          {tag}
        </span>
      </div>
      <h3 className="text-sm font-semibold leading-tight">{title}</h3>
      <div className="flex items-center text-gray-400 text-xs space-x-2">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default function FeatureBlog() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-2">
        <span className="h-6 w-1 bg-yellow-500 inline-block"></span>
        Featured Blogs
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
    </section>
  );
}
