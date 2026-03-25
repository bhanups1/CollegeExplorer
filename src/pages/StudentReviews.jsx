// File: src/pages/StudentReviews.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';

const StudentReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      college: "IES University, Bhopal",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "This platform helped me find the perfect college with detailed comparisons. The virtual tour feature was amazing!",
      course: "B.Tech Computer Science (2023-27)",
      placement: "Placed at Microsoft (₹18 LPA)"
    },
    {
      name: "Priya Patel",
      college: "Sharda University, Noida",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "The admission process guidance was exceptional. I got direct connect with college counselors through this site.",
      course: "MBA (2022-24)",
      placement: "Placed at Deloitte (₹12 LPA)"
    },
    {
      name: "Amit Singh",
      college: "Amity University, Mumbai",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      comment: "The scholarship information saved me ₹1.2 lakh in fees! The college rankings are very accurate.",
      course: "BBA (2021-24)",
      placement: "Placed at HDFC Bank (₹8 LPA)"
    },
    {
      name: "Neha Gupta",
      college: "LPU, Punjab",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment: "Placement statistics helped me choose wisely. Got placed at Amazon with ₹12 LPA package!",
      course: "B.Tech CSE (2020-24)",
      placement: "Placed at Amazon (₹15 LPA)"
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`text-${i < rating ? 'yellow-400' : 'gray-300'} text-lg`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Modern Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-4"
        >
          <RiGraduationCapFill className="text-purple-600 text-4xl mr-3" />
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Success Stories
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Students Say</span>
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real experiences from students who transformed their careers
        </p>
      </div>

      {/* Modern Review Card */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={activeReview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            {/* Student Image Section - Modern Design */}
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90"></div>
              <img
                src={reviews[activeReview].image}
                alt={reviews[activeReview].name}
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{reviews[activeReview].name}</h3>
                <p className="text-blue-100">{reviews[activeReview].college}</p>
                <div className="mt-2">
                  <StarRating rating={reviews[activeReview].rating} />
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>

            {/* Review Content - Modern Layout */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center mb-4">
                <IoMdSchool className="text-purple-500 text-xl mr-2" />
                <span className="text-sm font-medium text-gray-500">{reviews[activeReview].course}</span>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{reviews[activeReview].comment}"
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">{reviews[activeReview].placement}</span>
                </div>
              </div>

              {/* Modern Navigation */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${activeReview === index ? 'bg-purple-600 w-6' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={prevReview}
                    className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm border border-gray-200"
                  >
                    <FaArrowLeft />
                  </button>
                  <button 
                    onClick={nextReview}
                    className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition shadow-lg"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Testimonials - Modern Grid */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Campus Life Experiences</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">See what our students say about their college journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative pt-[56.25%] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Student Journey #{item}</h4>
                <p className="text-gray-600 text-sm mb-4">Watch authentic campus experiences</p>
                <button className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center">
                  Watch Story
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="md:flex">
          <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-3">Share Your Story</h3>
            <p className="text-blue-100 mb-6">Help future students make the right choice</p>
            <RiGraduationCapFill className="text-white/20 text-6xl self-end" />
          </div>
          <div className="md:w-3/5 p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Become a Student Ambassador</h4>
            <p className="text-gray-600 mb-6">Join our community of students sharing authentic experiences about their colleges</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Submit Your Review
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentReviews;