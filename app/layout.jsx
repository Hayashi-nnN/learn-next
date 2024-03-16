// Root Layout

import '../styles/global.css';
import Navigation from '../components/NavBar';

export const metadata = {
  title: {
    template: 'Hayashi | %s',
    default: 'Hayashi',
  },
  description: 'root layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
