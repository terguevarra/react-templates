import { UsersService } from '@services/MsGraphService';

import useAuth from './useAuth';

function useAccount(){
  const userService = new UsersService();
  const { isAuthenticated } = useAuth();

  const getAccount = async () => {
    if(isAuthenticated){
      let response = await userService.Me();
      return response;
    }
    return null;
  }

  return{
    getAccount
  };
}

export default useAccount;