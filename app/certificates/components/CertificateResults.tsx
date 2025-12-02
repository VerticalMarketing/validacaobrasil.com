import React from 'react';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';

interface Course {
    name: string;
    turma: string;
    validade: string;
    publicadoPor: string;
}

interface Card {
    id: number;
    institution: string;
    cnpj: string;
    logo: string;
    courses: Course[];
}

interface CertificateResultsProps {
    data: {
        name: string;
        document: string;
        cards: Card[];
    };
}

const CertificateResults = ({ data }: CertificateResultsProps) => {
    return (
        <section className="container mx-auto px-4 py-12 bg-gray-50">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
                <p className="text-gray-600 mt-1">CPF: {data.document}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.cards.map((card) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="h-12 w-32 relative mb-4">
                                <Image
                                    src={card.logo}
                                    alt={card.institution}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                                {card.institution}
                            </h3>
                            <p className="text-sm text-gray-500">{card.cnpj}</p>
                        </div>

                        <div className="flex-grow space-y-6">
                            {card.courses.map((course, index) => (
                                <div key={index} className="border-t border-gray-100 pt-4 first:border-0 first:pt-0">
                                    <div className="flex items-start gap-2 mb-2">
                                        <GraduationCap className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <h4 className="font-semibold text-gray-800 text-sm">
                                            {course.name}
                                        </h4>
                                    </div>
                                    <div className="pl-7 space-y-1">
                                        <p className="text-xs text-gray-600">
                                            <span className="font-bold">Turma:</span> {course.turma}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            <span className="font-bold">Validade:</span> {course.validade}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            <span className="font-bold">Publicado por:</span> {course.publicadoPor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <button className="w-full bg-[#0065D1] hover:bg-blue-700 text-white font-medium py-2.5 rounded-[7px] transition-colors text-sm">
                                Ver todos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificateResults;
