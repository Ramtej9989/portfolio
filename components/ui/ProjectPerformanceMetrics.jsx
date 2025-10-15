// components/ui/ProjectPerformanceMetrics.jsx
import { motion } from 'framer-motion';
import { FaBolt, FaUniversalAccess, FaCheckCircle, FaSearch, FaClock, FaFileDownload, FaServer } from 'react-icons/fa';

export default function ProjectPerformanceMetrics({ metrics }) {
  const { lighthouse, webVitals, optimizations } = metrics;
  
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-secondary mb-4">Performance Metrics</h4>
        
        {/* Lighthouse Scores */}
        <div className="mb-8">
          <h5 className="text-white font-medium mb-3">Lighthouse Scores</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScoreGauge 
              score={lighthouse.performance} 
              label="Performance"
              icon={<FaBolt />}
            />
            <ScoreGauge 
              score={lighthouse.accessibility} 
              label="Accessibility" 
              icon={<FaUniversalAccess />}
            />
            <ScoreGauge 
              score={lighthouse.bestPractices} 
              label="Best Practices"
              icon={<FaCheckCircle />}
            />
            <ScoreGauge 
              score={lighthouse.seo} 
              label="SEO"
              icon={<FaSearch />}
            />
          </div>
        </div>
        
        {/* Core Web Vitals */}
        <div className="mb-8">
          <h5 className="text-white font-medium mb-3">Core Web Vitals</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WebVitalMetric 
              name="LCP" 
              label="Largest Contentful Paint"
              value={webVitals.lcp} 
              target="2.5s" 
              isGood={webVitals.lcp <= 2.5}
            />
            <WebVitalMetric 
              name="FID" 
              label="First Input Delay"
              value={webVitals.fid} 
              target="100ms" 
              isGood={webVitals.fid <= 100}
            />
            <WebVitalMetric 
              name="CLS" 
              label="Cumulative Layout Shift"
              value={webVitals.cls} 
              target="0.1" 
              isGood={webVitals.cls <= 0.1}
            />
          </div>
        </div>
        
        {/* Optimization Results */}
        <div>
          <h5 className="text-white font-medium mb-3">Optimization Results</h5>
          <div className="space-y-3">
            {optimizations.map((opt, index) => (
              <OptimizationResult 
                key={index}
                metric={opt.metric}
                before={opt.before}
                after={opt.after}
                unit={opt.unit}
                icon={opt.icon}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Components
function ScoreGauge({ score, label, icon }) {
  // Calculate color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-2">
        {/* Background Circle */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          {/* Foreground Circle */}
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={score >= 90 ? "#10B981" : score >= 50 ? "#FBBF24" : "#EF4444"}
            strokeWidth="3"
            strokeDasharray={`${score}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${getScoreColor(score)} text-lg font-bold`}>{score}</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-secondary">{icon}</span>
        <span className="text-sm text-gray-300">{label}</span>
      </div>
    </div>
  );
}

function WebVitalMetric({ name, label, value, target, isGood }) {
  return (
    <div className="bg-black/30 p-4 rounded-lg border border-secondary/20">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col">
          <span className="font-medium text-white">{name}</span>
          <span className="text-xs text-gray-400">{label}</span>
        </div>
        <span className={`text-sm px-2 py-0.5 rounded ${isGood ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {isGood ? 'Good' : 'Needs Improvement'}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-sm text-gray-400">Target: {target}</span>
      </div>
    </div>
  );
}

function OptimizationResult({ metric, before, after, unit, icon }) {
  const improvement = ((before - after) / before * 100).toFixed(1);
  const isPositive = before > after;
  const IconComponent = icon || FaClock;
  
  return (
    <div className="bg-black/30 p-4 rounded-lg border border-secondary/20">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-secondary"><IconComponent /></span>
          <span className="font-medium text-white">{metric}</span>
        </div>
        <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '↓' : '↑'} {improvement}%
        </span>
      </div>
      <div className="relative h-2 bg-black/50 rounded overflow-hidden mb-2">
        {/* Before Bar */}
        <div className="absolute top-0 left-0 h-full bg-gray-600 w-full"></div>
        
        {/* After Bar */}
        <div 
          className="absolute top-0 left-0 h-full bg-secondary"
          style={{ width: `${(isPositive ? after/before : 1 - (after-before)/after) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>Before: {before}{unit}</span>
        <span>After: {after}{unit}</span>
      </div>
    </div>
  );
}
