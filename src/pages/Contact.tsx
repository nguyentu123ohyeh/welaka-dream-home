import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Madeline will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-coastal section-padding">
          <div className="container-luxury text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="caption-elegant text-driftwood mb-4 uppercase tracking-[0.3em]"
            >
              Personal Concierge
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-display font-serif text-primary mb-6"
            >
              Let's Design Your Dream Space
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-large text-muted-foreground max-w-2xl mx-auto"
            >
              Have questions about our products? Looking for personalized design
              advice? We're here to help you create your perfect sanctuary.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Left Column: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl text-primary mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Design consultation request"
                      required
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream bedroom..."
                      rows={6}
                      required
                      className="bg-card resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="sanctuary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Right Column: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-2xl text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  For bespoke inquiries or personalized design consultations,
                  feel free to reach out directly. Madeline personally responds
                  to all inquiries within 24-48 hours.
                </p>

                <div className="space-y-6">
                  {/* --- KHỐI THÔNG TIN FOUNDER MỚI --- */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-accent/20">
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Founder & Curator</p>
                      <p className="text-muted-foreground font-serif italic text-lg">
                        Madeline Marie Mellen
                      </p>
                    </div>
                  </div>

                  {/* Email Block */}
                  <a
                    href="mailto:kennanstropmfh6@hotmail.com"
                    className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent-foreground transition-colors">
                        Email Us
                      </p>
                      <p className="text-muted-foreground">
                        kennanstropmfh6@hotmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone Block */}
                  <a
                    href="tel:+14092568329"
                    className="flex items-start gap-4 p-4 rounded-lg bg-card hover:bg-accent/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent-foreground transition-colors">
                        Call Us
                      </p>
                      <p className="text-muted-foreground">+1 (409) 256-8329</p>
                    </div>
                  </a>

                  {/* Address Block */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Visit Our Studio</p>
                      <p className="text-muted-foreground">
                        112 Cherry Drive
                        <br />
                        Welaka, Florida 32193
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 p-6 bg-accent/30 rounded-lg">
                  <h3 className="font-serif text-lg text-primary mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span>9:00 AM – 5:00 PM EST</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM – 2:00 PM EST</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;