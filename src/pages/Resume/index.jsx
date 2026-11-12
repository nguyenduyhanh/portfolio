import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const CV_PDF_URL = "/cv.pdf";
const DRIVE_FALLBACK_URL = "https://drive.google.com/file/d/1_mT7s9EE09nThBzVdWFnZpU2ShdUZfd4/view?usp=sharing";

const ResumePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-muted/40 text-foreground transition-colors duration-300 font-sans flex flex-col">
      {/* Top Action Bar - Clean & Minimal (Chỉ có Back, Open Tab & Download PDF) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border shadow-xs print:hidden">
        <div className="max-w-[900px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-border bg-card text-foreground font-medium text-xs sm:text-sm hover:bg-muted transition-colors shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2.5">
            {/* Mở tab mới xem toàn màn hình (không còn nút đè trên CV) */}
            <a
              href={CV_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-border bg-card text-foreground font-medium text-xs sm:text-sm hover:bg-muted transition-colors shadow-xs cursor-pointer"
              title="Mở tài liệu trong tab mới"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Tab</span>
            </a>

            {/* Nút Download PDF trực tiếp */}
            <a
              href={CV_PDF_URL}
              download="Nguyen_Duy_Hanh_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              title="Tải file PDF về máy"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main CV Document Viewer (Tải file nội bộ sạch 100%, không dính nút pop-out hay viền đen của Google Drive) */}
      <main className="flex-1 max-w-[900px] w-full mx-auto px-3 sm:px-4 py-6 sm:py-8 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative flex-1 w-full min-h-[780px] sm:min-h-[1000px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-white shadow-2xl"
        >
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 gap-3">
              <div className="w-8 h-8 rounded-full border-3 border-primary border-t-transparent animate-spin" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Đang tải tài liệu CV...
              </p>
            </div>
          )}

          <iframe
            src={`${CV_PDF_URL}#toolbar=0&navpanes=0`}
            onLoad={() => setLoading(false)}
            className="w-full h-full min-h-[780px] sm:min-h-[1000px] border-none block bg-white"
            title="Nguyen Duy Hanh Curriculum Vitae"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default ResumePage;
