"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { ChevronDown, ChevronUp, Search, HelpCircle, Clock, MapPin, DollarSign, Truck, Shield, Sparkles } from "lucide-react";

// FAQ data organized by categories
const faqData = [
  {
    category: "Booking & Services",
    icon: Clock,
    color: "laundry-blue",
    questions: [
      {
        question: "How do I book a laundry service?",
        answer: "You can book our services in two ways: 1) Online through our website booking form, or 2) Call us at 0434944733. The online booking is the fastest and most convenient option."
      },
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive laundry services including: Laundry Service (wash, dry & fold), Ironing Service, and Express Service (same-day)."
      },
      {
        question: "Do you offer same-day service?",
        answer: "Yes! We offer express same-day service for urgent needs. There's a small surcharge for express service, and it's available for most standard items. Contact us to confirm availability for your specific items."
      },
      {
        question: "Can I schedule recurring pickups?",
        answer: "Absolutely! We offer weekly, bi-weekly, and monthly recurring pickup schedules. This is perfect for busy professionals and families. Contact us to set up a recurring schedule that works for you."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: DollarSign,
    color: "laundry-green",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing is transparent and competitive. Dry cleaning starts at $15 per item, laundry service at $25 per load, and ironing at $10 per item. We also offer package deals and first-time customer discounts. Check our pricing page for detailed rates."
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes! We offer several discounts: 25% off for first-time customers, 10% off for recurring customers, student discounts, and bulk order discounts. We also have seasonal promotions throughout the year."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and cash on delivery. All online payments are processed securely through our payment gateway."
      },
      {
        question: "Is there a minimum order requirement?",
        answer: "No minimum order requirement! Whether you have one item or a full load, we're happy to help. However, we do offer better rates for larger orders."
      }
    ]
  },
  {
    category: "Service Areas & Delivery",
    icon: MapPin,
    color: "laundry-orange",
    questions: [
      {
        question: "Which areas do you service?",
        answer: "We currently serve Melbourne CBD, Malvern East, St Kilda, Brighton, South Yarra, Toorak, and surrounding areas. Contact us to check if we service your specific area."
      },
      {
        question: "Do you offer pickup and delivery?",
        answer: "Yes! We provide free pickup and delivery service to all our service areas. Our team will collect your items at your scheduled time and return them clean and fresh. No need to leave your home!"
      },
      {
        question: "What are your delivery time slots?",
        answer: "We offer flexible delivery time slots from 8:00 AM to 7:00 PM, Monday through Sunday. You can choose the time that works best for you during the booking process."
      },
      {
        question: "What if I'm not home during pickup/delivery?",
        answer: "No problem! We can arrange for secure pickup/delivery with your building concierge, or you can leave items in a designated safe location. We'll coordinate with you to ensure a smooth process."
      }
    ]
  },
  {
    category: "Quality & Care",
    icon: Shield,
    color: "laundry-purple",
    questions: [
      {
        question: "How do you ensure quality cleaning?",
        answer: "We use professional-grade equipment and eco-friendly detergents. Our team is trained in fabric care and stain removal. We inspect each item before and after cleaning to ensure the highest quality results."
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer: "Customer satisfaction is our priority. If you're not completely satisfied, we'll re-clean the item at no cost or provide a full refund. We stand behind our quality guarantee."
      },
      {
        question: "Do you handle delicate fabrics?",
        answer: "Yes! We specialize in handling delicate fabrics including silk, wool, cashmere, and designer items. Our dry cleaning process is gentle and safe for all fabric types."
      },
      {
        question: "What about stain removal?",
        answer: "We have extensive experience in stain removal for various types of stains. While we can't guarantee removal of all stains, we have a high success rate. We'll always inform you if a stain might be permanent."
      }
    ]
  },
  {
    category: "Environmental & Safety",
    icon: Sparkles,
    color: "laundry-green",
    questions: [
      {
        question: "Are your cleaning products eco-friendly?",
        answer: "Yes! We use eco-friendly, biodegradable cleaning products that are safe for your clothes, your family, and the environment. We're committed to sustainable practices."
      },
      {
        question: "How do you handle COVID-19 safety?",
        answer: "We follow strict hygiene protocols including regular sanitization of equipment, contactless pickup/delivery, and our staff wear appropriate PPE. Your safety is our top priority."
      },
      {
        question: "Do you offer hypoallergenic options?",
        answer: "Yes! We offer hypoallergenic cleaning options for customers with sensitive skin or allergies. Just let us know during booking and we'll use special hypoallergenic detergents."
      }
    ]
  },
  {
    category: "Account & Support",
    icon: HelpCircle,
    color: "laundry-red",
    questions: [
      {
        question: "How can I track my order?",
        answer: "You'll receive SMS and email updates throughout the process. You can also track your order through our website or mobile app using your booking reference number."
      },
      {
        question: "What if I need to cancel or reschedule?",
        answer: "You can cancel or reschedule your booking up to 2 hours before your scheduled pickup time at no charge. Contact us via phone, email, or through our website."
      },
      {
        question: "Do you have a loyalty program?",
        answer: "Yes! Our loyalty program rewards regular customers with points for every dollar spent. Points can be redeemed for discounts on future orders or free services."
      },
      {
        question: "How do I contact customer support?",
        answer: "Our customer support team is available via phone (0434944733), email (ultracleanlaundry247@gmail.com), or through our contact form. We typically respond within 2 hours."
      }
    ]
  }
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  // Filter FAQ data based on search term
  const filteredFAQData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:border-laundry-blue focus:ring-laundry-blue"
        />
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="text-center">
          <p className="text-gray-600">
            Found {filteredFAQData.reduce((acc, cat) => acc + cat.questions.length, 0)} results for "{searchTerm}"
          </p>
        </div>
      )}

      {/* FAQ Categories */}
      {filteredFAQData.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="border-gray-200">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3">
              <Icon icon={category.icon} className={`h-6 w-6 text-${category.color}`} />
              <span>{category.category}</span>
              <Badge variant="secondary" className="ml-auto">
                {category.questions.length} questions
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {category.questions.map((faq, questionIndex) => {
              const questionId = `${categoryIndex}-${questionIndex}`;
              const isExpanded = expandedQuestions.has(questionId);
              
              return (
                <div key={questionIndex} className="border border-gray-100 rounded-lg">
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                    <Icon 
                      icon={isExpanded ? ChevronUp : ChevronDown} 
                      className="h-5 w-5 text-gray-500 flex-shrink-0" 
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}

      {/* No Results */}
      {searchTerm && filteredFAQData.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any questions matching "{searchTerm}".
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="text-laundry-blue hover:text-laundry-blue-dark font-medium"
          >
            Clear search and show all questions
          </button>
        </div>
      )}

      {/* Quick Links */}
      {!searchTerm && (
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/services" className="flex items-center space-x-2 text-blue-800 hover:text-blue-900">
              <Truck className="h-4 w-4" />
              <span>View Our Services</span>
            </a>
            <a href="/pricing" className="flex items-center space-x-2 text-blue-800 hover:text-blue-900">
              <DollarSign className="h-4 w-4" />
              <span>Check Pricing</span>
            </a>

            <a href="/contact" className="flex items-center space-x-2 text-blue-800 hover:text-blue-900">
              <HelpCircle className="h-4 w-4" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
