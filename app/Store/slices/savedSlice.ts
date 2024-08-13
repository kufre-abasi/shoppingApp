import create from "zustand";
import {
  getSavedPost,
  toggleSavedPost,
createComment
} from "~/service/HiveService";

// Define types for API responses
interface ApiResponse<T> {
  data: {
    data: T;
  };
}
interface CommentBody {
  text: string;
  image?: string;
  comment: string;
}

interface HiveState {
  toggleSaved: any;
  comment: any;
  toggler: any;
  error: string | null;
  isLoading: boolean;
  postToggleResponse: () => Promise<void>;
  toggleSavedPost: (id: string) => Promise<void>;
  createComment: (id: string, body: CommentBody) => Promise<void>;
}



export const useSavedToggleStore = create<HiveState>((set) => ({
  toggleSaved: null,
  toggler:null,
  isLoading: false,
  error: null,
  comment: null,

  postToggleResponse: async ( ) => {
    set({ isLoading: true, error: null });
       try {
      const response = await getSavedPost() ;
      set({ toggleSaved: response.data.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false, });
      console.error("Error fetching hives:", error);
    }
  },

  toggleSavedPost: async (id:string) =>{
    set({ isLoading: true, error: null });
    try {
   const response = await toggleSavedPost(id) ;
   set({isLoading: false });
 } catch (error) {
   set({ isLoading: false, });
   console.error("Error fetching hives:", error);
 }

  },

  createComment: async (id:string, body:any) =>{
    set({ isLoading: true, error: null });
    try {
   const response = await createComment(id , body) ;
   set({comment:response.data.data,  isLoading: false });
   
 } catch (error) {
   set({ isLoading: false, });
   console.error("Error fetching hives:", error);
 }
},

}));
