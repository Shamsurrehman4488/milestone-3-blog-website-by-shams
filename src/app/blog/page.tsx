import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  views: string;
  comments: string;
  imageUrl: string;
  path: string;  // Added new prop for custom link path
}

const BlogCard = ({ category, title, description, views, comments, imageUrl, path }: BlogCardProps) => {
  return (
    <div className="bg-white mt-14 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-60" />
      </div>
      
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {views}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {comments}
            </span>
          </div>
          <div className="text-right">
            <Link href={path} className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const blogs = [
  {
    category: "Life Story",
    title: "What is the message in '12th Fail' movie?",
    description: "The message we get when someone says '12th Fail' is that the person studied till standard 12th but couldn't clear the final exam",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/blog1.jpeg",
    path: "/blog-1-details"  
  },
  {
    category: "The Moon",
    title: "The Moon Mission  Apollo 11 landing on the Moon",
    description: "Apollo 11, U.S. spaceflight during which commander Neil Armstrong and lunar module pilot Edwin (\u201cBuzz\u201d) Aldrin, Jr., on July 20, 1969, became the first people to land on the Moon",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/blog2.jpeg",
    path: "/blog-2-details"   
  },
  {
    category: "Places",
    title: "Do You Know About Amazone Forest?",
    description: "Amazon Rainforest, large tropical rainforest occupying the drainage basin of the Amazon River and its tributaries in northern South America and covering an area of 2,300,000 square miles (6,000,000 square km).",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/post6.jpg",
    path: "/blog-3-details"   
  },
  {
    category: "History",
    title: "The Historical Pyramids of Egyptian",
    description: "The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified Egyptian pyramids.[1][2] Approximately 80 pyramids were built within the Kingdom of Kush,",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/blog4.jpg",
    path: "/blog-4-details"   
  },
  {
    category: "Technology",
    title: "What is AI? A human guide to artificial intelligence",
    description: "Artificial intelligence (AI) is the hottest buzzword at the moment, and almost every major company is adding some kind of AI features to its product or service. Unfortunately, while the term sounds like it should have an easy and clear definition in northern South America and covering an area of 2,300,000 square miles (6,000,000 square km).",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/blog5.jpg",
    path: "/blog-5-details"   
  },
  {
    category: "Health",
    title: "What is a healthy breakfast?",
    description: "A good breakfast is one that supplies plenty of protein, complex carbohydrates and healthy fats. Together, healthy foods energize the body and ensure you can start your day without being distracted by hunger. While whole foods are the ideal, busy people may reach for ",
    views: "1.2K",
    comments: "6",
    imageUrl: "/images/blog6.jpg",
    path: "/blog-6-details"   
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}