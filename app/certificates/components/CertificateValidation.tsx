"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatInstitution, formatDocument } from '@/utils/mask';

const CertificateValidation = () => {
    const [institution, setInstitution] = useState("");
    const [document, setDocument] = useState("");

    const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInstitution(formatInstitution(e.target.value));
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(formatDocument(e.target.value));
    };

    return (
        <section className="relative w-full flex flex-col items-center justify-center bg-gray-50">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden">
                <img
                    src="/banner/certificate-banner.png"
                    alt="Certificate Banner"
                    className="absolute left-1/2 -translate-x-1/2 w-[1920px] h-full max-w-none object-cover"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-16 flex flex-col items-center text-center">

                {/* Validation Card */}
                <div className="bg-[#FCFCFC] rounded-[10px] shadow-[0px_0px_20px_0px_#00000026] w-full max-w-[1200px] md:h-[262px] p-[36px] flex flex-col gap-[32px] relative mt-[210px]">

                    <h2 className="text-[24px] font-raleway font-bold text-gray-800 text-center">
                        Consultar certificado
                    </h2>

                    <hr className="border-2 border-gray-200" />

                    <div className="flex flex-col md:flex-row gap-6 items-end mt-[20px] w-full">
                        {/* Input 1 */}
                        <div className="flex flex-col items-start w-full md:flex-1">
                            <label className="text-[14px] font-semibold text-gray-600 mb-2">
                                Código Validação Brasil
                            </label>
                            <input
                                type="text"
                                value={institution}
                                onChange={handleInstitutionChange}
                                placeholder="Informe o nome da instituição responsável"
                                className="w-full h-[38px] border border-gray-400/90 rounded-[7px] px-3 text-gray-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Input 2 */}
                        <div className="flex flex-col items-start w-full md:flex-1">
                            <label className="text-[14px] font-semibold text-gray-600 mb-2">
                                CPF ou Passaporte
                            </label>
                            <input
                                type="text"
                                value={document}
                                onChange={handleDocumentChange}
                                placeholder="Documento do titular (CPF ou Passaporte)"
                                className="w-full h-[38px] border border-gray-400/90 rounded-[7px] px-3 text-gray-700 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Button */}
                        <button className="bg-[#0065D1] hover:bg-[#0065D1] text-white text-[15px] py-3 px-6 rounded-[7px] flex items-center gap-2 transition-colors h-[38px] cursor-pointer shadow-sm transition-colors hover:bg-blue-700 whitespace-nowrap">
                            <Search size={18} />
                            Pesquisar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificateValidation;
