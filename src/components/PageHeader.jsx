export default function PageHeader({ eyebrow, title, subtitle, titleEm }) {
  return (
    <div className="page-header">
      <div className="page-header-top">
        <img src="/logo.png" alt="The Dredge logo" className="page-header-logo" />
        <div className="page-header-text">
          {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
          <h1 className="page-title">
            {titleEm
              ? <>{title} <em>{titleEm}</em></>
              : title}
          </h1>
        </div>
        <img src="/stamp.png" alt="" className="page-header-stamp" aria-hidden="true" />
      </div>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
}
