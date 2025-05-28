import Image from 'next/image';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = mockProducts.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Button variant="outline" asChild className="mb-8 button-interactive">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <Card className="overflow-hidden shadow-xl">
          <div className="relative aspect-square w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.aiHint || "industrial product"}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Card>

        <div>
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">{product.name}</h1>
          {product.price && (
            <p className="text-3xl font-semibold text-primary mb-6">{product.price}</p>
          )}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {product.longDescription}
          </p>
          
          {product.specifications && product.specifications.length > 0 && (
            <Card className="mb-6 bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.specifications.map((spec) => (
                    <li key={spec.key} className="flex justify-between text-sm">
                      <span className="font-medium text-foreground/80">{spec.key}:</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Button size="lg" className="w-full md:w-auto button-interactive">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Quote / Enquire
          </Button>
        </div>
      </div>
    </div>
  );
}
