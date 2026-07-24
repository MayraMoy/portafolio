import { CvIcon } from "../icons";

const CvDownload = () => (
  <div className="cv-download">
    <a
      href="/CV_MAYRA_YAZMIN_MOYANO.pdf"
      download="CV_MAYRA_YAZMIN_MOYANO.pdf"
      aria-label="Descargar CV"
      title="Descargar mi CV"
    >
      <CvIcon />
    </a>
  </div>
);

export default CvDownload;