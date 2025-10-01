import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

interface PersonCardProps {
  name: string;
  relation: string;
  photoUrl: string;
  side: 'groom' | 'bride';
}

const PersonCard = ({ name, relation, photoUrl, side }: PersonCardProps) => {
  const borderColor = side === 'groom' ? 'border-secondary' : 'border-primary';
  
  return (
    <Card className={`card-elegant ${borderColor} p-4 w-44 mx-auto`}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex items-center justify-center border-4 border-background shadow-lg">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-12 h-12 text-muted-foreground" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-foreground text-lg">{name}</h3>
          <p className="text-xs text-muted-foreground font-medium mt-1">{relation}</p>
        </div>
      </div>
    </Card>
  );
};

export default PersonCard;
