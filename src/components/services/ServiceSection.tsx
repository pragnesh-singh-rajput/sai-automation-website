
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/constants';
import { motion } from 'framer-motion';

interface ServiceSectionProps {
  service: Service;
  reverseLayout?: boolean;
  index: number;
}

export default function ServiceSection({ service, reverseLayout = false, index }: ServiceSectionProps) {
  const cardAnimation = {
    initial: { opacity: 0, y: 30, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: "easeOut" }
  };
  
  return (
    <motion.div {...cardAnimation}>
      <Card className="overflow-hidden shadow-lg card-interactive">
        <CardHeader className="bg-secondary/30 p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-primary rounded-full">
              <service.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
          </div>
          <CardDescription className="text-md">{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-heading mb-6 text-center">Project Showcase</h3>
          <div className={`grid md:grid-cols-2 gap-6 items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-center">
              <h4 className="text-lg font-semibold font-heading mb-2 text-muted-foreground tracking-wider">BEFORE</h4>
              <motion.div {...imageAnimation} className="relative aspect-video w-full rounded-lg overflow-hidden border-2 border-dashed border-muted/50 shadow-md p-1 bg-muted/20">
                <Image
                  src={service.beforeImageUrl}
                  alt={`${service.title} - Before`}
                  data-ai-hint={service.beforeAiHint}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold font-heading mb-2 text-accent tracking-wider">AFTER</h4>
              <motion.div {...imageAnimation} transition={{...imageAnimation.transition, delay: 0.1}} className="relative aspect-video w-full rounded-lg overflow-hidden border-2 border-accent shadow-lg p-1 bg-accent/10">
                <Image
                  src={service.afterImageUrl}
                  alt={`${service.title} - After`}
                  data-ai-hint={service.afterAiHint}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
