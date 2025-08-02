import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Tech Startup Scale-Up Success",
      industry: "Technology",
      challenge: "Rapid growth management and financial structure optimization",
      solution: "Implemented Virtual CFO services with strategic financial planning and operational frameworks",
      results: [
        "300% revenue growth in 18 months",
        "Reduced operational costs by 25%",
        "Successful Series A funding round",
        "Streamlined financial processes"
      ],
      metrics: {
        revenue: "+300%",
        costs: "-25%",
        efficiency: "+150%"
      },
      category: "Growth Strategy"
    },
    {
      title: "Manufacturing Efficiency Transformation", 
      industry: "Manufacturing",
      challenge: "Legacy processes causing inefficiencies and quality issues",
      solution: "Comprehensive operational excellence program with process optimization and quality management",
      results: [
        "40% improvement in production efficiency",
        "60% reduction in defect rates",
        "30% decrease in waste generation",
        "Enhanced employee satisfaction"
      ],
      metrics: {
        efficiency: "+40%",
        quality: "+60%",
        waste: "-30%"
      },
      category: "Operational Excellence"
    },
    {
      title: "Retail Chain Digital Transformation",
      industry: "Retail",
      challenge: "Declining sales and outdated customer experience systems",
      solution: "Strategic digital transformation with omnichannel approach and data analytics implementation",
      results: [
        "50% increase in online sales",
        "35% improvement in customer retention",
        "20% growth in average order value",
        "Integrated inventory management"
      ],
      metrics: {
        sales: "+50%",
        retention: "+35%",
        value: "+20%"
      },
      category: "Digital Transformation"
    },
    {
      title: "Healthcare Practice Optimization",
      industry: "Healthcare",
      challenge: "Financial management and regulatory compliance complexities",
      solution: "Virtual CFO services combined with compliance management and operational restructuring",
      results: [
        "25% increase in practice profitability",
        "100% regulatory compliance achievement",
        "45% reduction in administrative overhead",
        "Improved patient satisfaction scores"
      ],
      metrics: {
        profitability: "+25%",
        compliance: "100%",
        overhead: "-45%"
      },
      category: "Financial Management"
    },
    {
      title: "Professional Services Firm Expansion",
      industry: "Professional Services",
      challenge: "Multi-location expansion strategy and talent management",
      solution: "Strategic planning for geographic expansion with organizational development programs",
      results: [
        "Successful expansion to 5 new markets",
        "80% improvement in employee retention",
        "45% increase in client satisfaction",
        "Standardized service delivery processes"
      ],
      metrics: {
        expansion: "5 Markets",
        retention: "+80%",
        satisfaction: "+45%"
      },
      category: "Strategic Planning"
    },
    {
      title: "Family Business Succession Planning",
      industry: "Family Business",
      challenge: "Leadership transition and governance structure development",
      solution: "Comprehensive succession planning with family governance framework and leadership development",
      results: [
        "Smooth leadership transition",
        "Established family governance structure",
        "30% improvement in business performance",
        "Enhanced family unity and communication"
      ],
      metrics: {
        transition: "Successful",
        performance: "+30%",
        governance: "Established"
      },
      category: "Succession Planning"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories That Inspire
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Real businesses, real challenges, exceptional results. Discover how we've helped 
            organizations transform their operations and achieve sustainable growth.
          </p>
          <Button variant="hero" size="lg" className="bg-white/10 hover:bg-white/20" asChild>
            <Link to="/contact">
              Start Your Success Story <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                      {study.title}
                    </CardTitle>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Solution</h4>
                    <p className="text-sm text-foreground">{study.solution}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-subtle rounded-lg">
                    {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Measurable results across diverse industries and business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "95%", label: "Client Success Rate" },
              { number: "$50M+", label: "Value Created" },
              { number: "25+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-primary-glow transition-colors">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every success story starts with a conversation. Let's discuss how we can 
            help your business achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="professional" size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}