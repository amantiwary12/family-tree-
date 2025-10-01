import { X } from 'lucide-react';

interface PersonCardProps {
  name: string;
  relation: string;
  photoUrl?: string;
  side: 'groom' | 'bride';
  onDelete: () => void;
}

const PersonCard = ({ name, relation, photoUrl, side, onDelete }: PersonCardProps) => {
  const sideColors = {
    groom: 'border-blue-200 bg-blue-50',
    bride: 'border-pink-200 bg-pink-50'
  };

  return (
    <div className={`relative border-2 rounded-lg p-3 lg:p-4 w-36 lg:w-48 text-center ${sideColors[side]} transition-all duration-200 hover:shadow-md`}>
      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
        aria-label={`Delete ${name}`}
      >
        <X className="w-3 h-3 lg:w-4 lg:h-4" />
      </button>
      
      {photoUrl ? (
        <img 
          src={photoUrl} 
          alt={name}
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 lg:mb-3 object-cover border-2 border-white"
        />
      ) : (
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 lg:mb-3 bg-gray-200 flex items-center justify-center border-2 border-white">
          <span className="text-gray-500 text-sm lg:text-lg font-semibold">
            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
        </div>
      )}
      
      <h3 className="font-semibold text-base lg:text-lg mb-1 break-words">{name}</h3>
      <p className="text-xs lg:text-sm text-muted-foreground capitalize">{relation}</p>
    </div>
  );
};

export default PersonCard;