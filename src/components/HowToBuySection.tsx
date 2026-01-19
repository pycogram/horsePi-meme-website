import { useState } from "react";
import { Wallet, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Get a Web3 Wallet",
    description: "Download MetaMask or Trust Wallet from your app store or browser extensions.",
    icon: "👛",
    link: {
      text: "Get MetaMask",
      url: "https://metamask.io/download/",
    },
  },
  {
    number: "02",
    title: "Buy BNB",
    description: "Purchase BNB from Binance or your preferred exchange and send it to your wallet.",
    icon: "💰",
    link: {
      text: "Visit Binance",
      url: "https://www.binance.com/",
    },
  },
  {
    number: "03",
    title: "Connect to PancakeSwap",
    description: "Visit PancakeSwap and connect your wallet to the BNB Smart Chain.",
    icon: "🔗",
    link: {
      text: "Open PancakeSwap",
      url: "https://pancakeswap.finance/",
    },
  },
  {
    number: "04",
    title: "Paste Contract Address",
    description: "Copy our contract address and paste it in the token search field.",
    icon: "📋",
    contract: "0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444",
  },
  {
    number: "05",
    title: "Swap BNB for HorsePi",
    description: "Enter the amount of BNB you want to swap and confirm the transaction.",
    icon: "🔄",
  },
  {
    number: "06",
    title: "Add to Wallet",
    description: "Add the token to your wallet to see your HorsePi balance. Welcome to the crew!",
    icon: "🎉",
  },
];

const HowToBuySection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyContract = (index: number, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="how-to-buy" className="py-16 lg:py-24 bg-card relative overflow-hidden">
      {/* Construction zone decorations */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(90deg,hsl(var(--primary))_0px,hsl(var(--primary))_20px,hsl(var(--foreground))_20px,hsl(var(--foreground))_40px)]" />
      
      <div className="container mx-auto px-4 pt-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-foreground px-4 py-2 rounded-full mb-6 border border-primary/30">
              <span className="text-lg">🛒</span>
              <span className="font-semibold text-sm">How to Buy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Grab Your <span className="text-gradient-gold">Hardhat</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to join the construction crew
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="max-w-5xl place-items-center mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group place-self-center w-[95%] sm:w-[90%] md:w-auto relative bg-background rounded-3xl p-6 border-2 border-border hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2">{step.icon}</div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Link or Contract */}
                  {step.link && (
                    <a
                      href={step.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {step.link.text}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {step.contract && (
                    <button
                      onClick={() => copyContract(index, step.contract!)}
                      className="w-full flex items-center gap-2 p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-left"
                    >
                      <code className="flex-1 text-xs font-mono text-foreground truncate">
                        {step.contract}
                      </code>
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                  )}

                  {/* Arrow connector (except last) */}
                  {index < steps.length - 1 && index !== 2 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-3 text-lg"
            >
              <Wallet className="w-5 h-5" />
              Buy HorsePi Now
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowToBuySection;
