import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Headphones,
  FileCheck
} from 'lucide-react';

interface ContactViewProps {
  setActivePage: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActivePage }) => {
  const [formState, setFormState] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    municipality: '',
    department: 'Comercial & Licitações',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#002B3F] text-white py-14 sm:py-18 border-b border-[#003852]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Fale com a GPI Sistemas
            </h1>
            <p className="text-slate-200 text-base mt-3 leading-relaxed">
              Estamos à disposição para atender Prefeituras, Câmaras Municipais, Secretarias e órgãos públicos em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-6">
                <h3 className="text-lg font-bold text-[#004361]">Canais de Atendimento Direto</h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Phone className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Setor Administrativo</strong>
                      <a 
                        href="https://wa.me/5571982557718?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#25D366] font-bold underline hover:text-[#20ba5a]"
                      >
                        (71) 98255-7718
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Phone className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Suporte Técnico</strong>
                      <a 
                        href="https://wa.me/5571999043307?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20preciso%20de%20atendimento%20do%20Suporte%20T%C3%A9cnico." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#25D366] font-bold underline hover:text-[#20ba5a]"
                      >
                        (71) 99904-3307
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Phone className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Telefones Fixos</strong>
                      <div className="text-slate-600 space-y-0.5">
                        <p>(71) 3341-4788</p>
                        <p>(71) 3486-5822</p>
                        <p>(71) 3486-5823</p>
                        <p>(71) 3021-1866</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Mail className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">E-mail Institucional</strong>
                      <span className="text-slate-600">contato@gpisistemas.com.br</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <MapPin className="w-5 h-5 text-[#004361] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Nosso Endereço</strong>
                      <div className="text-slate-600 leading-tight">
                        <p>Rua Arthur Azevedo Machado, 1459</p>
                        <p>Edif. International Trade Center, Sala 1206</p>
                        <p>Stiep – Salvador/BA — CEP: 41.770-790</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suporte Box */}
              <div className="bg-[#004361] text-white p-6 rounded-2xl border border-[#004361] shadow-lg space-y-3">
                <div className="flex items-center gap-2 text-[#68A8DE]">
                  <Headphones className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Suporte Técnico ao Cliente</h4>
                </div>
                <p className="text-xs text-slate-200">
                  Já é cliente GPI Sistemas? Entre em contato com a nossa central de suporte técnico.
                </p>
                <a
                  href="https://wa.me/5571999043307?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20preciso%20de%20atendimento%20do%20Suporte%20T%C3%A9cnico."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#335B8F] hover:bg-[#4A7EB3] text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors border border-white/20"
                >
                  Falar no WhatsApp
                </a>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-xl font-bold text-[#004361] mb-2">Envie uma Mensagem para Nossa Equipe</h3>
              <p className="text-xs text-slate-600 mb-6">
                Preencha o formulário abaixo para tirar dúvidas sobre licitações, agendar demonstrações ou solicitar suporte.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#004361]">Mensagem Enviada!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Obrigado pelo contato. Retornaremos sua mensagem em até 24 horas úteis.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#004361] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ex: Carlos Mendes"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Cargo / Função</label>
                      <input
                        type="text"
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        placeholder="Ex: Secretário de Finanças"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="nome@prefeitura.gov.br"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Telefone *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(41) 99999-0000"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Município / Órgão</label>
                      <input
                        type="text"
                        value={formState.municipality}
                        onChange={(e) => setFormState({ ...formState, municipality: e.target.value })}
                        placeholder="Ex: Prefeitura de Ponta Grossa"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Departamento de Destino</label>
                      <select
                        value={formState.department}
                        onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                      >
                        <option value="Comercial & Licitações">Comercial & Licitações</option>
                        <option value="Suporte Técnico">Suporte Técnico e Implantação</option>
                        <option value="Consultoria Jurídica">Consultoria Jurídica & Legislação</option>
                        <option value="Projeto SOS Maria da Penha">Projeto SOS Maria da Penha</option>
                        <option value="Ouvidoria">Ouvidoria Geral</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Assunto da Mensagem *</label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Ex: Informações sobre transição para a Lei 14.133/21"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Mensagem *</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Escreva os detalhes da sua solicitação..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Privacidade garantida conforme LGPD
                    </span>

                    <button
                      type="submit"
                      className="bg-[#004361] hover:bg-[#335B8F] text-white font-bold px-8 py-3 rounded-xl transition-colors shadow flex items-center gap-2 cursor-pointer"
                    >
                      <span>Enviar Mensagem</span>
                      <Send className="w-3.5 h-3.5 text-[#68A8DE]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
