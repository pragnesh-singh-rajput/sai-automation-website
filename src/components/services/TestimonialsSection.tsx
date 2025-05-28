
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // CardFooter removed
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/constants';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <motion.section {...sectionAnimation} className="py-12 md:py-16">
      <div className="flex items-center justify-center mb-10">
        <MessageSquare className="h-10 w-10 text-primary mr-3" />
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            {...cardAnimation}
            transition={{ ...cardAnimation.transition, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="flex flex-col card-interactive shadow-lg h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  {testimonial.imageUrl && (
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={testimonial.imageUrl} alt={testimonial.author} data-ai-hint={testimonial.aiHint} />
                      <AvatarFallback>{testimonial.author.substring(0, 1)}</AvatarFallback>
                    </Avatar>
                  )}
                  {!testimonial.imageUrl && (
                    <Avatar className="h-12 w-12 border-2 border-primary bg-muted">
                      <AvatarFallback>
                          <MessageSquare className="h-6 w-6 text-muted-foreground"/>
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base italic text-foreground/80">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
