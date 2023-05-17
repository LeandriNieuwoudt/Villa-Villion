import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
    <Component {...pageProps} />
    </ClerkProvider>
  )
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default api.withTRPC(MyApp);
