import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/constants';
import { MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="flex items-center justify-center mb-10">
        <MessageSquare className="h-10 w-10 text-primary mr-3" />
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col card-interactive shadow-lg">
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
        ))}
      </div>
    </section>
  );
}
