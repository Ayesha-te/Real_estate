import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, User } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyType: '',
      budget: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Suite 301, Elite Tower',
        'Clifton Block 5, Karachi',
        'Sindh, Pakistan'
      ],
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+92 21 3456 7890',
        '+92 300 1234567',
        'Available 24/7'
      ],
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@eliteestate.pk',
        'sales@eliteestate.pk',
        'support@eliteestate.pk'
      ],
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: 12:00 PM - 5:00 PM'
      ],
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const offices = [
    {
      name: 'Main Office - Clifton',
      address: 'Suite 301, Elite Tower, Clifton Block 5',
      phone: '+92 21 3456 7890',
      email: 'clifton@eliteestate.pk',
      manager: 'Ahmed Hassan',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'DHA Branch',
      address: 'Plot 123, DHA Phase 5, Commercial Area',
      phone: '+92 21 3456 7891',
      email: 'dha@eliteestate.pk',
      manager: 'Sarah Khan',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Gulshan Office',
      address: 'Block 15, Gulshan-e-Iqbal, Main University Road',
      phone: '+92 21 3456 7892',
      email: 'gulshan@eliteestate.pk',
      manager: 'Muhammad Ali',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-black/60"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to find your dream property? Our expert team is here to help you every step of the way
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`p-4 rounded-xl ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Property Buying Inquiry</option>
                      <option value="selling">Property Selling Inquiry</option>
                      <option value="renting">Rental Inquiry</option>
                      <option value="investment">Investment Consultation</option>
                      <option value="valuation">Property Valuation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="plot">Plot</option>
                      <option value="commercial">Commercial</option>
                      <option value="office">Office</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="0-50">Up to 50 Lac</option>
                      <option value="50-100">50 Lac - 1 Crore</option>
                      <option value="100-200">1 Crore - 2 Crore</option>
                      <option value="200-500">2 Crore - 5 Crore</option>
                      <option value="500+">5 Crore+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                      placeholder="Tell us about your property requirements or any questions you have..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                <p className="text-lg text-gray-600">
                  Visit our main office in the heart of Clifton, Karachi
                </p>
              </div>

              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-gray-500">Google Maps integration coming soon</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Schedule a Visit</h3>
                <p className="mb-6">
                  Want to visit our office? Schedule an appointment and we'll have our team ready to assist you.
                </p>
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple locations across Karachi to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{office.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emerald-600" />
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-emerald-600" />
                      <p className="text-gray-600 text-sm">{office.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-emerald-600" />
                      <p className="text-gray-600 text-sm">Manager: {office.manager}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I schedule a property viewing?",
                answer: "You can schedule a property viewing by calling us, filling out our contact form, or clicking the 'Schedule Visit' button on any property listing. We'll arrange a convenient time for you."
              },
              {
                question: "What documents do I need to buy a property?",
                answer: "You'll need your CNIC, bank statements, salary certificate (if employed), and proof of funds. Our team will guide you through the complete documentation process."
              },
              {
                question: "Do you provide property valuation services?",
                answer: "Yes, we offer professional property valuation services using AI-powered market analysis and expert assessment. Contact us to schedule a valuation."
              },
              {
                question: "How accurate are your AI market insights?",
                answer: "Our AI system analyzes thousands of data points including recent sales, market trends, and economic indicators. While highly accurate, we recommend combining AI insights with expert consultation."
              },
              {
                question: "What areas of Karachi do you cover?",
                answer: "We cover all major areas of Karachi including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Malir, and surrounding areas. Contact us for specific location inquiries."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;