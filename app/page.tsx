'use client'

import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces for our data structures
interface ServiceItem {
  title: string;
  description: string;
  image?: string; // Making image optional with the ? operator
  doctor?: string; // Optional doctor field
}

interface CategoryData {
  title: string;
  icon: React.ElementType;
  description: string;
  services: ServiceItem[];
}
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Shield, Award, MapPin, Phone, Mail, Clock, CheckCircle, Star, Users, Lock, Zap, Heart, Scissors, Pill, HelpCircle, ArrowLeft, Quote, ExternalLink, Facebook, Instagram, Youtube, Twitter, Video } from 'lucide-react';
import Image from 'next/image';

// IMPORTANT: Replace these with actual image files in /public/assets/
// See ASSET_INSTRUCTIONS.md for complete mapping
const heroLogoImage = '/assets/logos/hero-logo.avif';
const newLogoImage = '/assets/logos/nav-logo.avif';
const stoneBackground = '/assets/backgrounds/stone-texture.avif';

// Doctor images
const doctorChayut = '/assets/doctors/dr-chayut.avif';
const doctorRichard = '/assets/doctors/dr-richard.avif';
const doctorTeanchai = '/assets/doctors/dr-teanchai.avif';
const doctorNapasorn = '/assets/doctors/dr-napasorn.avif';
const doctorPrangpra = '/assets/doctors/dr-prangpra.avif';

// Service images
const penileEnhancementImage = '/assets/services/penile-enhancement.avif';
const stemCellImage = '/assets/services/stem-cell.avif';
const scrotoxImage = '/assets/services/scrotox.avif';
const peyronieImage = '/assets/services/peyronie.avif';

// Clinic images
const clinicImage1 = '/assets/clinic/clinic-1.avif';
const clinicImage2 = '/assets/clinic/clinic-2.avif';
const clinicImage3 = '/assets/clinic/clinic-3.avif';
const clinicImage4 = '/assets/clinic/clinic-4.avif';
const clinicImage5 = '/assets/clinic/clinic-5.avif';
const clinicImage6 = '/assets/clinic/clinic-6.avif';
const clinicImage7 = '/assets/clinic/clinic-7.avif';

// Partner logos
const trambellirLogo = '/assets/partners/trambellir-logo.avif';
const bcctLogo = '/assets/partners/bcct-logo.avif';
const amchamLogo = '/assets/partners/amcham-logo.avif';

// Other assets
const bookimedBadge = '/assets/badges/bookimed-badge.avif';

export default function HomePage() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [flippedDoctorCards, setFlippedDoctorCards] = useState<number[]>([]);
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);

  // Load Relevance AI chat bubble script
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-relevanceai-share-id', 'f1db6c/80ed49b1-4ef1-42a8-8bbe-9702eb782c59/4876fb1b-d9a5-4731-a13b-79a977d48d9a');
    script.src = 'https://app.relevanceai.com/embed/chat-bubble.js';
    script.setAttribute('data-share-styles', 'hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false');
    
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleDoctorCardFlip = (index: number) => {
    setFlippedDoctorCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleTestimonialExpansion = (index: number) => {
    setExpandedTestimonials(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social media links are defined further down in the component

  const servicesData: Record<string, CategoryData> = {
    "penile-enhancement": {
      title: "Penile Enhancement",
      icon: Zap,
      description: "HE Clinic for Men offers an innovative, non-surgical solution for men looking to increase their size, enhance confidence, and improve their overall quality of life.",
      services: [
        {
          title: "Penile Enhancement",
          description: "Penile enlargement by hyaluronic acid injection is a medical technique (without surgery, without scaring)…",
          image: penileEnhancementImage
        },
        {
          title: "Stem Cell Injection for Erectile Dysfunction",
          description: "Supercharge your sexual performance cure erectile dysfunction with our new simple, safe and affordable stem cell injection…",
          image: stemCellImage
        },
        {
          title: "Scrotox",
          description: "Scrotox is an innovative treatment that involves the use of Botox injections to smooth the skin and relax the muscles of the scrotum…",
          image: scrotoxImage
        },
        {
          title: "Peyronie's Disease - RegenPRP®",
          description: "Peyronie's disease, named after François Gigot de la Peyronie, a French surgeon from the 18th century, is a relatively uncommon yet distressing condition characterised…",
          image: peyronieImage
        }
      ]
    },
    "erectile-dysfunction": {
      title: "Erectile Dysfunction",
      icon: Heart,
      description: "Enhanced vitality and intimacy with our specialised treatments for Erectile Dysfunction.",
      services: [
        {
          title: "Testosterone Replacement",
          description: "Regain your vitality, boost energy, and enhance performance with the New HE T-Shot Booster, a tailored…"
        },
        {
          title: "Shockwave Therapy",
          description: "Reignite your sexual performance and confidence with non-invasive Focused Shockwave Therapy for erectile dysfunction…"
        },
        {
          title: "Platelet-rich Plasma (PRP)",
          description: "Harmless healing abilities for a range of benefits, from skin rejuvenation to sexual health enhancement…"
        },
        {
          title: "BoCox™ for ED",
          description: "BoCox™ for Penile Enhancement is an innovative and non-surgical procedure offered exclusively at He Clinic Bangkok…"
        }
      ]
    },
    "hair-loss": {
      title: "Hair Loss",
      icon: Users,
      description: "Meet the beauty of natural-looking results and the confidence that comes with a rejuvenated and vibrant hair experience.",
      services: [
        {
          title: "Long Hair DHI",
          description: "Unlike traditional methods, Long Hair DHI offers a new technique approach, hair grafts are transplanted…"
        },
        {
          title: "DHI Hair Transplant",
          description: "Discover DHI, or Direct Hair Implantation, an advanced hair transplant technique offering natural results without visible scars…"
        },
        {
          title: "Stem Cell For Hair Restoration",
          description: "In the dynamic realm of combating hair loss, Stem Cell Treatment for Hair Loss emerges as a beacon of hope…"
        },
        {
          title: "Scalp Micro Pigmentation (SMP)",
          description: "The transformative world of Scalp Micro-pigmentation (SMP), a procedure designed to replicate the natural…"
        }
      ]
    },
    "surgery": {
      title: "Surgery",
      icon: Scissors,
      description: "The pinnacle of precision and care in men's health with our specialised procedures.",
      services: [
        {
          title: "No Scalpel Vasectomy",
          description: "Experience a permanent male contraception solution at HE Clinic that eliminates the need for future offspring…"
        },
        {
          title: "Staple Circumcision",
          description: "Experience the innovative Staple Circumcision at HE Clinic, offering superior health and aesthetic benefits…"
        },
        {
          title: "Selective Dorsal Neurectomy (SDN)",
          description: "Selective Dorsal Neurectomy (SDN) is a specialised surgical procedure designed to address premature ejaculation by cutting…"
        },
        {
          title: "Lower Blepharoplasty (Eye Bag Surgery)",
          description: "Lower blepharoplasty, commonly known as eye bag surgery, is a highly effective cosmetic procedure that addresses puffiness…"
        },
        {
          title: "Upper Blepharoplasty (Double Eyelid)",
          description: "Upper blepharoplasty, commonly referred to as double eyelid surgery, is a surgical procedure designed to enhance…"
        }
      ]
    },
    "medicinal": {
      title: "Medicinal",
      icon: Pill,
      description: "Discover the power of the medicinal with He Clinic and regain your wellbeing covered by professionals.",
      services: [
        {
          title: "Cannabidiol Oils",
          description: "Discover the therapeutic wonders of medical cannabis at HE Clinic for Men…",
          image: "/assets/services/default-service.png" // Adding a default image path
        },
        {
          title: "Semaglutide for Weight Management",
          description: "Experience the transformative power of Semaglutide, a revolutionary weight management solution…",
          image: "/assets/services/default-service.png" // Adding a default image path
        },
        {
          title: "NAD+",
          description: "Experience the transformative power of NAD+—a vital coenzyme that reignites your vitality, reverses signs…",
          image: "/assets/services/default-service.png" // Adding a default image path
        },
        {
          title: "Myers' Cocktail",
          description: "Myers' Cocktail is a powerful intravenous therapy designed to enhance overall health and wellness…",
          image: "/assets/services/default-service.png" // Adding a default image path
        }
      ]
    },
    "weight-loss": {
      title: "Weight Loss",
      icon: Scissors, // Using Scissors icon as an alternative to Weight
      description: "Wellness with HeClinic's specialised weight loss solutions. Our tailored programs are designed to address your unique needs.",
      services: [
        {
          title: "Testosterone-Enhanced Weight Loss",
          description: "Discover how testosterone therapy can help you shed excess weight and boost your overall well-being…",
          image: "/assets/services/default-service.png" // Adding a default image path
        },
        {
          title: "Cool Sculpting",
          description: "Discover Fat Freezing, an FDA-approved non-invasive method that targets stubborn body fat areas…"
        }
      ]
    }
  };

  const clinicHighlights = [
    {
      icon: Shield,
      title: "Fully Licensed Clinic",
      description: "Compliant with Thailand's medical standards and regulations for your safety and peace of mind."
    },
    {
      icon: Award,
      title: "Expert Doctors",
      description: "Led by Dr. Chayut and Dr. Richard, pioneers in men's health with years of specialized experience."
    },
    {
      icon: Lock,
      title: "Discreet & Premium",
      description: "Private consultations in a luxurious Thonglor setting with complete confidentiality guaranteed."
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located at Fifty-Fifth Thonglor, 2nd Floor, Sukhumvit 55 in the heart of Bangkok."
    }
  ];

  // Clinic images ordered 1-7
  const clinicImages = [
    clinicImage1,
    clinicImage2,
    clinicImage3,
    clinicImage4,
    clinicImage5,
    clinicImage6,
    clinicImage7
  ];

  // Partner logos
  const partnerLogos = [
    trambellirLogo,
    bcctLogo,
    amchamLogo
  ];

  // Google Reviews testimonials
  const testimonials = [
    {
      name: "Fares Khazy",
      date: "2 months ago",
      rating: 5,
      text: "The staff and doctors were amazing and helpful. Definitely recommend 10/10",
      googleUrl: "https://maps.app.goo.gl/GTv6rMS4tiKKhNBx8"
    },
    {
      name: "Troy Cados",
      date: "a month ago", 
      rating: 5,
      text: "Fantastic clinic. Professional, knowledgable, and kind staff. Clean, modern facility. Everyone speaks perfect English (including an English native), and I felt very comfortable with my treatment here. I would not hesitate to come back again!",
      googleUrl: "https://maps.app.goo.gl/WP2GKXEWr5ktvWQ99"
    },
    {
      name: "Charles Wilson",
      date: "a month ago",
      rating: 5,
      text: "At first I was put off that it is in a shopping mall. But quickly as I entered the actual Clinic I was pleased with the staff and the clinic itself. The doctor was clear in answering questions before after and during the procedure. After completing the procedure the clinic has answered all my questions quickly and efficiently. If you are looking for a vasectomy. I suggest going to HE Clinic.",
      googleUrl: "https://maps.app.goo.gl/NLnVMqRAQhLBHenk6"
    }
  ];

  const teamMembers = [
    {
      firstName: "Dr. Richard",
      lastName: "Diacakis",
      title: "Founder & Surgeon",
      specialization: "Reconstructive & Aesthetic Surgery",
      experience: "Microsurgery Degree 1997",
      image: doctorRichard,
      biography: "Dr. Richard is one of Europe's finest plastic surgeons and founder of HE Clinic. He earned his microsurgery degree in 1997 and served as Clinic-Assistant Chief of Paris Hospitals. In 2016, he co-founded HE Clinic Bangkok to bring premier men's health care to Asia."
    },
    {
      firstName: "Dr. Chayut",
      lastName: "Fungtongjaroen",
      title: "Co-Founder & Surgeon",
      specialization: "Rhinoplasty & Blepharoplasty",
      experience: "Thammasat University Graduate",
      image: doctorChayut,
      biography: "Dr. Chayut graduated from Thammasat University and specializes in aesthetic procedures including rhinoplasty and blepharoplasty. He co-founded HE Clinic in 2016 to revolutionize men's health and aesthetic medicine in Asia."
    },
    {
      firstName: "Dr. Teanchai",
      lastName: "Siricharoensang",
      title: "Senior Urologist",
      specialization: "Laparoscopic & Endoscopic Surgery",
      experience: "13 Years at Samitivej Hospital",
      image: doctorTeanchai,
      biography: "Dr. Teanchai is a senior urologist with 13 years of experience at Samitivej Hospital Bangkok. He graduated from Siriraj Medical School and Mahidol University, specializing in advanced laparoscopic and endoscopic surgery techniques."
    },
    {
      firstName: "Dr. Napasorn",
      lastName: "Tiwongkum",
      title: "Hair Transplant Doctor",
      specialization: "DHI, FUE & Long Hair DHI Techniques", 
      experience: "Multiple International Certifications",
      image: doctorNapasorn,
      biography: "Dr. Napasorn is a skilled dermatologist and hair transplant specialist with expertise in FUE and DHI techniques. She holds multiple international certifications."
    },
    {
      firstName: "Dr. Prangpra",
      lastName: "Srisawas",
      title: "Anti-Aging Doctor",
      specialization: "Pre-Rejuvenation & Rejuvenation",
      experience: "University of Nottingham Graduate",
      image: doctorPrangpra,
      biography: "Dr. Prangpra graduated from the University of Nottingham and Srinakharinwirot University joint program. She specializes in aesthetic and anti-aging treatments, focusing on pre-rejuvenation and rejuvenation procedures to enhance confidence."
    }
  ];

  // Available services for the booking form
  const availableServices = [
    "Penile Enhancement",
    "Stem Cell Injection for Erectile Dysfunction", 
    "Peyronie's Disease - RegenPRP®",
    "Scrotox",
    "Testosterone Replacement",
    "Shockwave Therapy",
    "Platelet-rich Plasma (PRP)",
    "BoCox™ for ED",
    "Long Hair DHI",
    "DHI Hair Transplant",
    "Stem Cell For Hair Restoration",
    "Scalp Micro Pigmentation (SMP)",
    "No Scalpel Vasectomy",
    "Staple Circumcision",
    "Selective Dorsal Neurectomy (SDN)",
    "Lower Blepharoplasty (Eye Bag Surgery)",
    "Upper Blepharoplasty (Double Eyelid)",
    "Cannabidiol Oils",
    "NAD+",
    "Myers' Cocktail",
    "Testosterone-Enhanced Weight Loss",
    "Cool Sculpting"
  ];

  // Country codes
  const countryCodes = [
    { code: "+66", country: "Thailand", flag: "🇹🇭" },
    { code: "+1", country: "United States", flag: "🇺🇸" },
    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+86", country: "China", flag: "🇨🇳" }
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/heclinicsbangkok",
      icon: Facebook
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/heclinicfor_men/",
      icon: Instagram
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/c/HEClinic",
      icon: Youtube
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@heclinics",
      icon: Video
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/heclinicformen",
      icon: Twitter
    }
  ];

  // Google logo SVG component
  const GoogleLogo = () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image 
                src={newLogoImage} 
                alt="HeClinic for Men" 
                width={120}
                height={40}
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={scrollToTop}
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#why-us" className="text-gray-700 hover:text-[#023861] transition-colors">Why Us</a>
              <a href="#services" className="text-gray-700 hover:text-[#023861] transition-colors">Services</a>
              <a href="#team" className="text-gray-700 hover:text-[#023861] transition-colors">Team</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#023861] transition-colors">Testimonials</a>
              <Button 
                className="bg-[#023861] hover:bg-[#023861]/90 text-white"
                onClick={scrollToBooking}
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-48 lg:py-72 overflow-hidden" id="home">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://horze8elcmmyjoto.public.blob.vercel-storage.com/HEclinicHero-AVTivXGl7dsi1PcgKvCFJT5ff5MnNk.webm" type="video/webm" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023861]/50 via-[#023861]/40 to-[#023861]/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-12 text-white">
              {/* Centered Logo */}
              <div className="flex justify-center">
                <Image 
                  src={heroLogoImage} 
                  alt="HeClinic for Men" 
                  width={256}
                  height={128}
                  className="h-32 w-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Highlights */}
      <section className="py-16 lg:py-20 bg-gray-50" id="why-us">        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Why Choose HeClinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the highest standard of men's health care in Bangkok's premium Thonglor district
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const isFlipped = flippedCards.includes(index);
              
              return (
                <div
                  key={index}
                  className="relative h-48 cursor-pointer group"
                  onClick={() => toggleCardFlip(index)}
                  style={{ perspective: '1000px' }}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of card */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 hover:border-[#023861] transition-colors bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${stoneBackground})`,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/90 rounded-lg"></div>
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                        <div className="w-16 h-16 bg-[#023861]/10 rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="h-8 w-8 text-[#023861]" />
                        </div>
                        <h3 className="text-xl text-gray-900 mb-2">{highlight.title}</h3>
                        <p className="text-sm text-[#023861] font-medium">Click for more</p>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${stoneBackground})`,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/90 rounded-lg"></div>
                      <div className="relative z-10 h-full flex items-center justify-center text-center p-6">
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infinity Loop Banner - Seamless with no padding */}
      <section className="bg-white overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {/* First set of images (1-7) */}
          {clinicImages.map((image, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <Image
                src={image}
                alt={`HeClinic Interior ${index + 1}`}
                width={384}
                height={256}
                className="h-64 w-96 object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop (1-7) */}
          {clinicImages.map((image, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <Image
                src={image}
                alt={`HeClinic Interior ${index + 1}`}
                width={384}
                height={256}
                className="h-64 w-96 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden" id="services">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.02)' }}
        >
          <source src="https://horze8elcmmyjoto.public.blob.vercel-storage.com/honeygrateBG-0nM9l5xRMZLGwYz2tlle45GTQqHgSW.webm" type="video/webm" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Comprehensive Men's Health Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized treatments designed to enhance your confidence and wellbeing
            </p>
          </div>

          <Tabs defaultValue="penile-enhancement" className="w-full">
            <div className="flex justify-center mb-12 px-4">
              <TabsList className="bg-transparent h-auto w-auto p-0 rounded-none border-0 flex flex-wrap justify-center gap-3 max-w-6xl">
                {Object.entries(servicesData).map(([key, category]: [string, CategoryData]) => {
                  const IconComponent = category.icon;
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex flex-col items-center gap-2 px-6 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg data-[state=active]:bg-[#023861] data-[state=active]:text-white data-[state=active]:border-[#023861] hover:border-[#023861] transition-colors w-[160px] h-[80px]"
                    >
                      <IconComponent className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm text-center leading-tight">{category.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {Object.entries(servicesData).map(([key, category]: [string, CategoryData]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 max-w-4xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service: ServiceItem, index: number) => (
                    <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm overflow-hidden">
                      {/* Fixed height container for entire card */}
                      <div className="h-[520px] flex flex-col">
                      {/* Image - Fixed exact size */}
                      <div className="h-[180px] w-full overflow-hidden flex-shrink-0">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <div className="text-gray-400 text-lg">No Image Available</div>
                          </div>
                        )}
                      </div>
                      
                      {/* Content container - remaining space */}
                      <div className="flex-1 flex flex-col p-6">
                        {/* Title section - Fixed height for uniformity */}
                        <div className="h-[70px] flex flex-col justify-start mb-4">
                          <h3 className="text-[#023861] text-lg leading-tight line-clamp-3">{service.title}</h3>
                          {service.doctor && (
                            <Badge variant="outline" className="w-fit border-[#023861] text-[#023861] mt-2">
                              {service.doctor}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Description - Fixed height and starts at same position */}
                        <div className="h-[120px] mb-6">
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Button - Fixed position at bottom */}
                        <div className="mt-auto">
                          <Button 
                            variant="outline" 
                            className="w-full border-[#023861] text-[#023861] hover:bg-[#023861] hover:text-white"
                            onClick={scrollToBooking}
                          >
                            Find Out More
                          </Button>
                        </div>
                      </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Bookimed Verification Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-y border-yellow-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="https://us-uk.bookimed.com/clinic/he-clinic-bangkok/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-6 hover:opacity-80 transition-opacity group"
          >
            <img src={bookimedBadge} alt="Bookimed Approved" className="h-40 w-40" />
            <div className="text-center">
              <h3 className="text-lg text-gray-900 mb-2 group-hover:text-[#023861] transition-colors">
                Verified by Bookimed
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                HE Clinic Bangkok is checked by Bookimed on 2024-07-12 and approved for serving international patients.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* HeClinic Video Section */}
      <section className="relative py-64 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://horze8elcmmyjoto.public.blob.vercel-storage.com/heclinicvideo-QEu7ZgKLwkdw3Loo7sU60QKU64yda5.webm" type="video/webm" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023861]/50 via-[#023861]/40 to-[#023861]/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 text-white">
              <h2 className="text-4xl lg:text-5xl">
                Experience HeClinic
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Step inside our world-class facility and discover why HeClinic is Bangkok's premier destination for men's health and wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 bg-gray-50" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class doctors with years of specialized experience in men's health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((doctor, index) => {
              const isDoctorFlipped = flippedDoctorCards.includes(index);
              
              return (
                <div
                  key={index}
                  className="relative h-[400px]"
                  style={{ perspective: '1000px' }}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 ${isDoctorFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of card */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 hover:border-[#023861] transition-colors bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${stoneBackground})`,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/90 rounded-lg"></div>
                      <div className="relative z-10 h-full flex flex-col text-center p-6">
                        {/* Doctor Photo */}
                        <div className="mx-auto mb-4">
                          <img
                            src={doctor.image}
                            alt={`${doctor.firstName} ${doctor.lastName}`}
                            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-[#023861]/10"
                          />
                        </div>
                        
                        {/* Doctor Name - First and Last Name on separate lines */}
                        <div className="mb-3">
                          <h3 className="text-lg text-[#023861] leading-tight">{doctor.firstName}</h3>
                          <h3 className="text-lg text-[#023861] leading-tight">{doctor.lastName}</h3>
                        </div>
                        
                        {/* Title Badge */}
                        <div className="mb-4">
                          <Badge variant="outline" className="border-[#023861] text-[#023861] text-xs px-3 py-1">
                            {doctor.title}
                          </Badge>
                        </div>
                        
                        {/* Specialization and Experience */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-center space-x-2">
                            <Award className="h-4 w-4 text-[#023861] mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-600 text-center leading-tight">
                              {doctor.specialization}
                            </p>
                          </div>
                          
                          <div className="flex items-start justify-center space-x-2">
                            <Clock className="h-4 w-4 text-[#023861] mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-600 text-center leading-tight">
                              {doctor.experience}
                            </p>
                          </div>
                        </div>
                        
                        {/* View Profile Button - Always at bottom */}
                        <div className="mt-6">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full border-[#023861] text-[#023861] hover:bg-[#023861] hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDoctorCardFlip(index);
                            }}
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${stoneBackground})`,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/90 rounded-lg"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between text-center p-6">
                        {/* Biography - Flex grow to fill space */}
                        <div className="flex-1 flex items-center">
                          <div className="text-sm text-gray-600 text-left w-full">
                            <p>{doctor.biography}</p>
                          </div>
                        </div>
                        
                        {/* Back Button - Always at bottom */}
                        <div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full border-[#023861] text-[#023861] hover:bg-[#023861] hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDoctorCardFlip(index);
                            }}
                          >
                            Back
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white" id="testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GoogleLogo />
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                Google Reviews
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonials.includes(index);
              const shouldTruncate = testimonial.text.length > 150;
              const displayText = isExpanded || !shouldTruncate ? testimonial.text : truncateText(testimonial.text, 150);
              
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:border-[#023861] transition-colors hover:shadow-lg">
                  <CardHeader className="pb-3">
                    {/* Rating and Google Link */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <a 
                        href={testimonial.googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#023861] hover:text-[#023861]/80 transition-colors"
                        aria-label="View on Google"
                      >
                        <div className="flex items-center gap-1">
                          <span className="text-xs">View on Google</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </a>
                    </div>
                    
                    {/* Patient Info */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#023861]/10 flex items-center justify-center text-[#023861] font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      <div className="flex items-start mb-3">
                        <Quote className="h-6 w-6 text-[#023861]/30 mr-2 flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">
                          {displayText}
                        </p>
                      </div>
                      {shouldTruncate && (
                        <button 
                          onClick={() => toggleTestimonialExpansion(index)}
                          className="text-[#023861] hover:text-[#023861]/80 text-sm mt-2 font-medium flex items-center gap-1"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                          {isExpanded ? (
                            <ArrowLeft className="h-3 w-3 rotate-90" />
                          ) : (
                            <ArrowLeft className="h-3 w-3 -rotate-90" />
                          )}
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl lg:text-3xl text-gray-900">
              Trusted Partners & Certifications
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            <div className="flex-shrink-0">
              <Image
                src={bookimedBadge}
                alt="Bookimed Badge"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 lg:py-20 bg-white" id="booking">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                Book Your Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Take the first step towards enhancing your confidence and wellbeing
              </p>
            </div>

            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  Schedule Your Appointment
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="flex gap-2">
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="+66" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.flag} {country.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input id="phone" placeholder="123456789" className="flex-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableServices.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your concerns or questions..."
                    rows={4}
                  />
                </div>

                <div className="text-center pt-4">
                  <Button className="bg-[#023861] hover:bg-[#023861]/90 text-white px-8 py-3 text-lg">
                    Book Consultation
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    By submitting this form, you agree to our privacy policy and terms of service
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#023861] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Image
                  src={newLogoImage}
                  alt="HeClinic for Men"
                  width={150}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Premier men's health clinic in Bangkok, offering innovative treatments for enhancement, 
                vitality, and confidence. Expert care in a discreet, luxury setting.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Fifty-Fifth Thonglor</p>
                    <p>2nd Floor, Sukhumvit 55</p>
                    <p>Bangkok, Thailand</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+66123456789" className="hover:text-white transition-colors">
                    +66 (0)2 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:info@heclinic.co.th" className="hover:text-white transition-colors">
                    info@heclinic.co.th
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                    <p>Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white transition-colors">Our Team</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-white transition-colors">Book Appointment</a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-600" />

          <div className="text-center text-gray-300">
            <p>&copy; 2025 HeClinic for Men. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Licensed medical facility in Bangkok, Thailand
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}