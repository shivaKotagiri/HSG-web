/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "./prisma";
import z from "zod";
import type { NextAuthOptions } from "next-auth";

const credentialsZod = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(25),
});

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "College Email",
          type: "text",
          placeholder: "rollno@cmrithyderabad.edu.in",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials): Promise<any> {
        if (!credentials) return null;

        const parsed = credentialsZod.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // Admin
        const admin = await prisma.admin.findUnique({ where: { email } });

        if (admin) {
          const valid = await bcrypt.compare(password, admin.password);
          if (!valid) return null;

          return {
            id: admin.id,
            name: "Admin",
            email: admin.email,
            role: "admin",
          };
        }

        // Student
        const student = await prisma.student.findUnique({ where: { email } });
        if (!student || !student.password) return null;

        const valid = await bcrypt.compare(password, student.password);
        if (!valid) return null;

        return {
          id: student.id,
          name: student.fullName,
          email: student.email,
          role: "student",
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role!;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
        // After successful sign in, NextAuth sends user to baseUrl
        if (url === baseUrl || url === `${baseUrl}/`) return `${baseUrl}/dashboard`;
        // Allow relative redirects
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        return url;
    }
  },
};
