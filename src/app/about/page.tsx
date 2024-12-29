import Image from "next/image";
 

export default function HomePageSections() {
  const features = [
    {
      
      title: "Our Vision",
      description: "To be the go-to platform for curious minds seeking quality content and engaging discussions on a wide range of topics."
    },
    {
        
      title: "Our Mission",
      description: "To provide our readers with well-researched, thought-provoking content that informs, inspires, and fosters a community of lifelong learners."
    },
    {
      
      title: "Our Values",
      description: "Integrity in our research and reporting Respect for diverse perspectives Commitment to continuous learning Passion for sharing knowledge"
    },
    
  ];
 

  return (
    <div className="w-full md:w-[1250px] h-auto md:h-[800px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div className="bg-[#007580] p-6 sm:p-8 rounded-lg text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get to Know Me</h2>
          <p className="text-sm sm:text-base mb-6">
          Hello! I&apos;m Shams Ur Rehman, a passionate learner and aspiring full-stack developer. My journey began with a deep curiosity about technology and a vision to create meaningful projects that inspire and educate others.

From taking part in exciting coding challenges to honing my skills in TypeScript, JavaScript, HTML, and CSS, I&apos;ve been on an incredible path of growth. With guidance from my seniors and peers, I&apos;ve built a solid foundation in web development and am excited to expand into advanced technologies.

My mission is simple: to turn ideas into reality, share my knowledge with others, and make an impact in the tech world. As I continue my learning at Comprehensive College and beyond, I &apos m dedicated to achieving my goal of becoming a skilled full-stack developer.
          </p>
          <button className="bg-[#F9F9F926] w-full sm:w-auto text-white px-4 sm:px-6 py-2 rounded-lg mt-4  hover:bg-[#F9F9F940] transition-colors">
            Read more
          </button>
        </div>
        <div className="relative h-48 sm:h-64  md:h-[500px]  rounded-lg overflow-hidden bg-[#F8F8F8]">
          <Image
            src="/images/shams.png"
            alt="White chair"
            layout="fill"
            objectFit="contain"
            className=" rounded-lg"
          />
        </div>
      </div>

       
      <div className="mb-12 lg:mb-16 justify-between items-center ">
        
        <div className="grid grid-cols-1   lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6  bg-white border-2 rounded-lg text-left hover:shadow-md transition-shadow"
            >
               
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
 
           
        </div>
       
  );
}