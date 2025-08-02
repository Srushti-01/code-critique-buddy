import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start the Conversation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to transform your business? We're here to listen, understand your challenges, 
            and create tailored solutions that drive results.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="virtual-cfo">Virtual CFO Services</SelectItem>
                          <SelectItem value="strategy">Business Strategy</SelectItem>
                          <SelectItem value="financial-planning">Financial Planning</SelectItem>
                          <SelectItem value="operations">Operational Excellence</SelectItem>
                          <SelectItem value="risk-management">Risk Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business challenges and goals..."
                      className="min-h-32"
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="professional" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Get in touch via email</p>
                <a href="mailto:hello@synergy-consulting.com" className="text-primary hover:text-primary-glow transition-colors">
                  hello@synergy-consulting.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Speak with our team</p>
                <a href="tel:+1-555-123-4567" className="text-primary hover:text-primary-glow transition-colors">
                  +1 (555) 123-4567
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Our office location</p>
                <address className="text-primary not-italic">
                  123 Business District<br />
                  Suite 500<br />
                  New York, NY 10001
                </address>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you get started?",
                answer: "We typically begin initial assessments within 48 hours of our first consultation, with full engagement starting within one week."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We serve businesses across various industries including technology, manufacturing, healthcare, retail, and professional services."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are tailored to each client's specific needs and budget."
              },
              {
                question: "What's included in your Virtual CFO service?",
                answer: "Our Virtual CFO service includes financial strategy, cash flow management, budgeting, performance analysis, and strategic advisory support."
              },
              {
                question: "How do you measure success?",
                answer: "We establish clear KPIs and success metrics at the beginning of each engagement, with regular reviews to ensure we're delivering measurable value."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely. We integrate seamlessly with your existing team and systems, providing support and knowledge transfer as needed."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}