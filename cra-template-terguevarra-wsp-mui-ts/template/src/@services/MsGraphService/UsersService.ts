import BaseService from './BaseService';

class UsersService extends BaseService {
  Me = async () => {
    return await this.Get('/me');
  }

  GetMyPhoto = async () => {
    return await this.GetImage('/me/photo/$value');
  }

  GetUserPhotoByEmail = async (_email: string) => {
    return await this.GetImage(`/users/${_email}/photo/$value`);
  }

  UserByEmail = async (_email: string) => {
    return await this.Get(`/users/${_email}`);
  }
}

export default UsersService;