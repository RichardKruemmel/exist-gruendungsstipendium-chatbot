import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exist Stipendium Chat Bot",
  description:
    "An interactive chatbot that provides information and assistance regarding the Exist Stipendium program, utilizing the OpenAI Assistants API for enhanced user engagement",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/exist.svg" alt="Exist Logo" />
      </body>
    </html>
  );
}
