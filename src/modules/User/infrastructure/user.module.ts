import { SignInUserService } from "./../application/services/signin/signin-user.service";
import { FarmaLealPVUserRepository } from "./repositories/mia-user.repository";

export const userModule = () => {
  const repository = new FarmaLealPVUserRepository();
  const service = new SignInUserService(repository);

  return {
    signIn: service,
  };
};
