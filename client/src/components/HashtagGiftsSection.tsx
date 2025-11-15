import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
const backgroundImage = 'https://res.cloudinary.com/du9mnsfoh/image/upload/v1763176150/KScine-2_bkj9r8.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-gifts-header">Gift Guide</h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-teal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p 
                  className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6"
                  data-testid="text-gifts-message"
                >
                  As love is what we already have,
                  <br />
                  we only ask for your prayers and presence.
                  <br /><br />
                  But if you wish to bless us with a gift,
                  <br />
                  we would be most grateful for a monetary one
                  <br />
                  to help us create our first home together.
                  <br /><br />
                  With love and gratitude,
                  <br />
                  Kenneth & Suzette
                </p>
                
                {/* Bank Details */}
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold mb-4">
                    Bank Details
                  </p>
                  <div className="space-y-4 text-left">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">BDO Account</p>
                      <p className="text-sm text-foreground">Account Number: 0081 9010 9141</p>
                      <p className="text-sm text-foreground">Name: Suzette A Contreras</p>
                      <p className="text-sm text-foreground">Branch: BDO - Kabayan</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">GCASH</p>
                      <p className="text-sm text-foreground">Number: 09954806186</p>
                      <p className="text-sm text-foreground">Name: Suzette A Contreras</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <p className="text-sm md:text-base text-foreground/80 mb-3">
                    Share your moments using our hashtag
                  </p>
                  <div className="inline-block border-2 border-primary rounded-lg px-6 py-3 bg-primary/5">
                    <p className="text-primary text-lg md:text-xl font-semibold" data-testid="text-wedding-hashtag">
                      #SuzyKennethAskForMore
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
