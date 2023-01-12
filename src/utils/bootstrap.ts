import { FarmaLealPVUserRepository } from "../modules/User/infrastructure/repositories/mia-user.repository";
import { SignInUserService } from "./../modules/User/application/services/signin/signin-user.service";

const userRepository = new FarmaLealPVUserRepository();
const signInUserService = new SignInUserService(userRepository);

export { signInUserService };
