
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="reveal bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
      <blockquote className="text-gray-600 italic">"{quote}"</blockquote>
    </div>
  );
};

export default TestimonialCard;
