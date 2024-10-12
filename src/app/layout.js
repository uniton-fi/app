import { Poppins } from 'next/font/google'
import "./globals.css";
import "./reset.css";

const poppins = Poppins({
    weight: ["100", "300", "400", "600", "700"],
    subsets: ['latin'],
})

export const metadata = {
  title: "Uniton Finance",
  description: "The next generation swaps on TON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
