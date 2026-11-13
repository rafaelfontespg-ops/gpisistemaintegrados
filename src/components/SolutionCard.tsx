import React from 'react';
import { Solution } from '../types';
import { 
  PieChart, 
  Receipt, 
  Package, 
  Truck, 
  Building, 
  Users, 
  FileCheck, 
  Newspaper, 
  Eye, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface SolutionCardProps {
  solution: Solution;
  onSelect: (slugOrId: string) => void;
  onDemoRequest?: (slugOrId: string) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onSelect,
  onDemoRequest
}) => {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#004361]";
    switch (iconName) {
      case 'PieChart': return <PieChart className={iconClass} />;
      case 'Receipt': return <Receipt className={iconClass} />;
      case 'Package': return <Package className={iconClass} />;
      case 'Truck': return <Truck className={iconClass} />;
      case 'Building': return <Building className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'FileCheck': return <FileCheck className={iconClass} />;
      case 'Newspaper': return <Newspaper className={iconClass} />;
      case 'Eye': return <Eye className={iconClass} />;
      default: return <Building className={iconClass} />;
    }
  };

  const slugOrId = solution.slug || solution.id;

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#4A7EB3]/50 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#004361]/5 border border-[#004361]/10 flex items-center justify-center transition-colors group-hover:bg-[#004361]/10">
            {renderIcon(solution.iconName)}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#004361] group-hover:text-[#335B8F] transition-colors mb-2.5 leading-snug">
          {solution.name}
        </h3>

        {/* Summary */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {solution.summary || solution.shortDescription}
        </p>
      </div>

      {/* Footer / Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onSelect(slugOrId)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004361] group-hover:text-[#4A7EB3] transition-colors cursor-pointer"
        >
          <span>Saiba mais</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {onDemoRequest && (
          <button
            onClick={() => onDemoRequest(slugOrId)}
            className="text-xs font-semibold text-slate-500 hover:text-[#004361] px-2.5 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Solicitar demo
          </button>
        )}
      </div>
    </div>
  );
};
