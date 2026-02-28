"use client";

import React, { useState } from 'react';
import { Droplets, ShieldAlert, Waves, Info } from 'lucide-react';
import EnvironmentInput from '@/components/EnvironmentInput';
import AnalysisCard from '@/components/AnalysisCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [environment, setEnvironment] = useState<string | null>(null);

  const handleAnalyze = (value: string) => {
    setEnvironment(value);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-emerald-100">
      {/* Header/Nav */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">AquaPurity AI</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Methodology</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero/Input Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <EnvironmentInput onSubmit={handleAnalyze} />
        </section>

        {/* Results Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnalysisCard
            variant="positive"
            title="Good Catchment Systems"
            icon={Droplets}
            placeholder={!environment}
            description={environment 
              ? `In a ${environment} environment, nature-based solutions like beaver dams and restored wetlands act as natural filters. These systems slow water flow, allowing sediment to settle and biological processes to neutralize pollutants, ensuring high water purity downstream.`
              : "Enter an environment above to see how nature-based solutions like beaver dams and natural filtration systems maintain water purity."
            }
          />
          
          <AnalysisCard
            variant="negative"
            title="Bad Catchment Systems"
            icon={ShieldAlert}
            placeholder={!environment}
            description={environment 
              ? `Poor catchment in ${environment} often results from deforestation or excessive concrete surfacing. This leads to rapid runoff that bypasses natural filtration, carrying urban pollutants and agricultural chemicals directly into river systems, severely compromising water quality.`
              : "Analysis of environmental setups that cause poor catchment, such as soil compaction or lack of riparian buffers, will appear here."
            }
          />
        </section>

        {/* Info Section */}
        {!environment && (
          <section className="bg-blue-50 rounded-3xl p-8 flex items-start space-x-4 border border-blue-100">
            <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-blue-900">How it works</h3>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                Our AI analyzes the specific topographical and biological characteristics of your chosen environment to determine how water interacts with the landscape. We focus on "catchment efficiency"—the ability of an area to capture, filter, and store water naturally.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-auto py-8 border-t bg-white">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;