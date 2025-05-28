
"use client";

import Image from 'next/image';
import { Mail, MapPin, Phone, Building, Briefcase } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const cardAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re here to help with any questions you have about our products, services, or solutions. Reach out and let&apos;s discuss how we can assist you.
        </p>
      </motion.header>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Contact Form Section */}
        <motion.div {...cardAnimation} className="lg:col-span-2">
          <Card className="shadow-xl card-interactive">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Details Section */}
        <div className="space-y-8">
          <motion.div {...cardAnimation} transition={{...cardAnimation.transition, delay: 0.1}}>
            <Card className="shadow-lg card-interactive">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Briefcase className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Work & Delivery Address</h3>
                    <address className="not-italic text-muted-foreground text-sm">
                      08-Gandhi Oil Mill Compound<br />
                      Gorwa BIDC, Vadodara - 390016
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Billing Address</h3>
                    <address className="not-italic text-muted-foreground text-sm">
                      J-302, Siddharth Elegance<br />
                      Near Roses Nursery, Old Chhani Road<br/>
                      Vadodara - 390002
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:saiautomation2414@gmail.com" className="text-primary hover:underline text-sm">
                      saiautomation2414@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a href="tel:+919998149320" className="text-primary hover:underline text-sm">
                      +91 99981 49320
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

           {/* Map Placeholder */}
          <motion.div {...cardAnimation} transition={{...cardAnimation.transition, delay: 0.2}}>
            <Card className="shadow-lg card-interactive overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                 <motion.div {...imageAnimation} className="aspect-video w-full">
                   <Image
                      src="https://placehold.co/600x338.png"
                      alt="Location Map"
                      data-ai-hint="city map"
                      width={600}
                      height={338}
                      className="w-full h-full object-cover"
                    />
                 </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
