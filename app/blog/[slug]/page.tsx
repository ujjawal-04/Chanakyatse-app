"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, ArrowLeft, Search } from "lucide-react";
import blogImage from './blog1.jpeg';
import blogg2 from './blogg2.jpg';
import blog3img from './blog3img.jpg';
import blog4img from './blog4img.jpg';
import blog3image from './blog3image.jpg';
import blog6img from './blog6img.jpg';
import blog7img from './blog7img.jpg';
import blog8img from './blog8img.jpg';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "fashion", name: "Fashion", count: 5 },
    { id: "trends", name: "Trends", count: 3 },
    { id: "lifestyle", name: "Lifestyle", count: 2 },
    { id: "sustainability", name: "Sustainability", count: 2 }
  ];

  const posts = [
    {
      id: "1",
      title: "Redefining Luxury: Our Commitment to Sustainable Fashion",
      excerpt: "In an era where environmental consciousness is no longer a choice but a necessity, the fashion industry stands at a critical crossroads.",
      content: `In an era where environmental consciousness is no longer a choice but a necessity, the fashion industry stands at a critical crossroads. Mersate is leading this transformation, proving that luxury and sustainability are not competing ideals, but powerful allies in creating a more responsible future.

The New Definition of Luxury
Gone are the days when luxury was defined solely by price tags and exclusivity. Today, true luxury is measured by its impact—on artisans, communities, and most importantly, our planet. At Mersate, we've embraced this profound shift, reimagining what it means to create high-end fashion that doesn't compromise our environmental future.

A Holistic Approach to Sustainable Fashion
Our commitment to sustainability isn't a marketing strategy—it's a fundamental philosophy that touches every aspect of our brand. From the moment a design is conceived to the final product delivered to our customers, we ensure that each step reflects our deep respect for the environment.

Innovative Materials: The Foundation of Responsible Design
We've revolutionized our material sourcing through groundbreaking approaches:
- Regenerative Fabrics : Our materials aren't just sustainable; they're restorative. We use fabrics that actively contribute to environmental healing.
- Organic Cotton : By choosing organic cotton, we significantly reduce water consumption and eliminate harmful pesticides.
- Water-Saving Technologies : Our production processes incorporate cutting-edge techniques that minimize water usage without compromising fabric quality.

Ethical Production: Honoring Craftsmanship and Human Dignity
Sustainability extends beyond environmental considerations. We've created a production ecosystem that:
- Ensures fair wages for our artisans
- Preserves traditional craftsmanship
- Provides safe, supportive working environments
- Supports local communities through responsible employment practices

Breaking Down Sustainable Packaging and Shipping
Our commitment doesn't stop at the garment. We've reimagined every touchpoint of our product journey:
- 100% Recyclable Packaging: Every box, tag, and wrapper is designed with environmental responsibility in mind
- Carbon-Neutral Shipping: We offset our carbon footprint, ensuring that delivering fashion doesn't come at the planet's expense

Beyond Fashion: Creating a Movement
Mersate isn't just selling clothing—we're inviting customers to be part of a larger narrative. Each garment represents a choice: to embrace beauty that doesn't compromise our planet's future.
Our vision is clear: luxury should be a force for positive change. We're transforming the fashion industry from within, challenging the traditional paradigms of design, production, and consumption.

An Invitation to Conscious Consumers
We don't just want customers; we want partners in our sustainability journey. By choosing Mersate, you're not just buying a piece of clothing. You're:
- Supporting environmental restoration
- Promoting ethical labor practices
- Investing in innovative, responsible design
- Making a statement about the kind of future you want to create

The Future is Sustainable, The Future is Luxurious
As we continue to push the boundaries of sustainable fashion, we remain committed to our core belief: true luxury doesn't just look good—it does good.
Join us in reimagining fashion. Join us in creating a more beautiful, more responsible world.
Because at Mersate, sustainability isn't just a choice. It's our promise.


@mersate_official`,
      category: "sustainability",
      author: {
        name: "MERSATE",
        role: "Fashion Editor",
        image: blogImage.src
      },
      date: "November 15, 2024",
      readTime: "5 min read",
      tags: ["sustainability", "luxury", "environment"],
      image: blogImage.src,
      introduction: "In an era where environmental consciousness is no longer a choice but a necessity, the fashion industry stands at a critical crossroads. Mersate is leading this transformation, proving that luxury and sustainability are not competing ideals, but powerful allies in creating a more responsible future.",
      previewImages: [blogImage.src]
    },
    {
      id: "2",
      title: "Cashco: A Luxurious Blend",
      excerpt: "Cashmere and Cotton are the two of the world's most cherished fibers, combining to create a luxurious blend that offers the best of both worlds.",
      content: `Cashco : Cashmere and Cotton are the two of the world's most cherished fibers, combine to create a luxurious blend that offers the best of both worlds. This unique combination delivers exceptional comfort, durability and style, making it a popular choice for a variety of garments.

The Perfect Harmony of Luxury
Cashmere, often referred to as the "fiber of kings," is renowned for its unparalleled softness and warmth. Its fine, delicate fibers provide exceptional insulation, making it ideal for cold weather. Cotton, on the other hand, is a versatile and breathable natural fiber. It is gentle on the skin and helps regulate body temperature, making it suitable for all seasons.

A Blend of Excellence
When these two luxurious fibers are blended, the result is a fabric that is incredibly soft, smooth, and lightweight. The cashmere adds a touch of opulence, while the cotton ensures breathability and durability. This perfect balance makes cashmere and cotton blends ideal for a wide range of garments, from cozy sweaters to elegant dresses.

Temperature Regulation & Comfort
One of the key benefits of a cashco is its ability to regulate body temperature. In colder weather, the cashmere component provides warmth and insulation. As the temperature rises, the cotton component helps to wick away moisture and keep the wearer cool and dry. This makes cashco suitable for a variety of climates and activities.

Gentle on Your Skin
Cashco has hypoallergenic properties. Both cashmere and cotton are gentle on the skin and less likely to cause irritation or allergies. This makes them ideal for individuals with sensitive skin.

Versatility in Style
Cashco is truly impressive. It effortlessly transitions from casual to formal, making it a wardrobe essential for any occasion. Whether you're dressing up for a special event or opting for a relaxed, everyday look, this blend offers endless styling possibilities.

Built to Last
Cashco is not only luxurious but also remarkably durable. Cotton's inherent strength and resilience, combined with cashmere's durability, result in a fabric that can withstand the test of time. With proper care, your cashmere and cotton garments will remain soft, stylish, and in pristine condition for years to come.

Caring for Your Cashco
To maintain the quality of your cashmere and cotton blend garments, follow these guidelines:
- Hand wash or use gentle machine washing with mild detergent
- Avoid harsh chemicals like bleach or fabric softeners
- Lay garments flat to dry to prevent stretching
- Store in a cool, dry place away from direct sunlight

The Luxury Experience
Indulge in the luxury of a cashmere and cotton blend. Experience the perfect harmony of comfort and elegance that only Cashco can provide.


@mersate_official`,
      category: "fashion",
      author: {
        name: "MERSATE",
        role: "Fashion Editor",
        image: blogg2.src
      },
      date: "2024",
      readTime: "4 min read",
      tags: ["fashion", "luxury", "cashmere", "cotton"],
      image: blogg2.src,
      introduction: Discover the epitome of luxury fabric - where the royal softness of cashmere meets the natural comfort of cotton. This unique blend creates a textile experience that's both indulgent and practical, setting new standards in fashion comfort and elegance.,
      previewImages: [blogg2.src]
    },
    {
      id: "3",
      title: "Mersate x AW 2024",
      excerpt: "Introducing our luxurious AW24 collection, featuring a range of cashmere sweatshirts and cashco shirts in four timeless colors.",
      content: `Introducing our luxurious AW24 collection, featuring a range of cashmere sweatshirts and cashco shirts in four timeless colors. Our AW24 collection is designed to keep you cozy and stylish all season long.
    
    Cashmere Sweatshirts: The Epitome of Comfort
    Our cashmere sweatshirts are the perfect blend of luxury and comfort. Crafted from the finest cashmere, these sweatshirts are incredibly soft, warm, and lightweight. The relaxed fit and ribbed cuffs and hem offer a classic and timeless look. We have these in 5 colours.
    
    Merco Shirts: A Modern Twist on a Classic
    Our merco shirts are a modern take on the classic shirt. Combining the comfort of cashmere with the sharp lines of a dress shirt, these shirts are perfect for both casual and formal occasions. The four color options offer versatility, allowing you to create a variety of stylish looks.
    
    Four Timeless Colors
    - Winter Bloom: A sophisticated choice for any occasion.
    - Pageant Blue: A deep, rich color that adds a touch of luxury.
    - Moonless Night: A versatile color that pairs well with everything.
    - Chicory Coffee: A warm color that exudes timeless elegance.
    
    Indulge in the luxury of cashmere this season. Explore our AW24 collection and elevate your wardrobe.
    
    Mersate is committed to providing high-quality, sustainable fashion. Our cashmere is sourced ethically and responsibly, ensuring the well-being of animals and the environment.
    
    Experience the ultimate in luxury and comfort with our AW24 collection.
   
    

    @mersate_official`,
      category: "fashion",
      author: {
        name: "MERSATE",
        role: "Fashion Expert",
        image: blog3image.src
      },
      date: "2024",
      readTime: "3 min read",
      tags: ["fashion", "AW24", "cashmere", "luxury"],
      image: blog3image.src,
      introduction: "Discover Mersate's luxurious AW24 collection, featuring a range of cashmere sweatshirts and cashco shirts in four timeless colors. Indulge in the epitome of comfort and style this season.",
      previewImages: [blog3image.src]
    },
    {
      id: "4",
      title: "A Guide to Modern Luxury",
      excerpt: "In a world that's constantly evolving, style remains timeless. It's not just about the clothes you wear, but the confidence they instill.",
      content: `In a world that's constantly evolving, style remains timeless. It's not just about the clothes you wear, but the confidence they instill. At Mersate, we believe in crafting garments that elevate your everyday.
    
    Modern luxury is about effortless style, refined details, and impeccable quality. It's about feeling confident and comfortable, whether you're heading to the office or out for a night on the town. Our collections are designed to seamlessly blend classic tailoring with contemporary trends.
    
    Key Elements of Luxury Menswear Brand
    Premium Fabrics: We source the finest fabrics from around the world, ensuring unparalleled comfort and durability.
    
    Exquisite Craftsmanship: Our skilled artisans pay meticulous attention to detail, from the perfect stitch to the finest finishing touches.
    
    Timeless Design: Our designs are timeless and versatile, ensuring that your wardrobe remains relevant for years to come.
    
    Comfort and Fit: We prioritize comfort without compromising on style. Our garments are tailored to perfection, ensuring a flattering fit for every body type.
    
    MER SATE
    Indulge in the epitome of modern luxury. Explore our latest collection and discover the perfect pieces to elevate your wardrobe.
    
    Style is a reflection of your personality. Choose garments that make you feel confident, stylish, and undeniably you.
    
    


    @mersate_official`,
      category: "luxury",
      author: {
        name: "MERSATE",
        role: "Style Director",
        image: blog4img.src
      },
      date: "2024",
      readTime: "4 min read",
      tags: ["luxury", "style", "menswear"],
      image: blog4img.src,
      introduction: "Discover the essence of modern luxury where timeless style meets contemporary elegance. At Mersate, we redefine luxury through impeccable craftsmanship and attention to detail.",
      previewImages: [blog4img.src]

    },
{
  id: "5",
  title: "Sustainable Packaging: A Greener Future",
  excerpt: "In today's environmentally conscious world, businesses are increasingly seeking ways to minimize their ecological footprint.",
  content: `In today's environmentally conscious world, businesses are increasingly seeking ways to minimize their ecological footprint. At Mersate, we're committed to sustainable practices, and our packaging is no exception.

Laser-Etched Elegance, Eco-Friendly Edge
Our packaging showcases a unique blend of elegance and sustainability. We've replaced traditional printing methods with laser etching, a technique that reduces the use of harmful chemicals and minimizes waste. The intricate designs are etched directly onto the surface of our boxes, creating a clean, modern aesthetic.

Linen Bags: A Timeless Choice
We've ditched plastic bags in favor of durable and stylish linen bags. Linen is a natural, biodegradable fiber that requires minimal chemical processing. Our linen bags are not only eco-friendly but also reusable, reducing the need for single-use plastic.

Recycled Paper Tags: A Small Step, Big Impact
Even the smallest details matter. Our product tags are crafted from recycled paper, further reducing our environmental impact. These tags are not only sustainable but also add a touch of rustic charm to our packaging.

By embracing sustainable packaging, we're not only protecting the planet but also setting a new standard for the industry. Join us in our journey towards a greener future.


@mersate_official`,
  category: "sustainability",
  author: {
    name: "MERSATE",
    role: "Sustainability Expert",
    image: blog3img.src
  },
  date: "2024",
  readTime: "3 min read",
  tags: ["sustainability", "packaging", "eco-friendly"],
  image: blog3img.src,
  introduction: "Discover how Mersate is revolutionizing packaging with sustainable solutions that combine elegance with environmental responsibility. From laser-etched boxes to biodegradable linen bags, every detail is crafted with our planet in mind.",
  previewImages: [blog3img.src]
},
{
  id: "6",
  title: "Muga Silk: India's Golden Fiber",
  excerpt: "Understanding the unique characteristics and cultural significance of Muga silk, Assam's precious textile heritage.",
  content: `Muga silk, often referred to as the "golden fiber" is a unique and luxurious textile indigenous to the Indian state of Assam. Renowned for its distinctive golden hue, exceptional durability and unparalleled softness. Muga silk has been revered for centuries.

Unlike other types of silk, Muga silk is derived from the cocoons of a specific silkworm species, Antheraea assama. These silkworms feed on the leaves of the Som tree, a plant native to the Brahmaputra Valley. The unique feeding habits of these silkworms impart a golden yellow color to the silk, setting it apart from other varieties.

Weaving Muga silk is a labor-intensive process that requires skill and patience. The silk threads are hand-reeled, and the fabric is woven on traditional looms. The intricate patterns and designs on Muga silk textiles are often inspired by nature and Assamese culture.

Characteristics of Muga Silk:
* The most distinctive feature of Muga silk is its natural golden color, which deepens with age
* Muga silk is exceptionally durable and resistant to wear and tear
* Despite its durability, Muga silk is incredibly soft and comfortable to wear
* It is hypoallergenic, making it suitable for sensitive skin
* Muga silk has excellent temperature-regulating properties, keeping you warm in winter and cool in summer

By choosing Muga silk, you are not only investing in a luxurious product but also contributing to the livelihood of the artisans and weavers who keep this tradition alive. Embrace the luxury of Muga silk and experience the timeless elegance of this golden fiber.


@mersate_official`,
  category: "design",
  author: {
    name: "MERSATE",
    role: "Textile Specialist",
    image: blog6img.src
  },
  date: "2024",
  readTime: "4 min read",
  tags: ["textile", "tradition", "luxury"],
  image: blog6img.src,
  introduction: "Discover the unique characteristics and cultural significance of Muga silk, Assam's golden treasure that combines luxury with tradition.",
  previewImages: [blog6img.src]
},
{
  id: "7",
  title: "Mersate x SS 2025",
  excerpt: "A vibrant fusion of classic elegance and contemporary style, marking our exciting expansion into womenswear alongside signature menswear.",
  content: `We're thrilled to announce the launch of our SS2025 collection, a vibrant fusion of classic elegance and contemporary style. This season, we're expanding our horizons to include a stunning range of womenswear, alongside our signature menswear.

Our SS2025 collection is crafted with the finest cotton and linen fabrics, ensuring both comfort and durability. For our menswear, we've embraced the timeless appeal of stripes, reimagined in fresh and modern color palettes. The mandarin collar shirt, a classic silhouette, adds a touch of sophistication to our collection.

For our womenswear, we've delved into the enchanting world of quirky prints, a playful and artistic expression that adds a touch of whimsy to our designs. To complement these prints, we've incorporated key trends like ruffles and puff sleeves, adding a feminine and romantic touch to our collection.

We believe that fashion should be an expression of individuality, and our SS2025 collection is designed to empower you to embrace your unique style. Whether you're seeking a sophisticated look for the office or a casual outfit for the weekend, our collection has something for everyone.

Our color palette for SS2025 is a harmonious blend of berry tones and pastels, inspired by the beauty of nature. These soft and soothing hues are complemented by the rich and earthy tones of brown, adding depth and warmth to our collection.

Join us as we embark on this exciting new chapter in our fashion journey.

Stay tuned for the launch of our SS2025 collection and discover a world of style and elegance.

@mersate_official`,
  category: "fashion",
  author: {
    name: "MERSATE",
    role: "Design Director",
    image: blog7img.src
  },
  date: "2024",
  readTime: "3 min read",
  tags: ["SS2025", "collection", "womenswear", "menswear"],
  image: blog7img.src,
  introduction: "Discover our groundbreaking SS2025 collection that marks a new chapter in Mersate's journey with the introduction of womenswear alongside our signature menswear pieces.",
  previewImages: [blog7img.src]
},
{
  id: "8",
  title: "Khadi: India's Timeless Textile",
  excerpt: "Exploring the rich heritage and sustainable future of Khadi, India's iconic handspun and handwoven fabric that symbolizes independence and ethical fashion.",
  content: `Khadi, a handspun and handwoven cloth, is more than just a fabric; it's a symbol of India's rich heritage, independence movement, and sustainable fashion. This timeless textile has been cherished for centuries, and its popularity continues to grow, especially among those who appreciate authenticity, quality, and ethical fashion.

Khadi gained prominence during India's struggle for independence, championed by Mahatma Gandhi. He encouraged Indians to wear Khadi as a symbol of self-reliance and protest against British colonialism. Khadi became synonymous with the Indian freedom movement, and its production and consumption became a powerful tool in the fight for independence.

Today, Khadi has evolved into a contemporary fashion statement. Designers are incorporating Khadi into their collections, creating stylish and sustainable garments. From traditional kurtas and sarees to modern dresses and jackets, Khadi can be styled in countless ways.

By choosing Khadi, you're not just buying a piece of clothing; you're supporting the livelihoods of countless artisans and weavers. The production of Khadi involves a complex process, from spinning the yarn to weaving the fabric. Each step is done by skilled artisans, ensuring the quality and authenticity of the final product.

Khadi is more than just a fabric; it's a way of life. By choosing Khadi, you're not only making a fashion statement but also contributing to a sustainable future. So, let's celebrate this timeless textile and embrace the beauty of handmade.

@mersate_official`,
  category: "fashion",
  author: {
    name: "MERSATE",
    role: "Heritage Fashion Specialist",
    image: blog8img.src
  },
  date: "2024",
  readTime: "4 min read",
  tags: ["khadi", "heritage", "sustainable fashion", "Indian textiles"],
  image: blog8img.src,
  introduction: "Discover the cultural significance and sustainable appeal of Khadi, a handspun and handwoven textile that represents India's rich heritage and commitment to ethical fashion.",
  previewImages: [blog8img.src]
},
];
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

 
 // ...

if (selectedPost) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setSelectedPost(null)} className="flex items-center text-gray-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <article className="font-[Times New Roman]">
          <header className="flex justify-between items-start">
            <span className="font-medium text-base tracking-wide">MERSATE</span>
            <span>2024</span>
          </header>

          <h1 className="text-5xl mt-6 mb-4 border-b border-black pb-3">
            {/* @ts-ignore */}
            {selectedPost.title}
          </h1>

          {/* Replace the code inside this block */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-5">
              <p className="text-base mb-6 leading-relaxed">
                {/* @ts-ignore */}
                {selectedPost.introduction}
              </p>
            </div>
            {/* @ts-ignore */}
            {selectedPost.previewImages?.[0] && (
              <div className="col-span-7 flex justify-end">
                <img 
                  // @ts-ignore
                  src={selectedPost.previewImages[0]} 
                  // @ts-ignore
                  alt={selectedPost.title}
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
          {/* End of the block to replace */}

          <div className="text-base leading-relaxed">
            {/* @ts-ignore */}
            {selectedPost.content?.split('\n\n').map((paragraph, idx) => {
              if (paragraph.trim() === '@mersate_official') {
                 return (
                    <div key={idx} className="text-center mt-12 mb-4 font-semibold text-gray-600">
                     {paragraph}
                    </div>
                  );
             }
            return (
                   <p key={idx} className="mb-6">
                    {paragraph}
                     </p>
                   );
                  })}
            </div>
            
            

          <footer className="text-right mt-12">
            <p>www.mersate.com</p>
          </footer>
        </article>
      </div>
    </div>
  );
}



// Blog List View
return (
  <div className="min-h-screen bg-white">
    {/* Hero Section with Search */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-light mb-6 text-center"
        >
          Blog
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-8"
        >
          Insights, updates, and stories from our team
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto relative"
        >
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/50"
          />
          <Search className="w-5 h-5 text-white/50 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </motion.div>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-64 flex-shrink-0"
        >
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <nav className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 
                    ${selectedCategory === category.id 
                      ? "bg-black text-white" 
                      : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span>{category.name}</span>
                  <span className="text-sm">{category.count}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 
                    ${tag === selectedTag
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                // @ts-ignore
                onClick={() => setSelectedPost(post)}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-500 uppercase">{post.category}</span>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author.name}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default BlogPage;