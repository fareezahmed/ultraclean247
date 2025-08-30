"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, "Please enter a valid phone number"),
  
  subject: z.enum([
    "General Inquiry",
    "Service Question",
    "Booking Support",
    "Pricing Inquiry",
    "Complaint",
    "Feedback",
    "Other"
  ]),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  
  preferredContact: z.enum(["email", "phone"]),
  
  urgency: z.enum(["low", "medium", "high"])
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General Inquiry",
      preferredContact: "email",
      urgency: "low"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Use the Formspree endpoint directly for now
      const endpoint = "https://formspree.io/f/mrblrgjq";

      if (!endpoint) {
        throw new Error("Form submission endpoint not configured");
      }

      const formData = {
        ...data,
        _subject: `Contact Form: ${data.subject} - ${data.name}`,
        _template: "table",
        source: "Contact Page"
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Full Name *</span>
          </Label>
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
          <Label htmlFor="email" className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Email Address *</span>
          </Label>
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

      {/* Phone and Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Phone Number *</span>
          </Label>
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
        
        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Select onValueChange={(value) => setValue("subject", value as any)}>
            <SelectTrigger className={errors.subject ? "border-red-500" : ""}>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              <SelectItem value="Service Question">Service Question</SelectItem>
              <SelectItem value="Booking Support">Booking Support</SelectItem>
              <SelectItem value="Pricing Inquiry">Pricing Inquiry</SelectItem>
              <SelectItem value="Complaint">Complaint</SelectItem>
              <SelectItem value="Feedback">Feedback</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Preferred Contact and Urgency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
          <Select onValueChange={(value) => setValue("preferredContact", value as any)}>
            <SelectTrigger className={errors.preferredContact ? "border-red-500" : ""}>
              <SelectValue placeholder="Select contact method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
            </SelectContent>
          </Select>
          {errors.preferredContact && (
            <p className="text-red-600 text-sm mt-1">{errors.preferredContact.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="urgency">Urgency Level *</Label>
          <Select onValueChange={(value) => setValue("urgency", value as any)}>
            <SelectTrigger className={errors.urgency ? "border-red-500" : ""}>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low - General inquiry</SelectItem>
              <SelectItem value="medium">Medium - Need response soon</SelectItem>
              <SelectItem value="high">High - Urgent matter</SelectItem>
            </SelectContent>
          </Select>
          {errors.urgency && (
            <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4" />
          <span>Message *</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          {watch("message")?.length || 0}/1000 characters
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || status === "submitting"}
        className="w-full bg-laundry-blue hover:bg-laundry-blue-dark text-lg px-8 py-4"
      >
        {isSubmitting || status === "submitting" ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Sending Message...</span>
          </div>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <h4 className="font-semibold text-green-900">Message Sent Successfully!</h4>
              <p className="text-green-700 text-sm">
                Thank you for contacting us. We'll get back to you within 2 hours.
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
              <h4 className="font-semibold text-red-900">Message Sending Failed</h4>
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Response Time Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="text-blue-800 text-sm font-medium">Response Time</p>
            <p className="text-blue-700 text-sm">
              We typically respond within 2 hours during business hours. 
              For urgent matters, please call us directly at 0434944733.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
