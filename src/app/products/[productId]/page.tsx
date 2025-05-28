import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Download, Puzzle, ListChecks } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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

        <div className="space-y-6">
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
          
          <Button size="lg" className="w-full md:w-auto button-interactive">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Quote / Enquire
          </Button>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-10">
        {product.specifications && product.specifications.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ListChecks className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl font-heading">Specifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.specifications.map((spec) => (
                  <li key={spec.key} className="flex justify-between text-sm pb-2 border-b border-border/50 last:border-b-0">
                    <span className="font-medium text-foreground/90">{spec.key}:</span>
                    <span className="text-muted-foreground text-right">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {product.addons && product.addons.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Puzzle className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl font-heading">Compatible Add-ons</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {product.addons.map((addon) => (
                  <div key={addon.id} className="p-4 border rounded-md bg-secondary/20">
                    <h4 className="font-semibold text-md mb-1">{addon.name}</h4>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {product.datasheets && product.datasheets.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3">
                <Download className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl font-heading">Datasheets & Manuals</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.datasheets.map((sheet) => (
                  <li key={sheet.name}>
                    <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-accent">
                      <a href={sheet.url} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" /> {sheet.name}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
