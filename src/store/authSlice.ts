import { StateCreator } from 'zustand';
import { signUp, signIn, signOut, getUser } from '../services/authService';
import { User } from '@supabase/supabase-js';


export interface AuthStoreState {
  user: User | null;
  authError: string | null;
  authLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getUser: () => Promise<void>;
}

export const createAuthSlice: StateCreator<AuthStoreState> = (set) => ({
  user: null,
  authError: null,
  authLoading: false,

  signUp: async (email: string, password: string) => {
    set({ authLoading: true, authError: null });
    try {
      const data = await signUp(email, password);
      set({ user: data.user, authLoading: false });

    } catch (error: any) {
      set({ authError: error.message, authLoading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    set({ authLoading: true, authError: null });
    try {
      const data = await signIn(email, password);
      set({ user: data.user, authLoading: false });
    } catch (error: any) {
      set({ authError: error.message, authLoading: false });
    }
  },

  signOut: async () => {
    set({ authLoading: true, authError: null });
    try {
      await signOut();
      set({ user: null, authLoading: false });
    } catch (error: any) {
      set({ authError: error.message, authLoading: false });
    }
  },

  getUser: async () => {
    set({ authLoading: true, authError: null });
    try {
      const {data} = await getUser();
      set({ user: data.user, authLoading: false });
    } catch (error: any) {
      set({ authError: error.message, authLoading: false });
    }
  },
});
