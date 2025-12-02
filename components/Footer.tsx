import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube, Landmark } from "lucide-react";

export function Footer() {
  return (
    <footer className=" bg-[#002A58] text-white">
      <div className="w-full px-[400px] py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Cursos */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold text-white">Cursos</h3>
            <div className="flex flex-col text-[14px] text-slate-300/90">
              <a href="#" className="hover:text-white transition-colors">Graduação</a>
              <a href="#" className="hover:text-white transition-colors">Pós-Graduação</a>
              <a href="#" className="hover:text-white transition-colors">Técnico</a>
              <a href="#" className="hover:text-white transition-colors">Offshore</a>
              <a href="#" className="hover:text-white transition-colors">Profissionalizante</a>
            </div>
          </div>

          {/* Column 2: Instituições */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold text-white">Instituições</h3>
            <div className="flex flex-col text-[14px] text-slate-300/90 ">
              <a href="#" className="hover:text-white transition-colors">Na sua região</a>
              <a href="#" className="hover:text-white transition-colors">Mais populares</a>
              <a href="#" className="hover:text-white transition-colors">Melhores preços</a>
              <a href="#" className="hover:text-white transition-colors">Melhores avaliações</a>
            </div>
          </div>

          {/* Column 3: Certificados */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold text-white">Certificados</h3>
            <div className="flex flex-col text-[14px] text-slate-300/90">
              <a href="#" className="hover:text-white transition-colors">Consultar certificado</a>
            </div>
          </div>

          {/* Column 4: Selos */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold text-white">Selos</h3>
            <div className="flex flex-col text-[14px] text-slate-300/90">
              <a href="#" className="hover:text-white transition-colors">Qualidade</a>
              <a href="#" className="hover:text-white transition-colors">EaD</a>
              <a href="#" className="hover:text-white transition-colors">Confiança</a>
              <a href="#" className="hover:text-white transition-colors">Credibilidade</a>
            </div>
          </div>

          {/* Column 5: Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-semibold text-white">Redes Sociais</h3>
            <div className="flex gap-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-[14px] pt-[40px] text-white">
           Desenvolvido por Vertical Marketing & Tecnologia ® 2025
        </div>
      </div>
    </footer>
  );
}
