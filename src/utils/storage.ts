export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  side: 'groom' | 'bride';
  photoUrl: string;
  timestamp: number;
}

const STORAGE_KEY = 'wedding-family-members';

export const saveFamilyMember = (member: Omit<FamilyMember, 'id' | 'timestamp'>): void => {
  const members = getFamilyMembers();
  const newMember: FamilyMember = {
    ...member,
    id: crypto.randomUUID(),
    timestamp: Date.now(),
  };
  members.push(newMember);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
};

export const getFamilyMembers = (): FamilyMember[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearFamilyMembers = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
