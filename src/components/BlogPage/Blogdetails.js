import React, { useEffect, useRef, useState } from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import RelatedArticles from "./RelatedArticles";

const sections = [
  {
    id: "section1",
    title: "Lorem ipsum ut vulputate est vitae vulputate nunc",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Magna consequat erat ut neque non accumsan risus eget enim. Arcu ullamcorper ultricies ac nunc. Vel at diam at amet et morbi amet. Eu consectetur nunc dictum nisi massa imperdiet vel adipiscing egestas. Quis molestie et magna ipsum. Placerat et at turpis velit libero. Purus est morbi mattis non sed condimentum.",
    ],
  },
  {
    id: "section2",
    title: "Faucibus. Nibh non laoreet vestibulum",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Tellus iaculis vitae tortor eget erat turpis nulla sed facilisis. Blandit in et sed sagittis enim interdum accumsan. Risus parturient commodo risus at non. Egestas cursus pellentesque nisi duis pellentesque erat velit lorem convallis. Odio vulputate egestas bibendum tincidunt nibh. Porttitor mauris eget dictum tincidunt euismod vehicula tristique. Convallis amet nulla vulputate egestas. Senectus enim et molestie eros eu feugiat diam interdum lacus. Mi gravida odio tempor tincidunt dui vulputate nunc. Morbi urna arcu aliquam sagittis elit condimentum. Ullamcorper pellentesque in etiam sapien nec blandit faucibus non. Neque augue nibh varius sapien volutpat et eros urna. Lacus bibendum nulla mattis rhoncus suscipit lobortis. Consectetur iaculis egestas non sagittis amet tellus diam.",
    ],
  },
  {
    id: "section3",
    title: "Isus parturient commodo risus at non",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Magna consequat erat ut neque non accumsan risus eget enim. Arcu ullamcorper ultricies ac nunc. Vel at diam at amet et morbi amet. Eu consectetur nunc dictum nisi massa imperdiet vel adipiscing egestas. Quis molestie et magna ipsum. Placerat et at turpis velit libero. Purus est morbi mattis non sed condimentum.",
      "Lorem ipsum dolor sit amet consectetur. Auctor sagittis malesuada lectus risus enim eleifend. Lacus amet lobortis arcu ultricies odio faucibus. Volutpat arcu eget sit id. Interdum sagittis egestas malesuada egestas mauris pulvinar quam interdum rhoncus massa. Nulla erat sollicitudin sapien risus semper donec urna. Bibendum habitasse egestas vitae amet duis sapien venenatis. Feugiat tempor tristique aliquam in dignissim est ac morbi. Non dolor id scelerisque fermentum ultricies. Erat nibh non vestibulum nunc dolor ut orci dapibus. Est eget gravida tortor enim. In cras sed vulputate dignissim ut risus duis lacus id. Scelerisque blandit facilisis congue nullam. Pellentesque diam neque condimentum in dignissim risus.",
    ],
  },
  {
    id: "section4",
    title: "The Importance of Brand Perception",
    subtitle: "Faucibus. Nibh non laoreet vestibulum",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Neque habitant aliquam donec urna id ridiculus sit odio. Vivamus diam massa sed scelerisque pharetra cursus. Nisi consectetur felis ut sit malesuada et ut mattis nisl risus ut turpis. Id nullam integer enim lectus. Mi et tellus malesuada tincidunt amet in. Aliquam nec varius et malesuada mattis risus ipsum. Egestas euismod in id. In nullam venenatis at dolor. In sollicitudin feugiat scelerisque faucibus. Nibh non laoreet condimentum commodo lectus tellus. Risus magna pharetra mattis rhoncus eu malesuada vel non in nec. Id imperdiet sapien velit habitant vitae. Vitae nec eget nibh pretium vivamus nullam. Lectus quis turpis egestas. Urna cras diam nibh et lacus. At quis suspendisse varius varius lacus mattis vulputate risus non nulla duis condimentum sed.",
    ],
  },
  {
    id: "section5",
    title:
      "Lorem ipsum dolor sit amet consectetur. In dignissim egestas ullamcorper justo mattis maecenas diam dictumst.",
    paragraphs: [
      "Lorem ipsum dolor sit amet adipiscing. Elit hendrerit mattis et ultricies tincidunt. Mi fringilla id facilisis et. Arcu sed eu scelerisque et velit pellentesque. In condimentum nunc porta neque a lorem in ut. Elementum justo in pellentesque mi nibh. Feugiat non. Nisl diam in habitasse congue massa porttitor. Nec proin habitasse a nulla at non elit euismod. Viverra maecenas sed rhoncus blandit. Ipsum eget sit. Tellus fermentum eu mi adipiscing dictum. Velit feugiat at pretium pretium.",
    ],
  },
];

const contents = [
  "1. Lorem ipsum faucibus aliquam",
  "2. Lorem ipsum consectetur consequat sit orci cras.",
  "3. Lorem ipsum porttitor enim lorem",
  "4. Lorem ipsum quis aliquam in turpis et turpis ut.",
  "5. Lorem ipsum tortor vitae tortor",
];

export default function BlogPage() {
  const [activeId, setActiveId] = useState("section1");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-white text-black px-4 py-8  scroll-smooth">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <span className="text-gray-500 font-semibold">Blogs</span><span className="text-gray-800 font-semibold"> / Mi sit
          egestas sit et pulvinar vel nisi arcu malesuada.</span>
        </div>
        <div className="space-x-2">
          <span className="bg-yellow-300 text-xs px-2 py-1 font-semibold text-black rounded">
            Marketing
          </span>
          <span className="bg-yellow-300 text-xs px-2 py-1 font-semibold text-black rounded">
            Feature
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="mt-3 max-w-7xl mx-auto">
        <div className="flex items-center mt-10 text-gray-500 text-xs space-x-2 ">
              <FaRegCalendarAlt />
              <span>Apr 02,2025</span>
              <FaRegClock />
              <span>12 Min read</span>
            </div>
        <h1 className="text-3xl font-bold mt-1">
          Faucibus. Nibh non laoreet vestibulum
        </h1>
        <p className="mt-2 text-sm text-gray-700 pb-5 max-w-7xl">
          Lorem ipsum dolor sit amet consectetur. Justo scelerisque non odio
          volutpat purus non. Venenatis vel amet ut ullamcorper pellentesque
          nec nunc vel. Accumsan in eget in luctus phasellus ullamcorper
          aliquam justo. Fermentum consectetur etiam consectetur molestie felis
          lorem quis justo at.
        </p>
      </div>
        

      {/* Main Content */}
      <div className="p-2 bg-[#fafafa]">
      <div className="mt-8 grid md:grid-cols-4 gap-10 max-w-7xl mx-auto ">
        {/* Sidebar */}
        <aside className="md:col-span-1 text-sm">
          <h3 className="font-semibold mb-4">Contents</h3>
          <ol className="space-y-2">
            {contents.map((item, i) => (
              <li
                key={sections[i].id}
                className={`pl-2 border-l-4 ${
                  activeId === sections[i].id
                    ? "font-bold text-black border-yellow-400"
                    : "text-gray-600 border-transparent"
                } transition-colors duration-200`}
              >
                <a href={`#${sections[i].id}`}>{item}</a>
              </li>
            ))}
          </ol>

          {/* Socials */}
          <h3 className="font-bold mt-8 mb-4">Share this article</h3>
          <div className="flex space-x-3 text-gray-200">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, idx) => (
                <Link
                  key={idx}
                  to="#"
                  target="_blank"
                  className="p-2 border rounded-full bg-black hover:scale-110 transition"
                >
                  <Icon />
                </Link>
              )
            )}
          </div>
        </aside>

        {/* Article Body */}
        <div className="md:col-span-3 space-y-10 text-sm">
          {sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="scroll-mt-24"
            >
              <h2 className="font-bold text-2xl text-black">
                {section.title}
              </h2>
              {section.subtitle && (
                <h3 className="font-medium text-gray-700 text-base mt-1">
                  {section.subtitle}
                </h3>
              )}
              {section.paragraphs.map((para, j) => (
                <p key={j} className="mt-2 leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <RelatedArticles />
      </div>
    </div>
  );
}
