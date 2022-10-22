// src/pages/_app.tsx
import { ChakraProvider, filter } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "components/layout";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
