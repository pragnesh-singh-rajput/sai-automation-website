
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/constants';

interface FeaturedProductListProps {
  products: Product[];
}

export default function FeaturedProductList({ products }: FeaturedProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Staggered delay
          className="h-full"
        >
          <Card className="flex flex-col card-interactive overflow-hidden shadow-lg h-full">
            <div className="relative h-60 w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                data-ai-hint={product.aiHint || "industrial product"}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-xl">{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full button-interactive">
                <Link href={`/products/${product.id}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
