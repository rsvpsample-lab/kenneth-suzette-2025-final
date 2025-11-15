
import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageGroups = [
    {
      title: "Principal Sponsors",
      members: [
        { name: "Mr. & Mrs. Reynaldo & Erlinda Robles" },
        { name: "Mr. & Mrs. Benjamin & Emily Robles" },
        { name: "Mr. & Mrs. Ronnie & Marivic Aguda" },
        { name: "Mr. & Mrs. Rommel & Maria Teresa Enriquez" },
        { name: "Mr. & Mrs. Sonny & Linda Cruz" },
        { name: "Mr. & Mrs. Rodel & Lourdes Reyes" },
        { name: "Mr. & Mrs. Edwin & Analiza Santos" },
        { name: "Mr. & Mrs. Joel & Grace Martinez" }
      ]
    },
    {
      title: "Best Man",
      members: [{ name: "Engr. Reymark Robles" }]
    },
    {
      title: "Maid of Honor",
      members: [{ name: "Ms. Princess Suzette Enriquez" }]
    },
    {
      title: "Groomsmen",
      members: [
        { name: "Mr. John Michael Santos" },
        { name: "Mr. Christian Reyes" },
        { name: "Mr. Joshua Cruz" },
        { name: "Mr. Mark Anthony Martinez" }
      ]
    },
    {
      title: "Bridesmaids",
      members: [
        { name: "Ms. Mary Grace Aguda" },
        { name: "Ms. Angela Marie Santos" },
        { name: "Ms. Patricia Anne Reyes" },
        { name: "Ms. Kristine Joy Cruz" }
      ]
    },
    {
      title: "Coin & Veil Sponsors",
      members: [
        { name: "Mr. & Mrs. Roberto & Carmen Dela Cruz" }
      ]
    },
    {
      title: "Cord Sponsors",
      members: [
        { name: "Mr. & Mrs. Manuel & Rosario Gonzales" }
      ]
    },
    {
      title: "Candle Sponsors",
      members: [
        { name: "Mr. & Mrs. Antonio & Maria Fernandez" }
      ]
    },
    {
      title: "Ring Bearer",
      members: [{ name: "Baby Ethan James Robles" }]
    },
    {
      title: "Flower Girls",
      members: [
        { name: "Baby Sophia Marie Santos" },
        { name: "Baby Isabella Grace Cruz" }
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
