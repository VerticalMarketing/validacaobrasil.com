"use client";
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CertificateValidation from "./components/CertificateValidation";
import QualitySeals from "./components/QualityCard";
import { ImageBanner } from "@/components/ImageBanner";
import TrustCard from "./components/TrustCard";
import Partners from "@/components/Partners";
import CertificateResults from "./components/CertificateResults";
import { mockCertificates } from "./data/mockData";

export default function CertificatesPage() {
  const [searchResult, setSearchResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = (institution: string, document: string) => {
    setSearchError(null);
    const result = mockCertificates.find(
      (cert) =>
        cert.document === document &&
        cert.institution.toLowerCase().includes(institution.toLowerCase())
    );

    if (result) {
      setSearchResult(result);
      setHasSearched(true);
    } else {
      setSearchResult(null);
      setHasSearched(false);
      setSearchError("Nenhum certificado encontrado. Verifique os dados informados.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <CertificateValidation onSearch={handleSearch} error={searchError} />

      {hasSearched && searchResult ? (
        <CertificateResults data={searchResult} />
      ) : (
        <>
          <QualitySeals />
          <ImageBanner
            src="/advertisement/cepaf-advertisement.svg"
            alt="CEPAF Banner"
            className="py-4"
          />
          <TrustCard />
        </>
      )}

      {hasSearched && (
        <ImageBanner
          src="/advertisement/cepaf-advertisement.svg"
          alt="CEPAF Banner"
          className="py-4"
        />
      )}

      <Partners />
      <Footer />
    </div>
  );
}