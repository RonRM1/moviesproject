const USER_ID = "user-id";

const UserStorageService = {};

UserStorageService.logOut = () => {
   sessionStorage.clear();
};

UserStorageService.saveId = (token) => {
   sessionStorage.removeItem(USER_ID);
   sessionStorage.setItem(USER_ID, token);
};

UserStorageService.getId = () => {
   return sessionStorage.getItem(USER_ID);
};

export default UserStorageService;
