import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Shield, 
  Lightbulb,
  Settings,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Virtual CFO Services",
      description: "Strategic financial leadership without the full-time cost. Get expert CFO guidance tailored to your business needs.",
      features: [
        "Financial Strategy Development",
        "Cash Flow Management", 
        "Budget Planning & Forecasting",
        "Performance Analysis & KPIs",
        "Risk Assessment & Mitigation",
        "Investor Relations Support"
      ],
      badge: "Most Popular"
    },
    {
      icon: TrendingUp,
      title: "Business Strategy Consulting",
      description: "Comprehensive strategic planning to navigate market challenges and capitalize on growth opportunities.",
      features: [
        "Market Analysis & Research",
        "Competitive Intelligence",
        "Growth Strategy Planning",
        "Digital Transformation",
        "Merger & Acquisition Support",
        "Strategic Planning Workshops"
      ]
    },
    {
      icon: BarChart3,
      title: "Financial Planning & Analysis",
      description: "Data-driven financial insights to support informed decision-making and optimize business performance.",
      features: [
        "Financial Modeling",
        "Scenario Planning",
        "Investment Analysis",
        "Cost Management",
        "Revenue Optimization",
        "Financial Reporting"
      ]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Build high-performing teams and optimize organizational structure for sustainable growth.",
      features: [
        "Leadership Development",
        "Team Performance Optimization",
        "Change Management",
        "Culture Transformation",
        "Succession Planning",
        "Performance Management Systems"
      ]
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Streamline operations and implement best practices to maximize efficiency and profitability.",
      features: [
        "Process Optimization",
        "Quality Management Systems",
        "Supply Chain Optimization",
        "Technology Integration",
        "Performance Metrics & Dashboards",
        "Continuous Improvement Programs"
      ]
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Comprehensive risk assessment and compliance frameworks to protect your business interests.",
      features: [
        "Risk Assessment & Analysis",
        "Compliance Management",
        "Internal Controls",
        "Audit Support",
        "Regulatory Compliance",
        "Crisis Management Planning"
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Business Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            From strategic planning to operational excellence, we provide the expertise 
            your business needs to thrive in today's competitive landscape.
          </p>
          <Button variant="hero" size="lg" className="bg-white/10 hover:bg-white/20" asChild>
            <Link to="/contact">
              Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative">
              {service.badge && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-primary text-primary-foreground">
                  {service.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
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
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Comprehensive analysis of your current state, challenges, and opportunities."
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Collaborative creation of tailored strategies aligned with your business objectives."
              },
              {
                step: "03",
                title: "Implementation Planning",
                description: "Detailed roadmap with clear milestones, timelines, and success metrics."
              },
              {
                step: "04",
                title: "Execution & Optimization",
                description: "Hands-on support with continuous monitoring and refinement for optimal results."
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <span className="text-xl font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss which services are the best fit for your business needs 
              and create a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white/10 hover:bg-white/20" asChild>
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}