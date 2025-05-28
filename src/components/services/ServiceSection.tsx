import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/constants';

interface ServiceSectionProps {
  service: Service;
  reverseLayout?: boolean;
}

export default function ServiceSection({ service, reverseLayout = false }: ServiceSectionProps) {
  return (
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
        <h3 className="text-xl font-semibold font-heading mb-4 text-center">Project Showcase</h3>
        <div className={`grid md:grid-cols-2 gap-6 items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">Before</p>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md">
              <Image
                src={service.beforeImageUrl}
                alt={`${service.title} - Before`}
                data-ai-hint={service.beforeAiHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">After</p>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md">
              <Image
                src={service.afterImageUrl}
                alt={`${service.title} - After`}
                data-ai-hint={service.afterAiHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
