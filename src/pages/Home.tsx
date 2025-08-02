import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Shield, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
                Solutions That Drive
              </span>
              <span className="block">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Partner with Synergy for expert financial guidance, strategic planning, 
              and innovative solutions that transform your business potential into measurable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Synergy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine deep industry expertise with innovative approaches to deliver 
            exceptional results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Expert Team",
              description: "Seasoned professionals with decades of combined experience across industries."
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "Track record of driving measurable growth and operational excellence."
            },
            {
              icon: Shield,
              title: "Trusted Advisor",
              description: "Reliable partnership built on transparency, integrity, and mutual success."
            },
            {
              icon: Target,
              title: "Strategic Focus",
              description: "Tailored solutions aligned with your specific business objectives and goals."
            }
          ].map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions designed to accelerate your growth and optimize performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual CFO Services",
                description: "Strategic financial leadership and planning to guide your business decisions with expert insights.",
                features: ["Financial Strategy", "Budget Planning", "Performance Analysis", "Risk Management"]
              },
              {
                title: "Business Strategy",
                description: "Comprehensive strategic planning and execution frameworks to drive sustainable growth.",
                features: ["Market Analysis", "Growth Planning", "Competitive Strategy", "Digital Transformation"]
              },
              {
                title: "Operational Excellence",
                description: "Streamline operations and optimize processes to maximize efficiency and profitability.",
                features: ["Process Optimization", "Quality Management", "Cost Reduction", "Performance Metrics"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="professional" size="lg" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how Synergy can help you achieve your strategic objectives 
              and drive sustainable growth.
            </p>
            <Button variant="hero" size="lg" className="bg-white/10 hover:bg-white/20" asChild>
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}