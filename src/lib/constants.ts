import type { LucideIcon } from 'lucide-react';
import { Home, Package, Settings, Users, Mail, Bot, Wrench, Building2, PanelTopOpen, PackageCheck, Award, Settings2, Truck, Star, MessageSquare, ThumbsUp } from 'lucide-react';

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
    id: 'pmh-rbt-001',
    name: 'Precision Robotic Arm X1',
    category: 'Robotics',
    description: 'High-precision 6-axis robotic arm for complex assembly tasks.',
    longDescription: 'The Precision Robotic Arm X1 offers unparalleled accuracy and speed for demanding industrial applications. Its robust design and advanced control system ensure reliability and optimal performance in various manufacturing environments. Ideal for pick-and-place, welding, and material handling.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'robotic arm',
    price: '$25,000',
    specifications: [
      { key: 'Axes', value: '6' },
      { key: 'Payload', value: '10 kg' },
      { key: 'Reach', value: '1500 mm' },
      { key: 'Repeatability', value: '±0.02 mm' },
    ],
    addons: [
      { id: 'addon-grip-01', name: 'Adaptive Gripper Kit', description: 'Versatile gripper for handling various object shapes and sizes.'},
      { id: 'addon-vision-01', name: 'Integrated Vision System', description: 'Adds machine vision capabilities for advanced guidance and inspection.'},
    ],
    datasheets: [
      { name: 'X1 Technical Specifications.pdf', url: '#' },
      { name: 'X1 Maintenance Manual.pdf', url: '#' },
    ]
  },
  {
    id: 'pmh-ctrl-003',
    name: 'Advanced Control Panel C300',
    category: 'Control Systems',
    description: 'Modular control panel for automated machinery and production lines.',
    longDescription: 'The Advanced Control Panel C300 provides a flexible and powerful solution for managing complex automation systems. Featuring a user-friendly HMI and seamless integration capabilities, it streamlines operations and enhances productivity. Customizable to fit specific industry needs.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'control panel',
    price: '$8,500',
    specifications: [
      { key: 'Processor', value: 'Quad-Core Industrial CPU' },
      { key: 'Display', value: '15" Touchscreen HMI' },
      { key: 'Connectivity', value: 'Ethernet, Profibus, Modbus' },
      { key: 'IP Rating', value: 'IP65' },
    ],
    addons: [
      { id: 'addon-remote-01', name: 'Remote Access Module', description: 'Enables remote monitoring and control of the panel.'},
    ],
    datasheets: [
      { name: 'C300 User Guide.pdf', url: '#' },
    ]
  },
  {
    id: 'pmh-sens-005',
    name: 'HyperVision Sensor Array',
    category: 'Sensors',
    description: 'State-of-the-art sensor array for quality control and object detection.',
    longDescription: 'The HyperVision Sensor Array utilizes advanced imaging and processing technology to deliver precise and reliable data for quality assurance and automation tasks. Its compact design and robust construction make it suitable for harsh industrial environments. Enhances defect detection and process monitoring.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'industrial sensor',
    price: '$3,200',
    specifications: [
      { key: 'Resolution', value: '5 MP' },
      { key: 'Frame Rate', value: '60 FPS' },
      { key: 'Interface', value: 'GigE Vision' },
      { key: 'Field of View', value: 'Adjustable (30° - 90°)' },
    ],
    datasheets: [
      { name: 'HyperVision Datasheet.pdf', url: '#' },
    ]
  },
   {
    id: 'pmh-act-002',
    name: 'Linear Actuator LA-5000',
    category: 'Actuators',
    description: 'High-performance linear actuator for precise positioning.',
    longDescription: 'The LA-5000 Linear Actuator delivers exceptional force and precision for a wide range of motion control applications. Its durable construction and efficient motor ensure long-lasting performance in demanding industrial settings. Ideal for automation, robotics, and material handling systems.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'linear actuator',
    price: '$1,800',
    specifications: [
      { key: 'Max Stroke', value: '500 mm' },
      { key: 'Max Force', value: '5000 N' },
      { key: 'Speed', value: 'Up to 100 mm/s' },
      { key: 'Input Voltage', value: '24V DC' },
    ],
    addons: [
      { id: 'addon-encoder-01', name: 'High-Resolution Encoder', description: 'Provides enhanced positioning feedback.'},
    ],
    datasheets: [
      { name: 'LA-5000 Product Manual.pdf', url: '#' },
    ]
  },
];

export const productCategories = ['All', ...new Set(mockProducts.map(p => p.category))];


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
  { year: '2010', title: 'Company Founded', description: 'Precision Motion Hub was established with a vision to revolutionize industrial automation.' },
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
    quote: "Precision Motion Hub transformed our production line. Their robotic solutions increased our efficiency by 40%!",
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
    description: 'Wide range of high-quality automation parts.',
  },
  {
    icon: Wrench,
    title: 'Service & Repair',
    description: 'Expert maintenance and support services.',
  },
  {
    icon: Bot,
    title: 'Robot Solutions',
    description: 'Cutting-edge robotic system integration.',
  },
];

export const whyChooseUsFeatures = [
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Proven expertise in industrial automation since 2010.',
  },
  {
    icon: Settings2,
    title: 'End-to-End Solutions',
    description: 'From design and supply to installation and support.',
  },
  {
    icon: ThumbsUp, // Changed from Truck to be more generic
    title: 'Reliable Support & Delivery',
    description: 'Committed to your success with dependable service.',
  },
];
