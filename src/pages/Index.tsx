
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BusinessCard from "@/components/BusinessCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to H-Groups — Freshness You Can Trust
          </h1>
          <p className="reveal text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Pure dairy and premium meats, directly from farm to your table.
          </p>
          <div className="reveal flex flex-wrap justify-center gap-4">
            <Link to="/milky-cow">
              <Button className="bg-milkyCow hover:bg-milkyCow-dark text-white px-8 py-6 text-lg">
                Explore Milky Cow
              </Button>
            </Link>
            <Link to="/royal-butcher">
              <Button className="bg-royalButcher hover:bg-royalButcher-dark text-white px-8 py-6 text-lg">
                Visit Royal Butcher
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="reveal font-heading text-3xl md:text-4xl font-bold mb-6">Our Commitment to Quality</h2>
            <p className="reveal text-lg text-gray-700 mb-8">
              H-Groups brings together the finest dairy products and premium meats under one unified commitment to quality. 
              We believe in sustainable farming practices, ethical treatment of animals, and delivering only the freshest 
              products to your table. Our journey from farm to your family is guided by passion, tradition, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Cards Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl md:text-4xl font-bold text-center mb-12">Our Businesses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BusinessCard 
              title="Milky Cow" 
              description="Premium dairy farm offering pure, fresh cow and goat milk with no chemicals and lab-tested purity. Experience the true taste of nature with our organic dairy products." 
              imageUrl="/lovable-uploads/fe6d2005-9e7f-47cd-8925-e85a1c9f2755.png"
              buttonText="View More"
              link="/milky-cow"
              colorScheme="milkyCow"
            />
            <BusinessCard 
              title="Royal Butcher" 
              description="Specializing in fresh, hygienic, and halal-certified meat. We provide premium beef, mutton, and goat meat with hygienic processing and doorstep delivery." 
              imageUrl="/lovable-uploads/c8012bfc-6325-42e7-b28c-c224cc005f47.png"
              buttonText="View More"
              link="/royal-butcher"
              colorScheme="royalButcher"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="The milk from Milky Cow is unlike anything from the store. You can taste the difference of pure, farm-fresh dairy." 
              name="Sarah Johnson"
              title="Loyal Customer"
              imageUrl="https://randomuser.me/api/portraits/women/12.jpg"
            />
            <TestimonialCard 
              quote="Royal Butcher has the highest quality meat I've found. Their halal certification and hygienic practices give me peace of mind." 
              name="Ahmed Khan"
              title="Restaurant Owner"
              imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard 
              quote="I've been buying from H-Groups for over 3 years now. Their commitment to freshness and quality is unmatched." 
              name="Michael Taylor"
              title="Regular Customer"
              imageUrl="https://randomuser.me/api/portraits/men/67.jpg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
