"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import {
  Shirt,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Shield,
  Star,
  Calculator,
  DollarSign,
  Package,
  Bed,
  Briefcase
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  basePrice: number;
  unit: string;
  minQuantity?: number;
  maxQuantity?: number;
  extraUnitPrice?: number;
  extraUnit?: string;
}

const services: Service[] = [
  {
    id: 'everyday-laundry',
    title: 'Everyday Laundry Bundle',
    description: '5kg minimum (wash, dry, fold)',
    icon: Package,
    color: 'laundry-green',
    basePrice: 30,
    unit: 'per 5kg',
    minQuantity: 1,
    maxQuantity: 20,
    extraUnitPrice: 5.50,
    extraUnit: 'per extra kg'
  },
  {
    id: 'domestic-washing',
    title: 'Domestic Washing & Drying',
    description: '5kg minimum (no folding)',
    icon: Sparkles,
    color: 'laundry-blue',
    basePrice: 25,
    unit: 'per 5kg',
    minQuantity: 1,
    maxQuantity: 20,
    extraUnitPrice: 5.00,
    extraUnit: 'per extra kg'
  },
  {
    id: 'commercial-washing',
    title: 'Commercial Washing Bundle',
    description: '5kg minimum bundle package',
    icon: Briefcase,
    color: 'laundry-purple',
    basePrice: 35,
    unit: 'per 5kg',
    minQuantity: 1,
    maxQuantity: 20,
    extraUnitPrice: 5.50,
    extraUnit: 'per extra kg'
  },
  {
    id: 'bedding-bundle',
    title: 'Bedding Refresh Bundle',
    description: '2 sets of bedding (wash, dry, fold)',
    icon: Bed,
    color: 'laundry-yellow',
    basePrice: 35,
    unit: 'per 2 sets',
    minQuantity: 1,
    maxQuantity: 10
  },
  {
    id: 'ironing',
    title: 'Ironing Service',
    description: 'Minimum charge for ironing services',
    icon: Zap,
    color: 'laundry-orange',
    basePrice: 20,
    unit: 'minimum',
    minQuantity: 1,
    maxQuantity: 100
  },
  {
    id: 'express',
    title: 'Express Service',
    description: 'Same-day turnaround for urgent needs',
    icon: Clock,
    color: 'laundry-red',
    basePrice: 10,
    unit: 'surcharge',
    minQuantity: 1,
    maxQuantity: 1
  }
];

interface PriceCalculatorProps {
  onServiceSelect?: (service: Service, quantity: number, total: number) => void;
  showServiceSelection?: boolean;
}

export default function PriceCalculator({ 
  onServiceSelect, 
  showServiceSelection = true 
}: PriceCalculatorProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [expressService, setExpressService] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate total price when service, quantity, or express service changes
  useEffect(() => {
    if (selectedService) {
      let baseTotal = selectedService.basePrice;
      
      // Calculate extra units for services that have extra unit pricing
      if (selectedService.extraUnitPrice && quantity > 1) {
        const extraUnits = quantity - 1;
        baseTotal += extraUnits * selectedService.extraUnitPrice;
      } else if (!selectedService.extraUnitPrice) {
        // For services without extra unit pricing, multiply by quantity
        baseTotal = selectedService.basePrice * quantity;
      }
      
      // Add express service surcharge if selected
      if (expressService && selectedService.id !== 'express') {
        const expressServiceData = services.find(s => s.id === 'express');
        if (expressServiceData) {
          baseTotal += expressServiceData.basePrice;
        }
      }
      
      setTotalPrice(baseTotal);
      
      // Call callback if provided
      if (onServiceSelect) {
        onServiceSelect(selectedService, quantity, baseTotal);
      }
    }
  }, [selectedService, quantity, expressService, onServiceSelect]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setQuantity(service.minQuantity || 1);
    setExpressService(false);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (selectedService) {
      const min = selectedService.minQuantity || 1;
      const max = selectedService.maxQuantity || 100;
      const clampedQuantity = Math.max(min, Math.min(max, newQuantity));
      setQuantity(clampedQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD'
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {showServiceSelection && (
        <>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Service Selection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.filter(service => service.id !== 'express').map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedService?.id === service.id
                      ? "ring-2 ring-laundry-blue border-laundry-blue"
                      : "hover:border-gray-300"
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon
                          icon={service.icon}
                          className={`h-6 w-6 text-${service.color}`}
                        />
                        <div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {formatPrice(service.basePrice)} {service.unit}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Separator />
        </>
      )}

      {selectedService && (
        <>
          <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Price Calculator
            </h3>
            
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Selected Service */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon
                        icon={selectedService.icon}
                        className={`h-6 w-6 text-${selectedService.color}`}
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{selectedService.title}</h4>
                        <p className="text-sm text-gray-600">{selectedService.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {formatPrice(selectedService.basePrice)} {selectedService.unit}
                    </Badge>
                  </div>

                  <Separator />

                  {/* Quantity Selection */}
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= (selectedService.minQuantity || 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= (selectedService.maxQuantity || 100)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Express Service Option */}
                  {selectedService.id !== 'express' && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon icon={Clock} className="h-5 w-5 text-laundry-purple" />
                        <div>
                          <label className="text-sm font-medium text-gray-700">Express Service</label>
                          <p className="text-xs text-gray-600">Same-day turnaround</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={expressService}
                        onChange={(e) => setExpressService(e.target.checked)}
                        className="h-4 w-4 text-laundry-purple border-gray-300 rounded focus:ring-laundry-purple"
                      />
                    </div>
                  )}

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {selectedService.title} (Base {selectedService.unit})
                      </span>
                      <span className="font-medium">
                        {formatPrice(selectedService.basePrice)}
                      </span>
                    </div>
                    
                    {selectedService.extraUnitPrice && quantity > 1 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Extra {quantity - 1} {selectedService.extraUnit} ({formatPrice(selectedService.extraUnitPrice)} each)
                        </span>
                        <span className="font-medium">
                          {formatPrice((quantity - 1) * selectedService.extraUnitPrice)}
                        </span>
                      </div>
                    )}
                    
                    {!selectedService.extraUnitPrice && quantity > 1 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {quantity} x {formatPrice(selectedService.basePrice)} {selectedService.unit}
                        </span>
                        <span className="font-medium">
                          {formatPrice(selectedService.basePrice * quantity)}
                        </span>
                      </div>
                    )}
                    
                    {expressService && selectedService.id !== 'express' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Express Service Surcharge</span>
                        <span className="font-medium text-laundry-red">
                          {formatPrice(10)}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Total Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Estimated Price:</span>
                    <span className="text-2xl font-bold text-laundry-blue">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    * Final price may vary based on specific requirements and fabric types
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </>
      )}

      {!selectedService && showServiceSelection && (
        <div className="text-center py-8">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Select a service to calculate pricing</p>
        </div>
      )}
    </div>
  );
}
