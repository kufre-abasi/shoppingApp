import million from "million/compiler";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
  images:{
    domains:["res.cloudinary.com"]
  }
};
 
const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};
 
export default million.next(nextConfig, millionConfig);