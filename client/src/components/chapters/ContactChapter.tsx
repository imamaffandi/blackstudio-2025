import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { Instagram, Youtube, Linkedin, Mail, Clock, Users, Eye } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export function ContactChapter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  // Real-time analytics state
  const [analytics, setAnalytics] = useState({
    visitors: 0,
    lastVisit: '',
    activeUsers: 0
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const whatsappMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      return response.json();
    },
    onSuccess: (data: { url: string }) => {
      window.open(data.url, "_blank");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = insertContactSchema.parse(formData);
      contactMutation.mutate(validatedData);
    } catch (error) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello BlackStudio.id! I'm interested in your creative services.`;
    whatsappMutation.mutate(message);
  };

  // Simulate real-time analytics updates
  useEffect(() => {
    // Initial values
    const startTime = Date.now();
    const baseVisitors = 1247;
    const baseActiveUsers = 12;
    
    const updateAnalytics = () => {
      const now = new Date();
      const elapsed = Date.now() - startTime;
      
      // Simulate visitor count incrementing slowly
      const newVisitors = baseVisitors + Math.floor(elapsed / 30000); // +1 every 30 seconds
      
      // Simulate active users fluctuating
      const activeVariation = Math.floor(Math.sin(elapsed / 5000) * 3);
      const newActiveUsers = Math.max(1, baseActiveUsers + activeVariation);
      
      setAnalytics({
        visitors: newVisitors,
        lastVisit: now.toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        activeUsers: newActiveUsers
      });
    };

    updateAnalytics();
    const interval = setInterval(updateAnalytics, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="w-screen h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-800 via-purple-950/25 to-slate-900" 
      style={{ aspectRatio: '16/9' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto mobile-container px-4 s25:px-6 md:px-8 w-full h-full flex flex-col justify-center pt-12 s25:pt-16 md:pt-20 short-screen-container short-screen-center">
        {/* Header */}
        <div className="text-center mb-12 short-screen-header">
          <motion.h2 
            className="mobile-text-3xl s25:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 s25:mb-6 leading-tight short-screen-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <span className="block text-white">LET'S CREATE</span>
            <span className="block animate-gradient-purple-pink font-bold">
              TOGETHER
            </span>
          </motion.h2>
          
          <motion.p 
            className="mobile-text-base s25:text-base text-gray-300 max-w-2xl mx-auto mb-6 s25:mb-8 font-light short-screen-text short-screen-spacing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            Ready to bring your creative vision to life? Get in touch and let's make something amazing.
          </motion.p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <Button 
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 w-64"
              onClick={() => window.open('mailto:blackstudio.id@gmail.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              blackstudio.id@gmail.com
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            <Button 
              onClick={handleWhatsApp}
              className="whatsapp-highlight text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 w-64 relative z-10"
              disabled={whatsappMutation.isPending}
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              {whatsappMutation.isPending ? "Opening..." : "+628113377793"}
            </Button>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          <motion.a
            href="https://instagram.com/blackstudio.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          >
            <Instagram className="w-6 h-6 text-white" />
          </motion.a>
          
          <motion.a
            href="https://youtube.com/@blackstudio.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          >
            <Youtube className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/company/blackstudio-id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://tiktok.com/@blackstudio.id"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.1 }}
          >
            <FaTiktok className="w-6 h-6 text-white" />
          </motion.a>
        </div>

        {/* Footer - Analytics and Copyright */}
        <div className="absolute bottom-6 left-0 right-0 px-[6%] md:px-[8%]">
          {/* Mobile: 2 Rows Layout, Desktop: Single Row */}
          <div className="md:flex md:items-center md:justify-between space-y-3 md:space-y-0">
            {/* Real-time Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              className="w-full"
            >
              <div className="flex justify-center flex-wrap gap-2 text-xs text-gray-400 font-semibold md:justify-start md:gap-3">
                <div className="flex items-center gap-0.5">
                  <Eye className="w-3 h-3" />
                  <span>{analytics.visitors.toLocaleString()} visitors</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <Users className="w-3 h-3" />
                  <span>{analytics.activeUsers} online</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3" />
                  <span>Last: {analytics.lastVisit}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: false }}
              className="w-full"
            >
              <div className="text-center md:text-right text-xs text-gray-500 font-semibold">
                BLACKSTUDIO.ID © 2025 - Creative Production House
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </motion.section>
  );
}