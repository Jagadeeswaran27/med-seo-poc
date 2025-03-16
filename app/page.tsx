"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Award, Clock, Users2, BadgeCheck, GraduationCap, Target, FileText, Calendar } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Exam-Focused Preparation",
      description: "Structured coaching specifically for TN MRB Medical Record Clerk exam"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Updated Study Materials",
      description: "Latest syllabus coverage with regular updates from MRB Tamil Nadu"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Learn from experienced Medical Records professionals"
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Mock Tests",
      description: "Regular practice tests with detailed performance analysis"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Package",
      price: "₹8,999",
      features: [
        "Complete study materials",
        "3 months access",
        "Basic mock tests",
        "Online doubt clearing",
        "Previous year papers"
      ]
    },
    {
      name: "Premium Package",
      price: "₹14,999",
      features: [
        "Everything in Basic",
        "6 months access",
        "Weekly mock tests",
        "One-on-one mentoring",
        "Interview preparation",
        "Detailed performance tracking"
      ]
    },
    {
      name: "Classroom Package",
      price: "₹19,999",
      features: [
        "Everything in Premium",
        "Physical classroom sessions",
        "Daily practice tests",
        "Personal guidance",
        "Study group access",
        "Guaranteed results"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MRB Tamil Nadu Exam Coaching
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert coaching for Medical Record Clerk examination conducted by Medical Services Recruitment Board (MRB) TN
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About MRB Exam</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Exam Pattern</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Calendar className="text-blue-600 h-5 w-5" />
                  <span>Written Examination (100 marks)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-blue-600 h-5 w-5" />
                  <span>2.5 Hours Duration</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="text-blue-600 h-5 w-5" />
                  <span>Objective Type Questions</span>
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen className="text-blue-600 h-5 w-5" />
                  <span>Medical Record Keeping & Statistics</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <span>Must have passed Higher Secondary (+2)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <span>Certificate in Medical Record Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  <span>Age limit as per TN Government norms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Coaching?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-blue-100">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Success Record</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700">Success Rate</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700">Students Placed</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Coaching Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-blue-100">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-600 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your MRB Exam Preparation Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful candidates who secured their Medical Record Clerk positions
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Free Counseling
          </Button>
        </div>
      </section>
    </main>
  );
}