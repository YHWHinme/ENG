"use client";

import React from 'react';
import { Search, TreePine } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EnvironmentInputProps {
  onSubmit: (value: string) => void;
}

const EnvironmentInput = ({ onSubmit }: EnvironmentInputProps) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-2xl mb-2">
          <TreePine className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">River Health Analysis</h2>
        <p className="text-slate-500">Enter an environment to explore its hydrological impact and nature-based solutions.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
        </div>
        <Input
          type="text"
          placeholder="What environment would you like to see? (e.g. Alpine Tundra, Tropical Rainforest)"
          className="pl-12 pr-32 py-7 text-lg rounded-2xl border-slate-200 shadow-sm focus-visible:ring-emerald-500 transition-all"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button 
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
        >
          Analyze
        </Button>
      </form>
    </div>
  );
};

export default EnvironmentInput;