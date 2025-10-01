import { Link } from 'react-router-dom';
import FamilyTreeDisplay from '@/components/FamilyTreeDisplay';
import DownloadPDFButton from '@/components/DownloadPDFButton';
import { Button } from '@/components/ui/button';
import { Home, UserPlus } from 'lucide-react';

const FamilyTree = () => {
  return (
    <div className="min-h-screen wedding-gradient py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <Link to="/">
            <Button variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <div className="flex gap-4">
            <Link to="/add-member">
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            </Link>
            <DownloadPDFButton />
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Our Family Tree
          </h1>
          <p className="text-lg text-muted-foreground">
            Celebrating the families that brought us together
          </p>
        </div>

        <div id="family-tree-container" className="bg-card rounded-2xl p-8 shadow-2xl">
          <FamilyTreeDisplay />
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
