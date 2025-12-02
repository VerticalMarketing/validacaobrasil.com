import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CertificateValidation from "./components/CertificateValidation";
import QualitySeals from "./components/QualityCard";
import { ImageBanner } from "@/components/ImageBanner";
import TrustCard from "./components/TrustCard";
import Partners from "@/components/Partners";

export default function CertificatesPage() {
  const trustCards = Array(6).fill({
    title: "Qualidade EAD",
    description: "Reconhecimento concedido a instituições que comprovam excelência em suas práticas de ensino a distância. Ele garante credibilidade, transparência e confiança para alunos e parceiros."
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <CertificateValidation />
      <QualitySeals />
      <ImageBanner
        src="/advertisement/cepaf-advertisement.svg"
        alt="CEPAF Banner"
        className="py-4"
      />
      <TrustCard />
      <Partners />
      <Footer />
    </div>
  );
}