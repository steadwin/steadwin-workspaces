export type Workspace = {
  id: number;
  name: string;
  area: string;
  type: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
};

export const workspaces: Workspace[] = [
  {
    id: 1,
    name: "STEADWIN Workspaces - JP Nagar",
    area: "JP Nagar 7th Phase, Bengaluru",
    type: "Dedicated Desk • Meeting Room",
    price: "From ₹4,999/mo",
    image: "/images/workspace-1.jpg",
    description: "Fully furnished premium workspace with reception, lounge, meeting room, AC and high-speed Wi-Fi.",
    badge: "STEADWIN Flagship",
  },
  {
    id: 2,
    name: "Partner Workspace",
    area: "Jayanagar, Bengaluru",
    type: "Dedicated Desk • Team Space",
    price: "Partner pricing",
    image: "/images/workspace-2.jpg",
    description: "Partner workspace listings can be added here with verified pricing, photos, amenities and availability.",
    badge: "Partner Listing",
  },
  {
    id: 3,
    name: "Partner Workspace",
    area: "BTM Layout, Bengaluru",
    type: "Desk • Meeting Room",
    price: "Partner pricing",
    image: "/images/workspace-3.jpg",
    description: "Scale STEADWIN into a multi-location workspace marketplace without leasing every location yourself.",
    badge: "Partner Listing",
  },
];
