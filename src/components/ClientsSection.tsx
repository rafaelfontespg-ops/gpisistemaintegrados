import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../data/gpiData';
import { Building2, Landmark, Shield, MapPin, CheckCircle2 } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [filterState, setFilterState] = useState<string>('todos');

  const states = ['todos', 'PR', 'SC', 'SP', 'RS', 'MG'];

  const filteredClients = CLIENT_LOGOS.filter(c => 
    filterState === 'todos' || c.state === filterState
  );

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Confiança Comprovada em Centenas de Órgãos Públicos
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Prefeituras, Câmaras Municipais, Institutos de Previdência e Autarquias que transformaram sua gestão com os sistemas da GPI.
          </p>
        </div>

        {/* State Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <span className="text-xs font-bold text-slate-500 mr-2">Filtrar por estado:</span>
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setFilterState(st)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filterState === st
                  ? 'bg-[#004361] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st === 'todos' ? 'Todos os estados' : st}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div 
              key={client.id}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#68A8DE] transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#004361]">
                  {client.type === 'Prefeitura' ? <Building2 className="w-4 h-4" /> : <Landmark className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full">
                  {client.state}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#004361] group-hover:text-[#335B8F] transition-colors">
                  {client.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {client.type}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Gestão em dia</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <p className="text-center text-xs text-slate-500 mt-8">
          E mais de 100 outros órgãos públicos e fundos municipais atendidos em todo o território nacional.
        </p>

      </div>
    </section>
  );
};
