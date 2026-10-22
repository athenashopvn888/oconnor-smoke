export default function HomeTitleBlock({ title }: { title: string }) {
  return (
    <header data-home-title-block="" style={{ width: "100%", boxSizing: "border-box", padding: "10px 16px", background: "#0b1018", color: "#ffffff", textAlign: "center" }}>
      <h1 style={{ margin: 0, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.2, fontWeight: 900 }}>{title}</h1>
    </header>
  );
}
