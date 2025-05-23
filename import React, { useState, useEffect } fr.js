import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Leaf, Heart, Brain, Moon, CheckCircle, Star, ArrowRight, Plus, Minus, Sparkles, Shield, Users } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('benefits');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Healing Harmony Tincture",
      strength: "1000mg",
      price: "$59.99",
      description: "Our signature blend for holistic healing and daily balance",
      benefits: ["Full-Body Healing", "Stress Relief", "Immune Support"],
      featured: true
    },
    {
      id: 2,
      name: "Peaceful Dreams Tincture",
      strength: "1500mg",
      price: "$79.99",
      description: "Restorative formula for deep healing during sleep",
      benefits: ["Deep Sleep", "Body Recovery", "Mind Restoration"]
    },
    {
      id: 3,
      name: "Vitality Boost Tincture",
      strength: "750mg",
      price: "$49.99",
      description: "Energizing blend to support your body's natural healing",
      benefits: ["Natural Energy", "Mental Clarity", "Physical Wellness"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Healing",
      description: "Support your body's natural healing processes with the power of CBD and hemp"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Immune Support",
      description: "Strengthen your body's defenses and promote overall wellness from within"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Mind-Body Balance",
      description: "Achieve harmony between mental clarity and physical wellbeing"
    }
  ];

  const healingStories = [
    {
      name: "Maria T.",
      rating: 5,
      text: "Mojo's Hemp House has been instrumental in my healing journey. After struggling with chronic pain for years, their tinctures gave me my life back."
    },
    {
      name: "David L.",
      rating: 5,
      text: "The healing power of these products is real. My anxiety has decreased, my sleep improved, and I feel like a whole new person."
    },
    {
      name: "Jennifer K.",
      rating: 5,
      text: "I came here looking for pain relief but found so much more. This is true healing - body, mind, and spirit."
    }
  ];

  const faqs = [
    {
      question: "How does CBD promote healing?",
      answer: "CBD works with your body's endocannabinoid system to promote natural healing, reduce inflammation, support immune function, and restore balance throughout your body and mind."
    },
    {
      question: "What makes Mojo's Hemp House different?",
      answer: "We believe in the healing power of hemp. Our products are crafted with intention, using only the finest organic hemp, and infused with our commitment to helping people heal naturally."
    },
    {
      question: "How long before I experience healing benefits?",
      answer: "Everyone's healing journey is unique. Some people feel relief within 30 minutes, while others may need consistent use for 2-4 weeks to experience the full healing benefits."
    },
    {
      question: "Can CBD help with chronic conditions?",
      answer: "Many of our customers have found relief from chronic pain, anxiety, insomnia, and inflammation. While we can't make medical claims, we've witnessed countless healing transformations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-green-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mojo's Hemp House</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#healing" className="text-gray-700 hover:text-purple-600 transition-colors">Our Healing Mission</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
              <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Benefits</a>
              <a href="#stories" className="text-gray-700 hover:text-purple-600 transition-colors">Healing Stories</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
            </div>

            <button className="hidden md:flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart (0)
            </button>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
              <a href="#healing" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Our Healing Mission</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Products</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Benefits</a>
              <a href="#stories" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Healing Stories</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-purple-600">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pt-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Your
              <span className="block text-purple-600">Healing Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              At Mojo's Hemp House, we believe in the profound healing power of hemp. Our premium CBD tinctures are crafted to help you heal naturally - body, mind, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105">
                Start Healing Today
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-all">
                Learn About CBD Healing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Mission Section */}
      <section id="healing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission: Healing People Naturally</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Mojo's Hemp House, we're more than just a CBD company - we're healers at heart. We've witnessed the transformative power of hemp in countless lives, from chronic pain sufferers finding relief to anxiety warriors discovering peace.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Every tincture we create is infused with the intention of healing. We source only the finest organic hemp, extract it with care, and test rigorously to ensure you receive nature's healing in its purest form.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Your healing journey is sacred to us. That's why we're committed to providing not just products, but hope, support, and a natural path to wellness.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-lg font-semibold text-gray-900">Join thousands who have found healing with Mojo's</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-green-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">100% Organic Hemp</h4>
                    <p className="text-gray-600">Grown with love, harvested with care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Third-Party Tested</h4>
                    <p className="text-gray-600">Ensuring purity and potency for your healing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Healing-Focused Formulas</h4>
                    <p className="text-gray-600">Each blend designed for specific healing needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compassionate Support</h4>
                    <p className="text-gray-600">We're here for every step of your journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Healing Power of Hemp</h2>
            <p className="text-xl text-gray-600">Discover how CBD can transform your wellness journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow border border-purple-100">
                <div className="text-purple-600 mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healing Tinctures</h2>
            <p className="text-xl text-gray-600">Each formula crafted with healing intention</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${product.featured ? 'ring-2 ring-purple-600' : ''}`}>
                {product.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR FOR HEALING
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-4">{product.strength} CBD</p>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="mb-6">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-green-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-green-700 transition-all transform hover:scale-105">
                    Begin Your Healing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Stories Section */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Healing Stories</h2>
            <p className="text-xl text-gray-600">From our community of healers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {healingStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.text}"</p>
                <p className="font-semibold text-gray-900">- {story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healing Questions Answered</h2>
            <p className="text-xl text-gray-600">Understanding your path to wellness</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-purple-100">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeFaq === index ? <Minus className="h-5 w-5 text-purple-600" /> : <Plus className="h-5 w-5 text-purple-600" />}
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-4 border-t">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Your Healing Awaits</h2>
          <p className="text-xl text-purple-100 mb-8">Join the Mojo's Hemp House family and discover the healing power of nature</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center mx-auto font-semibold">
            Start Your Healing Journey <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">Mojo's Hemp House</span>
            </div>
            <p className="text-gray-400">Healing people naturally with the power of hemp</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Our Healing Story</a></li>
              <li><a href="#" className="hover:text-purple-400">Lab Results</a></li>
              <li><a href="#" className="hover:text-purple-400">Healing Resources</a></li>
              <li><a href="#" className="hover:text-purple-400">Contact a Healer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Healing Guidance</a></li>
              <li><a href="#" className="hover:text-purple-400">Dosage Calculator</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400">Healing Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Join Our Healing Community</h4>
            <p className="text-gray-400 mb-4">Get healing tips and exclusive offers</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1" />
              <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Mojo's Hemp House. All rights reserved. | These statements have not been evaluated by the FDA.</p>
          <p className="mt-2">Made with 💚 for healing</p>
        </div>
      </footer>
    </div>
  );
};

export default App;