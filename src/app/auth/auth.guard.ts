import { CanMatchFn } from '@angular/router';
import { TokenService } from '../services/tokenService/token.service';

export const authGuard: CanMatchFn = (route, segments) => {
  if (new TokenService().isLoged()) {
    return true;
  }
  return false;
};
