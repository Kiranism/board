import SideBar from "@/components/SideBar";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Board",
  description: "Dashboard App",
};

export default async function DashboardLayout({ children }) {
  const user = await getCurrentUser();
  if (!user) {
    return redirect("/signin");
  }
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100 gap-4">
      <div className="hidden lg:flex w-72 z-50">
        <SideBar />
      </div>
      <div className="flex-1 overflow-x-hidden">
        <main className="px-6 py-10">{children}</main>
      </div>
    </div>
  );
}
