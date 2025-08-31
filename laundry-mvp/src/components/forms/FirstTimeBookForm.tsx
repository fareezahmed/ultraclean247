"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingFormData, serviceAreas, timeSlots } from "@/lib/validations/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import {
  Shirt,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Shield,
  Star,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  Package,
  CheckCircle,
  AlertCircle,
  Bed,
  Briefcase,
  Gift,
  Award,
  Truck
} from "lucide-react";
import BookingConfirmation from "./BookingConfirmation";

// Service data for first-time customers with special offers
const firstTimeServices = [
  { 
    id: 'everyday-laundry', 
    title: 'Everyday Laundry Bundle', 
    description: '5kg minimum (wash, dry, fold), +$5.50 per extra kg', 
    icon: Sparkles, 
    color: 'laundry-green', 
    price: '$27', 
    originalPrice: '$30',
    unit: 'per 5kg',
    offer: '10% OFF First Wash'
  },
  { 
    id: 'domestic-washing', 
    title: 'Domestic Washing & Drying', 
    description: '5kg minimum (no folding), +$5.00 per extra kg', 
    icon: Package, 
    color: 'laundry-blue', 
    price: '$22.50', 
    originalPrice: '$25',
    unit: 'per 5kg',
    offer: '10% OFF First Wash'
  },
  { 
    id: 'commercial-washing', 
    title: 'Commercial Washing Bundle', 
    description: '5kg minimum bundle package', 
    icon: Briefcase, 
    color: 'laundry-purple', 
    price: '$31.50', 
    originalPrice: '$35',
    unit: 'per 5kg',
    offer: '10% OFF First Wash'
  },
  { 
    id: 'bedding-bundle', 
    title: 'Bedding Refresh Bundle', 
    description: '2 sets of bedding (wash, dry, fold)', 
    icon: Bed, 
    color: 'laundry-yellow', 
    price: '$31.50', 
    originalPrice: '$35',
    unit: 'per 2 sets',
    offer: '10% OFF First Wash'
  },
  { 
    id: 'ironing', 
    title: 'Ironing Service', 
    description: 'Minimum charge for ironing services', 
    icon: Zap, 
    color: 'laundry-orange', 
    price: '$18', 
    originalPrice: '$20',
    unit: 'minimum',
    offer: '10% OFF First Order'
  },
  { 
    id: 'express', 
    title: 'Express Service', 
    description: 'Same-day turnaround for urgent needs', 
    icon: Clock, 
    color: 'laundry-red', 
    price: '+$10', 
    unit: 'surcharge',
    offer: 'Free Upgrade'
  },
  { 
    id: 'work-week-special', 
    title: 'Work Week Special Bundle', 
    description: '5kg wash, dry, fold + 5 work shirts ironed', 
    icon: Briefcase, 
    color: 'laundry-blue', 
    price: '$37.80', 
    originalPrice: '$42',
    unit: 'bundle',
    offer: '10% OFF First Order'
  }
];

export default function FirstTimeBookForm() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [bookingReference, setBookingReference] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      agreeToTerms: false
    }
  });

  // Handle URL parameters for service selection
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const service = firstTimeServices.find(s => s.id === serviceParam);
      if (service) {
        setSelectedService(serviceParam);
        setValue('service', serviceParam);
        setValue('quantity', '1');
      }
    }
  }, [searchParams, setValue]);

  const watchedService = watch("service");
  const watchedQuantity = watch("quantity");

  React.useEffect(() => {
    if (watchedService && watchedQuantity) {
      const service = firstTimeServices.find(s => s.id === watchedService);
      if (service) {
        const basePrice = parseInt(service.price.replace(/[^0-9]/g, ""));
        const originalBasePrice = service.originalPrice ? parseInt(service.originalPrice.replace(/[^0-9]/g, "")) : basePrice;
        const quantity = parseInt(watchedQuantity);
        
        setEstimatedPrice(basePrice * quantity);
        setOriginalPrice(originalBasePrice * quantity);
        setSavings(originalBasePrice * quantity - basePrice * quantity);
      }
    }
  }, [watchedService, watchedQuantity]);

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const generateBookingReference = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `FT${timestamp}${random}`; // FT prefix for First Time
  };

  const onSubmit = async (data: BookingFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Use the Formspree endpoint directly for now
      const endpoint = "https://formspree.io/f/mrblrgjq";

      if (!endpoint) {
        throw new Error("Form submission endpoint not configured");
      }

      const service = firstTimeServices.find(s => s.id === data.service);
      const bookingData = {
        ...data,
        serviceName: service?.title || data.service,
        estimatedPrice: `$${estimatedPrice}`,
        originalPrice: `$${originalPrice}`,
        savings: `$${savings}`,
        isFirstTimeCustomer: true,
        specialOffer: service?.offer || 'First Time Discount',
        _subject: `First Time Booking: ${service?.title} - ${data.name}`,
        _template: "table"
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const reference = generateBookingReference();
        setBookingReference(reference);
        setBookingData(bookingData);
        setShowConfirmation(true);
        setStatus("idle");
        reset();
        setSelectedService("");
        setEstimatedPrice(0);
        setOriginalPrice(0);
        setSavings(0);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit booking");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const nextStep = async () => {
    // Validate current step before proceeding
    let canProceed = true;
    
    if (currentStep === 1) {
      // Step 1: Service selection
      if (!selectedService) {
        setValue("service", "");
        await trigger("service");
        canProceed = false;
      }
    } else if (currentStep === 2) {
      // Step 2: Personal information
      const step2Fields = ["name", "phone", "email"] as const;
      canProceed = await trigger(step2Fields as any);
    } else if (currentStep === 3) {
      // Step 3: Pickup information
      const step3Fields = ["address", "suburb", "quantity", "pickupDate", "pickupTime"] as const;
      canProceed = await trigger(step3Fields as any);
    }
    
    if (canProceed && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner for First-Time Customers */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white/20 rounded-full">
            <Gift className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome! 🎉</h2>
            <p className="text-purple-100">You're about to experience premium laundry care</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4" />
            <span>Special First-Time Discounts</span>
          </div>
          <div className="flex items-center space-x-2">
            <Truck className="h-4 w-4" />
            <span>Free Pickup & Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Premium Quality Guarantee</span>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Labels */}
      <div className="text-center mb-8">
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className={currentStep === 1 ? 'text-purple-600 font-semibold' : 'text-gray-500'}>
            Choose Service
          </div>
          <div className={currentStep === 2 ? 'text-purple-600 font-semibold' : 'text-gray-500'}>
            Your Details
          </div>
          <div className={currentStep === 3 ? 'text-purple-600 font-semibold' : 'text-gray-500'}>
            Pickup Info
          </div>
          <div className={currentStep === 4 ? 'text-purple-600 font-semibold' : 'text-gray-500'}>
            Confirm & Book
          </div>
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Service</h3>
            <p className="text-gray-600">Select from our premium services with exclusive first-time discounts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {firstTimeServices.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedService === service.id
                    ? "ring-2 ring-purple-500 border-purple-500"
                    : "hover:border-gray-300"
                }`}
                onClick={() => {
                  setSelectedService(service.id);
                  setValue("service", service.id);
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon
                        icon={service.icon}
                        className={`h-24 w-24 text-${service.color}`}
                      />
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs mb-1 bg-green-100 text-green-800">
                      {service.offer}
                    </Badge>
                    <div className="text-sm">
                      <span className="text-gray-400 line-through">{service.originalPrice}</span>
                      <span className="text-purple-600 font-bold ml-1">{service.price}</span>
                      <span className="text-gray-500 ml-1">{service.unit}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {errors.service && (
            <p className="text-red-600 text-sm mt-2 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.service.message}
            </p>
          )}
          
          <div className="flex justify-end">
            <Button 
              onClick={nextStep}
              disabled={!selectedService}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Next: Your Details
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Personal Information */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Yourself</h3>
            <p className="text-gray-600">We'll use this information to provide you with the best service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back: Choose Service
            </Button>
            <Button 
              onClick={nextStep}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Next: Pickup Info
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Pickup Information */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pickup Details</h3>
            <p className="text-gray-600">Where and when would you like us to pick up your items?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                placeholder="Enter your street address"
                {...register("address")}
                className={errors.address ? "border-red-500" : ""}
              />
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="suburb">Suburb *</Label>
              <Select onValueChange={(value) => setValue("suburb", value as any)}>
                <SelectTrigger className={errors.suburb ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your suburb" />
                </SelectTrigger>
                <SelectContent>
                  {serviceAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.suburb && (
                <p className="text-red-600 text-sm mt-1">{errors.suburb.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                placeholder="Number of items/loads"
                {...register("quantity")}
                className={errors.quantity ? "border-red-500" : ""}
              />
              {errors.quantity && (
                <p className="text-red-600 text-sm mt-1">{errors.quantity.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="pickupDate">Pickup Date *</Label>
              <Input
                id="pickupDate"
                type="date"
                min={getMinDate()}
                {...register("pickupDate")}
                className={errors.pickupDate ? "border-red-500" : ""}
              />
              {errors.pickupDate && (
                <p className="text-red-600 text-sm mt-1">{errors.pickupDate.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="pickupTime">Pickup Time *</Label>
              <Select onValueChange={(value) => setValue("pickupTime", value as any)}>
                <SelectTrigger className={errors.pickupTime ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select pickup time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.pickupTime && (
                <p className="text-red-600 text-sm mt-1">{errors.pickupTime.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="specialInstructions">Special Instructions</Label>
            <Textarea
              id="specialInstructions"
              placeholder="Any special instructions or notes for your order..."
              rows={3}
              {...register("specialInstructions")}
              className={errors.specialInstructions ? "border-red-500" : ""}
            />
            {errors.specialInstructions && (
              <p className="text-red-600 text-sm mt-1">{errors.specialInstructions.message}</p>
            )}
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back: Your Details
            </Button>
            <Button 
              onClick={nextStep}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Next: Confirm & Book
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Booking</h3>
            <p className="text-gray-600">Review your details and complete your first order</p>
          </div>
          
          {/* Price Summary */}
          {estimatedPrice > 0 && (
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Your First-Time Discount</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Original Price</p>
                      <p className="text-xl font-bold text-gray-400 line-through">${originalPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Your Price</p>
                      <p className="text-2xl font-bold text-purple-600">${estimatedPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">You Save</p>
                      <p className="text-xl font-bold text-green-600">${savings}</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      🎉 Congratulations! You're saving ${savings} on your first order!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              {...register("agreeToTerms")}
              className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
            />
            <Label htmlFor="agreeToTerms" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="/terms" className="text-purple-600 hover:underline">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-purple-600 hover:underline">
                privacy policy
              </a>
            </Label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms.message}</p>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back: Pickup Info
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting || status === "submitting"}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
            >
              {isSubmitting || status === "submitting" ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Booking Your First Service...</span>
                </div>
              ) : (
                "Complete Your First Booking"
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Status Messages */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div>
              <h4 className="font-semibold text-red-900">Booking Submission Failed</h4>
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showConfirmation && bookingData && (
        <BookingConfirmation
          bookingData={bookingData}
          bookingReference={bookingReference}
          onClose={() => setShowConfirmation(false)}
          isFirstTime={true}
        />
      )}
    </div>
  );
}
