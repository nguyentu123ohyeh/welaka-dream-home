import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-accent/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="h-10 w-10 text-accent mx-auto mb-8 opacity-60" />
          <blockquote className="font-serif text-2xl md:text-3xl text-primary leading-relaxed mb-8">
            "Your bedroom should be a sanctuary—a place where the outside world
            fades away and you can simply breathe. That's what I'm creating with
            every piece we curate."
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="font-serif text-lg text-primary">
              Madeline Marie Mellen
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Founder & Curator, Welaka Breeze
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
