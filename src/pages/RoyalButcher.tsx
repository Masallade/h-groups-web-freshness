
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Hygienic Processing",
    description: "Our state-of-the-art facility ensures the highest standards of cleanliness and food safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Halal Certified",
    description: "All our meat is processed according to strict Halal standards and certification.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Fresh Delivery",
    description: "We deliver fresh meat to your doorstep, maintaining the cold chain throughout transit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    )
  },
  {
    title: "Quality Livestock",
    description: "We source only top-quality animals raised ethically with no hormones or antibiotics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
];

const products = [
  {
    name: "Premium Beef",
    description: "Tender, marbled beef from grass-fed cattle, perfect for steaks and roasts.",
    image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80"
  },
  {
    name: "Lamb & Mutton",
    description: "Succulent lamb from young sheep and flavorful mutton from mature animals.",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&q=80"
  },
  {
    name: "Goat Meat",
    description: "Lean, protein-rich goat meat, perfect for traditional and modern recipes.",
    image: "https://images.unsplash.com/photo-1600180583258-6a9e3202f211?auto=format&fit=crop&q=80"
  },
];

const RoyalButcher = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80')" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Royal Butcher</h1>
          <p className="reveal text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fresh, hygienic, halal-certified premium meat.
          </p>
          <Link to="/contact" className="reveal">
            <Button className="bg-royalButcher hover:bg-royalButcher-dark text-white px-8 py-6 text-lg">
              Order Meat
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="reveal font-heading text-3xl font-bold mb-6 text-royalButcher-dark">About Royal Butcher</h2>
              <div className="reveal space-y-4 text-gray-700">
                <p>
                  Royal Butcher specializes in providing the highest quality halal meats to households and businesses.
                  Our commitment to excellence begins with sourcing healthy animals from ethical farms and continues 
                  through our meticulous processing and delivery procedures.
                </p>
                <p>
                  We understand that meat quality depends on many factors, from the animal's living conditions to the
                  final cut. That's why we oversee every step of the process, ensuring that our customers receive only
                  the finest products that meet our rigorous standards.
                </p>
                <p>
                  Our halal certification guarantees that all our meat is processed according to Islamic dietary laws,
                  with respect for the animals and strict adherence to traditional methods combined with modern hygiene standards.
                </p>
              </div>
            </div>
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?auto=format&fit=crop&q=80" 
                alt="Royal Butcher Shop" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12 text-royalButcher-dark">Our Commitment</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="reveal flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="text-royalButcher-dark mb-4">{feature.icon}</div>
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
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12 text-royalButcher-dark">Our Premium Meats</h2>
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
                  <h3 className="font-heading text-xl font-semibold mb-2 text-royalButcher-dark">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="reveal font-heading text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Source Selection",
                description: "We carefully select healthy animals from trusted farms that follow ethical practices.",
                color: "bg-royalButcher-light text-royalButcher-dark"
              },
              {
                step: "2",
                title: "Halal Processing",
                description: "Animals are processed according to Islamic principles by certified professionals.",
                color: "bg-royalButcher-light text-royalButcher-dark"
              },
              {
                step: "3",
                title: "Quality Inspection",
                description: "Every cut of meat undergoes rigorous inspection for quality and safety.",
                color: "bg-royalButcher-light text-royalButcher-dark"
              },
              {
                step: "4",
                title: "Fresh Delivery",
                description: "We maintain the cold chain throughout packaging and delivery to ensure freshness.",
                color: "bg-royalButcher-light text-royalButcher-dark"
              }
            ].map((process, index) => (
              <div key={index} className="reveal relative p-6 rounded-lg">
                <div className={`absolute top-0 left-0 w-full h-full rounded-lg opacity-20 ${process.color}`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full ${process.color.replace("light", "DEFAULT")} flex items-center justify-center mb-4`}>
                    <span className="font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-royalButcher-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="reveal font-heading text-3xl font-bold mb-6">Experience Premium Halal Meat</h2>
          <p className="reveal text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a household looking for quality meat or a business seeking reliable suppliers,
            Royal Butcher has the perfect solution for your needs.
          </p>
          <Link to="/contact" className="reveal">
            <Button className="bg-white text-royalButcher-dark hover:bg-gray-100 px-8 py-3 text-lg">
              Contact for Purchase
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default RoyalButcher;
