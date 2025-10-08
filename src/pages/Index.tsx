import { Link } from 'react-router-dom';
import QRCodeComponent from '@/components/QRCodeComponent';
import { Button } from '@/components/ui/button';
import { Eye, Heart, Users } from 'lucide-react';

const Index = () => {
  const formUrl = `${window.location.origin}${window.location.pathname}#/add-member`; // use hash so QR works on static hosts


  return (
    <div className="min-h-screen wedding-gradient">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-accent animate-pulse" fill="currentColor" />
            <h1 className="text-6xl font-bold text-foreground">
              Wedding Family Tree
            </h1>
            <Heart className="w-12 h-12 text-accent animate-pulse" fill="currentColor" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect our families digitally. Scan the QR code to add your information
            and become part of our special celebration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-6">
            <QRCodeComponent url={formUrl} />
            <p className="text-center text-sm text-muted-foreground max-w-md">
              Point your phone camera at this QR code to open the form and add yourself to the family tree
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/add-member">
              <Button size="lg" className="btn-wedding">
                <Users className="w-5 h-5 mr-2" />
                Add Family Member
              </Button>
            </Link>
            <Link to="/tree">
              <Button size="lg" variant="outline">
                <Eye className="w-5 h-5 mr-2" />
                View Family Tree
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card-elegant p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Join</h3>
            <p className="text-muted-foreground text-sm">
              Simply scan the QR code and fill in your details
            </p>
          </div>

          <div className="card-elegant p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-secondary" fill="currentColor" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Beautiful Display</h3>
            <p className="text-muted-foreground text-sm">
              See both families connected in an elegant tree layout
            </p>
          </div>

          <div className="card-elegant p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Share & Download</h3>
            <p className="text-muted-foreground text-sm">
              Export the complete tree as a PDF to keep forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
