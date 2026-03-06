"use client";

import React, { useState } from "react";
import { Waves, Info } from "lucide-react";
import EnvironmentInput from "@/components/EnvironmentInput";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [environment, setEnvironment] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAnalyze = (value: string) => {
    setEnvironment(value);
  };

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-emerald-900">
      {/* Header/Nav */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              ENG5097 Group 3: Aqua Purity AR
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Dashboard
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Methodology
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero/Input Section */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <EnvironmentInput onSubmit={handleAnalyze} />
        </section>

        {/* Getting Started Button */}
        <section className="text-center">
          <Button 
            onClick={() => navigate('/getting-started')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl transition-all"
          >
            Getting Started
          </Button>
        </section>

        {/* Info Section */}
        {!environment && (
          <section className="bg-slate-800 rounded-3xl p-8 flex items-start space-x-4 border border-slate-700">
            <div className="bg-slate-700 p-2 rounded-xl text-blue-400">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-blue-300">How it works</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our AI analyzes the specific topographical and biological
                characteristics of your chosen environment to determine how
                water interacts with the landscape. We focus on "catchment
                efficiency"—the ability of an area to capture, filter, and store
                water naturally.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-auto py-8 border-t border-slate-800 bg-slate-900">
        <div className="text-slate-500 font-thin text-center">
          A Group 3 Project
        </div>
      </footer>
    </div>
  );
};

export default Index;