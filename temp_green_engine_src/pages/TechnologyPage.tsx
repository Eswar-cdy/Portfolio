import React from 'react';

const TechnologyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-6">How AI & IoT Revolutionize Microgreen Cultivation</h1>
        <p className="text-xl mb-8">
          Our Greengine systems harness the power of artificial intelligence and Internet of Things (IoT) 
          technology to transform microgreen cultivation from an art to a precise science. Experience unprecedented 
          control, consistency, and convenience with our smart growing solutions.
        </p>
      </section>

      {/* Hero Section */}
      <section className="mb-16 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Smart Technology, Effortless Results</h2>
              <p className="text-xl mb-6">
                Our system is powered by IoT (Internet of Things) and AI algorithms that monitor and control critical 
                growing conditions: moisture, light, temperature, and humidity.
              </p>
              <blockquote className="border-l-4 border-green-400 pl-4 italic mb-6">
                "The system autonomously tracks your microgreens' growth, regulates climate through sensor feedback, 
                and alerts you via app notifications."
              </blockquote>
              <p className="text-lg">
                The result? Effortless, optimal growing conditions tailored for each plant variety, delivering 
                consistent harvests with minimal intervention.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-green-400">
                <img 
                  src="/images/technology/ai-iot-hero.png" 
                  alt="AI & IoT Technology for Smart Microgreens Growing"
                  className="w-full h-auto rounded"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<p class="text-gray-500">[AI & IoT Technology Illustration]</p>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Intelligent Features That Transform Growing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/technology/soil-moisture-sensor.png" 
                alt="Precision Soil Moisture Sensing"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="text-gray-400">[Soil Moisture Sensing Illustration]</div>';
                  }
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Precision Soil Moisture Sensing</h3>
              <p className="text-gray-700">
                Multiple calibrated sensors monitor growing medium moisture levels in real-time, ensuring your 
                microgreens receive optimal hydration. The system learns the specific needs of each variety and 
                adjusts watering cycles accordingly.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">[Plant Height Tracking Illustration]</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Real-Time Plant Height Tracking</h3>
              <p className="text-gray-700">
                Ultrasonic sensors measure plant growth with millimeter precision, providing valuable data on 
                growth rates and optimal harvest times. The AI analyzes growth patterns to predict harvest dates 
                and detect any developmental anomalies.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">[Automated Systems Illustration]</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Automatic Watering & Lighting</h3>
              <p className="text-gray-700">
                Intelligent automation handles routine tasks with precision. The system delivers water exactly when 
                needed and adjusts LED spectrum and intensity throughout the growth cycle to optimize photosynthesis 
                and nutritional development.
              </p>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">[Climate Control Illustration]</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Fuzzy Logic Climate Control</h3>
              <p className="text-gray-700">
                Advanced fuzzy logic algorithms maintain ideal temperature and humidity levels by continuously 
                analyzing environmental data and making micro-adjustments to ventilation, heating, and cooling 
                systems for optimal growing conditions.
              </p>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">[Dashboard Illustration]</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Interactive Web Dashboard</h3>
              <p className="text-gray-700">
                Access comprehensive growth statistics, system status, and historical data through our intuitive 
                web dashboard. Set custom alerts, adjust growing parameters, and track performance metrics from 
                any device, anywhere in the world.
              </p>
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">[Machine Learning Illustration]</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">Adaptive Machine Learning</h3>
              <p className="text-gray-700">
                Our systems get smarter with every growth cycle. Machine learning algorithms analyze successful 
                harvests and continuously refine growing parameters to improve yields, nutritional content, and 
                flavor profiles over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Diagram */}
      <section className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-green-50 p-6 border-b border-green-100">
          <h2 className="text-2xl font-bold text-green-800">The Greengine Technology Ecosystem</h2>
        </div>
        <div className="p-8">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-6">
            <p className="text-gray-500">[Comprehensive Technology Ecosystem Diagram]</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Data Collection Layer</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Multiple precision sensors</li>
                <li>Environmental monitoring</li>
                <li>Growth tracking cameras</li>
                <li>Water quality analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Processing & AI Layer</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Edge computing for real-time response</li>
                <li>Cloud processing for advanced analytics</li>
                <li>Machine learning optimization</li>
                <li>Predictive maintenance algorithms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">User Interface Layer</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Mobile app with push notifications</li>
                <li>Web dashboard with detailed analytics</li>
                <li>Voice assistant integration</li>
                <li>API for third-party integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-8">The Smart Growing Advantage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">For Home Growers</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Effortless Maintenance:</strong> Perfect for busy lifestyles with minimal daily intervention required</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Consistent Results:</strong> Reliable harvests even for beginners with no prior growing experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Resource Efficiency:</strong> Optimized water and energy usage for sustainable growing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Educational Value:</strong> Learn about plant science through real-time data and growth tracking</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">For Commercial Growers</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Scalable Production:</strong> Maintain quality and consistency across multiple growing units</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Labor Reduction:</strong> Automate routine tasks to reduce operational costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Data-Driven Decisions:</strong> Optimize growing parameters based on comprehensive analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Predictable Harvests:</strong> Meet delivery schedules with confidence through precise growth forecasting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-green-50 p-6 border-b border-green-100">
          <h2 className="text-2xl font-bold text-green-800">Case Study: AI-Optimized Nutrient Profiles</h2>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="mb-4">
                Our research team conducted a 6-month study comparing traditional growing methods with our AI-optimized 
                approach. The results were remarkable:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Nutritional Improvements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>42% increase in vitamin C content</li>
                    <li>37% higher antioxidant levels</li>
                    <li>28% increase in essential minerals</li>
                    <li>More consistent nutritional profiles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Production Advantages:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>31% reduction in water consumption</li>
                    <li>24% faster growth cycles</li>
                    <li>19% increase in yield per tray</li>
                    <li>Near-zero crop failures</li>
                  </ul>
                </div>
              </div>
              
              <p>
                The AI system continuously analyzed growing conditions and made micro-adjustments to light spectrum, 
                irrigation cycles, and environmental parameters. By the study's conclusion, the system had developed 
                custom growing profiles for each microgreen variety that consistently outperformed traditional methods.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-500">[Comparative Results Chart]</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="italic text-green-800">
                  "The ability of the system to make data-driven adjustments in real-time resulted in microgreens 
                  with exceptional nutritional density and flavor profiles that would be impossible to achieve with 
                  conventional growing methods."
                </p>
                <p className="text-right mt-2 font-medium">— Dr. Elena Reyes, Plant Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Technology FAQs</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-50 p-4 font-semibold">
              Do I need technical knowledge to use the smart growing system?
            </div>
            <div className="p-4">
              <p>
                Not at all. Our systems are designed with user-friendly interfaces that require no technical expertise. 
                The AI handles the complex decisions, while you interact with a simple, intuitive app that provides 
                clear information and straightforward controls.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-50 p-4 font-semibold">
              What happens if my internet connection goes down?
            </div>
            <div className="p-4">
              <p>
                All Greengine systems include local processing capabilities that continue to operate even without 
                internet connectivity. Your growing environment will maintain optimal conditions based on the most 
                recent settings. Once connectivity is restored, the system will sync with the cloud and resume 
                full functionality.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-50 p-4 font-semibold">
              How does the system learn to grow different microgreen varieties?
            </div>
            <div className="p-4">
              <p>
                Our AI starts with research-based growing profiles for each microgreen variety. As you grow, the 
                system monitors results and refines these profiles based on actual performance in your specific 
                environment. The more you grow, the smarter it gets, continuously optimizing for your conditions 
                and preferences.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-50 p-4 font-semibold">
              Can I customize growing parameters or override the AI?
            </div>
            <div className="p-4">
              <p>
                Absolutely. While the AI provides optimal settings, you maintain full control. Advanced users can 
                adjust any parameter through the dashboard, create custom growing recipes, or set specific goals 
                (like maximizing certain nutrients). The system will incorporate your preferences while still 
                providing guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Experience the Future of Microgreen Cultivation</h2>
        <p className="text-xl mb-6">Discover how our AI-powered growing systems can transform your microgreen journey.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-green-700 py-3 px-8 rounded-full font-bold hover:bg-green-100 transition-colors">
            Explore Grow Kits
          </button>
          <button className="bg-transparent text-white py-3 px-8 rounded-full font-bold border-2 border-white hover:bg-green-600 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
