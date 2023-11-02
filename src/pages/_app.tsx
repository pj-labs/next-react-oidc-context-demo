import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
    client_id: 'pres',
    redirect_uri: 'https://localhost:3000/authentication/callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://auth.ncats.nih.gov/_api/v2/auth/NCI-CCR-TEST',
};

export default function App({Component, pageProps}: AppProps) {
    return <AuthProvider {...oidcConfig}>
        <Component {...pageProps} />
    </AuthProvider>
}
