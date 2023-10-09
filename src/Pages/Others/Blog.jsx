import React from 'react';
import img from '../../assets/toy-bricks-table-with-word-blog_144627-47465.jpg';

const Blog = () => {
    const posts = [
        {
            title: 'The Impact of Technology in Education',
            description: 'In today\'s fast-paced digital age, technology has had a profound impact on education. We explore how technology is reshaping traditional learning methods and revolutionizing the educational landscape. From online learning platforms to virtual classrooms, discover how these innovations are changing the way we acquire knowledge and skills. Dive into the benefits and potential challenges of tech-driven education.',
            imageUrl: 'https://i.ibb.co/VSJP6R1/social-media-business-concept-with-wooden-blocks-notebook-glasses-pen-keyboard-white-background-flat.jpg',
        },
        {
            title: 'Networking Tips for Educational Events',
            description: 'Effective networking is a crucial skill for personal and professional growth. In this comprehensive guide, we provide actionable tips and strategies for making the most of educational events. Learn the art of initiating meaningful conversations, building valuable connections, and establishing a strong professional network. We discuss the importance of elevator pitches, active listening, and effective follow-up techniques, ensuring you leave every event with valuable contacts.',
            imageUrl: 'https://i.ibb.co/mTyWbcz/pens-near-notebook-camera-earphones-papers-keyboard-23-2148037067.jpg',
        },
        {
            title: 'Career Advancement Through Lifelong Learning',
            description: 'In a rapidly evolving job market, continuous learning is the key to staying competitive. Explore the concept of lifelong learning and its transformative impact on career advancement. Discover a plethora of online courses, certifications, and resources available to help you expand your skillset and climb the career ladder. We discuss the advantages of upskilling, reskilling, and how embracing a growth mindset can unlock new professional opportunities.',
            imageUrl: 'https://i.ibb.co/NT3hw3n/hands-unrecognizable-woman-typing-laptop-cafe-1098-20151.jpg',
        },
        {
            title: 'Personal Growth: Unlocking Your Potential',
            description: 'Personal growth is a journey of self-discovery and improvement. In this inspiring article, we delve into practical tips and insights to help you unlock your full potential. Explore the importance of setting goals, embracing challenges, and developing a growth-oriented mindset. Learn how to cultivate habits that promote personal development and discover the positive impact it can have on various aspects of your life, from your career to your relationships.',
            imageUrl: 'https://i.ibb.co/vmW95sV/tablet-which-you-can-read-blog-1134-226.jpg',
        },
    ];

    return (
        <div className="p-4 md:p-8">
            <div className='h-[300px] md:h-[600px] w-full mb-6 md:mb-10' style={{ backgroundImage: `url(${img})` }}>
                <div className='pt-24 md:pt-96'>
                    <div className='bg-white mx-36 py-3'>
                        <h1 className='text-3xl  md:text-5xl font-bold text-black text-center md:tex-center '>Your Journey to Educational Event <br /> Excellence Begins Here! <br /></h1>
                    </div>
                    <h1 className='text-4xl text-center mb-5 md:text-6xl font-bold text-blue-700 mt-3'>Edu Event</h1>
                </div>
            </div>
            <h1 className="text-2xl md:text-3xl text-blue-700 font-bold mb-4">Welcome to the Edu Event Blog</h1>
            <p className="text-base md:text-lg text-gray-700">
                Explore our carefully curated articles on various aspects of education, career growth, personal development, and more. Our blog is your source for valuable insights and information that can help you excel in your educational journey and professional life.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mt-8 mb-4">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-[#FFECEC] rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center" >
                        <div className="md:flex-shrink-0">
                            <img src={post.imageUrl} alt={post.title} className="w-full md:w-64 h-48 md:h-auto object-cover rounded-lg" />
                        </div>
                        <div className="md:ml-4 mt-2 md:mt-0">
                            <h3 className="text-blue-700 text-lg md:text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 text-sm md:text-base">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-base md:text-lg text-gray-700 mt-8">
                Our blog is a dynamic space that is regularly updated with fresh and informative content. We are committed to providing you with valuable resources that empower you to thrive in the ever-evolving world of education and career development. Stay tuned for more insightful articles, expert interviews, and practical tips to help you achieve your goals and aspirations.
            </p>

            <p className="text-base md:text-lg text-gray-700 mt-8">
                Have a topic you'd like us to cover or questions about our content? Feel free to <a href="" className="text-blue-600 hover:underline">contact us</a>. We welcome your suggestions, feedback, and engagement. Edu Event is dedicated to serving your educational and career needs, and we value your input as we continue to expand and improve our blog.
            </p>
        </div>
    );
};

export default Blog;
