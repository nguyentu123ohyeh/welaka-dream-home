import { motion } from "framer-motion";
import { Leaf, Heart, Sun } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bedroom.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Welaka bedroom sanctuary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/70" />
          </div>
          <div className="relative container-luxury py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-primary-foreground"
            >
              <p className="caption-elegant mb-4 opacity-80">The Welaka Story</p>
              <h1 className="heading-display font-serif mb-6">
                Where Rest Becomes Revival
              </h1>
              <p className="body-large opacity-90">
                In the heart of Florida's St. Johns River country, we're
                redefining what it means to truly rest.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-section font-serif text-primary mb-6">
                  Meet Madeline Marie Mellen
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Growing up in Welaka, Florida—a small town where the St.
                    Johns River meets endless skies—I learned early that home
                    isn't just where you live. It's where you restore yourself.
                  </p>
                  <p>
                    After years in the bustling world of interior design, I
                    returned to my roots with a mission: to help others create
                    bedrooms that aren't just places to sleep, but sanctuaries
                    for true renewal.
                  </p>
                  <p>
                    Every piece at Welaka Breeze is curated with intention. I
                    personally source materials that breathe with our Florida
                    climate, work with artisans who share our values, and test
                    everything in my own home before it reaches yours.
                  </p>
                  <p className="font-serif text-lg text-primary italic">
                    "Your bedroom should feel like a deep exhale at the end of
                    every day."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
                  <img
                    src={heroImage}
                    alt="Welaka Breeze aesthetic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent/90 backdrop-blur-sm rounded-lg p-6 shadow-soft max-w-[200px]">
                  <p className="font-serif text-primary text-lg mb-1">
                    Est. 2019
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Welaka, Florida
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding gradient-sand">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="caption-elegant text-driftwood mb-4">Our Values</p>
              <h2 className="heading-section font-serif text-primary">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Sustainable Materials",
                  description:
                    "We prioritize organic, natural, and responsibly-sourced materials that are gentle on both you and the planet.",
                },
                {
                  icon: Heart,
                  title: "Artisan Craftsmanship",
                  description:
                    "Each piece is made by skilled artisans who take pride in their work, ensuring quality that lasts for years.",
                },
                {
                  icon: Sun,
                  title: "Designed for Rest",
                  description:
                    "Every item is selected with sleep science and comfort in mind, helping you wake refreshed and restored.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-card rounded-lg p-8 text-center shadow-soft"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section font-serif mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="body-large opacity-80 max-w-2xl mx-auto mb-8">
                Explore our curated collection and find the pieces that speak to
                your soul.
              </p>
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/shop">Shop the Collection</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
