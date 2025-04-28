
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // After connecting to Supabase through the Lovable integration,
      // you can create an Edge Function that sends emails
      // For now, we'll simulate a successful submission
      
      console.log("Message data:", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to: "marivadadhanushreddy@gmail.com"
      });
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray mb-1">
            Your Name
          </label>
          <Input 
            id="name"
            name="name"
            placeholder="username"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full transition-all focus:border-portfolio-green focus:ring-portfolio-green/20"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray mb-1">
            Your Email
          </label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="abc@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full transition-all focus:border-portfolio-green focus:ring-portfolio-green/20"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray mb-1">
          Subject
        </label>
        <Input 
          id="subject"
          name="subject"
          placeholder="Project Inquiry"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full transition-all focus:border-portfolio-green focus:ring-portfolio-green/20"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray mb-1">
          Your Message
        </label>
        <Textarea 
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[150px] transition-all focus:border-portfolio-green focus:ring-portfolio-green/20"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full md:w-auto bg-portfolio-green hover:bg-portfolio-green/90 mt-2 flex items-center gap-2 group"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </form>
  );
};

export default ContactForm;
