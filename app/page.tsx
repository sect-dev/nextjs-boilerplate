"use client"

import { useState, useEffect } from "react"
import { Shield, Wifi, Mic, Smartphone, Globe, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NexoraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Built-in Ad Blocker",
      description: "Browse without interruptions. Our advanced ad blocker keeps your experience clean and fast.",
    },
    {
      icon: Wifi,
      title: "Unlimited Web Access",
      description: "Access any website without restrictions. Browse freely and securely across the entire web.",
    },
    {
      icon: Mic,
      title: "Voice Search Support",
      description: "Search hands-free with intelligent voice recognition. Just speak and find what you need.",
    },
    {
      icon: Smartphone,
      title: "Optimized for Low-end Devices",
      description: "Lightning-fast performance even on older Android devices. Minimal resource usage, maximum speed.",
    },
    {
      icon: Globe,
      title: "Access Global Content",
      description: "Connect to content worldwide. Break through geographical barriers and explore freely.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-xl">Nexora</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">
                Features
              </a>
              <a href="#download" className="text-white/80 hover:text-white transition-colors">
                Download
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.nexorabrowser.nex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#download" className="text-white/80 hover:text-white transition-colors">
                  Download
                </a>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 w-full"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nexorabrowser.nex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Now
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Browse without
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                limits
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Fast, lightweight, and private browser for Android
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.nexorabrowser.nex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Nexora
                </a>
              </Button>
              <p className="text-white/60 text-sm">Free • Android 5.0+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Nexora?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience the web like never before with our cutting-edge browser designed for modern Android users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Browse Without Limits?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the freedom of unrestricted browsing
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.nexorabrowser.nex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-8 h-8 mr-4" />
              Download Nexora Now
            </a>
          </Button>
          <div className="mt-8 flex items-center justify-center space-x-4 text-white/60">
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              100% Free
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Android 5.0+
            </span>
            <span>•</span>
            <span>No Registration Required</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span className="text-white font-semibold">Nexora</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>© 2025 Nexora</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
