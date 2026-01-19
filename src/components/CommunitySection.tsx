import { ExternalLink, MessageCircle, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CommunitySection = () => {
  const socials = [
    {
      name: "Twitter / X",
      handle: "@pihorsebsc_cto",
      url: "https://x.com/pihorsebsc_cto",
      icon: "𝕏",
      color: "bg-foreground text-background hover:bg-foreground/80",
      members: "5,200+ Followers",
    },
    {
      name: "Telegram",
      handle: "pihorsebsc_cto",
      url: "https://t.me/pihorsebsc_cto",
      icon: "✈️",
      color: "bg-accent text-accent-foreground hover:bg-accent/80",
      members: "3,400+ Members",
    },
  ];

  return (
    <section id="community" className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-8xl opacity-5">🏗️</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-5">🐴</div>

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/30 text-foreground px-4 py-2 rounded-full mb-6 border border-accent/50">
              <Users className="w-4 h-4" />
              <span className="font-semibold text-sm">Join the Crew</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">Community</span> Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of builders in the HorsePi construction crew!
            </p>
          </div>
        </ScrollReveal>

        {/* Social Cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {socials.map((social, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-construction p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${social.color} flex items-center justify-center text-2xl font-bold transition-colors shadow-lg`}>
                      {social.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {social.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{social.handle}</p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-success">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    {social.members}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Community CTA */}
          <ScrollReveal delay={0.3}>
            <div className="wood-panel text-center">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Building?
              </h3>
              <p className="text-wood-foreground/80 mb-6 max-w-lg mx-auto">
                Join our Telegram community to connect with fellow builders, get the latest updates, and be part of something amazing!
              </p>

              <a
                href="https://t.me/pihorsebsc_cto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Join Telegram Community
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
