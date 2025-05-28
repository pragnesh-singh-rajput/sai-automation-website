
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TeamMember } from '@/lib/constants';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const cardAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 }
  };

  return (
    <motion.div {...cardAnimation} className="h-full">
      <Card className="text-center card-interactive shadow-lg h-full flex flex-col">
        <CardHeader className="items-center">
          <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
            <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.aiHint} />
            <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
          <CardDescription className="text-primary">{member.role}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
