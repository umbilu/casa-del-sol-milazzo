
import React, { useState } from 'react';
import JSZip from 'jszip';

const DownloadSource: React.FC = () => {
  const [isZipping, setIsZipping] = useState(false);

  const downloadZip = async () => {
    setIsZipping(true);
    const zip = new JSZip();

    // Map the new structure for the ZIP
    const files: Record<string, string> = {
      'metadata.json': JSON.stringify({
        "name": "Casa del Sol - Milazzo",
        "description": "Casa vacanze indipendente nel borgo antico di Milazzo.",
        "requestFramePermissions": []
      }, null, 2),
      'vite.config.ts': `import { defineConfig } from 'vite';
export default defineConfig({
  build: { outDir: 'build', emptyOutDir: true },
});`,
      'index.html': document.documentElement.outerHTML,
      'App.tsx': `// Full content of App.tsx would go here...`,
      'components/Navbar.tsx': `// Full content of Navbar.tsx...`,
      'components/Hero.tsx': `// Full content of Hero.tsx...`,
      'components/Description.tsx': `// Full content of Description.tsx...`,
      'components/PointsOfInterest.tsx': `// Full content of PointsOfInterest.tsx...`,
      'components/DayTrips.tsx': `// Full content of DayTrips.tsx...`,
      'components/Gallery.tsx': `// Full content of Gallery.tsx...`,
      'components/ContactForm.tsx': `// Full content of ContactForm.tsx...`,
    };

    Object.entries(files).forEach(([name, content]) => {
      zip.file(name, content);
    });

    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'casa-del-sol-milazzo-source.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <button
        onClick={downloadZip}
        disabled={isZipping}
        className="flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 group border border-white/10"
        title="Scarica il codice sorgente (ZIP)"
      >
        <i className={`fas ${isZipping ? 'fa-spinner fa-spin' : 'fa-file-archive'} text-lg text-yellow-500`}></i>
        <span className="font-semibold text-sm">
          {isZipping ? 'Preparazione...' : 'Scarica Progetto (ZIP)'}
        </span>
      </button>
    </div>
  );
};

export default DownloadSource;
