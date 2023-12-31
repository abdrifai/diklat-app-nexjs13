import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import AuthProviders from "@/app/components/AuthProviders";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SiLaga",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProviders session={session}>
            <ToastContainer />
            <Navbar />
            {/* <Sidebar />
        <ModalSearch /> */}
            <div>{children}</div>
          </AuthProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
