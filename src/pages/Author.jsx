import PageHeader from "../components/PageHeader";

export default function Author() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="About"
        title="Author"
      />

      <div className="author-card">
        <p className="author-name">An Armchair Archaeologist</p>
        <p className="author-role">CS Student · Victoria Village, Canumay East</p>
        <p className="author-bio">
          This project grew out of a simple observation: the house I grew up in
          had a well inside the living room floor. Someone, at some point, dug
          through the sala and found water. That felt like a clue.
        </p>
      </div>

      <hr className="divider" />

      <p className="page-eyebrow" style={{ marginBottom: "1rem" }}>About this project</p>

      <div className="placeholder-block">
        Project notes, methodology, acknowledgements — add here
      </div>

      <hr className="divider" />

      <div style={{ marginTop: "1.5rem" }}>
        <p className="page-eyebrow" style={{ marginBottom: "0.75rem" }}>Sources & References</p>
        <div className="placeholder-block">
          Bibliography / references list — add here
        </div>
      </div>
    </div>
  );
}
