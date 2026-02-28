import { CheckCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const diseases = ["All", "Cancer", "Cardiac", "Kidney", "Liver", "Neurological"];

const casesData = [
  { id: "JD-2847", disease: "Cancer", hospital: "AIIMS Delhi", required: 850000, collected: 612000, urgency: "Critical", verified: true },
  { id: "JD-2846", disease: "Cardiac", hospital: "Fortis Mumbai", required: 1200000, collected: 980000, urgency: "High", verified: true },
  { id: "JD-2845", disease: "Kidney", hospital: "CMC Vellore", required: 450000, collected: 125000, urgency: "Medium", verified: true },
  { id: "JD-2844", disease: "Neurological", hospital: "NIMHANS Bangalore", required: 2100000, collected: 1750000, urgency: "Critical", verified: true },
  { id: "JD-2843", disease: "Liver", hospital: "Medanta Gurugram", required: 680000, collected: 340000, urgency: "High", verified: true },
  { id: "JD-2842", disease: "Cancer", hospital: "Tata Memorial Mumbai", required: 950000, collected: 850000, urgency: "Medium", verified: true },
  { id: "JD-2841", disease: "Cardiac", hospital: "Narayana Health Bangalore", required: 750000, collected: 200000, urgency: "High", verified: true },
  { id: "JD-2840", disease: "Kidney", hospital: "PGI Chandigarh", required: 380000, collected: 380000, urgency: "Medium", verified: true },
];

const formatCurrency = (n: number) => `₹${(n / 100000).toFixed(1)}L`;

const urgencyColor = (u: string) => {
  if (u === "Critical") return "text-destructive bg-destructive/10";
  if (u === "High") return "text-accent bg-accent/10";
  return "text-muted-foreground bg-muted";
};

const VerifiedCases = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? casesData : casesData.filter(c => c.disease === filter);

  return (
    <div className="py-10">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Verified Cases</h1>
          <p className="text-muted-foreground">Only AI-approved, hospital-verified cases are listed. All funding is tracked transparently.</p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {diseases.map(d => (
            <Button
              key={d}
              size="sm"
              variant={filter === d ? "default" : "outline"}
              className={filter === d ? "bg-primary text-primary-foreground" : ""}
              onClick={() => setFilter(d)}
            >
              {d}
            </Button>
          ))}
        </div>

        {/* Case Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => {
            const percent = Math.round((c.collected / c.required) * 100);
            const isComplete = percent >= 100;
            return (
              <div
                key={c.id}
                className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">{c.id}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-0.5">{c.disease}</h3>
                    <p className="text-sm text-muted-foreground">{c.hospital}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {c.verified && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    )}
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${urgencyColor(c.urgency)}`}>
                      {c.urgency}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">
                      {formatCurrency(c.collected)} raised
                    </span>
                    <span className="font-semibold text-foreground">{formatCurrency(c.required)}</span>
                  </div>
                  <Progress value={Math.min(percent, 100)} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {isComplete ? (
                      <span className="text-success font-medium">Fully Funded ✓</span>
                    ) : (
                      `${percent}% funded`
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerifiedCases;
