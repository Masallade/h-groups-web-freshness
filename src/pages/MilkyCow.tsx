
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Farm-fresh delivery",
    description: "Our milk goes from cow to your door within 24 hours, ensuring maximum freshness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: "Lab-tested purity",
    description: "Every batch of our milk undergoes rigorous testing to ensure purity and nutritional value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Hygienic packaging",
    description: "Our state-of-the-art packaging preserves freshness and prevents contamination.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Organic feed",
    description: "Our animals are fed 100% organic feed without hormones or harmful substances.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

const products = [
  {
    name: "Fresh Cow Milk",
    description: "Pure and rich in nutrients, our cow milk comes from grass-fed cows raised in open pastures.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80"
  },
  {
    name: "Organic Goat Milk",
    description: "Easier to digest and naturally homogenized, our goat milk is perfect for sensitive stomachs.",
    image: "https://images.unsplash.com/photo-1573566367465-9d202dcf0b91?auto=format&fit=crop&q=80"
  },
  {
    name: "Homemade Yogurt",
    description: "Traditional yogurt made from our fresh milk, rich in probiotics for gut health.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80"
  },
];

const MilkyCow = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1569977755292-3d1b9a7888e1?auto=format&fit=crop&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Milky Cow</h1>
          <p className="reveal text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Premium dairy farm offering pure, fresh cow and goat milk.
          </p>
          <Link to="/contact" className="reveal">
            <Button className="bg-milkyCow hover:bg-milkyCow-dark text-white px-8 py-6 text-lg">
              Contact for Supply
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1597825971922-5d722213bd06?auto=format&fit=crop&q=80" 
                alt="Milky Cow Farm" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="reveal font-heading text-3xl font-bold mb-6 text-milkyCow-dark">About Milky Cow</h2>
              <div className="reveal space-y-4 text-gray-700">
                <p>
                  Milky Cow is a premium dairy farm dedicated to producing the purest, most nutritious milk possible. 
                  Our journey begins with caring for our animals - ensuring they live stress-free lives with access to 
                  open pastures, clean water, and organic feed.
                </p>
                <p>
                  We believe that exceptional dairy products come from exceptional animal care. That's why our cows and 
                  goats are raised with love, receiving regular veterinary care and living in clean, spacious environments 
                  that allow them to express their natural behaviors.
                </p>
                <p>
                  Our commitment extends beyond animal welfare to environmental stewardship. We employ sustainable 
                  farming practices that protect our land for future generations while producing dairy products of 
                  uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12 text-milkyCow-dark">Why Choose Milky Cow?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="reveal flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-milkyCow-dark mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12 text-milkyCow-dark">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="reveal bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-milkyCow-dark">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-milkyCow-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="reveal font-heading text-3xl font-bold mb-6">Ready to Taste the Difference?</h2>
          <p className="reveal text-xl mb-8 max-w-2xl mx-auto">
            Experience the pure, farm-fresh taste of Milky Cow dairy products. 
            Contact us today to place your order or inquire about supply options.
          </p>
          <Link to="/contact" className="reveal">
            <Button className="bg-white text-milkyCow-dark hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MilkyCow;
