import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Package, Settings, Users } from 'lucide-react';
import { mockProducts, services as appServices } from '@/lib/constants';

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 3);
  const highlightedServices = appServices.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Industrial Automation Background"
          data-ai-hint="industrial animation"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 p-6 container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading drop-shadow-lg">
            Precision in Every Motion
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-slate-200 drop-shadow-md">
            Empowering industries with cutting-edge automation, robotics, and control systems for unparalleled efficiency and performance.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="button-interactive bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="button-interactive border-white text-white hover:bg-white/10">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">Featured Products</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover our range of high-quality components and systems designed for reliability and peak performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col card-interactive overflow-hidden shadow-lg">
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="button-interactive">
              <Link href="/products">
                All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">Our Core Services</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Providing expert solutions from custom panel building to advanced robotic integrations and ongoing maintenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedServices.map((service) => (
              <Card key={service.id} className="text-center card-interactive p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent rounded-full">
                    <service.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description.substring(0, 100)}...
                </p>
                <Button variant="link" asChild className="text-primary hover:text-accent">
                  <Link href="/services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - About Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Learn more about our company's journey, our dedicated team, and our commitment to innovation and excellence in automation.
          </p>
          <Button size="lg" asChild className="button-interactive">
            <Link href="/about">
              About Precision Motion Hub <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
