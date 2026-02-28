"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalysisCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: 'positive' | 'negative';
  placeholder?: boolean;
}

const AnalysisCard = ({ title, description, icon: Icon, variant, placeholder }: AnalysisCardProps) => {
  const isPositive = variant === 'positive';
  
  return (
    <Card className={cn(
      "border-none shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden",
      isPositive ? "bg-emerald-50/50" : "bg-rose-50/50"
    )}>
      <div className={cn(
        "h-1.5 w-full",
        isPositive ? "bg-emerald-500" : "bg-rose-500"
      )} />
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className={cn(
          "p-2.5 rounded-xl",
          isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-slate-600 leading-relaxed min-h-[120px]",
          placeholder && "italic opacity-60 flex items-center justify-center text-center"
        )}>
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalysisCard;