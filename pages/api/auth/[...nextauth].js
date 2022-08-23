import NextAuth from "next-auth";
import { SanityAdapter } from "next-auth-sanity";
import Google from "next-auth/providers/google";
import { sanityClient } from "../../../sanity";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(sanityClient),
});
