import type { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  bg: string;
}

export interface StatBoxProps {
  label: string;
  value: string;
  trend: string;
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}

export interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  isTimeline?: boolean;
}
