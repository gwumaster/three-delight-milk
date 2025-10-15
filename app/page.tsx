"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Truck,
  Star,
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  Heart,
  Coffee,
  Milk,
  Cookie,
  CheckCircle,
  Phone,
  Shield,
  Leaf,
  Droplets,
  Sun,
  Moon
} from "lucide-react";

export default function Home() {
  const [userType, setUserType] = useState<"customer" | "partner" | null>(null);

  if (userType === "customer") {
    return <CustomerView onBack={() => setUserType(null)} />;
  }

  if (userType === "partner") {
    return <PartnerView onBack={() => setUserType(null)} />;
  }

  return <LandingView onSelectUserType={setUserType} />;
}

function LandingView({ onSelectUserType }: { onSelectUserType: (type: "customer" | "partner") => void }) {
  const [stats, setStats] = useState({ customers: 0, deliveries: 0, partners: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ customers: 1250, deliveries: 8900, partners: 45 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-foreground rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-foreground rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-foreground rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-foreground rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-8 animate-bounce delay-1000">
        <Droplets className="w-6 h-6 text-blue-400 opacity-60" />
      </div>
      <div className="absolute top-48 right-12 animate-pulse delay-500">
        <Leaf className="w-8 h-8 text-green-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce delay-2000">
        <Sun className="w-5 h-5 text-amber-400 opacity-60" />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Enhanced Header */}
      <div className="text-center pt-20 pb-16 px-6 relative">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="relative group">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <Milk className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-3 h-3 text-white" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"></div>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              Three Delight Milk
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Fresh dairy products delivered to your doorstep with love. From our farm to your family.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
              {stats.customers.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform">
              {stats.deliveries.toLocaleString()}+
            </div>
            <div className="text-sm text-muted-foreground">Deliveries Made</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform">
              {stats.partners}+
            </div>
            <div className="text-sm text-muted-foreground">Delivery Partners</div>
          </div>
        </div>
      </div>

      {/* User Type Selection */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Experience</h2>
          <p className="text-muted-foreground text-lg">Join our community as a customer or delivery partner</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Customer Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-200 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center pb-6 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl mb-3">I'm a Customer</CardTitle>
              <CardDescription className="text-lg">
                Order fresh dairy products and get them delivered to your home
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Quick Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Live Tracking</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-blue-100 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Easy Ordering</span>
                </div>
              </div>
              <Button
                onClick={() => onSelectUserType("customer")}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Shopping
              </Button>
            </CardContent>
          </Card>

          {/* Delivery Partner Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-green-200 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center pb-6 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl mb-3">I'm a Delivery Partner</CardTitle>
              <CardDescription className="text-lg">
                Join our delivery team and earn by delivering happiness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-green-100 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Flexible Hours</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-green-100 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Good Earnings</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-green-100 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">GPS Navigation</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 rounded-xl border border-green-100 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Team Support</span>
                </div>
              </div>
              <Button
                onClick={() => onSelectUserType("partner")}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Our Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Three Delight Milk?</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              We're committed to bringing you the freshest dairy products with exceptional service and care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Farm Fresh Daily</h3>
              <p className="text-muted-foreground leading-relaxed">All products are sourced fresh from local farms every morning, ensuring maximum freshness and quality</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Lightning Fast Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">Same-day delivery available with real-time tracking and temperature-controlled vehicles</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Guaranteed</h3>
              <p className="text-muted-foreground leading-relaxed">Every product is quality-checked before delivery with our satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-muted-foreground text-xl">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Regular Customer",
                content: "The milk is always fresh and delivery is incredibly fast. Best service in town!",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Family of 4",
                content: "My kids love the yogurt selection. The quality is outstanding and prices are fair.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Health Enthusiast",
                content: "Love that they source from local farms. Great for supporting community businesses.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers and delivery partners in our growing community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onSelectUserType("customer")}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-lg px-8 py-4"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Order Now
            </Button>
            <Button
              onClick={() => onSelectUserType("partner")}
              variant="outline"
              size="lg"
              className="border-2 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20 text-lg px-8 py-4"
            >
              <Truck className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            ← Back to Home
          </Button>
          <Badge variant="secondary" className="flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" />
            Customer Portal
          </Badge>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome, Customer!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our fresh dairy products and place your order for quick delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Categories */}
          {[
            { name: "Fresh Milk", icon: Milk, desc: "Farm fresh milk delivered daily" },
            { name: "Yogurt", icon: Coffee, desc: "Creamy and delicious yogurt varieties" },
            { name: "Cheese", icon: Cookie, desc: "Artisan cheeses from local dairies" },
            { name: "Butter", icon: Heart, desc: "Premium quality butter" },
            { name: "Cream", icon: Star, desc: "Fresh cream for cooking and desserts" },
            { name: "Ice Cream", icon: Zap, desc: "Homemade style ice cream" }
          ].map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
            Browse All Products
          </Button>
        </div>
      </div>
    </div>
  );
}

function PartnerView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            ← Back to Home
          </Button>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Truck className="w-3 h-3" />
            Partner Portal
          </Badge>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Delivery Team!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of our mission to deliver fresh dairy products to happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Competitive earnings per delivery",
                "Flexible working hours",
                "Weekly bonus opportunities",
                "Fuel allowance provided",
                "Health and safety training"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Valid driver's license",
                "Own vehicle (bike or car)",
                "Smartphone with GPS",
                "Clean background check",
                "Age 18+ years"
              ].map((requirement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">{requirement}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
