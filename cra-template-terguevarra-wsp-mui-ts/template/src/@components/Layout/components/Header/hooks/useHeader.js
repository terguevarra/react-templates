import { useState, useEffect } from 'react';

import { UsersService } from '@services/MsGraphService';

function useHeader () {
  const usersService = new UsersService();
  const [userData, setUserData] = useState(null);
  const [imgBase64, setImgBase64] = useState(null);

  const GetMe = async () => {
    let userData = await usersService.Me();
    setUserData(userData);
  }

  const GetMyPhoto = async () => {
    let reader = new FileReader();
    let blob = await usersService.GetMyPhoto();
    reader.onloadend = function () {
      setImgBase64(reader.result);
    }
    reader.readAsDataURL(blob);
  }

  useEffect(() => {
    GetMe();
    GetMyPhoto();
  }, []);

  return {
    userData,
    userPhotoBase64: imgBase64
  }
}

export default useHeader;