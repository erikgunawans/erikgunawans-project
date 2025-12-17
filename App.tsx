import React, { useState, useMemo, ErrorInfo, ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import ReactMarkdown from 'react-markdown';
import { 
  LayoutDashboard, 
  Plane, 
  Briefcase, 
  Landmark, 
  Users, 
  Search, 
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Wrench,
  Zap,
  Activity,
  Layers,
  Sparkles,
  AlertTriangle,
  RefreshCcw,
  Sun,
  Moon,
  Cloud,
  Database,
  Shield,
  FileText,
  Mail,
  Video,
  Globe,
  Code,
  MapPin,
  Calendar,
  CreditCard,
  Image,
  Mic,
  BarChart3,
  Loader2,
  Bot,
  Copy,
  ExternalLink,
  ArrowLeft,
  Settings,
  MessageSquare,
  HardDrive,
  FileSpreadsheet,
  Server,
  Hammer,
  Send,
  Share2,
  Plus,
  Minus,
  Maximize,
  Filter,
  Grid,
  Check,
  X,
  Cpu
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { GoogleGenAI } from "@google/genai";
import * as d3 from "d3";
import { agents, Department, Agent, Horizon } from './data';

// --- Hero Overlay Component ---

const HeroOverlay = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="absolute top-[-2vw] left-[-2vw] right-[-2vw] bottom-[-2vw] z-50 flex flex-col items-center justify-center bg-slate-900 text-white animate-fadeIn overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
          alt="Garuda Airline Hero" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-float"
          style={{ animationDuration: '30s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-4 flex flex-col items-center">
        <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
           <img src="https://services.google.com/fh/files/misc/garuda_indonesia_inverse.svg" alt="Garuda Indonesia" className="h-16 md:h-24 opacity-100 drop-shadow-lg" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl">
          AI Transformation Hub
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Accelerating operational excellence through intelligent agents, <br className="hidden md:block"/> strategic innovation, and data-driven decision making.
        </p>
        
        <button 
          onClick={onContinue}
          className="group relative px-10 py-5 bg-gradient-to-r from-garuda-blue to-blue-600 hover:to-blue-500 text-white rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-[0_0_40px_rgba(0,91,142,0.4)] hover:shadow-[0_0_60px_rgba(0,91,142,0.6)] hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Enter Control Tower <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div className="mt-16 flex items-center space-x-8 opacity-70 text-sm font-medium tracking-widest uppercase text-blue-300">
          <span className="flex items-center"><Activity size={16} className="mr-2" /> Live Analytics</span>
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
          <span className="flex items-center"><Bot size={16} className="mr-2" /> {agents.length} Active Agents</span>
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
          <span className="flex items-center"><Shield size={16} className="mr-2" /> Enterprise Secure</span>
        </div>
        
        <div className="mt-4 opacity-40 text-xs font-mono text-blue-200 tracking-wider">
          created by erikgunawans@
        </div>
      </div>
    </div>
  );
};

// --- Error Boundary Component ---

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in component:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-[3vw] text-center animate-fadeIn glass-panel rounded-3xl border border-red-100 dark:border-red-900/50 shadow-xl">
          <div className="bg-red-50 dark:bg-red-900/20 p-[1.5vw] rounded-full mb-[2vh] ring-4 ring-red-50/50 dark:ring-red-900/10">
            <AlertTriangle className="text-red-500 dark:text-red-400 w-[4vw] h-[4vw]" />
          </div>
          <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-bold text-slate-800 dark:text-slate-100 mb-2">System Error Encountered</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 leading-relaxed text-[clamp(0.9rem,1vw,1.1rem)]">
            The dashboard encountered an unexpected state while processing agent data. Our team has been notified.
          </p>
          
          {this.state.error && (
             <div className="w-full max-w-lg mb-8">
               <div className="bg-slate-900 rounded-t-lg px-4 py-2 flex items-center space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="text-xs text-slate-400 font-mono ml-2">Console Output</span>
               </div>
               <pre className="bg-slate-800 p-4 rounded-b-lg text-xs text-left text-red-300 overflow-auto border-t border-slate-700 font-mono">
                 {this.state.error.message}
                 {'\n'}
                 <span className="text-slate-500 mt-2 block">at App.tsx</span>
               </pre>
             </div>
          )}

          <button 
            onClick={this.handleRetry}
            className="group px-6 py-3 bg-garuda-blue text-white font-semibold rounded-xl hover:bg-garuda-lightBlue transition-all shadow-lg shadow-garuda-blue/20 flex items-center text-[clamp(0.9rem,1vw,1.1rem)]"
          >
            <RefreshCcw size={18} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// --- Helper Functions ---

const getHorizonColors = (horizon: string) => {
  if (horizon.includes("Day 1")) {
    return {
      wrapper: "group-hover:ring-garuda-blue/30 dark:group-hover:ring-blue-400/20 border-l-4 border-l-garuda-blue",
      badge: "bg-blue-50 text-garuda-blue border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
      accent: "text-garuda-blue dark:text-blue-300",
      bgSoft: "bg-blue-50 dark:bg-blue-900/20",
      borderSoft: "border-blue-100 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      gradient: "from-garuda-blue to-garuda-lightBlue",
      shadow: "shadow-blue-900/10",
      titleText: "text-garuda-blue dark:text-blue-100"
    };
  }
  if (horizon.includes("Quick Win")) {
    return {
      wrapper: "group-hover:ring-garuda-cyan/30 dark:group-hover:ring-cyan-400/20 border-l-4 border-l-garuda-cyan",
      badge: "bg-cyan-50 text-garuda-lightBlue border border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800",
      accent: "text-garuda-lightBlue dark:text-cyan-300",
      bgSoft: "bg-cyan-50 dark:bg-cyan-900/20",
      borderSoft: "border-cyan-100 dark:border-cyan-800",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
      gradient: "from-garuda-cyan to-teal-500",
      shadow: "shadow-cyan-900/10",
      titleText: "text-garuda-lightBlue dark:text-cyan-100"
    };
  }
  if (horizon.includes("Strategic")) {
    return {
      wrapper: "group-hover:ring-garuda-orange/30 dark:group-hover:ring-orange-400/20 border-l-4 border-l-garuda-orange",
      badge: "bg-orange-50 text-garuda-orange border border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
      accent: "text-garuda-orange dark:text-orange-400",
      bgSoft: "bg-orange-50 dark:bg-orange-900/20",
      borderSoft: "border-orange-100 dark:border-orange-800",
      iconBg: "bg-orange-100 dark:bg-orange-900/40",
      gradient: "from-garuda-orange to-red-500",
      shadow: "shadow-orange-900/10",
      titleText: "text-garuda-orange dark:text-orange-100"
    };
  }
  return {
    wrapper: "group-hover:ring-slate-300 dark:group-hover:ring-slate-600 border-l-4 border-l-slate-400",
    badge: "bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    accent: "text-slate-500 dark:text-slate-400",
    bgSoft: "bg-slate-50 dark:bg-slate-800/50",
    borderSoft: "border-slate-200 dark:border-slate-700",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    gradient: "from-slate-400 to-slate-500",
    shadow: "shadow-slate-500/10",
    titleText: "text-slate-700 dark:text-slate-200"
  };
};

const getToolIcon = (toolName: string) => {
  const name = toolName.toLowerCase();
  
  if (name.includes('slack') || name.includes('workplace') || name.includes('teams') || name.includes('zoom')) return MessageSquare;
  if (name.includes('mail') || name.includes('outlook') || name.includes('gmail')) return Mail;
  if (name.includes('meet') || name.includes('video')) return Video;
  if (name.includes('calendar') || name.includes('schedule')) return Calendar;
  if (name.includes('drive') || name.includes('docs') || name.includes('sharepoint') || name.includes('confluence')) return FileText;
  if (name.includes('sheet') || name.includes('excel')) return FileSpreadsheet;

  if (name.includes('jira') || name.includes('agile')) return LayoutDashboard;
  if (name.includes('github') || name.includes('code') || name.includes('sonar') || name.includes('repo') || name.includes('python')) return Code;
  if (name.includes('api') || name.includes('swagger')) return Server;
  if (name.includes('cloud') || name.includes('aws') || name.includes('gcp') || name.includes('azure')) return Cloud;
  if (name.includes('security') || name.includes('cyber') || name.includes('dlp') || name.includes('siem') || name.includes('auth')) return Shield;

  if (name.includes('sap') || name.includes('erp') || name.includes('salesforce') || name.includes('crm') || name.includes('oracle') || name.includes('vertex')) return Database;
  if (name.includes('data') || name.includes('warehouse') || name.includes('bigquery') || name.includes('sql') || name.includes('db')) return Database;
  if (name.includes('finance') || name.includes('bank') || name.includes('billing') || name.includes('cost')) return CreditCard;
  if (name.includes('payment') || name.includes('transaction')) return CreditCard;

  if (name.includes('flight') || name.includes('aircraft') || name.includes('fleet') || name.includes('radar')) return Plane;
  if (name.includes('map') || name.includes('gps') || name.includes('location') || name.includes('navigation')) return MapPin;
  if (name.includes('sensor') || name.includes('iot') || name.includes('scada')) return Cpu;
  if (name.includes('maintenance') || name.includes('mro') || name.includes('repair')) return Wrench;
  
  if (name.includes('ai') || name.includes('model') || name.includes('gpt') || name.includes('gemini') || name.includes('vertex')) return Sparkles;
  if (name.includes('analytics') || name.includes('bi') || name.includes('tableau') || name.includes('looker')) return BarChart3;
  if (name.includes('search') || name.includes('google') || name.includes('web') || name.includes('internet')) return Search;
  if (name.includes('news') || name.includes('social') || name.includes('linkedin')) return Globe;
  if (name.includes('image') || name.includes('video') || name.includes('media')) return Image;
  if (name.includes('voice') || name.includes('audio') || name.includes('speech')) return Mic;
  
  return HardDrive;
};

// --- Helper for Simulator Suggestions ---

const getSuggestedQueries = (agent: Agent): string[] => {
  // Specific overrides based on Agent ID or Name
  if (agent.name.includes("Competitor Fare")) return ["Analyze Lion Air's pricing on CGK-DPS.", "Identify recent fare drops by competitors.", "Forecast demand for next month."];
  if (agent.name.includes("Visa")) return ["What are the visa requirements for Japan?", "Check entry rules for Saudi Arabia.", "Do Indonesian citizens need a visa for Turkey?"];
  if (agent.name.includes("MRO Technical")) return ["Find the torque spec for the B737 main landing gear.", "Show me the removal procedure for the IDG.", "List consumables needed for a C-Check."];
  if (agent.name.includes("Fuel Coach")) return ["Analyze fuel burn for my last 5 flights.", "How can I improve efficiency on the CGK-SIN route?", "Compare my performance to the fleet average."];
  if (agent.name.includes("Hajj")) return ["Update me on new GACA regulations.", "Check port congestion at Jeddah.", "Optimize pilgrim bus schedules."];
  
  // Fallback based on Department
  switch(agent.department) {
    case 'Commercial': return ["Draft a proposal for a corporate client.", "Analyze market trends for Q4.", "Check competitor activity on key routes."];
    case 'Maintenance': return ["Check stock status for part number...", "Summarize the maintenance history of PK-GIA.", "Are there any open ADs for this aircraft?"];
    case 'Operations': return ["What is the impact of the weather in Denpasar?", "Suggest a recovery plan for the delay.", "Optimize crew pairing for the next shift."];
    case 'Finance': return ["Forecast cash flow for next week.", "Analyze variances in the fuel budget.", "Draft a justification for this expense."];
    case 'Corporate & HR': return ["Draft an internal memo regarding...", "Summarize the new HR policy.", "Help me find a candidate for the analyst role."];
    case 'Transformation': return ["What is the status of the cloud migration?", "Identify risks in the current sprint.", "Generate a progress report."];
    default: return ["Summarize the current status.", "Identify potential risks.", "Draft a report based on recent data."];
  }
};

// --- Components ---

const GeminiIcon = ({ size, className }: { size?: number, className?: string }) => (
  <img 
    src="https://services.google.com/fh/files/misc/gemini_enterprise_inverse.svg" 
    alt="Gemini Enterprise" 
    className={`${className} object-contain`} 
    style={{ width: size, height: size }}
  />
);

interface SidebarItemProps {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
  indent?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick, indent }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-[1vw] ${indent ? 'pl-[2.5vw] pr-[1.5vw]' : 'px-[1.5vw]'} py-[clamp(0.5rem,1.2vh,1.5rem)] mb-[0.5vh] rounded-xl transition-all duration-300 group relative overflow-hidden ${
      active 
        ? 'bg-white/10 text-white shadow-lg shadow-black/10 ring-1 ring-white/20' 
        : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
    }`}
  >
    {active && (
      <div className="absolute left-0 top-0 h-full w-[4px] bg-garuda-cyan rounded-r-full shadow-[0_0_10px_rgba(58,180,198,0.5)]"></div>
    )}
    <Icon size={20} className={`transition-transform duration-300 z-10 ${active ? 'scale-110 text-garuda-cyan' : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'} w-[1.2rem] h-[1.2rem]`} />
    <span className="font-medium tracking-wide text-[clamp(0.8rem,0.9vw,1.1rem)] z-10">{label}</span>
  </button>
);

const MetricCard = ({ label, value, subtext, trend, color, icon: Icon }: { label: string, value: string, subtext: string, trend?: string, color: 'blue' | 'cyan' | 'orange', icon?: any }) => {
  const colorStyles = {
    blue: {
      bg: 'bg-white dark:bg-slate-900',
      border: 'border-blue-100 dark:border-blue-500/30',
      text: 'text-garuda-blue dark:text-blue-200',
      gradient: 'from-blue-50 to-transparent dark:from-blue-500/10',
      shadow: 'shadow-card hover:shadow-glow-blue'
    },
    cyan: {
      bg: 'bg-white dark:bg-slate-900',
      border: 'border-cyan-100 dark:border-cyan-500/30',
      text: 'text-cyan-800 dark:text-cyan-200',
      gradient: 'from-cyan-50 to-transparent dark:from-cyan-500/10',
      shadow: 'shadow-card hover:shadow-glow'
    },
    orange: {
      bg: 'bg-white dark:bg-slate-900',
      border: 'border-orange-100 dark:border-orange-500/30',
      text: 'text-orange-800 dark:text-orange-200',
      gradient: 'from-orange-50 to-transparent dark:from-orange-500/10',
      shadow: 'shadow-card hover:shadow-orange-500/20'
    },
  };

  const style = colorStyles[color];

  return (
    <div className={`relative p-[1.5vw] rounded-2xl border ${style.border} ${style.bg} ${style.shadow} transition-all duration-500 group overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-50`} />
      {Icon && (
        <Icon className={`absolute -right-4 -bottom-4 w-24 h-24 ${style.text} opacity-5 group-hover:scale-110 transition-transform duration-700 rotate-12`} />
      )}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-[1vh]">
          <p className="text-[clamp(0.65rem,0.75vw,0.85rem)] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{label}</p>
        </div>
        <h3 className={`text-[clamp(1.5rem,2.5vw,3rem)] font-bold mb-[0.8vh] ${style.text}`}>{value}</h3>
        <div className="flex items-center space-x-[0.5vw]">
          {trend && (
            <span className={`text-[clamp(0.65rem,0.75vw,0.85rem)] font-bold px-[0.6vw] py-[0.3vh] rounded-full flex items-center shadow-sm ${trend.includes('+') ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'}`}>
              {trend.includes('+') ? <TrendingUp className="mr-1 w-[0.8rem] h-[0.8rem]" /> : <TrendingUp className="mr-1 rotate-180 w-[0.8rem] h-[0.8rem]" />}
              {trend}
            </span>
          )}
          <p className="text-[clamp(0.7rem,0.85vw,1rem)] text-slate-500 dark:text-slate-400 font-medium">{subtext}</p>
        </div>
      </div>
    </div>
  );
};

const AgentCard: React.FC<{ agent: Agent, onClick: () => void }> = ({ agent, onClick }) => {
  const styles = getHorizonColors(agent.horizon);
  
  return (
    <div 
      onClick={onClick}
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 shadow-card hover:shadow-card-hover dark:shadow-black/20 dark:hover:bg-slate-800/80 hover:border-transparent transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1 hover:ring-2 ${styles.wrapper}`}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider ${styles.badge}`}>
          {agent.horizon.split(" ")[0]} {agent.horizon.split(" ")[1]}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${styles.bgSoft} opacity-0 group-hover:opacity-100 transition-all duration-300`}>
          <ArrowRight className={`w-4 h-4 ${styles.accent}`} />
        </div>
      </div>
      <h3 className={`text-lg font-bold mb-2 leading-tight ${styles.titleText}`}>
        {agent.name}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 leading-relaxed line-clamp-2">
        {agent.description}
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
         <div className={`p-3 rounded-xl ${styles.bgSoft} border ${styles.borderSoft}`}>
            <div className={`flex items-center space-x-1.5 mb-1 text-[0.65rem] font-bold uppercase tracking-wider ${styles.accent}`}>
               <Sparkles size={12} />
               <span>Impact</span>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight">{agent.benefit}</p>
         </div>
         <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center space-x-1.5 mb-1 text-slate-400 dark:text-slate-500 text-[0.65rem] font-bold uppercase tracking-wider">
               <Activity size={12} />
               <span>KPI</span>
            </div>
            <p className="font-bold text-slate-700 dark:text-slate-300 text-sm leading-tight line-clamp-2" title={agent.kpi}>{agent.kpi}</p>
         </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-medium bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-lg">
           <Users size={12} className="mr-1.5" />
           <span className="truncate max-w-[100px]" title={agent.users}>{agent.users}</span>
        </div>
        <div className="flex -space-x-1.5 pl-2">
          {agent.tools.slice(0, 3).map((tool, idx) => {
            const ToolIcon = getToolIcon(tool);
            return (
              <div key={idx} className={`w-7 h-7 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-900 flex items-center justify-center relative hover:z-10 hover:scale-110 transition-transform`} title={tool}>
                   <ToolIcon size={12} className="text-slate-400 dark:text-slate-500" />
              </div>
            );
          })}
          {agent.tools.length > 3 && (
             <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-slate-50 dark:border-slate-900 flex items-center justify-center text-[0.6rem] font-bold text-slate-500 dark:text-slate-400">
                +{agent.tools.length - 3}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Full Page Agent Detail View ---

const AgentDetailView = ({ agent, onBack }: { agent: Agent, onBack: () => void }) => {
  const styles = getHorizonColors(agent.horizon);
  const [activeTab, setActiveTab] = useState<'profile' | 'blueprint' | 'simulator'>('profile');
  const [simulationInput, setSimulationInput] = useState('');
  const [simulationOutput, setSimulationOutput] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [renderMarkdown, setRenderMarkdown] = useState(true);

  const handleRunSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationOutput(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are an advanced AI agent named "${agent.name}" working for Garuda Indonesia.
        Department: ${agent.department}.
        Role: ${agent.description}.
        Goal: Optimize for ${agent.kpi} and achieve ${agent.benefit}.
        Tools: ${agent.tools.join(', ')}.

        Scenario: ${simulationInput || 'Demonstrate a typical workflow or output.'}
        
        Generate a professional, realistic response.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const text = response.text;
      setSimulationOutput(text ? text.trim() : "No response generated.");
    } catch (error) {
      setSimulationOutput("Error: Simulation failed. Please check connection.");
    } finally {
      setIsSimulating(false);
    }
  };

  const generateSystemInstruction = () => `You are ${agent.name}, a specialized AI assistant for ${agent.department} at Garuda Indonesia.

ROLE & OBJECTIVE:
${agent.description}

KEY PERFORMANCE INDICATORS (KPIs):
You are optimized to improve: ${agent.kpi}
Your target benefit is: ${agent.benefit}

CAPABILITIES & TOOLS:
You have access to the following tools and data sources:
${agent.tools.map(t => `- ${t}`).join('\n')}

OPERATIONAL GUIDELINES:
1. Always prioritize safety and regulatory compliance (DGCA/IATA).
2. Provide concise, actionable insights for ${agent.users}.
3. If unsure, escalate to a human specialist.
4. Maintain a professional, efficient tone suitable for aviation operations.`;

  const generatePythonSnippet = () => `import vertexai
from vertexai.preview.generative_models import GenerativeModel, Tool

# Initialize Vertex AI
vertexai.init(project="garuda-ai-hub", location="asia-southeast1")

# Define Tools
tools = [
${agent.tools.map(t => `    Tool.from_google_search_retrieval(name="${t.toLowerCase().replace(/\s/g, '_')}"),`).join('\n')}
]

# Initialize Agent
model = GenerativeModel(
    "gemini-1.5-pro-001",
    tools=tools,
    system_instruction="""${agent.description}"""
)

# Start Session
chat = model.start_chat()
response = chat.send_message("Analyze current status")
print(response.text)`;

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 overflow-hidden animate-fadeIn">
      {/* Navigation & Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex-shrink-0 shadow-sm z-10">
        <button onClick={onBack} className="flex items-center text-sm font-semibold text-slate-500 hover:text-garuda-blue mb-4 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
        </button>
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
             <div className={`p-3 rounded-2xl ${styles.bgSoft} text-garuda-blue dark:text-blue-300`}>
                <Layers size={32} />
             </div>
             <div>
                <div className="flex items-center space-x-2 mb-1">
                   <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{agent.name}</h1>
                   <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5 rounded-full font-bold border border-green-200 dark:border-green-800 uppercase tracking-wide">Active</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 flex items-center text-sm">
                   <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs mr-2 border border-slate-200 dark:border-slate-700">{agent.id.toUpperCase()}</span>
                   {agent.department} • {agent.horizon}
                </p>
             </div>
          </div>
          
          <div className="flex space-x-2 relative">
             <div className="relative">
                <button 
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className={`flex items-center px-4 py-2 border rounded-lg text-sm font-semibold transition-all shadow-sm ${isSettingsOpen ? 'bg-slate-100 dark:bg-slate-700 border-garuda-blue' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                >
                    <Settings size={16} className="mr-2" /> Settings
                </button>
                {isSettingsOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 z-50 animate-fadeIn">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Simulator Preferences</h4>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Render Markdown</span>
                            <button 
                                onClick={() => setRenderMarkdown(!renderMarkdown)}
                                className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${renderMarkdown ? 'bg-garuda-blue' : 'bg-slate-300 dark:bg-slate-600'}`}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${renderMarkdown ? 'translate-x-4' : 'translate-x-0'}`} />
                            </button>
                        </div>
                    </div>
                )}
             </div>
             <button className="flex items-center px-4 py-2 bg-garuda-blue text-white rounded-lg text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
                <ExternalLink size={16} className="mr-2" /> Open in Vertex AI
             </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-6 mt-8 border-b border-slate-200 dark:border-slate-800">
           <button onClick={() => setActiveTab('profile')} className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'profile' ? 'border-garuda-blue text-garuda-blue dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>Agent Profile</button>
           <button onClick={() => setActiveTab('blueprint')} className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'blueprint' ? 'border-garuda-blue text-garuda-blue dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>Builder Blueprint</button>
           <button onClick={() => setActiveTab('simulator')} className={`pb-3 text-sm font-bold border-b-2 transition-all ${activeTab === 'simulator' ? 'border-garuda-blue text-garuda-blue dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>Live Simulator</button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto custom-scrollbar p-6">
         {activeTab === 'profile' && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fadeIn">
               {/* Column 1: Identity */}
               <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><Bot size={16} className="mr-2"/> Identity & Scope</h3>
                     <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">{agent.description}</p>
                     
                     <div className="space-y-4">
                        <div>
                           <label className="text-xs font-semibold text-slate-500 block mb-1">Target Audience</label>
                           <div className="flex items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                              <Users size={18} className="text-slate-400 mr-3" />
                              <span className="font-medium text-slate-700 dark:text-slate-200">{agent.users}</span>
                           </div>
                        </div>
                        <div>
                           <label className="text-xs font-semibold text-slate-500 block mb-1">Strategic Horizon</label>
                           <div className={`flex items-center p-3 rounded-xl border border-slate-100 dark:border-slate-700 ${styles.bgSoft}`}>
                              <Activity size={18} className={`${styles.accent} mr-3`} />
                              <span className={`font-bold ${styles.titleText}`}>{agent.horizon}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Column 2: Business Value */}
               <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><TrendingUp size={16} className="mr-2"/> Business Impact</h3>
                     
                     <div className="grid grid-cols-1 gap-4">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-garuda-blue to-blue-600 text-white shadow-lg shadow-blue-900/20">
                           <div className="flex items-center space-x-2 mb-1 opacity-80">
                              <span className="text-xs font-bold uppercase">Financial Benefit</span>
                           </div>
                           <p className="text-3xl font-extrabold tracking-tight">{agent.benefit}</p>
                           <div className="mt-4 pt-4 border-t border-white/20 flex items-center text-sm font-medium opacity-90">
                              <CheckCircle2 size={16} className="mr-2" /> Verified Projection
                           </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700">
                           <div className="flex items-center space-x-2 mb-2 text-slate-500">
                              <span className="text-xs font-bold uppercase">Primary KPI</span>
                           </div>
                           <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{agent.kpi}</p>
                           <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                              <div className="bg-green-500 h-full w-3/4 rounded-full"></div>
                           </div>
                           <p className="text-xs text-slate-400 mt-2 text-right">Target: +15% YoY</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Column 3: Tech Stack */}
               <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><Cpu size={16} className="mr-2"/> Architecture</h3>
                     
                     <div className="space-y-4">
                        <div>
                           <label className="text-xs font-semibold text-slate-500 block mb-2">Capabilities & Tools</label>
                           <div className="flex flex-wrap gap-2">
                              {agent.tools.map((tool, i) => {
                                 const ToolIcon = getToolIcon(tool);
                                 return (
                                    <span key={i} className="flex items-center px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300">
                                       <ToolIcon size={14} className="mr-2 text-slate-400" /> {tool}
                                    </span>
                                 )
                              })}
                           </div>
                        </div>

                        <div>
                           <label className="text-xs font-semibold text-slate-500 block mb-2">Underlying Model</label>
                           <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                              <div className="flex items-center">
                                 <Sparkles size={18} className="text-blue-500 mr-3" />
                                 <span className="font-bold text-slate-700 dark:text-slate-200">Gemini 1.5 Pro</span>
                              </div>
                              <span className="text-xs font-mono text-slate-400">v1.5-001</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {activeTab === 'blueprint' && (
            <div className="max-w-5xl mx-auto animate-fadeIn">
               <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                     <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Vertex AI Agent Builder Configuration</h3>
                        <p className="text-sm text-slate-500">Implementation recipe for deploying this agent.</p>
                     </div>
                     <div className="flex space-x-2">
                        <button className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors flex items-center">
                           <Copy size={14} className="mr-1.5" /> Copy Config
                        </button>
                        <button className="px-3 py-1.5 text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors flex items-center">
                           <Hammer size={14} className="mr-1.5" /> Open Builder
                        </button>
                     </div>
                  </div>
                  
                  <div className="p-8 space-y-8">
                     {/* Step 1: Agent Identity */}
                     <div className="flex gap-6">
                        <div className="w-8 flex-shrink-0 flex flex-col items-center">
                           <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                           <div className="w-0.5 flex-grow bg-slate-200 dark:bg-slate-700 my-2"></div>
                        </div>
                        <div className="flex-grow">
                           <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4">Agent Profile</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                 <label className="text-xs font-bold text-slate-500 uppercase">Display Name</label>
                                 <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm text-slate-700 dark:text-slate-300">{agent.name}</div>
                              </div>
                              <div className="space-y-1">
                                 <label className="text-xs font-bold text-slate-500 uppercase">Goal</label>
                                 <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300">{agent.description}</div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Step 2: Instructions */}
                     <div className="flex gap-6">
                        <div className="w-8 flex-shrink-0 flex flex-col items-center">
                           <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                           <div className="w-0.5 flex-grow bg-slate-200 dark:bg-slate-700 my-2"></div>
                        </div>
                        <div className="flex-grow">
                           <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4">System Instructions</h4>
                           <div className="relative">
                              <div className="absolute top-3 right-3">
                                 <Copy size={16} className="text-slate-400 hover:text-blue-500 cursor-pointer" />
                              </div>
                              <pre className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono text-xs md:text-sm overflow-x-auto whitespace-pre-wrap border border-slate-800 shadow-inner">
                                 {generateSystemInstruction()}
                              </pre>
                           </div>
                        </div>
                     </div>

                     {/* Step 3: Tools */}
                     <div className="flex gap-6">
                        <div className="w-8 flex-shrink-0 flex flex-col items-center">
                           <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                           <div className="w-0.5 flex-grow bg-slate-200 dark:bg-slate-700 my-2"></div>
                        </div>
                        <div className="flex-grow">
                           <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4">Grounding & Tools</h4>
                           <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                              <table className="w-full text-sm text-left">
                                 <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 uppercase font-semibold text-xs">
                                    <tr>
                                       <th className="px-6 py-3">Tool Name</th>
                                       <th className="px-6 py-3">Type</th>
                                       <th className="px-6 py-3">Integration</th>
                                       <th className="px-6 py-3">Status</th>
                                    </tr>
                                 </thead>
                                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {agent.tools.map((tool, idx) => (
                                       <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                          <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{tool}</td>
                                          <td className="px-6 py-4 text-slate-500">
                                             {tool.includes('Search') ? 'Data Store' : tool.includes('API') ? 'OpenAPI' : 'Function'}
                                          </td>
                                          <td className="px-6 py-4 text-slate-500 font-mono text-xs">
                                             {tool.toLowerCase().replace(/\s/g, '_')}_v1
                                          </td>
                                          <td className="px-6 py-4">
                                             <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded text-xs font-bold">Connected</span>
                                          </td>
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>

                     {/* Step 4: Integration Code */}
                     <div className="flex gap-6">
                        <div className="w-8 flex-shrink-0 flex flex-col items-center">
                           <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">4</div>
                        </div>
                        <div className="flex-grow">
                           <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4">Integration Code (Python)</h4>
                           <div className="relative">
                              <pre className="bg-slate-900 text-blue-300 p-6 rounded-xl font-mono text-xs md:text-sm overflow-x-auto whitespace-pre-wrap border border-slate-800 shadow-inner">
                                 {generatePythonSnippet()}
                              </pre>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {activeTab === 'simulator' && (
            <div className="h-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
               <div className="flex-grow p-6 overflow-y-auto custom-scrollbar">
                  {!simulationOutput && !isSimulating ? (
                     <div className="h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                           <Bot size={32} className="text-garuda-blue dark:text-blue-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Test {agent.name}</h3>
                        <p className="text-slate-500 max-w-md mb-8">Enter a scenario to see how this agent processes information and uses its tools.</p>
                        
                        <div className="grid gap-3 w-full max-w-md">
                          {getSuggestedQueries(agent).map((s, i) => (
                            <button 
                              key={i}
                              onClick={() => setSimulationInput(s)}
                              className="text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-garuda-blue hover:text-garuda-blue dark:hover:border-garuda-cyan dark:hover:text-garuda-cyan transition-all text-left flex items-center group shadow-sm hover:shadow-md"
                            >
                              <MessageSquare size={14} className="mr-3 opacity-50 group-hover:opacity-100 text-garuda-blue dark:text-garuda-cyan" />
                              {s}
                            </button>
                          ))}
                        </div>
                     </div>
                  ) : (
                     <div className="space-y-6">
                        {/* User Input Bubble */}
                        {simulationInput && (
                           <div className="flex justify-end">
                              <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-5 py-3 rounded-2xl rounded-tr-none max-w-[80%]">
                                 <p className="whitespace-pre-wrap">{simulationInput}</p>
                              </div>
                           </div>
                        )}
                        
                        {/* Agent Response */}
                        <div className="flex items-start space-x-3">
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${styles.badge} border-none`}>
                              <Bot size={16} />
                           </div>
                           <div className="flex-grow">
                              <span className="text-xs font-bold text-slate-400 ml-1 mb-1 block">{agent.name}</span>
                              {isSimulating ? (
                                 <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-5 py-4 rounded-2xl rounded-tl-none shadow-sm w-fit">
                                    <div className="flex items-center space-x-2 text-slate-500">
                                       <Loader2 size={16} className="animate-spin" />
                                       <span className="text-sm font-medium">Processing...</span>
                                    </div>
                                 </div>
                              ) : (
                                 <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-5 rounded-2xl rounded-tl-none shadow-sm max-w-none">
                                    {renderMarkdown ? (
                                        <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
                                            <ReactMarkdown>{simulationOutput}</ReactMarkdown>
                                        </div>
                                    ) : (
                                        <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300 font-medium">
                                            {simulationOutput}
                                        </pre>
                                    )}
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                  )}
               </div>
               
               <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl">
                  <div className="relative">
                     <textarea
                        value={simulationInput}
                        onChange={(e) => setSimulationInput(e.target.value)}
                        placeholder={`Message ${agent.name}...`}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-garuda-blue/50 outline-none resize-none shadow-sm"
                        rows={1}
                        onKeyDown={(e) => {
                           if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleRunSimulation();
                           }
                        }}
                     />
                     <button 
                        onClick={handleRunSimulation}
                        disabled={isSimulating || !simulationInput.trim()}
                        className="absolute right-2 bottom-2 p-1.5 bg-garuda-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                     >
                        <Send size={16} />
                     </button>
                  </div>
                  <div className="flex justify-center mt-2">
                     <p className="text-[10px] text-slate-400">Simulation using Gemini 2.5 Flash.</p>
                  </div>
               </div>
            </div>
         )}
      </div>
    </div>
  );
};

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  type: 'hub' | 'category' | 'leaf';
  title?: string;
  description?: string;
  r?: number;
  gradient?: string;
  icon?: any;
  group?: string;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
}

const EnterpriseNodeModal = ({ node, onClose }: { node: GraphNode, onClose: () => void }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl max-w-md w-full m-4 shadow-2xl border border-slate-200 dark:border-slate-800" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl ${node.gradient ? `bg-gradient-to-br ${node.gradient} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
             {node.icon ? <node.icon size={24} /> : <Database size={24} />}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><X size={20}/></button>
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{node.title || 'Untitled Node'}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">{node.description || 'No description available.'}</p>
        
        <div className="flex justify-end space-x-2">
           <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Close</button>
           <button className="px-4 py-2 text-sm font-bold text-white bg-garuda-blue hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-900/20">Explore Data</button>
        </div>
      </div>
    </div>
  );
};

const GeminiEnterpriseView = ({ isDark }: { isDark: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesLayerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [transformState, setTransformState] = useState({ k: 1, x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [layoutScale, setLayoutScale] = useState(1);
  const [viewMode, setViewMode] = useState<'full' | 'strategic'>('full');
  const [layoutMode, setLayoutMode] = useState<'organic' | 'clustered'>('organic');

  const initialNodes: GraphNode[] = useMemo(() => {
    const mainNodes: GraphNode[] = [
      { id: 'hub', type: 'hub', title: "Gemini Enterprise Hub", description: "The central nervous system integrating all AI agents, models, and data sources.", r: 80 },
      { id: 'brains', type: 'category', title: "The Brains", description: "Advanced Gemini models", gradient: "from-blue-500 to-cyan-500", icon: Cpu, r: 60, group: 'A' },
      { id: 'partner', type: 'category', title: "Partner Ecosystem", description: "Agentic partner network", gradient: "from-purple-600 to-indigo-600", icon: Globe, r: 60, group: 'B' },
      { id: 'workbench', type: 'category', title: "The Workbench", description: "Agent orchestration platform", gradient: "from-rose-400 to-red-500", icon: Code, r: 60, group: 'C' },
      { id: 'governance', type: 'category', title: "Governance & Security", description: "Centralized guardrails", gradient: "from-indigo-500 to-violet-500", icon: Shield, r: 60, group: 'D' },
      { id: 'taskforce', type: 'category', title: "The Taskforce", description: "Third-party agent swarm", gradient: "from-orange-400 to-amber-500", icon: Users, r: 60, group: 'E' },
      { id: 'context', type: 'category', title: "The Context", description: "Grounded in enterprise data", gradient: "from-emerald-500 to-green-600", icon: Database, r: 60, group: 'F' },
    ];
    const satellites: GraphNode[] = [];
    ['brains', 'partner', 'workbench', 'governance', 'taskforce', 'context'].forEach((parentId, i) => { for(let j=0; j<4; j++) { satellites.push({ id: `${parentId}-sat-${j}`, type: 'leaf', r: 8, group: mainNodes[i+1].group, title: `${mainNodes[i+1].title} - Node ${j+1}`, description: `Operational node for ${mainNodes[i+1].title}`, }); } });
    return [...mainNodes, ...satellites];
  }, []);

  const initialLinks: GraphLink[] = useMemo(() => {
    const links: GraphLink[] = [ { source: 'hub', target: 'brains' }, { source: 'hub', target: 'partner' }, { source: 'hub', target: 'workbench' }, { source: 'hub', target: 'governance' }, { source: 'hub', target: 'taskforce' }, { source: 'hub', target: 'context' }, ];
    initialNodes.forEach(node => { if (node.type === 'leaf') { const parentId = node.id.split('-')[0]; links.push({ source: parentId, target: node.id }); } });
    return links;
  }, [initialNodes]);

  const nodesRef = useRef<GraphNode[]>([]);
  const linksRef = useRef<GraphLink[]>([]);
  const isDataInitialized = useRef(false);

  const filteredNodes = useMemo(() => { if (viewMode === 'full') return initialNodes; return initialNodes.filter(n => n.type === 'hub' || n.type === 'category'); }, [viewMode, initialNodes]);
  const filteredLinks = useMemo(() => { const nodeIds = new Set(filteredNodes.map(n => n.id)); return initialLinks.filter(l => { const sourceId = typeof l.source === 'object' ? (l.source as any).id : l.source; const targetId = typeof l.target === 'object' ? (l.target as any).id : l.target; return nodeIds.has(sourceId) && nodeIds.has(targetId); }); }, [filteredNodes, initialLinks]);

  if (!isDataInitialized.current) { nodesRef.current = JSON.parse(JSON.stringify(initialNodes)); linksRef.current = JSON.parse(JSON.stringify(initialLinks)); isDataInitialized.current = true; }

  useEffect(() => { const handleResize = () => { if (containerRef.current) { const { clientWidth, clientHeight } = containerRef.current; const minDim = Math.min(clientWidth, clientHeight); setLayoutScale(minDim / 900); } }; handleResize(); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);
  useEffect(() => { if (!simulationRef.current) return; const oldNodesMap = new Map(simulationRef.current.nodes().map(n => [n.id, n])); const newNodes = filteredNodes.map(n => { const old = oldNodesMap.get(n.id); if (old) return Object.assign(old, n); return { ...n }; }); simulationRef.current.nodes(newNodes); simulationRef.current.force("link")?.links(filteredLinks); simulationRef.current.alpha(1).restart(); nodesRef.current = newNodes; linksRef.current = filteredLinks; }, [filteredNodes, filteredLinks]);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current || !nodesLayerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    if (!simulationRef.current) {
      simulationRef.current = d3.forceSimulation<GraphNode, GraphLink>(nodesRef.current);
      const zoom = d3.zoom<HTMLDivElement, unknown>().scaleExtent([0.1, 4]).on("zoom", (event) => { const { k, x, y } = event.transform; setTransformState({ k, x, y }); if (nodesLayerRef.current) { nodesLayerRef.current.style.transform = `translate(${x}px, ${y}px) scale(${k})`; } if (svgRef.current) { d3.select(svgRef.current).select("g").attr("transform", event.transform.toString()); } });
      d3.select(containerRef.current).call(zoom as any).on("dblclick.zoom", null);
      const params = new URLSearchParams(window.location.search);
      const initialK = parseFloat(params.get('zoom') || '1');
      const initialX = parseFloat(params.get('x') || '0');
      const initialY = parseFloat(params.get('y') || '0');
      if (initialK !== 1 || initialX !== 0 || initialY !== 0) { const initialTransform = d3.zoomIdentity.translate(initialX, initialY).scale(initialK); d3.select(containerRef.current).call(zoom.transform as any, initialTransform); }
    }

    const sim = simulationRef.current;
    sim.force("link", d3.forceLink<GraphNode, GraphLink>(linksRef.current).id(d => d.id).distance(d => ((d.target as any).type === 'leaf' ? 60 : 280) * layoutScale)).force("collide", d3.forceCollide().radius(d => (d as any).r * 1.3 * layoutScale));

    if (layoutMode === 'clustered') {
        const cx = width / 2; const cy = height / 2; const radius = 300 * layoutScale; const groups = ['A', 'B', 'C', 'D', 'E', 'F']; const groupCenters: any = {}; groups.forEach((g, i) => { const angle = (i / 6) * 2 * Math.PI; groupCenters[g] = { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }; });
        sim.force("charge", d3.forceManyBody().strength(-200 * layoutScale)); sim.force("center", null); sim.force("x", d3.forceX((d: any) => { if (d.type === 'hub') return cx; if (d.group && groupCenters[d.group]) return groupCenters[d.group].x; return cx; }).strength(0.3)); sim.force("y", d3.forceY((d: any) => { if (d.type === 'hub') return cy; if (d.group && groupCenters[d.group]) return groupCenters[d.group].y; return cy; }).strength(0.3));
    } else {
        sim.force("charge", d3.forceManyBody().strength(d => ((d as any).type === 'hub' ? -1200 : -400) * layoutScale)); sim.force("center", d3.forceCenter(width / 2, height / 2)); sim.force("x", null); sim.force("y", null);
    }
    sim.alpha(0.3).restart();

    const drag = d3.drag<any, any>().on("start", (event, d) => { if (!event.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }).on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; }).on("end", (event, d) => { if (!event.active) sim.alphaTarget(0); d.fx = null; d.fy = null; });
    const linkElements = d3.select(svgRef.current).select("g").selectAll("line").data(linksRef.current).join("line").attr("stroke", isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)").attr("stroke-width", 2 * layoutScale);
    d3.select(nodesLayerRef.current).selectAll(".node-item").data(nodesRef.current).call(drag);
    sim.on("tick", () => { linkElements.attr("x1", d => (d.source as any).x).attr("y1", d => (d.source as any).y).attr("x2", d => (d.target as any).x).attr("y2", d => (d.target as any).y); const domNodes = nodesLayerRef.current?.children; if (domNodes) { for (let i = 0; i < domNodes.length; i++) { const el = domNodes[i] as HTMLElement; const d = nodesRef.current[i]; if (d && d.x !== undefined && d.y !== undefined) { const r = (d.r || 0) * layoutScale; el.style.transform = `translate(${d.x - r}px, ${d.y - r}px)`; } } } });
  }, [layoutScale, isDark, layoutMode]);

  const handleShare = () => { const url = new URL(window.location.href); url.searchParams.set('tab', 'Gemini Enterprise'); url.searchParams.set('zoom', transformState.k.toFixed(2)); url.searchParams.set('x', transformState.x.toFixed(0)); url.searchParams.set('y', transformState.y.toFixed(0)); navigator.clipboard.writeText(url.toString()); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000); };

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-inner">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing relative">
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"><g></g></svg>
        <div ref={nodesLayerRef} className="absolute inset-0 w-full h-full origin-top-left pointer-events-none">
          {filteredNodes.map((node) => (
             <div key={node.id} className="node-item absolute pointer-events-auto cursor-pointer" style={{ width: (node.r! * layoutScale * 2) + 'px', height: (node.r! * layoutScale * 2) + 'px' }} onClick={(e) => { e.stopPropagation(); setSelectedNode(node); }}>
               {node.type === 'hub' && ( <div className="w-full h-full rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-glow dark:shadow-blue-900/50 border border-slate-100 dark:border-slate-700 flex items-center justify-center animate-pulse-slow p-[15%] transition-transform hover:scale-110"><img src={isDark ? "https://services.google.com/fh/files/misc/gemini_enterprise_inverse.svg" : "https://services.google.com/fh/files/misc/gemini_enterprise.svg"} className="w-full h-auto object-contain" alt="Gemini Hub" /></div> )}
               {node.type === 'category' && ( <div className="w-full h-full animate-float" style={{ animationDelay: `${(node.id.charCodeAt(0) % 5) * 0.7}s` }}><div className={`w-full h-full rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-110 group`}><div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${node.gradient} transition-opacity duration-300 rounded-2xl`} /><div className={`p-[15%] rounded-xl bg-gradient-to-br ${node.gradient} text-white shadow-lg mb-[10%]`}>{node.icon && <node.icon size={24 * layoutScale} />}</div><span className="font-bold text-slate-800 dark:text-slate-100 leading-tight" style={{ fontSize: `${12 * layoutScale}px` }}>{node.title}</span></div></div> )}
               {node.type === 'leaf' && ( <div className="w-full h-full rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900 shadow-sm hover:scale-150 transition-transform animate-pulse-slow" style={{ animationDelay: `${(node.id.charCodeAt(node.id.length - 1) % 4) * 0.5}s` }} /> )}
             </div>
          ))}
        </div>
      </div>
      <div className="absolute top-6 left-6 flex flex-col space-y-4 pointer-events-auto">
         <div><h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Enterprise Network</h2><p className="text-sm text-slate-500 dark:text-slate-400">Interactive Agent Topology</p></div>
         <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-3 w-56">
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1 flex items-center"><Filter size={10} className="mr-1" /> View Depth</label><div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1"><button onClick={() => setViewMode('strategic')} className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'strategic' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Strategic</button><button onClick={() => setViewMode('full')} className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'full' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Full Network</button></div></div>
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1 flex items-center"><Grid size={10} className="mr-1" /> Arrangement</label><div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1"><button onClick={() => setLayoutMode('organic')} className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${layoutMode === 'organic' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Organic</button><button onClick={() => setLayoutMode('clustered')} className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${layoutMode === 'clustered' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>Clusters</button></div></div>
         </div>
      </div>
      <div className="absolute bottom-6 right-6 flex flex-col space-y-2 pointer-events-auto"><button onClick={() => {}} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"><Plus size={20} /></button><button onClick={() => {}} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"><Minus size={20} /></button><button onClick={() => {}} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"><Maximize size={20} /></button></div>
      <div className="absolute top-6 right-6 pointer-events-auto"><button onClick={handleShare} className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all font-semibold text-sm group">{isCopied ? <Check size={16} className="text-green-500" /> : <Share2 size={16} className="group-hover:text-garuda-blue dark:group-hover:text-garuda-cyan transition-colors" />}<span>{isCopied ? 'Link Copied!' : 'Share View'}</span></button></div>
      {selectedNode && <EnterpriseNodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />}
    </div>
  );
};

// --- Added Dashboard & SearchResultsView Components ---

const Dashboard = ({ isDark }: { isDark: boolean }) => {
  const departmentData = useMemo(() => {
    const counts: Record<string, number> = {};
    agents.forEach(a => { counts[a.department] = (counts[a.department] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, []);

  const horizonData = useMemo(() => {
    const counts: Record<string, number> = {};
    agents.forEach(a => { counts[a.horizon] = (counts[a.horizon] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, []);
  
  const totalBenefit = "$125M+"; 
  const totalAgents = agents.length;

  return (
    <div className="flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard label="Total Active Agents" value={totalAgents.toString()} subtext="Across 6 Depts" trend="+5 this week" color="blue" icon={Bot} />
        <MetricCard label="Est. Annual Benefit" value={totalBenefit} subtext="Projected Value" trend="+12% YoY" color="cyan" icon={TrendingUp} />
        <MetricCard label="System Health" value="99.9%" subtext="Uptime" color="orange" icon={Activity} />
        <MetricCard label="Active Users" value="14,500+" subtext="Employees" color="blue" icon={Users} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Agents by Department</h3>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                     <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={isDark ? "#334155" : "#e2e8f0"} />
                     <XAxis type="number" stroke={isDark ? "#94a3b8" : "#64748b"} />
                     <YAxis dataKey="name" type="category" width={100} stroke={isDark ? "#94a3b8" : "#64748b"} tick={{fontSize: 12}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#fff', borderColor: isDark ? '#1e293b' : '#e2e8f0', borderRadius: '12px' }}
                        itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
                     />
                     <Bar dataKey="value" fill="#005b8e" radius={[0, 4, 4, 0]}>
                        {departmentData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={['#005b8e', '#0097a9', '#f97316', '#10b981', '#6366f1'][index % 5]} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Strategic Horizon Distribution</h3>
             <div className="h-[300px] w-full flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={horizonData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {horizonData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={['#005b8e', '#0097a9', '#f97316'][index % 3]} />
                        ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ backgroundColor: isDark ? '#0f172a' : '#fff', borderColor: isDark ? '#1e293b' : '#e2e8f0', borderRadius: '12px' }}
                        itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
                     />
                     <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};

const SearchResultsView = ({ query, results, isLoading, onAgentSelect }: { query: string, results: Agent[], isLoading: boolean, onAgentSelect: (agent: Agent) => void }) => {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-10 animate-fadeIn">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <Search size={40} className="text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No agents found</h3>
        <p className="text-slate-500 max-w-md">We couldn't find any agents matching "{query}". Try different keywords or browse by department.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col animate-fadeIn">
      <div className="mb-6">
         <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Search Results</h1>
         <p className="text-slate-500 dark:text-slate-400">Found {results.length} agents matching "{query}"</p>
      </div>
      <div className="flex-grow overflow-y-auto custom-scrollbar pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {results.map(agent => (
               <AgentCard key={agent.id} agent={agent} onClick={() => onAgentSelect(agent)} />
            ))}
         </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showHero, setShowHero] = useState(true);
  const [activeView, setActiveView] = useState<'dashboard' | 'search' | 'agent-detail' | 'department' | 'enterprise'>('dashboard');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState<Department | 'All'>('All');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentHorizon, setCurrentHorizon] = useState<Horizon>("Day 1 (Foundation)");

  // Filter agents based on search or department
  const filteredAgents = useMemo(() => {
    if (activeView === 'search') {
      if (!searchQuery) return [];
      const lowerQuery = searchQuery.toLowerCase();
      return agents.filter(agent => 
        agent.name.toLowerCase().includes(lowerQuery) || 
        agent.description.toLowerCase().includes(lowerQuery) ||
        agent.tools.some(t => t.toLowerCase().includes(lowerQuery))
      );
    }
    if (activeView === 'department' && activeDepartment !== 'All') {
      return agents.filter(agent => agent.department === activeDepartment);
    }
    return agents;
  }, [activeView, searchQuery, activeDepartment]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setActiveView('agent-detail');
  };

  return (
    <div className={`flex h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden font-sans text-slate-900 dark:text-slate-100 ${isDark ? 'dark' : ''}`}>
      {showHero && <HeroOverlay onContinue={() => setShowHero(false)} />}
      
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-[18vw] min-w-[250px]' : 'w-[5vw] min-w-[80px]'} bg-slate-900 text-white flex flex-col transition-all duration-300 z-20 shadow-xl relative`}>
        <div className="p-[2vw] flex items-center justify-between">
          {isSidebarOpen ? (
            <div className="flex items-center justify-center w-full px-4 animate-fadeIn">
               <img src="https://services.google.com/fh/files/misc/garuda_indonesia_inverse.svg" alt="Garuda Indonesia" className="h-16 w-auto object-contain" />
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-tr from-garuda-blue to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                 <Plane className="text-white transform -rotate-45" size={24} />
               </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-white transition-colors absolute -right-3 top-8 bg-slate-800 rounded-full p-1 border border-slate-700 shadow-md">
            {isSidebarOpen ? <ChevronRight size={14} className="rotate-180" /> : <ChevronRight size={14} />}
          </button>
        </div>

        <div className="flex-grow overflow-y-auto custom-scrollbar px-[1vw] py-[1vh]">
          <div className="mb-[2vh]">
             <p className={`text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-4 ${!isSidebarOpen && 'hidden'}`}>Control Tower</p>
             <SidebarItem icon={LayoutDashboard} label={isSidebarOpen ? "Dashboard" : ""} active={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} indent={false} />
             
             {/* Custom Gemini Enterprise Button */}
             <button
              onClick={() => setActiveView('enterprise')}
              className={`w-full flex items-center ${isSidebarOpen ? 'px-[1.5vw]' : 'justify-center px-0'} py-[clamp(0.5rem,1.2vh,1.5rem)] mb-[0.5vh] rounded-xl transition-all duration-300 group relative overflow-hidden ${
                activeView === 'enterprise' 
                  ? 'bg-white/10 text-white shadow-lg shadow-black/10 ring-1 ring-white/20' 
                  : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {activeView === 'enterprise' && (
                <div className="absolute left-0 top-0 h-full w-[4px] bg-garuda-cyan rounded-r-full shadow-[0_0_10px_rgba(58,180,198,0.5)]"></div>
              )}
              
              {isSidebarOpen ? (
                  <img 
                    src="https://services.google.com/fh/files/misc/gemini_enterprise_inverse.svg" 
                    alt="Gemini Enterprise" 
                    className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100" 
                  />
              ) : (
                  <Sparkles size={20} className={`transition-transform duration-300 z-10 ${activeView === 'enterprise' ? 'scale-110 text-garuda-cyan' : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'} w-[1.2rem] h-[1.2rem]`} />
              )}
            </button>

             <SidebarItem icon={Search} label={isSidebarOpen ? "Global Search" : ""} active={activeView === 'search'} onClick={() => { setActiveView('search'); }} indent={false} />
          </div>

          <div className="mb-[2vh]">
             <p className={`text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-4 ${!isSidebarOpen && 'hidden'}`}>Departments</p>
             <SidebarItem icon={Briefcase} label={isSidebarOpen ? "Commercial" : ""} active={activeDepartment === 'Commercial' && activeView === 'department'} onClick={() => { setActiveDepartment('Commercial'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
             <SidebarItem icon={Wrench} label={isSidebarOpen ? "Maintenance" : ""} active={activeDepartment === 'Maintenance' && activeView === 'department'} onClick={() => { setActiveDepartment('Maintenance'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
             <SidebarItem icon={Plane} label={isSidebarOpen ? "Operations" : ""} active={activeDepartment === 'Operations' && activeView === 'department'} onClick={() => { setActiveDepartment('Operations'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
             <SidebarItem icon={Landmark} label={isSidebarOpen ? "Finance" : ""} active={activeDepartment === 'Finance' && activeView === 'department'} onClick={() => { setActiveDepartment('Finance'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
             <SidebarItem icon={Users} label={isSidebarOpen ? "Corporate & HR" : ""} active={activeDepartment === 'Corporate & HR' && activeView === 'department'} onClick={() => { setActiveDepartment('Corporate & HR'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
             <SidebarItem icon={Zap} label={isSidebarOpen ? "Transformation" : ""} active={activeDepartment === 'Transformation' && activeView === 'department'} onClick={() => { setActiveDepartment('Transformation'); setActiveView('department'); setCurrentHorizon("Day 1 (Foundation)"); }} indent={false} />
          </div>
        </div>

        <div className="p-[1.5vw] border-t border-slate-800 bg-slate-900/50">
           <button 
             onClick={() => setIsDark(!isDark)}
             className={`w-full flex items-center justify-center p-3 rounded-xl transition-all ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
           >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
             {isSidebarOpen && <span className="ml-3 font-medium text-sm">{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
           </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col h-full overflow-hidden relative">
        {/* Header Search Bar */}
        <div className="h-[8vh] min-h-[60px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center px-[2vw] justify-between shadow-sm z-10">
           <div className="flex items-center text-slate-400">
              <Search size={20} />
              <input 
                type="text" 
                placeholder="Search for agents, tools, or insights..." 
                className="bg-transparent border-none outline-none ml-3 text-slate-700 dark:text-slate-200 placeholder-slate-400 w-[30vw]"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value && activeView !== 'search') setActiveView('search');
                }}
              />
           </div>
           <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span>System Operational</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-garuda-blue text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-500/20">
                 GA
              </div>
           </div>
        </div>

        {/* View Content */}
        <div className="flex-grow overflow-hidden p-[2vw] relative">
           <ErrorBoundary>
             {activeView === 'dashboard' && <Dashboard isDark={isDark} />}
             
             {activeView === 'enterprise' && <GeminiEnterpriseView isDark={isDark} />}

             {activeView === 'search' && (
               <SearchResultsView 
                 query={searchQuery} 
                 results={filteredAgents} 
                 isLoading={false} 
                 onAgentSelect={handleAgentClick} 
               />
             )}
             
             {activeView === 'department' && (
               <div className="h-full flex flex-col animate-fadeIn">
                 <div className="mb-6 px-2">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{activeDepartment} Department</h1>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">Deploying {filteredAgents.length} intelligent agents to optimize workflows.</p>
                    
                    <div className="flex space-x-6 border-b border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar pb-1">
                       {(["Day 1 (Foundation)", "Quick Win (Process)", "Strategic (Transformational)"] as Horizon[]).map((h) => {
                          const count = filteredAgents.filter(a => a.horizon === h).length;
                          return (
                             <button
                                key={h}
                                onClick={() => setCurrentHorizon(h)}
                                className={`pb-3 flex-shrink-0 flex items-center space-x-2 text-sm font-bold border-b-2 transition-all ${
                                   currentHorizon === h 
                                   ? 'border-garuda-blue text-garuda-blue dark:text-blue-400' 
                                   : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                             >
                                <span>{h.split("(")[0].trim()}</span>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                                    currentHorizon === h 
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                                }`}>
                                    {count}
                                </span>
                             </button>
                          );
                       })}
                    </div>
                 </div>
                 <div className="flex-grow overflow-y-auto custom-scrollbar pb-10 px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                       {filteredAgents
                          .filter(agent => agent.horizon === currentHorizon)
                          .map(agent => (
                          <AgentCard key={agent.id} agent={agent} onClick={() => handleAgentClick(agent)} />
                       ))}
                    </div>
                    {filteredAgents.filter(agent => agent.horizon === currentHorizon).length === 0 && (
                        <div className="h-64 flex flex-col items-center justify-center text-slate-400">
                            <Layers size={48} className="mb-4 opacity-20" />
                            <p>No agents found in this horizon.</p>
                        </div>
                    )}
                 </div>
               </div>
             )}

             {activeView === 'agent-detail' && selectedAgent && (
               <div className="absolute inset-0 bg-white dark:bg-slate-950 z-20">
                 <AgentDetailView agent={selectedAgent} onBack={() => setActiveView('dashboard')} />
               </div>
             )}
           </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;