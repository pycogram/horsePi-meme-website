import { useState, useEffect } from "react";
import { TrendingUp, ArrowUpRight, Clock, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Transaction {
  id: string;
  type: "buy" | "sell";
  amount: string;
  wallet: string;
  time: string;
}

const LiveActivityFeed = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", type: "buy", amount: "0.5 BNB", wallet: "0x7a3...f2d9", time: "2s ago" },
    { id: "2", type: "buy", amount: "1.2 BNB", wallet: "0x3b2...a4c1", time: "15s ago" },
    { id: "3", type: "buy", amount: "0.8 BNB", wallet: "0x9c4...e7f3", time: "32s ago" },
    { id: "4", type: "buy", amount: "2.0 BNB", wallet: "0x1d5...b8a2", time: "1m ago" },
    { id: "5", type: "buy", amount: "0.3 BNB", wallet: "0x6e8...c9d4", time: "2m ago" },
  ]);

  const [marketCap, setMarketCap] = useState(125000);
  const [liquidity, setLiquidity] = useState(45000);

  // Simulate new transactions
  useEffect(() => {
    const interval = setInterval(() => {
      const amounts = ["0.2 BNB", "0.5 BNB", "0.8 BNB", "1.0 BNB", "1.5 BNB", "2.0 BNB"];
      const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
      const randomWallet = `0x${Math.random().toString(16).slice(2, 5)}...${Math.random().toString(16).slice(2, 6)}`;

      const newTransaction: Transaction = {
        id: Date.now().toString(),
        type: "buy",
        amount: randomAmount,
        wallet: randomWallet,
        time: "Just now",
      };

      setTransactions((prev) => {
        const updated = [newTransaction, ...prev.slice(0, 4)];
        return updated.map((tx, i) => ({
          ...tx,
          time: i === 0 ? "Just now" : `${i * 15 + Math.floor(Math.random() * 10)}s ago`,
        }));
      });

      setMarketCap((prev) => prev + Math.floor(Math.random() * 500));
      setLiquidity((prev) => prev + Math.floor(Math.random() * 100));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-construction-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card-construction p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground font-medium">Market Cap</span>
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">
                ${marketCap.toLocaleString()}
              </p>
            </div>

            <div className="card-construction p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs">🔒</div>
                <span className="text-sm text-muted-foreground font-medium">Liquidity</span>
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">
                ${liquidity.toLocaleString()}
              </p>
            </div>

            <div className="card-construction p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">Holders</span>
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">1,247+</p>
            </div>

            <div className="card-construction p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🔨</span>
                <span className="text-sm text-muted-foreground font-medium">Status</span>
              </div>
              <p className="font-display text-lg sm:text-xl font-bold text-success flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Building!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Transaction Feed */}
        <ScrollReveal delay={0.2}>
          <div className="card-construction p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
                Live Transactions
              </h3>
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Real-time
              </span>
            </div>

            <div className="space-y-2 overflow-hidden">
              {transactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className={`flex items-center justify-between p-3 rounded-xl bg-success/10 border border-success/20 transition-all ${
                    index === 0 ? "animate-slide-up" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {tx.wallet} <span className="text-success">bought</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-success">{tx.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LiveActivityFeed;
