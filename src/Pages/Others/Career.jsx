import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const CareerPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with a custom duration (optional)
  }, []);

  // Define job openings data (you can fetch this data from an API or database)
  const jobOpenings = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'We are looking for a talented Software Engineer to join our innovative tech team. If you are passionate about coding and love to solve complex problems, this position is for you.',
      imageSrc: 'https://i.ibb.co/HTF0RY3/medium-shot-woman-working-laptop-23-2150287680.jpg', // Image path for the Software Engineer job
      applyLink: 'https://i.ibb.co/HTF0RY3/medium-shot-woman-working-laptop-23-2150287680.jpg', // Live link for applying to the Software Engineer job
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'We are seeking an experienced Marketing Manager to lead our marketing campaigns and strategies. If you have a passion for marketing and a track record of success, we want to hear from you.',
      imageSrc: 'https://i.ibb.co/myCh5pn/business-person-looking-finance-graphs-23-2150461332.jpg', // Image path for the Marketing Manager job
      applyLink: 'https://example.com/apply-marketing-manager', // Live link for applying to the Marketing Manager job
    },
    {
      id: 3,
      title: 'Data Analyst',
      description: 'Join our data analytics team to analyze and interpret data trends. If you have strong analytical skills and a knack for finding insights in data, this role is a perfect fit.',
      imageSrc: 'https://i.ibb.co/34Pkc7X/data-analysis-marketing-business-report-concept-53876-124759.jpg', // Image path for the Data Analyst job
      applyLink: 'https://example.com/apply-data-analyst', // Live link for applying to the Data Analyst job
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-4xl font-bold text-blue-700 mb-4"
          data-aos="fade-up"
        >
          Explore Career Opportunities
        </h1>
        <p
          className="text-lg text-gray-700 mb-8"
          data-aos="fade-up"
        >
          Join our dynamic team and embark on an exciting career journey. Discover our current job openings and find your perfect fit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => (
            <div
              className="bg-white rounded-lg shadow-lg p-6"
              data-aos="fade-up"
              key={job.id}
            >
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={job.imageSrc} // Use the imageSrc from the job object
                  alt={`Job Opening ${job.id}`}
                  className="h-48 w-full object-cover mb-4"
                />
              </a>
              <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <a
                href={job.applyLink} // Use the applyLink from the job object
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800 block text-center"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
{/*         
        <p
          className="text-lg text-gray-700 mt-8"
          data-aos="fade-up"
        >
          We are a company dedicated to fostering growth and innovation. Our team is diverse, and we believe in providing equal opportunities to all. Join us on our mission to make a difference.
        </p>

        <p
          className="text-lg text-gray-700 mt-8"
          data-aos="fade-up"
        >
          Interested in a career with us? Explore our current job openings above and apply today. We look forward to having you as part of our team!
        </p> */}
      </div>
    </div>
  );
};

export default CareerPage;
