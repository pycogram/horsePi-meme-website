import { useState } from "react";
import { Copy, Check, ExternalLink, Heart } from "lucide-react";
import horsePiLogo from "@/assets/horsepi-logo.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = {
    socials: [
      { name: "Twitter / X", url: "https://x.com/pihorsebsc_cto" },
      { name: "Telegram", url: "https://t.me/pihorsebsc_cto" },
    ],
    resources: [
      { name: "PancakeSwap", url: "https://pancakeswap.finance/swap?outputCurrency=0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444" },
      { name: "BSCScan", url: `https://bscscan.com/token/${contractAddress}` },
      { name: "DexTools", url: `https://www.dextools.io/app/en/bnb/pair-explorer/${contractAddress}` },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Construction stripe */}
      <div className="h-2 bg-[repeating-linear-gradient(90deg,hsl(var(--primary))_0px,hsl(var(--primary))_20px,hsl(var(--foreground))_20px,hsl(var(--foreground))_40px)]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={horsePiLogo} alt="HorsePi" className="w-12 h-12 rounded-full border-2 border-primary" />
              <div>
                <h4 className="font-display text-xl font-bold">HorsePi</h4>
                <p className="text-sm opacity-80">派马 • BNB Chain</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Building wealth, one block at a time. Join the construction crew and be part of the future!
            </p>
          </div>

          {/* Socials */}
          <div>
            <h5 className="font-display font-bold text-lg mb-4">Community</h5>
            <ul className="space-y-2">
              {links.socials.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-display font-bold text-lg mb-4">Resources</h5>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract */}
          <div>
            <h5 className="font-display font-bold text-lg mb-4">Contract Address</h5>
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-2 p-3 rounded-xl bg-background/10 hover:bg-background/20 transition-colors text-left"
            >
              <code className="flex-1 text-xs font-mono truncate opacity-80">
                {contractAddress}
              </code>
              {copied ? (
                <Check className="w-4 h-4 text-success flex-shrink-0" />
              ) : (
                <Copy className="w-4 h-4 flex-shrink-0 opacity-80" />
              )}
            </button>
            {copied && (
              <p className="text-xs text-success mt-1 animate-fade-in">Copied!</p>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <p className="text-xs opacity-60 text-center max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Cryptocurrency investments carry significant risk. The value of HorsePi can be volatile and may result in loss of funds. 
            This is not financial advice. Always Do Your Own Research (DYOR) before investing. Only invest what you can afford to lose.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <p className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-destructive" /> by the HorsePi Community
          </p>
          <div className="flex items-center gap-4">
            <span>© 2024 HorsePi</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-lg">⛓️</span>
              BNB Chain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
