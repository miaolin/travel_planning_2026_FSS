export type Segment = "paris" | "mallorca" | "swiss";

export interface Day {
  id: number;
  date: string;
  title: string;
  city: string;
  segment: Segment;
  tags: string[];
  meta: string;
  activities?: string[];
  activities_rg?: string[];
  activities_no_rg?: string[];
}

export interface BudgetItem {
  category: string;
  description: string;
  amount: number;
  currency: "EUR" | "SGD" | "CHF";
  segment: Segment | "overall";
  days?: number[];
}
