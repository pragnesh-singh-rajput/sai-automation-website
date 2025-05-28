
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'; // CardHeader, CardTitle, CardDescription removed as not directly used with motion here
import { ArrowRight } from 'lucide-react';
import { mockProducts, experienceFeatures, whyChooseUsFeatures } from '@/lib/constants';
import FeaturedProductList from '@/components/home/FeaturedProductList';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 3);

  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" }
  };
  
  const textAnimation = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
  };


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Industrial Automation Background"
          data-ai-hint="industrial automation"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <motion.div 
          className="relative z-20 p-6 container mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading drop-shadow-lg">
            Powering Precision. Driving Automation.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-slate-200 drop-shadow-md">
            SAI AUTOMATION is a supplier of industrial components like LM Rails, Cross Rollers, Couplings, and more. We provide durable solutions and meet total lifecycle needs from new panels to robots, service, and repair.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="button-interactive bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="button-interactive border-white text-white hover:bg-white/10">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Our Experience Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.h2 {...sectionAnimation} className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">15+ Years of Industrial Excellence</motion.h2>
          <motion.p {...textAnimation} className="text-lg text-center max-w-3xl mx-auto mb-12">
            With 15 years of experience in linear motion and automation products, SAI AUTOMATION meets the total lifecycle needs of your company. From New Panels to Robots, Service, and Repair, we add value at every touchpoint, helping you realize the most from your investment.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {experienceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="bg-background/10 backdrop-blur-sm p-6 card-interactive shadow-lg h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent rounded-full">
                      <feature.icon className="h-10 w-10 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 {...sectionAnimation} className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">Featured Products</motion.h2>
          <motion.p {...textAnimation} className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover our range of high-quality components and systems designed for reliability and peak performance, including LM Rails, Cross Rollers, Couplings, Racks, and Pinions.
          </motion.p>
          <FeaturedProductList products={featuredProducts} />
          <motion.div {...textAnimation} className="text-center mt-12">
            <Button variant="outline" asChild className="button-interactive">
              <Link href="/products">
                All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2 {...sectionAnimation} className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">Why SAI AUTOMATION?</motion.h2>
          <motion.p {...textAnimation} className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We are committed to providing superior automation solutions with a focus on quality, innovation, and customer satisfaction. We offer reliable solutions that support growing companies.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
               <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="text-center p-8 card-interactive shadow-lg bg-card h-full">
                   <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary rounded-lg">
                      <feature.icon className="h-12 w-12 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold font-heading mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      <section className="py-16 md:py-24 bg-gray-800 text-white">
         <div className="relative isolate overflow-hidden">
          <Image
            src="https://placehold.co/1920x500.png"
            alt="Factory floor background"
            data-ai-hint="factory floor"
            fill
            className="object-cover z-0 opacity-30"
          />
          <div className="absolute inset-0 bg-primary/70 z-[-1]"></div>
          <motion.div {...sectionAnimation} className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Need Industrial Solutions That Last?
            </h2>
            <p className="text-lg text-slate-200 max-w-xl mx-auto mb-8">
              Our team is ready to help you find the perfect automation components and systems for your needs.
            </p>
            <Button size="lg" asChild className="button-interactive bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
