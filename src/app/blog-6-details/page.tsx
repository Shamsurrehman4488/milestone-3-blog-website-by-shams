'use client' 
 
 import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
}

interface BlogPostProps {
  category: string;
  title: string;
  description: string;
  likes: string;
  comments: number;
  imageUrl: string;
}

const BlogPost = ({
  category,
  title,
  description,
  likes,
   
}: BlogPostProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      content: commentText.trim(),
      date: new Date().toLocaleDateString()
    };

    setComments([...comments, newComment]);
    setName('');
    setCommentText('');
  };

  const handleDeleteComment = (commentId: string) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div>
    <article className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-8">
      <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] w-full">
        <Image
          src="/images/blog6.jpg"
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-4">
          <span className="text-blue-600 text-sm font-medium">
            {category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{likes}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{comments.length} comments</span>
            </div>
          </div>

          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Blogs
          </Link>
        </div>
        </div>
        </article>
      {/**comment section  */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg   shadow-lg my-8 ">
          <h2 className="text-2xl ml-6 lg:ml-10 font-bold mb-6">Comments</h2>
          
          <form onSubmit={handleSubmitComment} className="mb-8 w-[90%] mx-auto ">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Your Comment
              </label>
              <textarea
                id="comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Add a comment..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 mb-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
};

 
export default function BlogPostPage() {
  const blogData = {
    category: "Health",
    title: "What is a healthy breakfast?",
    description: "A good breakfast is one that supplies plenty of protein, complex carbohydrates and healthy fats. Together, healthy foods energize the body and ensure you can start your day without being distracted by hunger. While whole foods are the ideal, busy people may reach for prepared items for convenience. When including commercial or processed items, reading the nutrition information can help you avoid extra sugar, salt and fat,It helps to remember that any healthy food can work for breakfast, so go ahead and think outside the cereal box. Lean protein in the form of beans, fish or chicken breast can make its way onto your breakfast plate. Fresh veggies can add fiber, vitamins and minerals to omelets or smoothies.",
    likes: "1.2K",
    comments: 6,
    imageUrl: "/images/tech-banner.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <BlogPost {...blogData} />
    </div>
  );
}