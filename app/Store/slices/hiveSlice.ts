import create from "zustand";
import {
  hives,
  singleHive,
  hivesUserPost,
  hivesSingleMember,
} from "~/service/HiveService";

interface HiveData {
  amount: string;
  created_at: string;
  created_by: {
    email: string;
    first_name: string;
    last_name: string;
  };
  image: string;
  deleted_at: string;
  description: string;
  id: string;
  interest: {
    created_at: string;
    id: number;
    name: string;
    slug: string;
    updated_at: string;
  };
  name: string;
  slug: string;
  type: string;
  updated_at: string;
  visibility: string;
}

interface HiveStore {
  hives: HiveData[];
  createdHive: HiveData[];
  fetchHives: () => Promise<void>;
  fetchCreatedHives: () => Promise<void>;
}

interface HiveState {
  getSingleHive: any | HiveData;
  getSingleUserPost: any | HiveData;
  getSinglemember: any | HiveData;
  isLoading: boolean;
  error: string | null;
  fetchSingleHive: (id: string) => Promise<void>;
  fetchSingleHivePost: (id: string) => Promise<void>;
  fetchHiveSingleMember: (id: string) => Promise<void>;
}
export const FetchHiveStore = create<HiveStore>((set) => ({
  hives: [],
  createdHive: [],
  fetchCreatedHives: async () => {
    try {
      const response = await hives("suggested");
      set({ createdHive: response.data.data });
    } catch (error) {
      console.error("Error fetching hives:", error);
    }
  },
  fetchHives: async () => {
    
    try {
      const response = await hives("created");
      set({ hives: response.data.data });
    } catch (error) {
      console.error("Error fetching hives:", error);
    }
  },
}));

export const SingleHiveStore = create<HiveState>((set) => ({
  getSingleHive: null,
  getSingleUserPost: null,
  getSinglemember: null,
  isLoading: false,
  error: null,
  fetchSingleHive: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await singleHive(id);
      set({ getSingleHive: response.data.data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false });
    }
  },
  fetchSingleHivePost: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await hivesUserPost(id);
      set({
        getSingleUserPost: response.data.data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ isLoading: false, error: "Failed to fetch user post" });
      console.error("Error fetching single hive post:", error);
    }
  },
  fetchHiveSingleMember: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await hivesSingleMember(id);
      set({
        getSinglemember: response.data.data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ isLoading: false, error: "Failed to fetch user post" });
      console.error("Error fetching single hive post:", error);
    }
  },
}));

