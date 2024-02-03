import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number; // Assuming id is of type number, adjust accordingly
      email: string;
      image: string;
      address: string;
      name: string;
    };
  }
}
