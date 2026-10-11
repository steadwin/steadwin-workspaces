import type { Workspace } from "@/data/spaces";

export default function WorkspaceCard({ space }: { space: Workspace }) {
  const message = encodeURIComponent(`Hi STEADWIN Workspaces, I am interested in ${space.name} (${space.area}). Please share availability and pricing.`);
  return (
    <article className="space-card">
      <div className="space-image" style={{ backgroundImage: `url(${space.image})` }}>
        {space.badge && <span className="badge">{space.badge}</span>}
      </div>
      <div className="space-body">
        <div className="space-topline"><span>{space.area}</span><span>★ 4.9</span></div>
        <h3>{space.name}</h3>
        <p>{space.description}</p>
        <div className="meta"><span>{space.type}</span><strong>{space.price}</strong></div>
        <a className="card-cta" href={`https://wa.me/919035275367?text=${message}`} target="_blank" rel="noreferrer">Check Availability <span>→</span></a>
      </div>
    </article>
  );
}
