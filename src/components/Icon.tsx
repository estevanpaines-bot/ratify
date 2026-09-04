import {
  Building2,
  Rocket,
  ShoppingBag,
  Store,
  LayoutGrid,
  Terminal,
  Sparkles,
  PenTool,
  Smartphone,
  Gauge,
  TrendingUp,
  Cpu,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa de ícones usados pelos arquivos de dados.
 * Para usar um novo ícone, importe-o aqui e adicione no objeto abaixo.
 */
const icons: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  ShoppingBag,
  Store,
  LayoutGrid,
  Terminal,
  Sparkles,
  PenTool,
  Smartphone,
  Gauge,
  TrendingUp,
  Cpu,
  MessagesSquare,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? Sparkles;
  return <Component className={className} aria-hidden />;
}
