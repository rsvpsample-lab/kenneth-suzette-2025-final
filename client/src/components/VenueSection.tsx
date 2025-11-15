"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkPreview } from '@/components/ui/link-preview';

const VenueSection = () => {
  const venues = [
    {
      title: 'Church Ceremony',
      name: 'Basilica De San Martin De Tours',
      address: 'Taal, Batangas',
      image: 'https://res.cloudinary.com/du9mnsfoh/image/upload/v1763174174/church_kgjute.jpg',
      mapUrl: 'https://maps.app.goo.gl/g4PsuVM4gaG7NWFE9',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.306493896195!2d120.92222477485836!3d13.880612986524755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0a246a5a69b9%3A0xde6f612d574bef5b!2sMinor%20Basilica%20and%20Parish%20of%20St.%20Martin%20of%20Tours!5e0!3m2!1sen!2sph!4v1763178373401!5m2!1sen!2sph',
      description: 'Join us at the historic Basilica De San Martin De Tours for our sacred wedding ceremony. This beautiful church will witness our vows of eternal love.',
      details: 'The ceremony begins at 2:30 PM. Please arrive by 2:00 PM to be seated.',
      startTime: '2:30 PM',
      locationGuide: 'View on Maps →'
    },
    {
      title: 'Reception',
      name: 'The Stable Rancho Blanco Event Center',
      address: 'Taal, Batangas',
      image: 'https://res.cloudinary.com/du9mnsfoh/image/upload/v1763174174/576190117_24761241300238300_8370538227753679374_n_rd1ghx.jpg',
      mapUrl: 'https://maps.app.goo.gl/u5VH5fdEm62potfz6',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1401766742297!2d121.06688947485755!3d13.830620086569535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0ff6f6291a23%3A0x94abc72f86048334!2sRancho%20Blanco%20Dates%20Farm!5e0!3m2!1sen!2sph!4v1763178405472!5m2!1sen!2sph',
      description: 'Celebrate with us at The Stable Rancho Blanco Event Center. This stunning venue will host our reception and evening celebration.',
      details: 'Reception begins at 5:00 PM with dinner at 6:00 PM. Party starts at 8:00 PM!',
      startTime: '5:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue bg-background py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 6.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 }}
        >
          <h1 className="text-4xl font-display font-light mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) }}
            >
              {/* Modern Creative Container */}
              <div className="relative max-w-5xl mx-auto">
                {/* Decorative background layers */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
                <div className="absolute -inset-2 bg-card/30 backdrop-blur-sm rounded-xl" />
                
                {/* Main Content Card */}
                <div className="relative bg-white rounded-xl shadow-teal overflow-hidden border border-primary/20">
                  {/* Header with decorative elements */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 border-b-2 border-primary/20">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) }}
                      >
                        <h2 className="font-display text-foreground mb-2 text-2xl md:text-3xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                          {venue.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-8 h-px bg-primary/40" />
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div className="w-8 h-px bg-primary/40" />
                        </div>
                        <h3 className="font-body text-primary font-semibold text-lg md:text-xl" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                          {venue.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                            {venue.address}
                          </p>
                        </div>
                      {venue.title === 'Church Ceremony' && (
                          <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg px-4 py-3">
                            <p className="text-sm font-body text-foreground text-center italic">
                              <span className="font-semibold">Unplugged Ceremony:</span> Please turn off all devices and be fully present with us during this sacred moment.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section with Modern Frame */}
                  <div className="relative p-6 md:p-8">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Image frame decoration */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="relative w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                        loading="lazy"
                        data-testid={`img-${venue.title.toLowerCase()}-venue`}
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 px-6 md:px-8 pb-6">
                    {/* Left Column - Description */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">About the Venue</h4>
                      </div>
                      <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                        {venue.description}
                      </p>
                      <p className="text-sm font-body text-foreground/80 italic" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                        {venue.details}
                      </p>
                    </div>

                    {/* Right Column - Map */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Location Map</h4>
                      </div>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl border-2 border-primary/20">
                        <iframe
                          src={venue.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          data-testid={`map-${venue.title.toLowerCase()}-embed`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer with Time and Directions */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 md:px-8 py-6 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-primary/20">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Start Time</p>
                          <p className="text-base font-semibold text-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                            {venue.startTime}
                          </p>
                        </div>
                      </div>
                      <a
                        href={venue.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                        data-testid={`button-${venue.title.toLowerCase()}-location`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Get Directions</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VenueSection;