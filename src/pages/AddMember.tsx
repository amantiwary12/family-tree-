import { Link } from 'react-router-dom';
import UploadForm from '@/components/UploadForm';
import { Button } from '@/components/ui/button';
import { Home, Eye } from 'lucide-react';

const AddMember = () => {
  return (
    <div className="min-h-screen wedding-gradient py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link to="/tree">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View Tree
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Join Our Family Tree
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your connection to our special day
          </p>
        </div>

        <div className="flex justify-center">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default AddMember;
