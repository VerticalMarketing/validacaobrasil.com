"use client";
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function InstitutionsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Institutions</h1>
                <p className="text-gray-600">Institution validation page coming soon.</p>
            </main>
            <Footer />
        </div>
    );
}
