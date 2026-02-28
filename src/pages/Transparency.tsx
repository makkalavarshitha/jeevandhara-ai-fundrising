import { BarChart3, TrendingUp, PieChart, CheckCircle, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const fundingByDisease = [
  { disease: "Cancer", amount: 5200000, percent: 28 },
  { disease: "Cardiac", amount: 4100000, percent: 22 },
  { disease: "Kidney", amount: 3600000, percent: 20 },
  { disease: "Neurological", amount: 3100000, percent: 17 },
  { disease: "Liver", amount: 2300000, percent: 13 },
];

const metrics = [
  { label: "Total Cases Funded", value: "2,143", sub: "89% success rate" },
  { label: "Average Fund Time", value: "14 days", sub: "From verification to full funding" },
  { label: "Total Disbursed", value: "₹18.3 Cr", sub: "Across 156 hospitals" },
  { label: "AI Rejection Rate", value: "12.4%", sub: "Fraudulent or duplicate cases blocked" },
];

const Transparency = () => {
  return (
    <div className="py-10">
      <div className="container max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-accent" /> Transparency & Analytics
          </h1>
          <p className="text-muted-foreground">Real-time funding metrics, distribution data, and platform trust indicators.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-5">
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className="text-sm font-medium text-foreground mt-1">{m.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Funding Distribution */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-accent" /> Funding Distribution by Disease
          </h2>
          <div className="space-y-4">
            {fundingByDisease.map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">{d.disease}</span>
                  <span className="text-muted-foreground">₹{(d.amount / 100000).toFixed(0)}L ({d.percent}%)</span>
                </div>
                <Progress value={d.percent} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" /> Trust Indicators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "All hospitals verified through government registration databases",
              "AI cost validation against national medical benchmarks",
              "Duplicate case detection across partner network",
              "Complete audit trail for every transaction",
              "Monthly third-party financial audits",
              "Real-time fund tracking from collection to disbursement",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
