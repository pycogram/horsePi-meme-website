import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const TokenomicsSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenInfo = [
    { label: "Token Name", value: "HorsePi" },
    { label: "Symbol", value: "派马 (HorsePi)" },
    { label: "Blockchain", value: "BNB Smart Chain (BSC)" },
    { label: "Token Type", value: "BEP-20" },
    { label: "Project Type", value: "Community Takeover (CTO)" },
  ];

  return (
    <section id="tokenomics" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/30 text-foreground px-4 py-2 rounded-full mb-6 border border-accent/50">
              <span className="text-lg">📊</span>
              <span className="font-semibold text-sm">Tokenomics</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="text-gradient-gold">Blueprint</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with precision, designed for community growth
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Blueprint Card */}
            <div className="blueprint-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 text-accent text-2xl">📐</div>
              <div className="absolute top-4 right-4 text-accent text-2xl">📏</div>

              <h3 className="font-display text-2xl font-bold text-center mb-8 text-foreground">
                Construction Specifications
              </h3>

              {/* Token Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {tokenInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border"
                  >
                    <p className="text-xs text-muted-foreground font-medium mb-1">{item.label}</p>
                    <p className="font-display font-bold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Contract Address */}
              <div className="bg-wood/10 rounded-2xl p-6 border-2 border-wood/30">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display font-bold text-foreground flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    Contract Address
                  </p>
                  <a
                    href={`https://bscscan.com/token/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary flex items-center gap-1 font-medium"
                  >
                    View on BSCScan
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-2 bg-background rounded-xl p-3 border border-border">
                  <code className="flex-1 text-xs sm:text-sm font-mono text-foreground truncate">
                    {contractAddress}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors flex-shrink-0 group"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-success" />
                    ) : (
                      <Copy className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>

                {copied && (
                  <p className="text-center text-sm text-success mt-2 font-medium animate-fade-in">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Distribution visual */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-success/20 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <p className="font-display font-bold text-foreground">LP Locked</p>
                  <p className="text-sm text-muted-foreground">Secure Foundation</p>
                </div>

                <div className="text-center p-4 bg-background/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <p className="font-display font-bold text-foreground">Community</p>
                  <p className="text-sm text-muted-foreground">Owned by Holders</p>
                </div>

                <div className="text-center p-4 bg-background/50 rounded-2xl border border-border">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-bnb/20 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="font-display font-bold text-foreground">0% Tax</p>
                  <p className="text-sm text-muted-foreground">No Hidden Fees</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TokenomicsSection;
