import React from 'react';
import { QualityCard } from '@/components/InfoCard';

const QualitySeals = () => {
    const cardData = {
        title: "Qualidade EAD",
        description: "Reconhecimento concedido a instituições que comprovam excelência em suas práticas de ensino a distância. Ele garante credibilidade, transparência e confiança para alunos e parceiros."
    };

    const cards = Array(6).fill(cardData);

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-[24px] font-raleway font-bold text-gray-800 text-center mb-4">
                        Selos de Qualidade e Confiabilidade
                    </h2>
                    <p className="text-gray-600 max-w-5xl  text-[14px] mx-auto">
                        Certificamos escolas e cursos que comprovam sua regularidade institucional e a aptidão para oferecer educação com segurança e credibilidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <QualityCard
                            key={index}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitySeals;
