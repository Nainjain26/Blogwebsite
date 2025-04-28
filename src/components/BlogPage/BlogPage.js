import React from "react";

const blogPosts = [
  {
    title: "Lorem Ipsum vel vulputate est elit varius",
    date: "April 28, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel magna lorem. Aenean eu nunc ac nunc tincidunt commodo.",
    image: null,
  },
  {
    title: "New partnered connection titles at X",
    date: "April 28, 2025",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique.",
    image: "https://via.placeholder.com/600x300?text=Image+1",
  },
  {
    title: "The Importance of Brand Perception",
    date: "April 28, 2025",
    description: "Maecenas pretium fermentum dui, vel pharetra elit. Morbi feugiat purus a odio gravida, in eleifend erat sagittis.",
    image: null,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Eu dignissim egestas",
    date: "April 28, 2025",
    description: "Curabitur tincidunt, massa nec congue varius, nisl erat iaculis turpis, vel fermentum sapien libero nec ligula.",
    image: "https://via.placeholder.com/600x300?text=Image+2",
  },
  {
    title: "Monitoring and Responding to Feedback",
    date: "April 28, 2025",
    description: "Integer sollicitudin magna a mauris bibendum, non volutpat lacus convallis. Phasellus eu risus at velit tristique.",
    image: null,
  },
  {
    title: "Vel varius eu volutpat",
    date: "April 28, 2025",
    description: "Pellentesque vehicula quam at cursus vehicula. Nullam suscipit quam eget lorem tincidunt, ut imperdiet nunc facilisis.",
    image: null,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Top header section */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Press Release</div>
          <button className="text-sm font-semibold text-yellow-400">Back to News</button>
        </div>
      </header>

      {/* Main Title */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">X faces $1 billion fine from EU over DSA violations</h1>
      </section>

      {/* Top Image */}
      <div className="max-w-6xl mx-auto px-4">
        <img
          src="https://via.placeholder.com/1200x600?text=Main+Image"
          alt="Main visual"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="text-gray-500">
            <p className="font-semibold mb-4">Contact</p>
            <p>press@example.com</p>
            <p>support@example.com</p>
          </div>

          <div className="text-gray-500">
            <p className="font-semibold mb-4">Social</p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
              <a href="#">LN</a>
              <a href="#">YT</a>
            </div>
          </div>
        </aside>

        {/* Blog Posts */}
        <main className="lg:w-3/4 space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="space-y-4">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-xs text-gray-400">{post.date}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Blog visual"
                  className="w-full h-auto rounded-md"
                />
              )}
              <p className="text-gray-600 text-sm">{post.description}</p>
            </article>
          ))}
        </main>

      </div>
    </div>
  );
}
