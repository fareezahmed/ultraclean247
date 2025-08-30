import { z } from "zod";

// Common validation patterns
export const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const postcodeRegex = /^\d{4}$/;

// Service areas validation
export const serviceAreas = [
  'Melbourne CBD',
  'Southbank',
  'Docklands',
  'East Melbourne',
  'West Melbourne',
  'North Melbourne',
  'Carlton',
  'Fitzroy',
  'Richmond',
  'South Yarra',
  'Toorak',
  'Prahran',
  'Windsor',
  'St Kilda',
  'St Kilda East',
  'Elwood',
  'Balaclava',
  'Brunswick',
  'Brunswick East',
  'Northcote',
  'Thornbury',
  'Preston',
  'Coburg',
  'Pascoe Vale',
  'Essendon',
  'Moonee Ponds',
  'Footscray',
  'Yarraville',
  'Seddon',
  'Kingsville',
  'Newport',
  'Williamstown',
  'Spotswood',
  'Altona',
  'Altona North',
  'Brighton',
  'Brighton East',
  'Hampton',
  'Sandringham',
  'Beaumaris',
  'Black Rock',
  'Cheltenham',
  'Mentone',
  'Parkdale',
  'Hawthorn',
  'Kew',
  'Camberwell',
  'Glen Iris',
  'Malvern',
  'Armadale',
  'Caulfield',
  'Caulfield North',
  'Caulfield South'
] as const;

// Time slots validation
export const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
] as const;

// Enhanced booking validation schema
export const bookingSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(phoneRegex, "Please enter a valid phone number"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  
  address: z.string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),
  
  suburb: z.enum(serviceAreas),
  
  service: z.string()
    .min(1, "Please select a service"),
  
  quantity: z.string()
    .min(1, "Please specify quantity")
    .regex(/^\d+$/, "Quantity must be a number")
    .refine((val) => parseInt(val) > 0, "Quantity must be greater than 0")
    .refine((val) => parseInt(val) <= 100, "Quantity cannot exceed 100"),
  
  pickupDate: z.string()
    .min(1, "Please select a pickup date")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Pickup date cannot be in the past"),
  
  pickupTime: z.enum(timeSlots),
  
  specialInstructions: z.string()
    .max(500, "Special instructions must be less than 500 characters")
    .optional(),
  
  agreeToTerms: z.boolean()
    .refine(val => val === true, "You must agree to the terms and conditions")
});

// Type for the booking form data
export type BookingFormData = z.infer<typeof bookingSchema>;

// Validation helper functions
export const validatePhone = (phone: string): boolean => {
  return phoneRegex.test(phone) && phone.length >= 10 && phone.length <= 15;
};

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email) && email.length <= 100;
};

export const validateAddress = (address: string): boolean => {
  return address.length >= 10 && address.length <= 200;
};

export const validateQuantity = (quantity: string): boolean => {
  const num = parseInt(quantity);
  return !isNaN(num) && num > 0 && num <= 100;
};

export const validatePickupDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Service validation
export const validateService = (service: string): boolean => {
  const validServices = [
    'dry-cleaning',
    'laundry',
    'ironing',
    'express',
    'curtains',
    'rugs',
    'wedding-dress'
  ];
  return validServices.includes(service);
};

// Address validation for service areas
export const validateServiceArea = (suburb: string): boolean => {
  return serviceAreas.includes(suburb as any);
};

// Time slot validation
export const validateTimeSlot = (time: string): boolean => {
  return timeSlots.includes(time as any);
};

// Complete form validation
export const validateBookingForm = (data: Partial<BookingFormData>): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  
  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!data.address || !validateAddress(data.address)) {
    errors.address = "Please enter a valid address";
  }
  
  if (!data.suburb || !validateServiceArea(data.suburb)) {
    errors.suburb = "Please select a valid service area";
  }
  
  if (!data.service || !validateService(data.service)) {
    errors.service = "Please select a valid service";
  }
  
  if (!data.quantity || !validateQuantity(data.quantity)) {
    errors.quantity = "Please enter a valid quantity";
  }
  
  if (!data.pickupDate || !validatePickupDate(data.pickupDate)) {
    errors.pickupDate = "Please select a valid pickup date";
  }
  
  if (!data.pickupTime || !validateTimeSlot(data.pickupTime)) {
    errors.pickupTime = "Please select a valid pickup time";
  }
  
  if (data.specialInstructions && data.specialInstructions.length > 500) {
    errors.specialInstructions = "Special instructions must be less than 500 characters";
  }
  
  if (!data.agreeToTerms) {
    errors.agreeToTerms = "You must agree to the terms and conditions";
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
