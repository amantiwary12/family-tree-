import { QRCodeSVG } from 'qrcode.react';
import { Card } from '@/components/ui/card';

interface QRCodeComponentProps {
  url: string;
  size?: number;
}

const QRCodeComponent = ({ url, size = 280 }: QRCodeComponentProps) => {
  return (
    <Card className="card-elegant p-8 inline-block">
      <div className="bg-white p-6 rounded-lg">
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin
          fgColor="#8b5a5f"
        />
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground font-medium">
        Scan to add family member
      </p>
    </Card>
  );
};

export default QRCodeComponent;
