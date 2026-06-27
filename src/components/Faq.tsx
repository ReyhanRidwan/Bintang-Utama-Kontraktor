import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="faq-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ TANYA JAWAB UMUM
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            FAQ SEPUTAR KONTRAKTOR & RAB
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            Menjawab keraguan Anda. Berikut informasi lengkap mengenai prosedur kerja, garansi, survey lapangan, dan metode pembayaran kami.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faqs-accordion-list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-block-${faq.id}`}
                className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden hover:border-gray-200 transition-colors"
              >
                {/* Accordion Toggle Header Button */}
                <button
                  id={`faq-btn-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle className="h-5 w-5 text-[#C89A2B] shrink-0" />
                    <span className="font-sans font-bold text-sm sm:text-base text-[#16233A] tracking-wide uppercase">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isOpen ? 'bg-[#16233A] text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Expanded Answer body */}
                <div
                  id={`faq-answer-body-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-gray-50/50">
                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
