import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { exportToPDF } from '@/utils/pdfExport';
import { toast } from 'sonner';

const DownloadPDFButton = () => {
  const handleDownload = async () => {
    try {
      toast.loading('Generating PDF...');
      await exportToPDF('family-tree-container', 'wedding-family-tree.pdf');
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate PDF');
    }
  };

  return (
    <Button onClick={handleDownload} className="btn-wedding-secondary">
      <Download className="w-4 h-4 mr-2" />
      Download as PDF
    </Button>
  );
};

export default DownloadPDFButton;
