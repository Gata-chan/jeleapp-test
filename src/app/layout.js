export const metadata = {
  title: "My Square",
  description: "For JeLeApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
