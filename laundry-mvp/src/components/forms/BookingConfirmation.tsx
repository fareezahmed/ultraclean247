"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Calendar,
  MapPin,
  Package,
  Mail,
  Phone,
  Clock,
  Download,
  Home
} from "lucide-react";
import Link from "next/link";

interface BookingConfirmationProps {
  bookingData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    suburb: string;
    service: string;
    serviceName: string;
    quantity: string;
    pickupDate: string;
    pickupTime: string;
    specialInstructions?: string;
    estimatedPrice: string;
    originalPrice?: string;
    savings?: string;
    isFirstTimeCustomer?: boolean;
    specialOffer?: string;
  };
  bookingReference: string;
  onClose: () => void;
  isFirstTime?: boolean;
}

export default function BookingConfirmation({
  bookingData,
  bookingReference,
  onClose,
  isFirstTime = false
}: BookingConfirmationProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadConfirmation = () => {
    const confirmationText = `
Booking Confirmation - ${bookingReference}

Customer Details:
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}

Pickup Address:
${bookingData.address}
${bookingData.suburb}

Service Details:
Service: ${bookingData.serviceName}
Quantity: ${bookingData.quantity}
Estimated Price: ${bookingData.estimatedPrice}

Pickup Schedule:
Date: ${formatDate(bookingData.pickupDate)}
Time: ${bookingData.pickupTime}

${bookingData.specialInstructions ? `Special Instructions: ${bookingData.specialInstructions}` : ''}

Booking Reference: ${bookingReference}

Thank you for choosing FamsComTech Laundry!
    `;

    const blob = new Blob([confirmationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking-confirmation-${bookingReference}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
                            <CardHeader className="text-center pb-6">
                    <div className={`mx-auto w-16 h-16 ${isFirstTime ? 'bg-gradient-to-r from-purple-100 to-pink-100' : 'bg-green-100'} rounded-full flex items-center justify-center mb-4`}>
                      <CheckCircle className={`h-8 w-8 ${isFirstTime ? 'text-purple-600' : 'text-green-600'}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {isFirstTime ? 'Welcome to Ultra Clean 247! 🎉' : 'Booking Confirmed!'}
                    </CardTitle>
                    <p className="text-gray-600">
                      {isFirstTime 
                        ? 'Your first booking has been successfully submitted. Welcome to premium laundry care!'
                        : 'Your booking has been successfully submitted. We\'ll confirm via email within 2 hours.'
                      }
                    </p>
                    <Badge variant="secondary" className="mt-2 text-sm">
                      Reference: {bookingReference}
                    </Badge>
                    {isFirstTime && (
                      <Badge className="mt-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        First-Time Customer
                      </Badge>
                    )}
                  </CardHeader>

          <CardContent className="space-y-6">
                                {/* Booking Summary */}
                    <div className={`rounded-lg p-4 ${isFirstTime ? 'bg-gradient-to-r from-purple-50 to-pink-50' : 'bg-gray-50'}`}>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Package className="h-5 w-5 mr-2" />
                        Booking Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Service:</span>
                          <p className="font-medium">{bookingData.serviceName}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Quantity:</span>
                          <p className="font-medium">{bookingData.quantity}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Price:</span>
                          <p className="font-medium text-laundry-blue">{bookingData.estimatedPrice}</p>
                          {isFirstTime && bookingData.originalPrice && (
                            <p className="text-xs text-gray-500 line-through">{bookingData.originalPrice}</p>
                          )}
                        </div>
                        <div>
                          <span className="text-gray-600">Status:</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Confirmed
                          </Badge>
                        </div>
                      </div>
                      {isFirstTime && bookingData.savings && (
                        <div className="mt-3 p-3 bg-green-100 rounded-lg">
                          <p className="text-sm text-green-800 font-medium">
                            🎉 You saved {bookingData.savings} with your first-time discount!
                          </p>
                        </div>
                      )}
                    </div>

            {/* Pickup Details */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Pickup Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formatDate(bookingData.pickupDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{bookingData.pickupTime}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                  <div>
                    <span className="text-gray-600">Address:</span>
                    <p className="font-medium">{bookingData.address}</p>
                    <p className="font-medium">{bookingData.suburb}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            {bookingData.specialInstructions && (
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Special Instructions</h3>
                <p className="text-sm text-gray-700">{bookingData.specialInstructions}</p>
              </div>
            )}

            {/* Next Steps */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">What Happens Next?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">You'll receive a confirmation email within 2 hours</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Our team will contact you to confirm pickup details</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">We'll send SMS reminders before pickup</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={downloadConfirmation}
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button
                onClick={onClose}
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Done</span>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600 mb-2">Need to make changes?</p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">ultracleanlaundry247@gmail.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4 text-gray-500" />
                                          <span className="text-gray-600">0434944733</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
