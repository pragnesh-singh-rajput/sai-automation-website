import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { TimelineEvent } from '@/lib/constants';
import { CalendarDays } from 'lucide-react';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast?: boolean;
}

export default function TimelineItem({ event, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-10 py-2 group">
      {/* Circle and Line */}
      <div className="flex flex-col items-center w-8 sm:w-10 absolute left-0 top-0 bottom-0 transform -translate-x-1/2">
        <div className="h-full w-px bg-border group-hover:bg-primary/70 smooth-transition"></div>
        <div className="sticky top-1/2 -translate-y-1/2 z-10"> {/* Ensure circle is on top */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background border-2 border-primary group-hover:border-accent group-hover:bg-primary shadow-sm group-hover:shadow-md smooth-transition flex items-center justify-center">
            <CalendarDays className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary group-hover:text-primary-foreground smooth-transition" />
          </div>
        </div>
        {!isLast && <div className="h-full w-px bg-border group-hover:bg-primary/70 smooth-transition"></div>}
      </div>

      {/* Content Card */}
      <Card className="ml-4 sm:ml-6 card-interactive shadow-md hover:shadow-lg border border-transparent hover:border-primary/30">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl font-heading">{event.title}</CardTitle>
            <span className="text-sm sm:text-base font-semibold text-primary">{event.year}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
