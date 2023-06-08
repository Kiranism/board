import { montserrat } from "@/utils/Fonts";
import "./globals.css";
import AuthProvider from "../components/AuthProvider";
import SideBar from "../components/SideBar";

export const metadata = {
  title: "Board",
  description: "Dashboard App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
