import React from 'react';
import { Helmet } from 'react-helmet';
import MarketingSection from './WhoWeAre';
import ContactSection from './AboutContact';

const aboutData = {
  hero: {
    title: "About Us",
    subtitle: "Where Marketing Minds Become Legends.",
    image: "/s7.jpeg",
    overlayImage: "/t1.jpeg"
  },
  whoWeAre: {
    heading: "Who We Are",
    text: "At Legends of Marketing (LOM), we're on a mission to empower marketers, entrepreneurs, and brands to go beyond results. From strategies that actually work to execution backed by creativity, we inspire progress through authenticity.\n\nWe believe marketing isn’t just ads and views — it’s about results, innovation, and people. Our team is a blend of diverse minds applying real-world inspired marketing know-how, driven by studied approaches with empathy and practical smarts that bridge the gap between theory and practice.",
    image: "/s2.jpeg"
  },
  ourStory: {
    heading: "Our Story",
    text: "Every great idea starts with a spark — and ours was the desire to decode what made brands win.\n\nLegends of Marketing was born from that curiosity. What started as a single blog aimed at helping marketing teams thrive, soon transformed into a strategic hub for brand development. We’ve since worked with countless startups, enterprises, and nonprofits, helping them connect, captivate, and convert.\n\nToday, we empower the next generation of change-makers by uniting them through community, real-world storytelling, and sustainable strategy. Join us, we’ve been expecting you.",
    image: "/s3.jpeg"
  }
};

const AboutUs = () => {
  return (
    <div className=" py-10">
      <Helmet>
        <title>About Us - Legends of Marketing</title>
        <meta name="description" content="Discover who we are at Legends of Marketing. Learn our story and what drives us to create legendary marketing experiences." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center max-w-7xl mx-auto mb-12">
  <h1 className="text-4xl md:text-5xl font-bold">
    About <span className="text-yellow-500">Us</span>
  </h1>
  <p className="mt-2 text-gray-600 text-base md:text-lg">
    {aboutData.hero.subtitle}
  </p>

  <div className="relative mt-10 max-w-4xl ">
    {/* Main Background Image */}
    <img
      src={aboutData.hero.image}
      alt="Team"
      className="w-full h-[420px] rounded-xl object-cover shadow-lg"
    />

    {/* Overlay Image (Laptop + Plant) */}
    <img
      src={aboutData.hero.overlayImage}
      alt="Overlay"
      className="absolute md:block hidden top-1/2  right-[-330px] translate-y-[-50%]   w-40 sm:w-52 md:w-[550px] rounded-xl shadow-xl border"
    />
  </div>
</div>

<div className='bg-[#fafafa] p-8'>
      {/* Who We Are Section */}
      <div className="md:flex gap-8 mb-12 items-start max-w-6xl mx-auto ">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">{aboutData.whoWeAre.heading}</h2>
          <p className="text-gray-800 whitespace-pre-line text-sm md:text-base leading-relaxed">{aboutData.whoWeAre.text}</p>
        </div>
        <div className="md:w-1/2">
          <img src={aboutData.whoWeAre.image} alt="Who We Are" className="rounded-lg w-full shadow-md h-[350px]" />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="md:flex gap-8 flex-col-reverse md:flex-row items-start max-w-6xl mx-auto">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={aboutData.ourStory.image} alt="Our Story" className="rounded-lg w-full shadow-md h-[350px]" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{aboutData.ourStory.heading}</h2>
          <p className="text-gray-800 whitespace-pre-line text-sm md:text-base leading-relaxed">{aboutData.ourStory.text}</p>
        </div>
      </div>
      </div>
      <MarketingSection/>
      <ContactSection/>
    </div>
  );
};

export default AboutUs;


