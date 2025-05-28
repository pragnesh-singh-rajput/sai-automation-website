
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Download, Puzzle, ListChecks } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

type ProductDetailClientContentProps = {
  product: Product; // Product is passed directly
  params: { // params might still be useful for other things or consistency
    productId: string;
  };
};

export default function ProductDetailClientContent({ product, params }: ProductDetailClientContentProps) {
  // Product is now passed as a prop, no need to find it here.
  // const product = mockProducts.find((p) => p.id === params.productId);
  // if (!product) {
  //   notFound(); // This check is now done in the server component
  // }

  const mainSectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  const cardAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const imageCardAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };


  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <motion.div initial={{ opacity:0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <Button variant="outline" asChild className="mb-8 button-interactive">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div {...imageCardAnimation}>
          <Card className="overflow-hidden shadow-xl card-interactive">
            <div className="relative aspect-square w-full bg-secondary/10">
              <Image
                src={product.imageUrl}
                alt={product.name}
                data-ai-hint={product.aiHint || "industrial product"}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Card>
        </motion.div>

        <motion.div {...mainSectionAnimation} className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2">{product.name}</h1>
            {product.price && (
              <p className="text-3xl font-semibold text-primary mb-4">{product.price}</p>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </div>
          
          <Button size="lg" className="w-full md:w-auto button-interactive bg-accent hover:bg-accent/90 text-accent-foreground">
            <ShoppingCart className="mr-2 h-5 w-5" /> Enquire / Add to Quote
          </Button>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true, amount: 0.1}} transition={{duration: 0.5, delay: 0.2}}>
        <Separator className="my-12" />
      </motion.div>

      <div className="space-y-10">
        {product.specifications && product.specifications.length > 0 && (
          <motion.div {...cardAnimation}>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ListChecks className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl font-heading">Specifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <motion.li 
                      key={spec.key} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                      className="flex justify-between text-sm pb-2 border-b border-border/50 last:border-b-0"
                    >
                      <span className="font-medium text-foreground/90">{spec.key}:</span>
                      <span className="text-muted-foreground text-right">{spec.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {product.addons && product.addons.length > 0 && (
          <motion.div {...cardAnimation} transition={{...cardAnimation.transition, delay: 0.1 }}>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Puzzle className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl font-heading">Compatible Add-ons</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.addons.map((addon, index) => (
                    <motion.div 
                      key={addon.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                      className="p-4 border rounded-md bg-secondary/20"
                    >
                      <h4 className="font-semibold text-md mb-1">{addon.name}</h4>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {product.datasheets && product.datasheets.length > 0 && (
          <motion.div {...cardAnimation} transition={{...cardAnimation.transition, delay: 0.2 }}>
            <Card className="shadow-lg">
              <CardHeader>
                 <div className="flex items-center gap-3">
                  <Download className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl font-heading">Datasheets & Manuals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.datasheets.map((sheet, index) => (
                    <motion.li 
                      key={sheet.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    >
                      <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-accent">
                        <a href={sheet.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" /> {sheet.name}
                        </a>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
