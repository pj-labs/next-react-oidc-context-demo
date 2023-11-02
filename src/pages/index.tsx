import { useAuth } from 'react-oidc-context';

export default function Home() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {auth.isAuthenticated && (<div>
        <p>Hello {auth.user?.profile.name}{" "}</p>
      </div>)
      }
      {auth.isAuthenticated && <button onClick={() => void auth.removeUser()}>Log out</button>}
      {!auth.isAuthenticated && <button onClick={() => void auth.signinRedirect()}>Log in</button>}
    </main>
  )
}




