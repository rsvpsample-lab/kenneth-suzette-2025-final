
import { motion } from 'framer-motion';

const EntourageSection = () => {
  const principalSponsorsPaired = [
    { name: "Mr. Uthai Wongkan" },
    { name: "Mrs. Anastacia Wongkan" },
    { name: "Mr. Alexander Gomez" },
    { name: "Mrs. Mergie Gomez" },
    { name: "Mr. Prince June Abarintos" },
    { name: "Mrs. Ericka Bianca Abarintos" },
    { name: "Mr. Ming-Hao Chen" },
    { name: "Mrs. Teodelfa Chen" },
    { name: "Mr. Richard Paz" },
    { name: "Mrs. Victoria Paz" },
    { name: "Mr. Rolando Gonzales" },
    { name: "Mrs. Leilanie B. Gonzales" },
    { name: "Mr. Hereberto E. Caringal" },
    { name: "Mrs. Prescila A. Caringal" },
    { name: "Mr. Gilbert C. Marquez" },
    { name: "Mrs. Emerita R. Marquez" }
  ];

  const principalSponsorsUnpaired = [
    { name: "Mr. Aldwen Reyes" },
    { name: "Ms. Catalina D. Napa" }
  ];

  const secondarySponsors = {
    candle: [
      { name: "Mr. Leomarl Uzziel D. Adem" },
      { name: "Ms. Maerilene Joy O. Macaraig" }
    ],
    veil: [
      { name: "Mr. Kin Amiel Rosales" },
      { name: "Ms. Blessed Anne R. Marquez" }
    ],
    cord: [
      { name: "Mr. Nathan I. Wongkan" },
      { name: "Ms. Ritchel Marie A. Caringal" }
    ]
  };

  const bestMan = { name: "Mr. Henson A. Contreras" };
  const maidOfHonor = { name: "Ms. Suzette I. Napa" };

  const groomsmen = [
    { name: "Mr. Franzer Gomez" },
    { name: "Mr. Juffre Russel C. Collado" }
  ];

  const bridesmaids = [
    { name: "Ms. Angela Yvette N. Paz" },
    { name: "Ms. Armel Emmanuelle R. Giman" }
  ];

  const ringBearer = { name: "Dan Cody A. Beron" };
  const coinBearer = { name: "Arius Kurt Elque D. Cuerdo" };
  const bibleBearer = { name: "Kharle Hamrie N. Magsino" };

  const flowerGirls = [
    { name: "Mattaniah Gwayne P. Napa" },
    { name: "Khexia Maccu C. Bagon" },
    { name: "Cailley Isabel E. Contreras" }
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
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-display italic mb-12 md:mb-16 text-[#483828]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Entourage
        </motion.h2>

        {/* Principal Sponsors */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-6">
            Principal Sponsors
          </h3>
          <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-1 max-w-3xl mx-auto mb-2">
            {principalSponsorsPaired.map((sponsor, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid={`text-sponsor-${idx}`}>
                {sponsor.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-1">
            {principalSponsorsUnpaired.map((sponsor, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid={`text-sponsor-unpaired-${idx}`}>
                {sponsor.name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Best Man & Maid of Honor */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:gap-16 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div data-testid="section-best-man">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Best Man</h3>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid="text-best-man">{bestMan.name}</p>
          </div>
          <div data-testid="section-maid-honor">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Maid of Honor</h3>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid="text-maid-honor">{maidOfHonor.name}</p>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:gap-16 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div data-testid="section-groomsmen">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Groomsmen</h3>
            {groomsmen.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-groomsman-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
          <div data-testid="section-bridesmaids">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Bridesmaids</h3>
            {bridesmaids.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-bridesmaid-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Candle, Cord, Veil */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.9 }}
        >
          <div data-testid="section-candle">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Candle</h3>
            {secondarySponsors.candle.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-candle-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
          <div data-testid="section-cord">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Cord</h3>
            {secondarySponsors.cord.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-cord-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
          <div data-testid="section-veil">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Veil</h3>
            {secondarySponsors.veil.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-veil-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Bible, Coin, Ring Bearers */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <div data-testid="section-bible-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Bible Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid="text-bible-bearer">{bibleBearer.name}</p>
          </div>
          <div data-testid="section-coin-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Coin Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid="text-coin-bearer">{coinBearer.name}</p>
          </div>
          <div data-testid="section-ring-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Ring Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide" data-testid="text-ring-bearer">{ringBearer.name}</p>
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Flower Girls</h3>
          {flowerGirls.map((girl, idx) => (
            <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 uppercase tracking-wide" data-testid={`text-flower-girl-${idx}`}>
              {girl.name}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
