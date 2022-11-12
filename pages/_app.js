import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    // PROVIDER no es mas que un proveedor de informacion
    <NextUIProvider theme={ darkTheme }> 
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;