import '../scss/main.scss';
import { AppProps } from 'next/app';

const NextApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default NextApp;
