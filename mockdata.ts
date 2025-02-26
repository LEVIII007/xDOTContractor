import {
  Brain,
  Building2,
  Calculator,
  Clock,
  Cone,
  Construction,
  FileText,
  HardHat,
  LineChart,
  Ruler,
  Truck,
  Users,
} from "lucide-react";
export const herostats = [
  {
    emoji: "📊",

    label: "Bid Success Rate",
    description: "Increased win ratio",
    color: "bg-[#F4F7F9]",
  },
  {
    emoji: "⏱️",

    label: "Time Savings",
    description: "In project delivery",
    color: "bg-[#0D363C]",
  },
  {
    emoji: "💰",

    label: "Cost Reduction",
    description: "In operational expenses",
    color: "bg-[#D3F3C3]",
  },
  {
    emoji: "🛠️",

    label: "Active Projects",
    description: "Managed with our platform",
    color: "bg-[#F4F7F9]",
  },
];

export const features = [
  {
    icon: Calculator,
    title: "Estimate Public Bids",
    description:
      "AI-powered estimation tools analyze historical data to deliver precision bidding that increases win rates on public contracts by 37%.",
    color: "text-cyan-500",
  },
  {
    icon: Clock,
    title: "Schedule & Track Projects",
    description:
      "Intelligent scheduling algorithms optimize resource allocation and provide real-time tracking dashboards with predictive timeline adjustments.",
    color: "text-blue-500",
  },
  {
    icon: HardHat,
    title: "Safety Management",
    description:
      "Proactive risk identification system monitors site conditions and worker compliance, reducing safety incidents by up to 48%.",
    color: "text-amber-500",
  },
  {
    icon: Users,
    title: "Labor Management",
    description:
      "Workforce optimization tools ensure the right skills are assigned to appropriate tasks while monitoring productivity metrics in real-time.",
    color: "text-indigo-500",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Comprehensive tracking and maintenance scheduling system maximizes equipment uptime and minimizes operational costs across your entire fleet.",
    color: "text-emerald-500",
  },
  {
    icon: FileText,
    title: "Contract Management",
    description:
      "Automated document handling with intelligent contract analysis highlights critical terms and compliance requirements to prevent costly oversights.",
    color: "text-violet-500",
  },
];

export const icons = [
  { Icon: LineChart, label: "Project Tracking" },
  { Icon: Truck, label: "Fleet Management" },
  { Icon: HardHat, label: "Safety Solutions" },
  { Icon: Ruler, label: "Precision Planning" },
  { Icon: Brain, label: "AI Analysis" },
  { Icon: Cone, label: "Site Management" },
  { Icon: Building2, label: "Construction Management" },
  { Icon: Calculator, label: "Cost Estimation" },
  { Icon: Construction, label: "Resource Optimization" },
];
