"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from 'lucide-react';

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-emerald-900">
      {/* Header/Nav */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <div className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              ENG5097 Group 3: Aqua Purity AR
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-emerald-400 transition-colors">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">Getting Started</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Learn how to use the Aqua Purity AR system to analyze river health and environmental impacts.
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="bg-slate-800 border-slate-700 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-emerald-500" />
              Introduction Video
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
              <div className="text-center space-y-4">
                <div className="bg-slate-800 p-4 rounded-full inline-block">
                  <PlayCircle className="w-12 h-12 text-slate-500" />
                </div>
                <p className="text-slate-500 text-sm">Video placeholder - Introduction to Aqua Purity AR</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Requirements</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-2">
              <p>• Modern web browser (Chrome, Firefox, Safari)</p>
              <p>• Stable internet connection</p>
              <p>• AR-capable device (optional)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Start Guide</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-2">
              <p>1. Enter your environment in the search bar</p>
              <p>2. View the analysis results</p>
              <p>3. Explore nature-based solutions</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-auto py-8 border-t border-slate-800 bg-slate-900">
        <div className="text-slate-500 font-thin text-center">
          A Group 3 Project
        </div>
      </footer>
    </div>
  );
};

export default GettingStarted;