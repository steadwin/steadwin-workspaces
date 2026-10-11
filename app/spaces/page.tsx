import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkspaceCard from "@/components/WorkspaceCard";
import { workspaces } from "@/data/spaces";

export default function SpacesPage(){
  return <><Navbar/><main><section className="page-hero premium-page-hero"><div className="container"><span className="eyebrow gold">WORKSPACE MARKETPLACE</span><h1>Find a workspace that fits the way you work</h1><p>STEADWIN flagship locations and partner workspaces in one premium discovery experience.</p></div></section><section className="section"><div className="container"><div className="search-panel"><div><small>Location</small><strong>Bengaluru</strong></div><div><small>Workspace type</small><strong>Dedicated Desk / Team Space</strong></div><div><small>Budget</small><strong>From ₹4,999/month</strong></div><a className="btn btn-primary" href="https://wa.me/919035275367" target="_blank" rel="noreferrer">Get Recommendations</a></div><div className="filter-row"><button>All Spaces</button><button>JP Nagar</button><button>Jayanagar</button><button>BTM</button><button>Dedicated Desk</button><button>Meeting Room</button></div><div className="spaces-grid light-grid">{workspaces.map(s=><WorkspaceCard key={s.id} space={s}/>)}</div></div></section></main><Footer/></>
}
