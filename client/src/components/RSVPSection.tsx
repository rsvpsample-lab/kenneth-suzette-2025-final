import { motion } from 'framer-motion';
import ringImage from '@assets/rsvp-ring_1760518283296.png';

const RSVPSection = () => {
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.8 }}
        >
          <h2 
            className="text-gold text-[48px] md:text-5xl" 
            style={{ fontFamily: 'Boska, serif', fontWeight: 300, fontStyle: 'normal' }} 
            data-testid="text-rsvp-header"
          >
            RSVP Here
          </h2>
        </motion.div>

        {/* RSVP Content */}
        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          {/* Ring Image Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={ringImage}
              alt="Wedding Ring"
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-40"
              data-testid="img-ring-background"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 11.2 }}
            >
              <span 
                className="text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] text-foreground tracking-tight block"
                style={{ fontFamily: 'Boska, serif', fontWeight: 350 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </span>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 11.4 }}
            >
              {/* Message with contact details */}
              <div className="mt-8 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-teal border border-primary/20">
                <p 
                  className="font-body text-base md:text-lg text-foreground font-medium text-center mb-4"
                  data-testid="text-rsvp-message"
                >
                  Please confirm your attendance by filling out our RSVP form
                </p>
                <div className="text-center mb-6">
                  <a 
                    href="https://kenneth-suzette-rsvp.replit.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                  >
                    RSVP Now
                  </a>
                </div>
                <p className="text-center">
                  <span className="font-body md:text-lg font-bold px-3 py-1 rounded whitespace-nowrap text-[12px] text-primary-foreground bg-primary">RSVP DUE DATE: NOVEMBER 25</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
