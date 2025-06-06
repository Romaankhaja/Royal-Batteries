
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dealerApplicationSchema, type DealerApplicationFormValues } from "@/app/dealer-application/schemas";
// Removed submitDealerApplication import as we'll redirect to WhatsApp
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function DealerForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ownerWhatsAppNumber = "919397617823"; // Use number without '+' for wa.me link

  const form = useForm<DealerApplicationFormValues>({
    resolver: zodResolver(dealerApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      location: "",
      message: "",
    },
  });

  async function onSubmit(values: DealerApplicationFormValues) {
    setIsSubmitting(true);

    const { name, email, phone, businessName, location, message } = values;

    let whatsappMessage = `New HUMSAFAR Dealer Application:\n\n`;
    whatsappMessage += `Name: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    whatsappMessage += `Phone: ${phone}\n`;
    if (businessName) whatsappMessage += `Business Name: ${businessName}\n`;
    whatsappMessage += `Location: ${location}\n`;
    if (message) whatsappMessage += `Message: ${message}\n`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;

    // Simulate a short delay before redirecting
    await new Promise(resolve => setTimeout(resolve, 500));

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, '_blank');
    }
    
    toast({
      title: "Redirecting to WhatsApp...",
      description: "Please send the pre-filled message to complete your application.",
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-heading">Dealer Application Form</CardTitle>
        <CardDescription>
          Interested in becoming a HUMSAFAR dealer? Fill out the form below. We'll redirect you to WhatsApp to submit your details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Business LLC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proposed Dealership Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please specify the area where you plan to operate.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about your interest or experience..."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit via WhatsApp"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
