import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import * as config from 'config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('jwt.secret'),
    });
  }

  async validate(payload: { username: string }): Promise<User> {
    const { username } = payload;
    const user = await this.userRepository.findUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
