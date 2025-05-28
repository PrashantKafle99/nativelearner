import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";

function RouteGuard({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuth = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuth && pathname !== "/auth") {
        router.replace("/auth");
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, [isAuth, pathname, router]); 

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="auth" 
          options={{
            headerShown: true
          }} 
        />
      </Stack>
    </RouteGuard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  }
})