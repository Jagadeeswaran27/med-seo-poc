"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, BookOpen, Award, Clock, Users2, BadgeCheck, GraduationCap, 
  Target, FileText, Calendar, ArrowRight, Stethoscope, Hospital, ClipboardList,
  ChevronFirst, HeartPulse, Brain, Microscope, Pill, Sparkles,
  Phone, Mail, MapPin
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Medical Records Training",
      description: "Comprehensive training in medical record management and healthcare documentation"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Healthcare Standards",
      description: "Learn latest healthcare documentation standards and practices"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Expert Medical Faculty",
      description: "Learn from experienced healthcare professionals"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Practical Training",
      description: "Hands-on experience with medical record systems"
    }
  ];

  const medicalStats = [
    {
      icon: <HeartPulse className="h-8 w-8" />,
      value: "95%",
      label: "Success Rate"
    },
    {
      icon: <Hospital className="h-8 w-8" />,
      value: "50+",
      label: "Hospital Partners"
    },
    {
      icon: <ChevronFirst className="h-8 w-8" />,
      value: "1000+",
      label: "Placed Students"
    },
    {
      icon: <Pill className="h-8 w-8" />,
      value: "10+",
      label: "Years Experience"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Package",
      price: "₹8,999",
      description: "Essential medical record training",
      features: [
        "Medical terminology basics",
        "Record management fundamentals",
        "3 months access",
        "Basic mock tests",
        "Online support"
      ]
    },
    {
      name: "Premium Package",
      price: "₹14,999",
      description: "Comprehensive healthcare training",
      features: [
        "Advanced medical terminology",
        "Healthcare IT systems training",
        "6 months access",
        "Weekly assessments",
        "One-on-one mentoring",
        "Hospital visit"
      ]
    },
    {
      name: "Complete Package",
      price: "₹19,999",
      description: "Full medical record professional training",
      features: [
        "Complete healthcare documentation",
        "Hospital management systems",
        "Unlimited access",
        "Daily practical sessions",
        "Hospital internship",
        "Job placement assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiM5MEJFQjgiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-[0.15]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
                <Stethoscope className="w-4 h-4 mr-2" />
                #1 Medical Records Training Institute
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                MRB Tamil Nadu<br className="hidden sm:block" /> Exam Coaching
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert coaching for Medical Record Clerk examination conducted by Medical Services Recruitment Board (MRB) TN
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 h-12 text-lg w-full sm:w-auto">
                  Begin Your Medical Career <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 h-12 text-lg w-full sm:w-auto">
                  View Course Syllabus
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="p-2 bg-teal-100 rounded-full shrink-0">
                    <GraduationCap className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Faculty</div>
                    <div className="text-sm text-gray-600">Experienced trainers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="p-2 bg-teal-100 rounded-full shrink-0">
                    <Award className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Certification</div>
                    <div className="text-sm text-gray-600">Industry recognized</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] max-w-2xl mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="Medical professionals"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                  <div className="flex items-center gap-3">
                    <Users2 className="h-8 w-8 text-teal-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1000+</div>
                      <div className="text-sm text-gray-600">Successful Students</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-teal-900 py-4 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>Call us: +91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>Email: info@mrbcoaching.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Location: Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Stats Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-[0.1]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {medicalStats.map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="mx-auto mb-2 text-teal-200">{stat.icon}</div>
                <div className="text-2xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                <p className="text-teal-100 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Training Info */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
              <ClipboardList className="h-6 w-6 text-teal-600" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Medical Record Training</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive training in healthcare documentation and record management</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-teal-50 to-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Calendar className="text-teal-600 h-6 w-6 mr-3" />
                Course Curriculum
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-teal-100 rounded-full shrink-0">
                    <FileText className="text-teal-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Medical Terminology</div>
                    <div className="text-sm text-gray-600">Essential healthcare terms</div>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-teal-100 rounded-full shrink-0">
                    <BadgeCheck className="text-teal-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Record Management</div>
                    <div className="text-sm text-gray-600">Documentation standards</div>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-teal-100 rounded-full shrink-0">
                    <Hospital className="text-teal-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Hospital Systems</div>
                    <div className="text-sm text-gray-600">Healthcare IT training</div>
                  </div>
                </li>
              </ul>
            </Card>
            <div className="relative">
              <div className="aspect-video sm:aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                  alt="Medical training"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <h4 className="text-xl font-bold mb-2">Practical Training</h4>
                <p className="text-gray-600 text-sm">Get hands-on experience with real medical record systems and hospital workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
              <Stethoscope className="h-6 w-6 text-teal-600" />
            </span>
            <h2 className="text-3xl font-bold mb-4">Healthcare Training Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive medical record management training</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-0 bg-white group">
                <div className="p-3 bg-teal-100 rounded-xl inline-block mb-6 group-hover:bg-teal-200 transition-colors">
                  <div className="text-teal-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-teal-50 rounded-2xl">
              <div className="p-3 bg-teal-100 rounded-xl">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Medical Equipment</h3>
                <p className="text-gray-600">Learn about essential medical tools</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Clinical Procedures</h3>
                <p className="text-gray-600">Understanding medical protocols</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-teal-50 rounded-2xl">
              <div className="p-3 bg-teal-100 rounded-xl">
                <Brain className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Medical Knowledge</h3>
                <p className="text-gray-600">Comprehensive healthcare education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
              <ClipboardList className="h-6 w-6 text-teal-600" />
            </span>
            <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose your path to becoming a medical records professional</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-shadow border-0 ${
                index === 1 ? 'bg-teal-600 text-white' : 'bg-gray-50'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${index === 1 ? 'text-teal-100' : 'text-gray-600'}`}>{plan.description}</p>
                <div className={`text-3xl font-bold mb-6 ${index === 1 ? 'text-white' : 'text-teal-600'}`}>{plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${index === 1 ? 'text-teal-200' : 'text-teal-600'}`} />
                      <span className={index === 1 ? 'text-teal-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${index === 1 
                    ? 'bg-white text-teal-600 hover:bg-teal-50' 
                    : 'bg-teal-600 text-white hover:bg-teal-700'}`}
                >
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
                <Stethoscope className="h-6 w-6 text-white" />
              </span>
              <h2 className="text-4xl font-bold mb-6">Begin Your Healthcare Career Today</h2>
              <p className="text-xl mb-8 text-teal-100">
                Join hundreds of successful medical record professionals who started their career with our expert training
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50 px-8 h-12 text-lg">
                  Schedule Counseling
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 h-12 text-lg">
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
                alt="Medical professionals"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Join Our Community</h4>
                <p className="text-gray-600">Become part of Tamil Nadu's leading medical records training program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        {/* Upper Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">MRB TN Coaching</h3>
              <p className="text-gray-400 mb-6">Leading institute for Medical Record Clerk examination preparation in Tamil Nadu.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>info@mrbcoaching.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Our Courses</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Study Materials</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Success Stories</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Courses</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Basic Package</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Premium Package</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Complete Package</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Online Training</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Classroom Training</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and exam notifications.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} MRB TN Coaching. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}