import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Upload, Users } from 'lucide-react';
import { saveFamilyMember } from '@/utils/storage';
import { toast } from 'sonner';

const relations = {
  groom: ['Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Cousin', 'Grandfather', 'Grandmother'],
  bride: ['Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Cousin', 'Grandfather', 'Grandmother'],
};

const UploadForm = () => {
  const [side, setSide] = useState<'groom' | 'bride' | ''>('');
  const [relation, setRelation] = useState('');
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!side || !relation || !name) {
      toast.error('Please fill in all required fields');
      return;
    }

    saveFamilyMember({
      name,
      relation,
      side: side as 'groom' | 'bride',
      photoUrl,
    });

    toast.success(`${name} added successfully!`);
    
    // Reset form
    setRelation('');
    setName('');
    setPhotoUrl('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="card-elegant p-8 max-w-md w-full">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">Add Family Member</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="side">Family Side *</Label>
          <Select value={side} onValueChange={(value) => setSide(value as 'groom' | 'bride')}>
            <SelectTrigger id="side">
              <SelectValue placeholder="Select side" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="groom">Groom Side</SelectItem>
              <SelectItem value="bride">Bride Side</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {side && (
          <>
            <div className="space-y-2">
              <Label htmlFor="relation">Relation *</Label>
              <Select value={relation} onValueChange={setRelation}>
                <SelectTrigger id="relation">
                  <SelectValue placeholder="Select relation" />
                </SelectTrigger>
                <SelectContent>
                  {relations[side].map((rel) => (
                    <SelectItem key={rel} value={rel}>
                      {rel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">Photo (Optional)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="flex-1"
                />
                {photoUrl && (
                  <img
                    src={photoUrl}
                    alt="Preview"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                )}
              </div>
            </div>

            <Button type="submit" className="w-full btn-wedding">
              <Upload className="w-4 h-4 mr-2" />
              Add to Family Tree
            </Button>
          </>
        )}
      </form>
    </Card>
  );
};

export default UploadForm;
