import { authorize } from "@/Application/auth/auth-service";
import { ILoginProviders, IUserLoged } from "../interfaces/auth/auth.interface";

export const loginProviders = {
  google: async ({ email }: ILoginProviders): Promise<IUserLoged> => {
    const provider: string = "google";
    const dbUser = await authorize(
      { email: email } as Record<"email" | "password", string>,
      undefined,
      provider
    );
    return dbUser as IUserLoged;
  },
  credentials: ({ user }: ILoginProviders): IUserLoged => user as IUserLoged,
};
