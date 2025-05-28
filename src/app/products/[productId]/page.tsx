
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/lib/constants';
import ProductDetailClientContent from '@/components/products/ProductDetailClientContent';

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

// generateStaticParams must be in a Server Component or a page without "use client"
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    productId: product.id,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = mockProducts.find((p) => p.id === params.productId);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: `${product.name} - SAI AUTOMATION`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = mockProducts.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  // Pass the found product and params to the client component
  return <ProductDetailClientContent product={product} params={params} />;
}
