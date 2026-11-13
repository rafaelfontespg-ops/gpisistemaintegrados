import React, { useState } from 'react';
import { X, CheckCircle2, User, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Send } from 'lucide-react';
import { GPI_SOLUTIONS } from '../data/gpiData';
import { LOGO_GPI_BRANCO } from '../constants/logos';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolutionId?: string | null;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialSolutionId
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Secretário(a) / Gestor',
    municipality: '',
    state: 'BA',
    population: '20.000 a 50.000 habitantes',
    email: '',
    phone: '',
    selectedSolution: initialSolutionId || 'todas',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#004361] text-white p-6 flex items-center justify-between border-b border-[#003852]">
          <div className="flex items-center space-x-4">
            <img 
              src={LOGO_GPI_BRANCO} 
              alt="GPI Sistemas" 
              className="h-8 sm:h-9 w-auto max-w-[160px] object-contain shrink-0"
            />
            <div className="border-l border-white/20 pl-4">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">Solicitar Demonstração</h3>
              <p className="text-xs text-slate-300">Tecnologia para Gestão Pública</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-[#004361]">Solicitação Recebida com Sucesso!</h4>

              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Obrigado, <strong className="text-slate-900">{formData.name}</strong>. Nossa equipe de especialistas em Gestão Pública entrará em contato pelo telefone <strong className="text-slate-900">{formData.phone}</strong> para agendar a apresentação do seu município.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#004361] hover:bg-[#335B8F] text-white font-bold px-8 py-3 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Concluir e Voltar ao Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Dr. Carlos Eduardo"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Cargo / Função *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                  >
                    <option value="Prefeito(a) / Vice">Prefeito(a) / Vice-Prefeito(a)</option>
                    <option value="Secretário(a) / Gestor">Secretário(a) Municipal / Gestor</option>
                    <option value="Presidente de Câmara">Presidente de Câmara Municipal</option>
                    <option value="Diretor de TI / Inovação">Diretor / Chefe de TI e Sistemas</option>
                    <option value="Procurador / Assessor">Procurador / Assessor Jurídico</option>
                    <option value="Servidor Público">Servidor Público / Técnico</option>
                    <option value="Outro">Outro cargo</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Município / Órgão Público *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.municipality}
                    onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                    placeholder="Ex: Prefeitura Municipal de Salvador"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    E-mail Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nome@prefeitura.ba.gov.br"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(71) 99999-0000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Solução / Módulo de Maior Interesse
                </label>
                <select
                  value={formData.selectedSolution || 'todas'}
                  onChange={(e) => setFormData({ ...formData, selectedSolution: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                >
                  <option value="todas">Visão Geral de Todas as Soluções (Ecossistema Integrado)</option>
                  {GPI_SOLUTIONS.map(sol => (
                    <option key={sol.id} value={sol.id}>{sol.name}</option>
                  ))}
                  <option value="sos-maria-da-penha">Projeto SOS Maria da Penha</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Observações ou Desafios Atuais do Município (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ex: Precisamos adequar nosso setor de compras à Lei 14.133/21..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Seus dados estão seguros conforme a LGPD.
                </span>

                <button
                  type="submit"
                  className="bg-[#004361] hover:bg-[#335B8F] text-white font-bold px-8 py-3 rounded-xl text-xs transition-colors shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Enviar Solicitação</span>
                  <Send className="w-4 h-4 text-[#68A8DE]" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
