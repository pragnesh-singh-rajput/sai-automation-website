
"use client";

import ServiceSection from '@/components/services/ServiceSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import { services } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Expert Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          At SAI AUTOMATION, we address the diverse business needs of our industrial customers by offering a variety of products and services. We cover the total lifecycle from new panels and robotic systems to ongoing service and repair, ensuring you get the most value from your automation investments.
        </p>
      </motion.header>

      <motion.div {...sectionAnimation} className="space-y-12 md:space-y-16">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} reverseLayout={index % 2 !== 0} index={index} />
        ))}
      </motion.div>

      <motion.div {...sectionAnimation}>
        <Separator className="my-16 md:my-24" />
      </motion.div>

      <TestimonialsSection />
    </div>
  );
}
