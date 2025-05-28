import Image from 'next/image';
import TimelineItem from '@/components/about/TimelineItem';
import TeamMemberCard from '@/components/about/TeamMemberCard';
import { companyTimeline, teamMembers, officeImages } from '@/lib/constants';
import { Building2, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About SAI AUTOMATION</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          SAI AUTOMATION is a leading supplier of industrial components, offering durable solutions for LM Rails, Cross Rollers, Couplings, Racks, Pinions, and more. With 15 years of experience in linear motion and automation, we meet the total lifecycle needs of our customers, from new panels and robots to comprehensive service and repair. We are dedicated to providing reliable solutions that support growing companies and help them realize the most value from their investments.
        </p>
      </header>

      {/* Company Journey Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center justify-center mb-10">
          <Sparkles className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">Our Journey</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {companyTimeline.map((event, index) => (
            <TimelineItem key={event.year} event={event} isLast={index === companyTimeline.length - 1} />
          ))}
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center justify-center mb-10">
          <Users className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">Meet Our Expert Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Office/Workshop Photos Section */}
      <section>
        <div className="flex items-center justify-center mb-10">
          <Building2 className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">Our Workspace</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {officeImages.map((image, index) => (
            <div key={index} className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg card-interactive">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
