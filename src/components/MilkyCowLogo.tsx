
import { cn } from "@/lib/utils";

interface MilkyCowLogoProps {
  className?: string;
}

const MilkyCowLogo = ({ className }: MilkyCowLogoProps) => {
  return (
    <img
      src="/lovable-uploads/b78db90b-11dd-4ec0-b703-d8ab8c7fd92f.png"
      alt="Milky Cow Logo"
      className={cn("h-8 w-auto", className)}
    />
  );
};

export default MilkyCowLogo;

