import ServiceSection from '@/components/services/ServiceSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import { services } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Expert Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a comprehensive suite of industrial automation services, from custom design and integration to ongoing support and maintenance, ensuring your operations run at peak efficiency.
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} reverseLayout={index % 2 !== 0} />
        ))}
      </div>

      <Separator className="my-16 md:my-24" />

      <TestimonialsSection />
    </div>
  );
}
