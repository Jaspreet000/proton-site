import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        // Replace this with a proper user check
        if (
          credentials.username === "vivek@protondatalabs.com" &&
          credentials.password === "Brave222#"
        ) {
          return { id: 1, name: "Admin" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

// Export as named exports for HTTP methods
export { handler as GET, handler as POST };
