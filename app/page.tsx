"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Search,
  Building2,
  Users,
  Globe,
  Shield,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Award,
  Filter,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Zap,
  Target,
  BarChart3,
  Layers,
  Clock,
  HeartHandshake
} from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navLinks = [
    { label: 'Directory', href: '/directory' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ]

  const stats = [
    { value: '2,500+', label: 'Registered Companies', icon: Building2 },
    { value: '45', label: 'Industry Categories', icon: Layers },
    { value: '50K+', label: 'Monthly Searches', icon: Search },
    { value: '98%', label: 'Satisfaction Rate', icon: Star }
  ]

  const services = [
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Create a comprehensive business profile with detailed information, contact details, and industry classification to increase your visibility.',
      features: ['Custom business profiles', 'Industry categorization', 'Contact integration']
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Find the right business partners with our powerful search engine. Filter by industry, location, services, and more.',
      features: ['Full text search', 'Industry filtering', 'Smart suggestions']
    },
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All company submissions go through our verification process to ensure accuracy and trustworthiness of directory listings.',
      features: ['Manual review process', 'Quality assurance', 'Fraud protection']
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your profile performance with detailed analytics on views, searches, and engagement metrics.',
      features: ['View tracking', 'Search appearances', 'Engagement reports']
    }
  ]

  const industries = [
    { name: 'Technology', count: 342, icon: Zap, color: '#2563EB' },
    { name: 'Healthcare', count: 189, icon: HeartHandshake, color: '#059669' },
    { name: 'Finance', count: 267, icon: TrendingUp, color: '#7C3AED' },
    { name: 'Manufacturing', count: 156, icon: Briefcase, color: '#DC2626' },
    { name: 'Professional Services', count: 423, icon: Award, color: '#EA580C' },
    { name: 'Retail', count: 298, icon: Target, color: '#0891B2' }
  ]

  const faqs = [
    {
      question: 'How do I register my company on Rosterly?',
      answer: 'Registering your company is simple. Click the "Register Company" button, fill out the form with your business details including name, contact information, industry, and description. Once submitted, your listing will be reviewed and published to the directory within 24 to 48 hours.'
    },
    {
      question: 'Is there a cost to list my business?',
      answer: 'Basic listings on Rosterly are completely free. We offer premium features for businesses looking for enhanced visibility, analytics, and promotional placement. Contact us for information about premium listing options and pricing.'
    },
    {
      question: 'How can I update my company information?',
      answer: 'You can request updates to your company profile by contacting our support team. We are working on a self service portal that will allow you to manage your listing directly. For now, send your update requests through our contact form.'
    },
    {
      question: 'How do you verify business listings?',
      answer: 'Every submission goes through our verification process. We review business information for accuracy, check for duplicate entries, and may contact businesses directly to confirm details. This ensures our directory maintains high quality and trustworthy listings.'
    },
    {
      question: 'Can I search for businesses by specific criteria?',
      answer: 'Yes, our directory offers powerful search and filtering capabilities. You can search by company name, keywords in descriptions, or filter by industry category. We are continuously improving our search features based on user feedback.'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState)
        }
      )

      if (response.ok) {
        setFormStatus('success')
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2563EB' }}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: '#172033', fontFamily: 'DM Sans, sans-serif' }}>
                Rosterly
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: '#667085', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/directory">
                <Button variant="outline" className="rounded-full" style={{ borderColor: '#2563EB', color: '#2563EB' }}>
                  Browse Directory
                </Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full" style={{ backgroundColor: '#2563EB' }}>
                  Register Company
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#172033' }}
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3 bg-white border-t" style={{ borderColor: '#E5E7EB' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block py-2 text-sm font-medium"
                style={{ color: '#667085', fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <Link href="/directory" className="block">
                <Button variant="outline" className="w-full rounded-full" style={{ borderColor: '#2563EB', color: '#2563EB' }}>
                  Browse Directory
                </Button>
              </Link>
              <Link href="/register" className="block">
                <Button className="w-full rounded-full" style={{ backgroundColor: '#2563EB' }}>
                  Register Company
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
            Trusted by 2,500+ businesses
          </Badge>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
          >
            Discover and connect with businesses that matter
          </h1>
          <p
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: '#667085', fontFamily: 'DM Sans, sans-serif' }}
          >
            Rosterly is the professional business directory designed to help companies get discovered
            and customers find the right partners. Join our growing network today.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white shadow-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#667085' }} />
                <Input
                  type="text"
                  placeholder="Search companies, industries, or services..."
                  className="pl-12 h-12 border-0 focus-visible:ring-0 text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>
              <Link href="/directory">
                <Button className="h-12 px-8 rounded-xl whitespace-nowrap" style={{ backgroundColor: '#2563EB' }}>
                  <Search className="w-4 h-4 mr-2" />
                  Search Directory
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm" style={{ color: '#667085' }}>Popular:</span>
            {['Technology', 'Healthcare', 'Finance', 'Consulting'].map((term) => (
              <Link
                key={term}
                href={`/directory?industry=${term.toLowerCase()}`}
                className="text-sm font-medium hover:underline"
                style={{ color: '#2563EB' }}
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#172033' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}>
                  <stat.icon className="w-6 h-6" style={{ color: '#2563EB' }} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: '#9CA3AF' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
              Our Services
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
            >
              Everything you need to grow your visibility
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#667085' }}>
              From registration to discovery, Rosterly provides the tools businesses need
              to be found by the right customers and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#EEF2FF' }}
                >
                  <service.icon className="w-7 h-7" style={{ color: '#2563EB' }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#172033', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="mb-6" style={{ color: '#667085' }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" style={{ color: '#2563EB' }} />
                      <span className="text-sm" style={{ color: '#667085' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <Badge className="mb-4 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
                Industry Categories
              </Badge>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
              >
                Browse by industry
              </h2>
              <p className="text-lg max-w-xl" style={{ color: '#667085' }}>
                Explore companies across major industry verticals and find the perfect business partner.
              </p>
            </div>
            <Link href="/directory" className="mt-6 sm:mt-0">
              <Button variant="outline" className="rounded-full" style={{ borderColor: '#2563EB', color: '#2563EB' }}>
                <Filter className="w-4 h-4 mr-2" />
                View All Industries
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/directory?industry=${industry.name.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <Card className="p-6 rounded-xl border hover:border-transparent hover:shadow-lg transition-all bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${industry.color}15` }}
                      >
                        <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
                      </div>
                      <div>
                        <h3
                          className="font-semibold group-hover:text-blue-600 transition-colors"
                          style={{ color: '#172033', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {industry.name}
                        </h3>
                        <p className="text-sm" style={{ color: '#667085' }}>
                          {industry.count} companies
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#2563EB' }} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Centered */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
                About Rosterly
              </Badge>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
              >
                Building trust through transparency
              </h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Rosterly was created with a simple mission: to make it easier for businesses to be discovered
                and for customers to find trustworthy partners. We believe in the power of verified information
                and organized data.
              </p>
              <p className="text-lg mb-8" style={{ color: '#667085' }}>
                Our directory goes beyond basic listings. We verify submissions, organize companies by industry,
                and provide powerful search tools that help the right connections happen. Whether you are a
                startup looking for exposure or an established enterprise seeking new partnerships, Rosterly
                provides the platform you need.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF2FF' }}>
                    <Shield className="w-5 h-5" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#172033' }}>Verified Listings</h4>
                    <p className="text-sm" style={{ color: '#667085' }}>Every company goes through our review process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF2FF' }}>
                    <Globe className="w-5 h-5" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#172033' }}>Global Reach</h4>
                    <p className="text-sm" style={{ color: '#667085' }}>Companies from all regions and industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF2FF' }}>
                    <Users className="w-5 h-5" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#172033' }}>Community Driven</h4>
                    <p className="text-sm" style={{ color: '#667085' }}>Built by and for the business community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EEF2FF' }}>
                    <Clock className="w-5 h-5" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#172033' }}>Always Updated</h4>
                    <p className="text-sm" style={{ color: '#667085' }}>Regular updates keep information fresh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder visual */}
            <div className="relative">
              <div
                className="aspect-square rounded-3xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                }}
              >
                <div className="text-center text-white p-8">
                  <Building2 className="w-20 h-20 mx-auto mb-6 opacity-90" />
                  <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>2,500+</div>
                  <div className="text-lg opacity-90">Trusted Companies</div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl flex items-center justify-center bg-white shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#2563EB' }}>98%</div>
                  <div className="text-xs" style={{ color: '#667085' }}>Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
              FAQ
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
            >
              Frequently asked questions
            </h2>
            <p className="text-lg" style={{ color: '#667085' }}>
              Everything you need to know about Rosterly and how it works.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: '#E5E7EB' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="font-semibold pr-4"
                    style={{ color: '#172033', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#667085' }} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5" style={{ color: '#667085' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full Width */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#172033' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'Source Serif 4, serif' }}
          >
            Ready to grow your business visibility?
          </h2>
          <p className="text-lg mb-10 opacity-80 text-white max-w-2xl mx-auto">
            Join thousands of companies already listed on Rosterly. Registration is free and takes
            less than 5 minutes. Start connecting with potential customers and partners today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-14"
                style={{ backgroundColor: '#2563EB' }}
              >
                Register Your Company
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/directory">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg h-14 border-white text-white hover:bg-white/10"
              >
                Browse Directory
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 rounded-full px-4 py-1" style={{ backgroundColor: '#EEF2FF', color: '#2563EB' }}>
                Contact Us
              </Badge>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: '#172033', fontFamily: 'Source Serif 4, serif' }}
              >
                Get in touch with our team
              </h2>
              <p className="text-lg mb-8" style={{ color: '#667085' }}>
                Have questions about listing your business or need help navigating the directory?
                Our team is here to help you succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#EEF2FF' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#667085' }}>Email us at</div>
                    <a href="mailto:support@rosterly.com" className="font-semibold hover:underline" style={{ color: '#172033' }}>
                      support@rosterly.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#EEF2FF' }}
                  >
                    <Clock className="w-6 h-6" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: '#667085' }}>Response time</div>
                    <div className="font-semibold" style={{ color: '#172033' }}>Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 rounded-2xl bg-white shadow-sm border-0">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: '#D1FAE5' }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: '#059669' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#172033' }}>
                    Message Sent Successfully
                  </h3>
                  <p style={{ color: '#667085' }}>
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#172033' }}>
                        Your Name
                      </label>
                      <Input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="h-12 rounded-xl"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#172033' }}>
                        Email Address
                      </label>
                      <Input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="h-12 rounded-xl"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#172033' }}>
                      Subject
                    </label>
                    <Input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="h-12 rounded-xl"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#172033' }}>
                      Message
                    </label>
                    <Textarea
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="min-h-32 rounded-xl resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full h-12 rounded-xl text-base"
                    style={{ backgroundColor: '#2563EB' }}
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2563EB' }}>
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold" style={{ color: '#172033', fontFamily: 'DM Sans, sans-serif' }}>
                  Rosterly
                </span>
              </Link>
              <p className="text-sm mb-6" style={{ color: '#667085' }}>
                The professional business directory connecting companies with customers and partners worldwide.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-100"
                  style={{ backgroundColor: '#F7F9FC' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#667085' }} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-100"
                  style={{ backgroundColor: '#F7F9FC' }}
                >
                  <Twitter className="w-5 h-5" style={{ color: '#667085' }} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-100"
                  style={{ backgroundColor: '#F7F9FC' }}
                >
                  <Facebook className="w-5 h-5" style={{ color: '#667085' }} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#172033' }}>Directory</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/directory" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Browse All Companies
                  </Link>
                </li>
                <li>
                  <Link href="/directory?industry=technology" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/directory?industry=healthcare" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/directory?industry=finance" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Finance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#172033' }}>Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Register Company
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#172033' }}>Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm hover:underline" style={{ color: '#667085' }}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-sm" style={{ color: '#667085' }}>
              © {new Date().getFullYear()} Rosterly. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: '#667085' }}>
              Building trust in business connections.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}