import { BarChart, CreditCard, DollarSign, Target } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Overview",
    to: "/",
    icon: <BarChart className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <CreditCard className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Transactions component when created
  },
  {
    title: "Budgets",
    to: "/budgets",
    icon: <DollarSign className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Budgets component when created
  },
  {
    title: "Goals",
    to: "/goals",
    icon: <Target className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Goals component when created
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <BarChart className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Reports component when created
  },
];