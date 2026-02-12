"use client";

import { useGetSingleBlogQuery } from "@/app/redux/api/blogApi";
import BlogShareButtons from "@/app/components/blog/blog-share-btn/BlogShareBtn";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
  

type Props = {
  slug: string;
};

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ResourceLink {
  subtitle: string;
  url: string;
}

interface ResourceCategory {
  title: string;
  order: number;
  items: ResourceLink[];
  isOpen: boolean;
}

interface BlogData {
  blog_title?: string;
  blog_description?: string;
  blog_thumb_image?: string;
  created_on?: string;
  resources?: string;
  [key: string]: any; 
}

export default function BlogClient({ slug }: Props) {
  const { data, isLoading, error } = useGetSingleBlogQuery(slug);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [processedHtml, setProcessedHtml] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Additional Resources State
  const [resources, setResources] = useState<ResourceCategory[]>([]);

  // Parse and set resources from API
  useEffect(() => {
    if (data?.data) {
      const blogData = data.data as BlogData;
      
      if (blogData.resources) {
        try {
          const parsedResources = JSON.parse(blogData.resources);
          
          // Sort by order and add isOpen property (first one open by default)
          const resourcesWithState = parsedResources
            .sort((a: ResourceCategory, b: ResourceCategory) => a.order - b.order)
            .map((resource: ResourceCategory, index: number) => ({
              ...resource,
              isOpen: index === 0 // First category open by default
            }));
          
          setResources(resourcesWithState);
        } catch (error) {
          console.error("Error parsing resources:", error);
          setResources([]);
        }
      } else {
        setResources([]);
      }
    }
  }, [data]);

  const toggleResourceCategory = (index: number) => {
    setResources(prev => 
      prev.map((category, i) => 
        i === index ? { ...category, isOpen: !category.isOpen } : category
      )
    );
  };

  useEffect(() => {
    if (!data?.data?.blog_description) return;

    // Extract h2, h3, and h4 tags and generate TOC
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.data.blog_description, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3, h4");

    const items: TocItem[] = [];
    headingElements.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.setAttribute("id", id);
      
      // Get the heading level (2, 3, or 4)
      const level = parseInt(heading.tagName.substring(1));
      
      items.push({
        id,
        text: heading.textContent || "",
        level,
      });
    });

    setTocItems(items);
    // Store the updated HTML with IDs
    setProcessedHtml(doc.body.innerHTML);
  }, [data]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (tocItems.length === 0 || !processedHtml) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Wait for DOM to be ready with processedHtml rendered
    const timeoutId = setTimeout(() => {
      const headingElements = new Map<string, Element>();

      // Collect all heading elements
      tocItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          headingElements.set(item.id, element);
        }
      });

      if (headingElements.size === 0) return;

      // Create intersection observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Find all intersecting entries
          const intersectingEntries = entries.filter(entry => entry.isIntersecting);

          if (intersectingEntries.length > 0) {
            // Sort by intersection ratio and position to get the most visible one
            intersectingEntries.sort((a, b) => {
              // Prioritize elements closer to the top of viewport
              return a.boundingClientRect.top - b.boundingClientRect.top;
            });

            const mostVisible = intersectingEntries[0];
            setActiveId(mostVisible.target.id);
          }
        },
        {
          rootMargin: "-100px 0px -70% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );

      // Observe all headings
      headingElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [tocItems, processedHtml]);

  const scrollToSection = (id: string) => {
    // Immediately set active state when clicking
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load blog</p>;

  const blog = data?.data as BlogData;

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="bg-[linear-gradient(45deg,#fcf6dc,transparent)] pt-[85px] sm:pt-24 md:pt-28 lg:pt-32 pb-12">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="font-poppins font-semibold text-[18px] text-center  text-[#1F1F1F] mb-6 leading-tight mt-[80px]">Digital Marketing Strategy</div>
          {/* Blog Title */}
          <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#1F1F1F] mb-6 leading-tight">
            {blog?.blog_title}
          </h1>

     
          <p className="text-center text-[#1F1F1F] text-sm md:text-base mb-8">
            Last updated on {blog?.updated_on ? blog.updated_on : "N/A"}
          </p>

          <div className="max-w-4xl mx-auto bg-white  rounded-lg p-8 md:p-10 text-center border  border-gray-200">
            <h2 className="font-poppins font-semibold text-lg md:text-xl mb-4 uppercase tracking-wide">
              NEED HELP WITH YOUR MARKETING STRATEGY?
            </h2>
            <p className="text-[#707070] tracking-normal font-poppins text-[16px] font-normal leading-[30px] mb-6">
              If you're looking to take control of your sales and marketing with a proven system built for the age of AI, IMPACT can help. We can guide you on how to control your growth, stop relying on agencies, and become the most known and trusted brand in your market.
            </p>

           
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-for-digital-requirements" className="bg-[#F4BE00] hover:bg-[#e5b000] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 w-full sm:w-auto text-center">
                Contact Us
              </Link>
              <a 
                href="https://api.whatsapp.com/send?phone=918586932861" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-3 rounded-full border-2  border-gray-200 transition-colors duration-200 w-full sm:w-auto text-center inline-block"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-content-wrapper section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="flex justify-center font-poppins !font-bold !text-[25px] lg:!text-[50px] leading-[116%] tracking-normal pb-10 capitalize items-center gap-1">
            <span className="!text-[#1F1F1F] !text-[50px]">–</span> OVERVIEW{" "}
            <span className="!text-[#1F1F1F] !text-[50px]">–</span>
          </h2>

      
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      
            <div className="w-full lg:w-2/3 order-2 lg:order-1">
           
              {blog?.blog_thumb_image && (
                <div className="mb-8">
                  <img
                    src={blog.blog_thumb_image}
                    alt={blog?.blog_title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              <div className="blog-content">
                <div
                  ref={contentRef}
                  className="prose max-w-none blog-description"
                  dangerouslySetInnerHTML={{
                    __html: processedHtml || blog?.blog_description || "",
                  }}
                />
              </div>
            </div>

            {/* Right Column - TOC and Share Buttons */}
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                {tocItems.length > 0 && (
                  <div className="rounded-lg p-6  border  border-gray-200">
                    <h2 className="font-poppins font-bold text-xl lg:text-2xl mb-4 ">
                      Table of Contents
                    </h2>
                    <nav>
                      <ol className="space-y-2">
                        {tocItems.map((item, index) => (
                          <li 
                            key={item.id}
                            style={{ 
                              paddingLeft: `${(item.level - 2) * 1}rem`
                            }}
                          >
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className={`text-left w-full transition-colors duration-200 hover:text-[#f4be00] text-sm ${
                                activeId === item.id
                                  ? "text-[#f4be00] font-semibold"
                                  : "text-[#707070] font-poppins" 
                              }`}
                            >
                              <span className="text-[#f4be00] mr-2 font-medium">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {item.text}
                            </button>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                )}

                {/* Share Buttons */}
                <div className=" border  border-gray-200 rounded-lg px-6 py-4">
                  <BlogShareButtons />
                </div>

                {/* Additional Resources Section - Now Dynamic */}
                {resources.length > 0 && (
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="font-poppins font-bold text-xl lg:text-2xl ">
                        Additional Resources
                      </h2>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {resources.map((category, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-b-0">
                          <button
                            onClick={() => toggleResourceCategory(index)}
                            className="w-full px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <span className="font-poppins font-semibold text-sm text-left text-[#1F1F1F] pr-4 leading-relaxed">
                              {category.title}
                            </span>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mt-0.5">
                              <svg
                                className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${
                                  category.isOpen ? "rotate-0" : "rotate-180"
                                }`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 15l7-7 7 7"></path>
                              </svg>
                            </div>
                          </button>
                          
                          {category.isOpen && category.items && category.items.length > 0 && (
                            <div className="px-6 pb-4 space-y-3">
                              {category.items.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  href={link.url}
                                  className="flex items-start gap-3 group"
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <svg 
                                      className="w-5 h-5 text-gray-400" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                  </div>
                                  <span className="text-sm text-[#707070] group-hover:text-[#f4be00] transition-colors duration-200 leading-relaxed">
                                    {link.subtitle}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}