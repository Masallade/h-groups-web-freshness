
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description: "H-Groups established with a small dairy farm of just 5 cows."
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Added goat milk production and expanded cow dairy operations."
  },
  {
    year: "2015",
    title: "Royal Butcher",
    description: "Launched Royal Butcher to provide quality halal meat."
  },
  {
    year: "2018",
    title: "Certification",
    description: "Received organic certification for dairy and halal certification for meat."
  },
  {
    year: "2021",
    title: "Direct to Consumer",
    description: "Launched home delivery services for both dairy and meat products."
  },
  {
    year: "2023",
    title: "Modern Technology",
    description: "Implemented modern farming and processing technology while maintaining traditional quality."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About H-Groups</h1>
          <p className="reveal text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Our story, our mission, and our commitment to excellence.
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="reveal font-heading text-3xl font-bold mb-6">Our Story</h2>
              <div className="reveal space-y-4 text-gray-700">
                <p>
                  H-Groups began as a humble family farm with a passion for quality and a deep respect for traditional farming methods.
                  What started as a small dairy operation with just a handful of cows has grown into a thriving agricultural group that
                  serves thousands of customers while maintaining our founding principles.
                </p>
                <p>
                  The journey hasn't always been easy, but our dedication to quality has never wavered. Through challenges and growth,
                  we've remained committed to sustainable practices, animal welfare, and providing the finest products to our community.
                </p>
              </div>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80"
                alt="Farm History"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4 text-milkyCow-dark">Our Mission</h3>
              <p className="text-gray-700">
                To provide the highest quality dairy and meat products while maintaining sustainable farming practices,
                animal welfare standards, and supporting the local community. We believe that quality food starts with
                quality care for our animals and land.
              </p>
            </div>
            <div className="reveal bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-2xl font-bold mb-4 text-royalButcher-dark">Our Vision</h3>
              <p className="text-gray-700">
                To become a benchmark for quality in the agricultural industry, demonstrating that traditional values
                and modern practices can work in harmony to create exceptional products, sustainable businesses, and
                stronger communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our products, from farm to table.",
                icon: "🏆",
                color: "bg-amber-100 text-amber-800"
              },
              {
                title: "Sustainability",
                description: "We employ farming practices that respect and preserve our environment for future generations.",
                icon: "🌱",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices.",
                icon: "⚖️",
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Community",
                description: "We support our local communities through employment, education, and involvement.",
                icon: "🤝",
                color: "bg-purple-100 text-purple-800"
              }
            ].map((value, index) => (
              <div key={index} className="reveal p-6 rounded-lg shadow-md border border-gray-100 bg-white">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl", value.color)}>
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="relative reveal">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={cn("flex justify-center", index % 2 === 0 ? "md:justify-start" : "md:justify-end")}>
                  <div className="relative w-full md:w-5/12 bg-white rounded-lg shadow-md p-6 z-10">
                    {/* Dot on timeline */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    
                    <div className="mb-2 text-sm text-gray-500">{milestone.year}</div>
                    <h3 className="font-heading text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
