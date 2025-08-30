"use client";
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
import { useState } from "react";
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
  Briefcase
} from "lucide-react";
import React from "react";
import BookingConfirmation from "./BookingConfirmation";
import { trackBooking, trackConversion } from "@/components/analytics/GoogleAnalytics";

// Service data
const services = [
  {
    id: 'everyday-laundry',
    title: 'Everyday Laundry Bundle',
    description: '5kg minimum (wash, dry, fold), +$5.50 per extra kg',
    icon: Sparkles,
    color: 'laundry-green',
    price: '$30',
    unit: 'per 5kg'
  },
  {
    id: 'domestic-washing',
    title: 'Domestic Washing & Drying',
    description: '5kg minimum (no folding), +$5.00 per extra kg',
    icon: Package,
    color: 'laundry-blue',
    price: '$25',
    unit: 'per 5kg'
  },
  {
    id: 'commercial-washing',
    title: 'Commercial Washing Bundle',
    description: '5kg minimum bundle package',
    icon: Briefcase,
    color: 'laundry-purple',
    price: '$35',
    unit: 'per 5kg'
  },
  {
    id: 'bedding-bundle',
    title: 'Bedding Refresh Bundle',
    description: '2 sets of bedding (wash, dry, fold)',
    icon: Bed,
    color: 'laundry-yellow',
    price: '$35',
    unit: 'per 2 sets'
  },
  {
    id: 'ironing',
    title: 'Ironing Service',
    description: 'Minimum charge for ironing services',
    icon: Zap,
    color: 'laundry-orange',
    price: '$20',
    unit: 'minimum'
  },
  {
    id: 'express',
    title: 'Express Service',
    description: 'Same-day turnaround for urgent needs',
    icon: Clock,
    color: 'laundry-red',
    price: '+$10',
    unit: 'surcharge'
  }
];



export default function BookForm() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [bookingReference, setBookingReference] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      agreeToTerms: false
    }
  });

  const watchedService = watch("service");
  const watchedQuantity = watch("quantity");

  // Calculate estimated price when service or quantity changes
  React.useEffect(() => {
    if (watchedService && watchedQuantity) {
      const service = services.find(s => s.id === watchedService);
      if (service) {
        const basePrice = parseInt(service.price.replace(/[^0-9]/g, ""));
        const quantity = parseInt(watchedQuantity);
        setEstimatedPrice(basePrice * quantity);
      }
    }
  }, [watchedService, watchedQuantity]);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Generate booking reference
  const generateBookingReference = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `BK${timestamp}${random}`;
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

      const service = services.find(s => s.id === data.service);
      const bookingData = {
        ...data,
        serviceName: service?.title || data.service,
        estimatedPrice: `$${estimatedPrice}`,
        _subject: `New Booking: ${service?.title} - ${data.name}`,
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
        
        // Track successful booking
        trackBooking('completed', data.service);
        trackConversion('booking', estimatedPrice);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit booking");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Service Selection */}
      <div>
        <Label className="text-base font-semibold text-gray-900 mb-4 block">
          Select Your Service
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedService === service.id
                  ? "ring-2 ring-laundry-blue border-laundry-blue"
                  : "hover:border-gray-300"
              }`}
              onClick={() => {
                setSelectedService(service.id);
                setValue("service", service.id);
                trackBooking('service_selected', service.id);
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
                <Badge variant="secondary" className="text-sm">
                  {service.price} {service.unit}
                </Badge>
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
      </div>

      <Separator />

      {/* Booking Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Personal Information
          </h3>
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
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Pickup Address
          </h3>
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
          </div>
        </div>

        {/* Service Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Service Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            {estimatedPrice > 0 && (
              <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Estimated Price</p>
                  <p className="text-2xl font-bold text-laundry-blue">${estimatedPrice}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pickup Schedule */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Pickup Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        {/* Special Instructions */}
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

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register("agreeToTerms")}
            className="mt-1 h-4 w-4 text-laundry-blue border-gray-300 rounded focus:ring-laundry-blue"
          />
          <Label htmlFor="agreeToTerms" className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms" className="text-laundry-blue hover:underline">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-laundry-blue hover:underline">
              privacy policy
            </a>
          </Label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms.message}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || status === "submitting"}
          className="w-full py-3 text-lg font-semibold"
        >
          {isSubmitting || status === "submitting" ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Submitting Booking...</span>
            </div>
          ) : (
            "Book My Service"
          )}
        </Button>

        {/* Status Messages */}
        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-900">Booking Submitted Successfully!</h4>
                <p className="text-green-700 text-sm">
                  We've received your booking and will confirm via email within 2 hours.
                </p>
              </div>
            </div>
          </div>
        )}

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
      </form>

      {/* Booking Confirmation Modal */}
      {showConfirmation && bookingData && (
        <BookingConfirmation
          bookingData={bookingData}
          bookingReference={bookingReference}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}