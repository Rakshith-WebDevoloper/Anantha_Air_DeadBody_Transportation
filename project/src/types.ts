export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface City {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: 'air' | 'road';
  message: string;
}

export const CITIES: City[] = [
  {
    name: 'bangalore',
    title: 'Dead Body Transport Services in Bangalore by AnantaAir',
    description: 'Professional and compassionate dead body transportation services in Bangalore. We offer both air and road transport options with 24/7 support.',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80'
  },
  {
    name: 'mumbai',
    title: 'Dead Body Transport Services in Mumbai by AnantaAir',
    description: 'Reliable dead body transportation services across Mumbai. Complete assistance with documentation and transport logistics.',
    imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80'
  },
  {
    name: 'delhi',
    title: 'Dead Body Transport Services in Delhi by AnantaAir',
    description: 'Comprehensive dead body transport solutions in Delhi NCR. Expert handling and 24/7 support for families.',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80'
  },
  {
    name: 'chennai',
    title: 'Dead Body Transport Services in Chennai by AnantaAir',
    description: 'Trusted dead body transportation services in Chennai. Professional handling with complete documentation support.',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80'
  },
  {
    name: 'kolkata',
    title: 'Dead Body Transport Services in Kolkata by AnantaAir',
    description: 'Efficient dead body transport services in Kolkata. Both domestic and international transportation available.',
    imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80'
  },
  {
    name: 'hyderabad',
    title: 'Dead Body Transport Services in Hyderabad by AnantaAir',
    description: 'Professional dead body transportation services in Hyderabad. 24/7 support with complete logistics handling.',
    imageUrl: 'https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&q=80'
  },
  {
    name: 'pune',
    title: 'Dead Body Transport Services in Pune by AnantaAir',
    description: 'Reliable dead body transport solutions in Pune. Expert handling and complete documentation assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1625063220797-768e0d5a26ea?auto=format&fit=crop&q=80'
  },
  {
    name: 'ahmedabad',
    title: 'Dead Body Transport Services in Ahmedabad by AnantaAir',
    description: 'Comprehensive dead body transportation services in Ahmedabad. Both air and road transport options available.',
    imageUrl: 'https://images.unsplash.com/photo-1624956319777-d6bd53d考7c0?auto=format&fit=crop&q=80'
  },
  {
    name: 'jaipur',
    title: 'Dead Body Transport Services in Jaipur by AnantaAir',
    description: 'Professional dead body transport services in Jaipur. Complete assistance with documentation and logistics.',
    imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80'
  },
  {
    name: 'chandigarh',
    title: 'Dead Body Transport Services in Chandigarh by AnantaAir',
    description: 'Trusted dead body transportation services in Chandigarh. 24/7 support with complete handling solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&q=80'
  }
];