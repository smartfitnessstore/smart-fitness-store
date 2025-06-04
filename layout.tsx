export const metadata = {
  title: "Smart Fitness Store",
  description: "AI-Powered Smart Fitness Equipment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
