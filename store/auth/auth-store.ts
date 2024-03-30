import { create } from 'zustand';
import { MyPermissions, UserType } from './auth-store.types';
import { getMyPermissionsStore } from './auth-store.utils';

type AuthStore = {
  isAuthenticated: boolean;
  onSetIsAuthenticated: (isAuthenticated: boolean) => void;

  user: any;
  onSetUserProfile: (user: any) => void;

  isWelcomeScreen: boolean;
  onSetIsWelcomeScreen: (isWelcomeScreen: boolean) => void;

  myPermissions: MyPermissions;
  myPermissionsString: string;
  permissions: string[];
  onSetMyPermissions: (myPermissionsString: string) => void;

  userType: UserType;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: null,
  onSetIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),

  user: null,
  userType: UserType.ADMIN,
  onSetUserProfile: (user: any) => {
    const permissionsString = user?.permissions;
    set({ user });
    set({ userType: user?.user_type });
    set({
      myPermissionsString: permissionsString,
    });
    set({
      permissions: permissionsString?.split(',') || [],
    });
    set({ myPermissions: getMyPermissionsStore(permissionsString) });
  },

  isWelcomeScreen: false,
  onSetIsWelcomeScreen: (isWelcomeScreen: boolean) => set({ isWelcomeScreen }),

  myPermissions: null,
  myPermissionsString: '',
  permissions: [],
  onSetMyPermissions: (myPermissionsString: string) => {
    set({ myPermissionsString });
    set({ permissions: myPermissionsString?.split(',') || [] });
    set({ myPermissions: getMyPermissionsStore(myPermissionsString) });
  },
}));
