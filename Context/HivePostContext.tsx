'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { getSinglePost, createPost } from '~/service/HiveService';

interface Profile {
  first_name: string;
  last_name: string;
  image: any;
}

interface User {
  email?: string;
  id?: string;
  profile: Profile;
  username: string;
}

interface Post {
  id: string;
  text?: string;
  images?:any;
  user: User;
  commentTo: any;
  created_at: string;
  updated_at: string;
}

interface HivePostContextProps {
  posts: any;

  addHivePost: (id: string, postData: FormData) => Promise<void>;
}

const HivePostContext = createContext<HivePostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);



  const addHivePost = async (id: string, postData: FormData) => {
    const response = await createPost(id, postData);
    setPosts([...posts, response.data.data]);
  };

  return (
    <HivePostContext.Provider value={{ posts,  addHivePost }}>
      {children}
    </HivePostContext.Provider>
  );
};

export const useHivePostContext = () => {
  const context = useContext(HivePostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
