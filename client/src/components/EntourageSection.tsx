
import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageGroups = [
    {
      title: "Principal Sponsors",
      members: [
        { name: "Mr. Uthai Wongkan" },
        { name: "Mrs. Anastacia Wongkan" },
        { name: "Mr. Alexander Gomez" },
        { name: "Mrs. Mergie Gomez" },
        { name: "Mr. Prince June Abarintos" },
        { name: "Mrs. Ericka Bianca Abarintos" },
        { name: "Mr. Ming-Hao Chen" },
        { name: "Mrs. Teodelea Chen" },
        { name: "Mr. Richard Paz" },
        { name: "Mrs. Victoria Paz" },
        { name: "Mr. Rolando Gonzales" },
        { name: "Mrs. Leilanie B. Gonzales" },
        { name: "Mr. Hereberto E. Caringal" },
        { name: "Mrs. Prescila A. Caringal" },
        { name: "Mr. Gilbert C. Marquez" },
        { name: "Mrs. Emerita R. Marquez" },
        { name: "Mr. Aldwen Reyes" },
        { name: "Ms. Catalina D. Napa" }
      ]
    },
    {
      title: "Best Man",
      members: [{ name: "Mr. Henson A. Contreras" }]
    },
    {
      title: "Maid of Honor",
      members: [{ name: "Ms. Suzette I. Napa" }]
    },
    {
      title: "Groomsmen",
      members: [
        { name: "Mr. Franzer Gomez" },
        { name: "Mr. Juffre Russel C. Collado" }
      ]
    },
    {
      title: "Bridesmaids",
      members: [
        { name: "Ms. Angela Yvette N. Paz" },
        { name: "Ms. Armel Emmanuelle R. Giman" }
      ]
    },
    {
      title: "Candle",
      members: [
        { name: "Mr. Leomarl Uzziel D. Adem" },
        { name: "Ms. Maerilene Joy O. Macaraig" }
      ]
    },
    {
      title: "Cord",
      members: [
        { name: "Mr. Nathan I. Wongkan" },
        { name: "Ms. Ritchel Marie A. Caringal" }
      ]
    },
    {
      title: "Veil",
      members: [
        { name: "Mr. Kin Amiel Rosales" },
        { name: "Ms. Blessed Anne R. Marquez" }
      ]
    },
    {
      title: "Bible Bearer",
      members: [{ name: "Kharle Hamrie N. Magsino" }]
    },
    {
      title: "Coin Bearer",
      members: [{ name: "Arius Kurt Elque D. Cuerdo" }]
    },
    {
      title: "Ring Bearer",
      members: [{ name: "Dan Cody A. Beron" }]
    },
    {
      title: "Flower Girls",
      members: [
        { name: "Maitaniah Gwayne P. Napa" },
        { name: "Khexia Maccu C. Bagon" },
        { name: "Cailley Isabel E. Contreras" }
      ]
    }
  ];

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic text-foreground/80 mb-2">
              "Therefore what God has joined together, let no one separate."
            </p>
            <cite className="text-sm md:text-base not-italic text-foreground/60">— Mark 10:9</cite>
          </blockquote>
        </motion.div>

        {/* Entourage List */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {entourageGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-white/50 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-md border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 8.8 + index * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-display text-primary mb-6 pb-3 border-b border-primary/20">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.members.map((member, idx) => (
                  <p key={idx} className="text-base md:text-lg font-body text-foreground leading-relaxed">
                    {member.name}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
