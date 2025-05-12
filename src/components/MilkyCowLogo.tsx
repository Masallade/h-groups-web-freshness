
import { cn } from "@/lib/utils";

interface MilkyCowLogoProps {
  className?: string;
}

const MilkyCowLogo = ({ className }: MilkyCowLogoProps) => {
  return (
    <img
      src="/lovable-uploads/18f5d429-8228-46e6-a90a-bc6a661e122c.png"
      alt="H-Groups Logo"
      className={cn("h-8 w-auto", className)}
    />
  );
};

export default MilkyCowLogo;
