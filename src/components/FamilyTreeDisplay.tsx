import { getFamilyMembers, FamilyMember, deleteFamilyMember } from '@/utils/storage';
import PersonCard from './PersonCard';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const FamilyTreeDisplay = () => {
  const [members, setMembers] = useState<FamilyMember[]>(getFamilyMembers());
  const groomMembers = members.filter((m) => m.side === 'groom');
  const brideMembers = members.filter((m) => m.side === 'bride');

  const groupByRelation = (members: FamilyMember[]) => {
    return members.reduce((acc, member) => {
      if (!acc[member.relation]) {
        acc[member.relation] = [];
      }
      acc[member.relation].push(member);
      return acc;
    }, {} as Record<string, FamilyMember[]>);
  };

  const groomGrouped = groupByRelation(groomMembers);
  const brideGrouped = groupByRelation(brideMembers);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this family member?')) {
      deleteFamilyMember(id);
      setMembers(getFamilyMembers());
    }
  };

  const renderSide = (grouped: Record<string, FamilyMember[]>, title: string, side: 'groom' | 'bride') => (
    <div className="flex-1 space-y-6 lg:space-y-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8">{title}</h2>
      {Object.entries(grouped).map(([relation, people]) => (
        <div key={relation} className="space-y-3 lg:space-y-4">
          <h3 className="text-lg lg:text-xl font-semibold text-center text-muted-foreground">{relation}s</h3>
          <div className="flex flex-wrap gap-3 lg:gap-6 justify-center">
            {people.map((person) => (
              <PersonCard
                key={person.id}
                name={person.name}
                relation={person.relation}
                photoUrl={person.photoUrl}
                side={side}
                onDelete={() => handleDelete(person.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (members.length === 0) {
    return (
      <div className="text-center py-12 lg:py-20 px-4">
        <Heart className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl lg:text-2xl font-bold mb-2">No Family Members Yet</h3>
        <p className="text-muted-foreground text-sm lg:text-base">Scan the QR code to start adding family members</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 lg:space-y-12 px-4">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
        {groomMembers.length > 0 && renderSide(groomGrouped, "Groom's Family", 'groom')}
        
        {groomMembers.length > 0 && brideMembers.length > 0 && (
          <div className="flex items-center justify-center lg:my-24 py-4 lg:py-0">
            <Heart className="w-8 h-8 lg:w-12 lg:h-12 text-accent animate-pulse" fill="currentColor" />
          </div>
        )}
        
        {brideMembers.length > 0 && renderSide(brideGrouped, "Bride's Family", 'bride')}
      </div>
    </div>
  );
};

export default FamilyTreeDisplay;