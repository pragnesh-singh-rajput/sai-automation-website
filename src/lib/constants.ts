
import type { LucideIcon } from 'lucide-react';
import { Home, Package, Settings, Users, Mail, Bot, Wrench, Building2, PanelTopOpen, PackageCheck, Award, Settings2, ThumbsUp, Star, MessageSquare } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Products', href: '/products', icon: Package },
  { label: 'Services', href: '/services', icon: Settings },
  { label: 'About Us', href: '/about', icon: Users },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export type ProductSpecification = { key: string; value: string };
export type ProductAddon = { id: string; name: string; description: string; };
export type ProductDatasheet = { name: string; url: string; };

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  price?: string; // Optional
  specifications?: ProductSpecification[];
  addons?: ProductAddon[];
  datasheets?: ProductDatasheet[];
  aiHint?: string;
};

export const mockProducts: Product[] = [
  {
    id: 'sai-lmr-001',
    name: 'LM Rail With Block',
    category: 'LM Rails',
    description: 'Precision LM rails with matching blocks for smooth linear motion.',
    longDescription: 'Our LM Rails with Blocks provide high rigidity and accuracy for various industrial applications. Engineered for durability and smooth operation, they are essential components for precision machinery, automation systems, and robotics. Available in multiple sizes and configurations to meet your specific requirements.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'lm rail block',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-bls-001',
    name: 'Ball Screw With Nut',
    category: 'Ball Screws',
    description: 'High-efficiency ball screws with precision nuts for linear actuation.',
    longDescription: 'These Ball Screws with Nuts offer excellent transmission efficiency and precise positioning. Ideal for applications requiring high-speed movement and accuracy, such as CNC machines, 3D printers, and automated assembly lines. Robust construction ensures long service life.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'ball screw nut',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-bls-002',
    name: 'Ball Screw End Support',
    category: 'Ball Screw Supports',
    description: 'Reliable end supports for ball screw assemblies.',
    longDescription: 'Our Ball Screw End Supports provide stable and accurate mounting for ball screw shafts. These units are crucial for maintaining alignment and preventing deflection, ensuring optimal performance and longevity of your linear motion system. Available in fixed and supported side configurations.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'end support',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-cpl-001',
    name: 'Coupling for Servo Motor',
    category: 'Couplings',
    description: 'High-performance couplings designed for servo motor applications.',
    longDescription: 'These couplings provide reliable torque transmission and misalignment compensation for servo motor systems. Designed for high torsional stiffness and low inertia, they ensure precise motion control and reduce vibration. Various types available to suit different servo motor requirements.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'servo coupling',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-bsh-001',
    name: 'Taper Lock Bush',
    category: 'Bushings',
    description: 'Versatile taper lock bushes for secure shaft mounting.',
    longDescription: 'Taper Lock Bushes offer a convenient and secure method for mounting pulleys, sprockets, and other components to shafts. They provide a strong, backlash-free connection and are easy to install and remove. Available in a wide range of bore sizes.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'taper lock',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-gbx-001',
    name: 'Planetary Gearbox',
    category: 'Gearboxes',
    description: 'Precision planetary gearboxes for high torque and compact applications.',
    longDescription: 'Our Planetary Gearboxes deliver high torque density, excellent efficiency, and low backlash. They are ideal for applications requiring precise speed reduction and torque amplification in a compact footprint, such as robotics, automation, and servo systems.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'planetary gearbox',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-shb-001',
    name: 'Hard Chrome Shaft with Bearings',
    category: 'Shafts & Bearings',
    description: 'Durable hard chrome shafts supplied with various types of bearings.',
    longDescription: 'These Hard Chrome Shafts offer excellent wear resistance and a smooth surface finish, ideal for linear motion systems. Paired with a comprehensive range of compatible bearings, they provide a complete solution for guiding and supporting loads with precision and reliability.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'chrome shaft bearing',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-drv-001',
    name: 'Rack & Pinion Drive',
    category: 'Drives',
    description: 'Robust rack and pinion drives for linear motion systems.',
    longDescription: 'Our Rack and Pinion Drives convert rotary motion into linear motion with high accuracy and force. Suitable for long travel distances and heavy loads, these drives are commonly used in CNC machinery, material handling systems, and automation equipment. Various pitches and materials available.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'rack pinion',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-mtr-001',
    name: 'Stepper Motor',
    category: 'Motors',
    description: 'Reliable stepper motors for precise positioning control.',
    longDescription: 'Stepper Motors provide accurate and repeatable positioning without the need for feedback sensors in many applications. They are ideal for tasks requiring precise angular movement, such as in 3D printers, CNC machines, and automated instrumentation. Various sizes and torque ratings available.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'stepper motor',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-rbt-001',
    name: 'MIG Welding Robots & Cobots',
    category: 'Robotics',
    description: 'Advanced robots and cobots optimized for MIG welding applications.',
    longDescription: 'Enhance your welding operations with our range of MIG Welding Robots and Collaborative Robots (Cobots). These systems offer high precision, speed, and consistency, improving weld quality and productivity. Cobots provide a flexible solution for working alongside human operators.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'mig welding robot',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-alp-001',
    name: 'Aluminium Profile & Accessories',
    category: 'Aluminium Profiles',
    description: 'Versatile aluminium profiles and a wide range of accessories for custom structures.',
    longDescription: 'Our Aluminium Profiles and Accessories provide a flexible and modular system for building custom frames, machine guards, workstations, and more. The T-slot design allows for easy assembly and modification. A comprehensive range of connectors, fasteners, and other accessories are available.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'aluminium profile',
    specifications: [],
    addons: [],
    datasheets: []
  },
  {
    id: 'sai-rbt-002',
    name: 'Single Axis Robot',
    category: 'Robotics',
    description: 'Compact and efficient single-axis robots for linear automation tasks.',
    longDescription: 'Single Axis Robots, also known as linear actuators or linear stages, provide precise and repeatable linear motion. They are ideal for applications such as pick-and-place, dispensing, positioning, and inspection. Available in various stroke lengths, speeds, and load capacities.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'single axis robot',
    specifications: [],
    addons: [],
    datasheets: []
  }
];

export const productCategories = ['All', ...new Set(mockProducts.map(p => p.category).sort())];


export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  beforeImageUrl: string;
  beforeAiHint: string;
  afterImageUrl: string;
  afterAiHint: string;
};

export const services: Service[] = [
  {
    id: 'panel-building',
    title: 'Custom Panel Building',
    description: 'We design and build custom control panels tailored to your specific automation needs, ensuring optimal performance and reliability. From simple operator stations to complex PLC enclosures, our expert team delivers high-quality solutions.',
    icon: PanelTopOpen,
    beforeImageUrl: 'https://placehold.co/600x400.png',
    beforeAiHint: 'old controlpanel',
    afterImageUrl: 'https://placehold.co/600x400.png',
    afterAiHint: 'new controlpanel',
  },
  {
    id: 'robot-welding',
    title: 'Robotic Welding Solutions',
    description: 'Enhance your manufacturing efficiency with our advanced robotic welding systems. We provide turnkey solutions, including robot integration, programming, and custom tooling for consistent, high-quality welds.',
    icon: Bot,
    beforeImageUrl: 'https://placehold.co/600x400.png',
    beforeAiHint: 'manual welding',
    afterImageUrl: 'https://placehold.co/600x400.png',
    afterAiHint: 'robotic welding',
  },
  {
    id: 'maintenance-repair',
    title: 'Maintenance & Repair',
    description: 'Keep your automation systems running smoothly with our comprehensive maintenance and repair services. Our skilled technicians offer preventative maintenance, troubleshooting, and emergency repairs to minimize downtime.',
    icon: Wrench,
    beforeImageUrl: 'https://placehold.co/600x400.png',
    beforeAiHint: 'broken machine',
    afterImageUrl: 'https://placehold.co/600x400.png',
    afterAiHint: 'repaired machine',
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export const companyTimeline: TimelineEvent[] = [
  { year: '2010', title: 'Company Founded', description: 'SAI AUTOMATION was established with a vision to revolutionize industrial automation.' },
  { year: '2012', title: 'First Major Project', description: 'Successfully delivered a large-scale automation solution for a key manufacturing client.' },
  { year: '2015', title: 'Expansion of Services', description: 'Introduced robotic welding and advanced control system integration services.' },
  { year: '2018', title: 'New Headquarters', description: 'Moved into a new, state-of-the-art facility to accommodate growth and enhance R&D capabilities.' },
  { year: '2023', title: 'Innovation Award', description: 'Received industry recognition for innovative solutions in smart factory automation.' },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  aiHint: string;
};

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'Dr. Eleanor Vance', role: 'CEO & Chief Engineer', bio: 'Visionary leader with 20+ years in automation and robotics.', imageUrl: 'https://placehold.co/300x300.png', aiHint: 'female executive' },
  { id: '2', name: 'Marcus Chen', role: 'Head of Operations', bio: 'Expert in streamlining manufacturing processes and project management.', imageUrl: 'https://placehold.co/300x300.png', aiHint: 'male manager' },
  { id: '3', name: 'Sofia Alvares', role: 'Lead R&D Scientist', bio: 'Innovator focused on next-generation sensor and AI technologies.', imageUrl: 'https://placehold.co/300x300.png', aiHint: 'female scientist' },
  { id: '4', name: 'John Miller', role: 'Senior Solutions Architect', bio: 'Specializes in custom automation solutions for complex challenges.', imageUrl: 'https://placehold.co/300x300.png', aiHint: 'male engineer' },
];

export const officeImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Modern Office Space', aiHint: 'modern office' },
  { src: 'https://placehold.co/600x400.png', alt: 'Advanced Workshop', aiHint: 'industrial workshop' },
  { src: 'https://placehold.co/600x400.png', alt: 'R&D Laboratory', aiHint: 'research lab' },
  { src: 'https://placehold.co/600x400.png', alt: 'Collaborative Meeting Area', aiHint: 'meeting room' },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  imageUrl?: string;
  aiHint?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "SAI AUTOMATION transformed our production line. Their robotic solutions increased our efficiency by 40%!",
    author: 'Jane Doe',
    company: 'Global Manufacturing Co.',
    imageUrl: 'https://placehold.co/100x100.png',
    aiHint: 'business person'
  },
  {
    id: 'testimonial-2',
    quote: "The custom control panel they built for us was top-notch. Seamless integration and fantastic support.",
    author: 'John Smith',
    company: 'Tech Assembly Inc.',
    imageUrl: 'https://placehold.co/100x100.png',
    aiHint: 'factory manager'
  },
  {
    id: 'testimonial-3',
    quote: "Their maintenance team is incredibly responsive. They had our critical machinery back online in record time.",
    author: 'Alice Brown',
    company: 'Automated Systems Ltd.',
    // No image for this one to show variability
  },
];


// Icons for Home page sections
export const experienceFeatures = [
  {
    icon: PackageCheck,
    title: 'Components Supplied',
    description: 'Durable solutions for LM Rails, Cross Rollers, Couplings, Racks, Pinions, and more.',
  },
  {
    icon: Wrench,
    title: 'Service & Repair',
    description: 'Expert maintenance and support for the entire lifecycle of your automation systems.',
  },
  {
    icon: Bot,
    title: 'Robot Solutions',
    description: 'Cutting-edge robotic system integration, from new installations to upgrades and new panels.',
  },
];

export const whyChooseUsFeatures = [
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Proven expertise in industrial automation and linear motion products since 2010.',
  },
  {
    icon: Settings2,
    title: 'End-to-End Solutions',
    description: 'Meeting total lifecycle needs to help customers realize the most value from their investment.',
  },
  {
    icon: ThumbsUp, // Changed from Truck
    title: 'Reliable Solutions & Support',
    description: 'Committed to your success with dependable products and services for growing companies.',
  },
];
