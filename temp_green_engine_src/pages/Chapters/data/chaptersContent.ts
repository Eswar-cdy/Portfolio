export interface Chapter {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  readingTime: number; // minutes
  icon: string; // emoji
  tags: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'introduction',
    title: 'The Green Revolution Begins',
    subtitle: 'How a Simple Idea Sparked a Movement',
    description: 'Discover how MicroHarvest was born from a passion for sustainable nutrition and the vision to transform urban farming.',
    icon: '🌱',
    tags: ['Origin Story', 'Vision', 'Sustainability'],
    readingTime: 5,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>The Spark of an Idea</h2>
        <p>
          It all started in a small apartment kitchen in 2019. Alex Chen, a software engineer with a passion for healthy eating, 
          was frustrated by the lack of fresh, nutrient-dense greens available in urban grocery stores. The produce section was 
          filled with wilted lettuce that had traveled thousands of miles, losing most of its nutritional value along the way.
        </p>
        
        <p>
          "There has to be a better way," Alex thought, staring at yet another disappointing salad. That evening, while researching 
          alternative food sources, Alex stumbled upon microgreens—young vegetable greens that are harvested just after the first 
          true leaves have developed. The nutritional data was astounding: some microgreens contained up to 40 times more nutrients 
          than their mature counterparts.
        </p>

        <h2>A Vision Takes Root</h2>
        <p>
          What started as a personal experiment with a few seed trays on a windowsill quickly became an obsession. Alex began 
          growing broccoli, radish, and sunflower microgreens, documenting every step of the process. The results were remarkable—
          vibrant, flavorful greens that were ready to harvest in just 7-14 days.
        </p>

        <blockquote>
          "I realized that if I could grow these in my tiny apartment, imagine what we could do at scale. This wasn't just about 
          fresh food—it was about revolutionizing how cities feed themselves."
          <footer>— Alex Chen, Co-Founder</footer>
        </blockquote>

        <h2>The Problem We Set Out to Solve</h2>
        <p>
          The modern food system is broken. The average meal travels 1,500 miles from farm to plate, consuming massive amounts 
          of fossil fuels and generating significant carbon emissions. By the time produce reaches consumers, it has lost a 
          substantial portion of its nutritional value. Urban areas, in particular, suffer from "food deserts" where access to 
          fresh, healthy food is limited.
        </p>

        <p>
          MicroHarvest was founded on three core principles:
        </p>

        <ul>
          <li><strong>Hyperlocal Production:</strong> Grow food where people live, eliminating long supply chains</li>
          <li><strong>Maximum Nutrition:</strong> Harvest at peak nutrient density for optimal health benefits</li>
          <li><strong>Sustainable Methods:</strong> Use minimal water, no pesticides, and renewable energy</li>
        </ul>

        <h2>The Journey Ahead</h2>
        <p>
          This is the story of how a simple idea grew into a thriving business that's changing the way people think about food. 
          It's a story of challenges overcome, partnerships forged, and a vision that continues to evolve. Welcome to the 
          MicroHarvest story.
        </p>
      </div>
    `
  },
  {
    id: 2,
    slug: 'founders',
    title: 'Meet the Founders',
    subtitle: 'The Team Behind the Vision',
    description: 'Learn about Alex, Dr. Morgan, and Jamie—the three co-founders who combined their expertise to build MicroHarvest.',
    icon: '👥',
    tags: ['Team', 'Leadership', 'Expertise'],
    readingTime: 6,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>Alex Chen - Co-Founder & CEO</h2>
        <p>
          Alex Chen's journey to founding MicroHarvest began in Silicon Valley, where they spent five years as a software 
          engineer at a major tech company. Despite professional success, Alex felt unfulfilled. "I was building products 
          that kept people glued to screens," Alex recalls. "I wanted to create something that genuinely improved people's 
          health and the planet."
        </p>

        <p>
          With a background in computer science and a newfound passion for urban agriculture, Alex brought a unique perspective 
          to farming. They saw opportunities to apply technology—sensors, automation, data analytics—to optimize growing 
          conditions and maximize efficiency. This tech-forward approach would become a cornerstone of MicroHarvest's strategy.
        </p>

        <h2>Dr. Morgan Rivera - Co-Founder & Chief Science Officer</h2>
        <p>
          Dr. Morgan Rivera is a plant biologist with a Ph.D. from Cornell University, specializing in plant nutrition and 
          sustainable agriculture. Before joining MicroHarvest, Dr. Rivera spent a decade researching crop optimization 
          techniques at a leading agricultural research institute.
        </p>

        <blockquote>
          "Microgreens represent the perfect intersection of nutrition, sustainability, and scalability. When Alex approached 
          me with this idea, I knew we could create something truly impactful."
          <footer>— Dr. Morgan Rivera, Chief Science Officer</footer>
        </blockquote>

        <p>
          Dr. Rivera's expertise proved invaluable in developing MicroHarvest's proprietary growing methods. They identified 
          the optimal nutrient solutions, lighting spectrums, and harvest windows for each microgreen variety, ensuring 
          maximum nutritional density and flavor.
        </p>

        <h2>Jamie Okonkwo - Co-Founder & COO</h2>
        <p>
          Jamie Okonkwo brought the business acumen and operational expertise needed to turn a great idea into a viable company. 
          With an MBA from Stanford and experience scaling startups, Jamie had a proven track record of building efficient 
          operations and sustainable business models.
        </p>

        <p>
          "When I first tasted Alex's microgreens, I was blown away," Jamie remembers. "But what really excited me was the 
          business potential. This wasn't just a niche health food—it was a scalable solution to real problems in our food 
          system."
        </p>

        <h2>A Perfect Partnership</h2>
        <p>
          The three founders met at a sustainable agriculture conference in 2019. Alex was presenting their apartment growing 
          experiments, Dr. Rivera was keynoting on plant nutrition, and Jamie was scouting for investment opportunities. By 
          the end of the conference, they had sketched out the basic business plan on a napkin.
        </p>

        <p>
          Their complementary skills created a powerful synergy:
        </p>

        <ul>
          <li><strong>Alex:</strong> Technology and automation systems</li>
          <li><strong>Dr. Rivera:</strong> Scientific research and growing protocols</li>
          <li><strong>Jamie:</strong> Business strategy and operations</li>
        </ul>

        <p>
          Together, they formed a team capable of tackling the complex challenges of building a modern agricultural company.
        </p>
      </div>
    `
  },
  {
    id: 3,
    slug: 'early-days',
    title: 'From Garage to Greenhouse',
    subtitle: 'The First Year of Growth',
    description: 'Follow MicroHarvest\'s journey from a garage operation to a professional growing facility, including early wins and hard lessons learned.',
    icon: '🏠',
    tags: ['Startup', 'Growth', 'Challenges'],
    readingTime: 7,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>The Garage Days</h2>
        <p>
          In January 2020, the three founders pooled their savings—$50,000 total—and converted Jamie's two-car garage into 
          MicroHarvest's first growing facility. They installed LED grow lights, built custom shelving units, and set up a 
          basic irrigation system. The space could accommodate about 200 growing trays.
        </p>

        <p>
          Those first few months were a blur of 16-hour days. Alex handled the technical setup and automation, Dr. Rivera 
          perfected the growing protocols, and Jamie managed sales and distribution. They all took turns harvesting, packaging, 
          and delivering orders.
        </p>

        <h2>The First Customer</h2>
        <p>
          Their first commercial customer was a local farm-to-table restaurant called "Green Plate." The chef, Maria Santos, 
          was immediately impressed by the quality and freshness of the microgreens.
        </p>

        <blockquote>
          "I'd been buying microgreens from various suppliers for years, but MicroHarvest's were different. The flavor was 
          more intense, the texture was perfect, and they lasted twice as long in my walk-in. Plus, knowing they were grown 
          just 10 miles away made them even more appealing to my customers."
          <footer>— Chef Maria Santos, Green Plate Restaurant</footer>
        </blockquote>

        <p>
          That first order—$85 worth of mixed microgreens—was a pivotal moment. It validated that there was real demand for 
          their product. Within two months, Green Plate was ordering $500 worth of microgreens per week.
        </p>

        <h2>Scaling Challenges</h2>
        <p>
          Success brought new challenges. As word spread among local chefs, demand quickly outpaced their garage capacity. 
          They were turning away potential customers because they simply couldn't grow enough. The team faced a critical 
          decision: stay small and manageable, or take the risk of scaling up.
        </p>

        <p>
          They chose to scale. In June 2020, they secured a $250,000 seed investment from a local angel investor who believed 
          in their vision. This allowed them to lease a 5,000-square-foot warehouse and install professional growing systems.
        </p>

        <h2>The Move to Professional Facilities</h2>
        <p>
          The transition from garage to warehouse was more difficult than anticipated. The new space had climate control issues, 
          the irrigation system had leaks, and coordinating the installation of commercial equipment while maintaining production 
          for existing customers was a logistical nightmare.
        </p>

        <p>
          There were moments of doubt. One particularly bad week, a power outage destroyed an entire week's worth of crops—
          about $3,000 in lost revenue. They had to call their restaurant customers and apologize for missing deliveries.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          By the end of their first year, MicroHarvest had learned some hard lessons:
        </p>

        <ul>
          <li><strong>Redundancy is critical:</strong> They installed backup power systems and redundant climate controls</li>
          <li><strong>Quality over quantity:</strong> They turned down some customers to maintain their quality standards</li>
          <li><strong>Communication matters:</strong> They built strong relationships with customers through transparency</li>
          <li><strong>Automate everything possible:</strong> Alex's automation systems saved countless hours of manual work</li>
        </ul>

        <p>
          Despite the challenges, by December 2020, MicroHarvest was serving 15 restaurants, generating $15,000 in monthly 
          revenue, and operating profitably. The garage experiment had become a real business.
        </p>
      </div>
    `
  },
  {
    id: 4,
    slug: 'challenges',
    title: 'Scaling and Supply Chains',
    subtitle: 'Overcoming Growth Obstacles',
    description: 'The story of how MicroHarvest navigated supply chain disruptions, quality control issues, and the challenges of rapid expansion.',
    icon: '⚡',
    tags: ['Challenges', 'Supply Chain', 'Problem Solving'],
    readingTime: 8,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>The Pandemic Impact</h2>
        <p>
          2021 brought unprecedented challenges. The COVID-19 pandemic disrupted global supply chains, making it difficult to 
          source seeds, growing supplies, and packaging materials. Prices for essential inputs skyrocketed, and delivery times 
          became unpredictable.
        </p>

        <p>
          At the same time, restaurant closures and reduced dining capacity devastated their primary customer base. Within 
          weeks, MicroHarvest lost 60% of their revenue as restaurants either closed permanently or drastically reduced orders.
        </p>

        <h2>Pivoting to Retail</h2>
        <p>
          Faced with an existential crisis, the team made a bold decision: pivot to direct-to-consumer sales. They launched 
          an online store and began offering home delivery subscriptions. Consumers stuck at home were cooking more and 
          increasingly interested in healthy, local food.
        </p>

        <p>
          The pivot required significant changes to their operations:
        </p>

        <ul>
          <li>New packaging designed for individual consumers rather than bulk restaurant orders</li>
          <li>A delivery logistics system for residential addresses</li>
          <li>Marketing and customer education (many consumers had never used microgreens)</li>
          <li>Customer service infrastructure to handle questions and feedback</li>
        </ul>

        <blockquote>
          "Pivoting to retail saved our company, but it also made us better. We learned to communicate directly with the people 
          eating our products, and that feedback was invaluable."
          <footer>— Jamie Okonkwo, COO</footer>
        </blockquote>

        <h2>Quality Control Crises</h2>
        <p>
          Rapid growth brought quality control challenges. In March 2021, a batch of sunflower microgreens developed mold due 
          to excessive humidity in one growing zone. The contamination wasn't caught until after some products had been shipped 
          to customers.
        </p>

        <p>
          The team immediately issued a recall, refunded all affected customers, and conducted a thorough investigation. 
          Dr. Rivera implemented new quality control protocols, including:
        </p>

        <ul>
          <li>Daily visual inspections of all growing trays</li>
          <li>Environmental monitoring with automated alerts</li>
          <li>Batch tracking systems to quickly identify and isolate issues</li>
          <li>Third-party lab testing for food safety</li>
        </ul>

        <p>
          The incident was costly—both financially and reputationally—but the company's transparent response and improved 
          systems actually strengthened customer trust.
        </p>

        <h2>Supply Chain Solutions</h2>
        <p>
          To address ongoing supply chain vulnerabilities, MicroHarvest took several strategic steps:
        </p>

        <ul>
          <li><strong>Diversified suppliers:</strong> Established relationships with multiple seed suppliers across different regions</li>
          <li><strong>Inventory buffers:</strong> Maintained 3-6 months of critical supplies</li>
          <li><strong>Local sourcing:</strong> Partnered with local manufacturers for packaging materials</li>
          <li><strong>Vertical integration:</strong> Began producing their own seed for some varieties</li>
        </ul>

        <h2>The Team Grows</h2>
        <p>
          By mid-2021, the three founders realized they couldn't do everything themselves. They hired their first employees:
        </p>

        <ul>
          <li>Two full-time growers to manage daily operations</li>
          <li>A part-time marketing coordinator</li>
          <li>A delivery driver</li>
        </ul>

        <p>
          Delegating was difficult for the founders, especially Alex, who had been involved in every detail. But it was 
          necessary for the company to continue growing.
        </p>

        <h2>Finding Stability</h2>
        <p>
          By the end of 2021, MicroHarvest had weathered the storm. They had successfully diversified their customer base 
          (40% restaurants, 60% direct-to-consumer), implemented robust quality controls, and built a more resilient supply 
          chain. Monthly revenue had recovered to $25,000, and the company was once again profitable.
        </p>

        <p>
          The challenges of 2021 had tested the team's resolve, but they emerged stronger and more prepared for future growth.
        </p>
      </div>
    `
  },
  {
    id: 5,
    slug: 'growth',
    title: 'Market Expansion and Success',
    subtitle: 'Scaling Across the Region',
    description: 'How MicroHarvest expanded to multiple cities, developed new products, and built a loyal customer base.',
    icon: '📈',
    tags: ['Growth', 'Expansion', 'Success'],
    readingTime: 7,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>The Growth Accelerates</h2>
        <p>
          2022 marked a turning point for MicroHarvest. With stable operations and proven demand, the company was ready to 
          expand beyond their initial market. They secured a $1.2 million Series A investment led by a sustainable agriculture 
          venture capital firm.
        </p>

        <p>
          The investment allowed them to:
        </p>

        <ul>
          <li>Open two additional growing facilities in neighboring cities</li>
          <li>Hire a professional management team</li>
          <li>Invest in marketing and brand development</li>
          <li>Develop their proprietary growing technology</li>
        </ul>

        <h2>The Technology Advantage</h2>
        <p>
          Alex's background in software engineering proved to be a major competitive advantage. They developed a proprietary 
          system called "GrowOS" that automated and optimized nearly every aspect of microgreens production:
        </p>

        <ul>
          <li><strong>Environmental Control:</strong> AI-powered systems that automatically adjusted temperature, humidity, and lighting</li>
          <li><strong>Predictive Analytics:</strong> Machine learning models that forecasted demand and optimized planting schedules</li>
          <li><strong>Quality Monitoring:</strong> Computer vision systems that detected potential issues before they became problems</li>
          <li><strong>Supply Chain Management:</strong> Automated ordering and inventory tracking</li>
        </ul>

        <blockquote>
          "GrowOS allows us to maintain consistent quality across multiple facilities while using 30% less water and 25% less 
          energy than traditional methods. It's the key to our ability to scale."
          <footer>— Alex Chen, CEO</footer>
        </blockquote>

        <h2>Product Innovation</h2>
        <p>
          Dr. Rivera's research team didn't rest on their laurels. They developed several new product lines:
        </p>

        <ul>
          <li><strong>Specialty Blends:</strong> Custom microgreen mixes designed for specific cuisines (Asian, Mediterranean, etc.)</li>
          <li><strong>Microgreen Powders:</strong> Freeze-dried microgreens for smoothies and supplements</li>
          <li><strong>Growing Kits:</strong> Home growing kits that allowed consumers to grow their own microgreens</li>
          <li><strong>Restaurant Partnerships:</strong> Exclusive varieties developed in collaboration with top chefs</li>
        </ul>

        <p>
          The growing kits, in particular, became a surprise hit. Priced at $49-$299, they appealed to health-conscious 
          consumers who wanted the freshest possible microgreens. By the end of 2022, growing kits accounted for 20% of revenue.
        </p>

        <h2>Building a Brand</h2>
        <p>
          MicroHarvest invested heavily in brand development and marketing. They hired a marketing director who helped them 
          articulate their value proposition and connect with customers on an emotional level.
        </p>

        <p>
          Key marketing initiatives included:
        </p>

        <ul>
          <li>A content marketing strategy focused on nutrition education and sustainability</li>
          <li>Partnerships with health and wellness influencers</li>
          <li>Participation in farmers markets and food festivals</li>
          <li>A referral program that turned customers into brand ambassadors</li>
        </ul>

        <h2>The Numbers Tell the Story</h2>
        <p>
          By December 2022, MicroHarvest's growth was impressive:
        </p>

        <ul>
          <li><strong>Revenue:</strong> $1.8 million annually (up from $300,000 in 2021)</li>
          <li><strong>Customers:</strong> 45 restaurants, 3,000+ direct consumers, 500+ growing kit customers</li>
          <li><strong>Facilities:</strong> 3 locations totaling 15,000 square feet</li>
          <li><strong>Team:</strong> 18 full-time employees</li>
          <li><strong>Products:</strong> 26 microgreen varieties and 5 specialty blends</li>
        </ul>

        <h2>Recognition and Awards</h2>
        <p>
          The company's success didn't go unnoticed. In 2022, MicroHarvest received several accolades:
        </p>

        <ul>
          <li>"Best New Food Business" from the local Chamber of Commerce</li>
          <li>"Sustainable Business of the Year" from a regional environmental organization</li>
          <li>Featured in national food and agriculture publications</li>
          <li>Invited to speak at sustainable agriculture conferences</li>
        </ul>

        <p>
          More importantly, they were making a real impact. Their three facilities were producing over 5,000 pounds of 
          microgreens per month, providing nutrient-dense food to thousands of people while using a fraction of the resources 
          required by traditional agriculture.
        </p>
      </div>
    `
  },
  {
    id: 6,
    slug: 'future',
    title: 'Vision and Innovation',
    subtitle: 'The Future of MicroHarvest',
    description: 'Explore MicroHarvest\'s vision for the future, including plans for national expansion, new technologies, and their mission to transform urban agriculture.',
    icon: '🚀',
    tags: ['Future', 'Innovation', 'Vision'],
    readingTime: 6,
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>Looking Ahead</h2>
        <p>
          As MicroHarvest enters 2023 and beyond, the founders are more ambitious than ever. What started as a garage experiment 
          has proven that hyperlocal, technology-enabled agriculture can be both sustainable and profitable. Now they're ready 
          to scale that model nationally.
        </p>

        <h2>The National Expansion Plan</h2>
        <p>
          MicroHarvest's goal is to establish growing facilities in 20 major cities by 2025. Rather than building massive 
          centralized farms, they're creating a network of smaller, distributed facilities that serve their local communities.
        </p>

        <p>
          This distributed model offers several advantages:
        </p>

        <ul>
          <li><strong>Resilience:</strong> No single point of failure; if one facility has issues, others continue operating</li>
          <li><strong>Freshness:</strong> Products travel miles, not hundreds of miles</li>
          <li><strong>Local Jobs:</strong> Each facility employs local workers and supports the local economy</li>
          <li><strong>Customization:</strong> Each location can tailor products to local preferences</li>
        </ul>

        <h2>Next-Generation Technology</h2>
        <p>
          Alex's team is developing GrowOS 2.0, which will include several groundbreaking features:
        </p>

        <ul>
          <li><strong>Autonomous Growing:</strong> Fully automated systems that require minimal human intervention</li>
          <li><strong>Blockchain Traceability:</strong> Complete transparency from seed to plate</li>
          <li><strong>Personalized Nutrition:</strong> Custom microgreen blends based on individual health profiles</li>
          <li><strong>Carbon Tracking:</strong> Real-time measurement and reporting of environmental impact</li>
        </ul>

        <blockquote>
          "We're not just growing food—we're building the infrastructure for a more sustainable food system. Technology is the 
          key to making that vision scalable and accessible."
          <footer>— Alex Chen, CEO</footer>
        </blockquote>

        <h2>Research and Development</h2>
        <p>
          Dr. Rivera's research team is exploring exciting new directions:
        </p>

        <ul>
          <li><strong>Biofortification:</strong> Enhancing microgreens with specific nutrients to address dietary deficiencies</li>
          <li><strong>Medicinal Varieties:</strong> Growing microgreens with enhanced levels of beneficial compounds</li>
          <li><strong>Rare Varieties:</strong> Introducing exotic microgreens from around the world</li>
          <li><strong>Sustainability Research:</strong> Developing closed-loop systems that produce zero waste</li>
        </ul>

        <h2>The Franchise Model</h2>
        <p>
          In 2024, MicroHarvest plans to launch a franchise program that will allow entrepreneurs to open their own MicroHarvest 
          facilities. Franchisees will receive:
        </p>

        <ul>
          <li>Complete GrowOS technology and automation systems</li>
          <li>Comprehensive training and ongoing support</li>
          <li>Access to MicroHarvest's supplier network and pricing</li>
          <li>Marketing materials and brand support</li>
          <li>Proven operational playbooks</li>
        </ul>

        <p>
          This franchise model could accelerate expansion while maintaining quality and consistency across all locations.
        </p>

        <h2>Social Impact Initiatives</h2>
        <p>
          MicroHarvest is committed to making fresh, nutritious food accessible to everyone, not just those who can afford 
          premium prices. Planned initiatives include:
        </p>

        <ul>
          <li><strong>Food Bank Partnerships:</strong> Donating microgreens to local food banks and community organizations</li>
          <li><strong>School Programs:</strong> Installing growing systems in schools to teach students about nutrition and agriculture</li>
          <li><strong>Job Training:</strong> Providing employment opportunities and training for underserved communities</li>
          <li><strong>Subsidized Growing Kits:</strong> Making home growing kits available at reduced prices for low-income families</li>
        </ul>

        <h2>The Ultimate Vision</h2>
        <p>
          The founders envision a future where every city has local microgreens production, where fresh, nutrient-dense food 
          is accessible to all, and where agriculture works in harmony with the environment rather than against it.
        </p>

        <blockquote>
          "We're proving that you don't have to choose between profitability and sustainability, between quality and scale, 
          between innovation and tradition. MicroHarvest is just the beginning of a larger transformation in how we grow and 
          consume food."
          <footer>— Dr. Morgan Rivera, Chief Science Officer</footer>
        </blockquote>

        <h2>Join the Revolution</h2>
        <p>
          Whether you're a consumer looking for the freshest, most nutritious greens, a restaurant seeking a reliable local 
          supplier, or an entrepreneur interested in the franchise opportunity, MicroHarvest invites you to be part of the 
          green revolution.
        </p>

        <p>
          The future of food is fresh, local, sustainable, and delicious. The future is MicroHarvest.
        </p>

        <div class="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <h3 class="text-xl font-bold text-green-800 mb-2">Ready to Get Started?</h3>
          <p class="text-gray-700 mb-4">
            Explore our products, try our nutrition recommendation tool, or learn more about our growing kits.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/nutrition-recommendation" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Get Your Nutrition Plan
            </a>
            <a href="/grow-kits" class="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors">
              Explore Growing Kits
            </a>
          </div>
        </div>
      </div>
    `
  }
];

// Helper function to get a chapter by slug
export const getChapterBySlug = (slug: string): Chapter | undefined => {
  return chapters.find(chapter => chapter.slug === slug);
};

// Helper function to get adjacent chapters
export const getAdjacentChapters = (currentSlug: string) => {
  const currentIndex = chapters.findIndex(ch => ch.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null
  };
};

