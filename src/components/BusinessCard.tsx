
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  link: string;
  colorScheme: 'milkyCow' | 'royalButcher';
}

const BusinessCard = ({
  title,
  description,
  imageUrl,
  buttonText,
  link,
  colorScheme,
}: BusinessCardProps) => {
  const isGreen = colorScheme === 'milkyCow';
  
  return (
    <div className="reveal bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className={cn(
            "font-heading font-bold text-2xl mb-2",
            isGreen ? "text-milkyCow-dark" : "text-royalButcher-dark"
          )}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link}>
          <Button 
            className={cn(
              "w-full",
              isGreen 
                ? "bg-milkyCow hover:bg-milkyCow-dark" 
                : "bg-royalButcher hover:bg-royalButcher-dark"
            )}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
