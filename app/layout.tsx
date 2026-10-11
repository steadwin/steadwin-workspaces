import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEADWIN Workspaces | Premium Coworking in JP Nagar, Bengaluru",
  description: "Premium coworking space in JP Nagar 7th Phase, Bengaluru. Dedicated desks, meeting rooms and flexible team workspaces from ₹4,999/month.",
  keywords: ["coworking space JP Nagar", "dedicated desk JP Nagar", "shared office Bengaluru", "meeting room JP Nagar", "STEADWIN Workspaces"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
