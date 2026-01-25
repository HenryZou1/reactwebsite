import React, { useState } from "react";
import { Award, X } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl: string;
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  onClick: () => void;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialId,
  onClick,
}) => {
  return (
    <section id="Certifications">
      <div
        onClick={onClick}
        className="group bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer hover:scale-[1.02]"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
              {issuer}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span>{date}</span>
              {credentialId && (
                <>
                  <span>•</span>
                  <span className="font-mono text-xs">{credentialId}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            <span className="text-sm">View Certificate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div
        className="relative w-[95vw] h-[95vh] bg-slate-900 rounded-lg shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-3 bg-slate-800 border-b border-slate-700 flex-shrink-0">
          <h3 className="text-lg font-semibold text-white truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="flex-1 w-full overflow-hidden flex items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      title: "Bachelor Degree of Computer Engineering",
      issuer: "Toronto Metropolitan University (Formerly Ryerson University)",
      date: "October 2020",
      credentialId: "",
      imageUrl: "images/bachelor.png",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "October 18, 2025",
      credentialId: "58E1BCDE9AF80D95",
      imageUrl: "images/az104.png",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: " July 3, 2024",
      credentialId: "A5046CCCEB198414",
      imageUrl: "images/AZ-900.png",
    },
    {
      title: "IBM Z Xplore - All Star",
      issuer: "IBM",
      date: "October 13, 2024",
      credentialId: "",
      imageUrl: "images/xplore.png",
    },
  ];

  const handleOpenCert = (cert: Certification) => {
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Professional credentials and achievements
            </p>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                credentialId={cert.credentialId}
                onClick={() => handleOpenCert(cert)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <ImageModal
          isOpen={!!selectedCert}
          onClose={handleCloseCert}
          imageUrl={selectedCert.imageUrl}
          title={selectedCert.title}
        />
      )}
    </>
  );
};

export default Certifications;
