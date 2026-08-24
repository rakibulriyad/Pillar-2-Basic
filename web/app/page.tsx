import HomeContent from "./components/HomeContent";
import { getManifest } from "@/lib/content";

export default function HomePage() {
  const manifest = getManifest();
  return <HomeContent manifest={manifest} />;
}
