export const CommunityCard = [
  {
    imageUrl: "/images/A.png",
    title: "Code Rush Ninga",
    members: "41k",
  },
  {
    imageUrl: "/images/B.png",
    title: "Bakers Hub",
    members: "500k",
  },
  {
    imageUrl: "/images/C.png",
    title: "3D Designers Africa",
    members: "30k",
  },

  {
    imageUrl: "/images/carHive.png",
    title: "Car Geeks Africa",
    members: "5k",
  },
  {
    imageUrl: "/images/B.png",
    title: "Bakers Hub",
    members: "500k",
  },
  {
    imageUrl: "/images/C.png",
    title: "3D Designers Africa",
    members: "30k",
  },
];
export const FeedsDetails = [
  {
    name: "Nelson Mojolaoluwa",
    username: "@mistamojolarh",
    day: "2 days ago",
    //  post:"  Discover, connect, and grow with { 'Hivvy's'} vibrant social platform. Engage with like-minded learners, share insights, and embark on a journey of knowledge together. Start your adventure today!",
    image: "/images/black-girls-city 2.png",
  },
  {
    name: "Nelson Mojolaoluwa",
    username: "@mistamojolarh",
    day: "2 days ago",
    post: "  Discover, connect, and grow with { 'Hivvy's'} vibrant social platform. Engage with like-minded learners, share insights, and embark on a journey of knowledge together. Start your adventure today!",
    // image:'/images/black-girls-city 1 (2).png',
  },
  {
    name: "Nelson Mojolaoluwa",
    username: "@mistamojolarh",
    day: "2 days ago",
    post: "  Discover, connect, and grow with { 'Hivvy's'} vibrant social platform. Engage with like-minded learners, share insights, and embark on a journey of knowledge together. Start your adventure today!",
    // image:'/images/black-girls-city 1 (2).png',
  },
  {
    name: "Nelson Mojolaoluwa",
    username: "@mistamojolarh",
    day: "2 days ago",
    //  post:"  Discover, connect, and grow with { 'Hivvy's'} vibrant social platform. Engage with like-minded learners, share insights, and embark on a journey of knowledge together. Start your adventure today!",
    image: "/images/black-girls-city 1 (2).png",
  },
  {
    name: "Nelson Mojolaoluwa",
    username: "@mistamojolarh",
    day: "2 days ago",
    post: "  Discover, connect, and grow with { 'Hivvy's'} vibrant social platform. Engage with like-minded learners, share insights, and embark on a journey of knowledge together. Start your adventure today!",
    image: "/images/black-girls-city 1 (3).png",
  },
];

export const tabs = ["Feeds", "Your Post", "People"];
export const notificationsTabs = ['News', 'Activities', 'Transactions'];
export const People = [
  {
    imageUrl: "/icons/Avatars.svg",
    people: "Martin Saris",
  },
  {
    imageUrl: "/icons/Avatars.svg",
    people: "Kierra Culhan",
  },
  {
    imageUrl: "/icons/Avatars.svg",
    people: "Lindsey Saris",
  },
  {
    imageUrl: "/icons/Avatars.svg",
    people: "Jordyn Septimus",
  },
  {
    imageUrl: "/icons/Avatars.svg",
    people: "Zaire Lubin",
  },
];

export const years = Array.from(
  { length: 2031 - 1990 },
  (_, index) => 1990 + index
);
export const dayOptions = Array.from({ length: 31 }, (_, index) => ({
  value: (index + 1).toString(),
  label: (index + 1).toString(),
}));
export const monthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((month, index) => ({ value: (index + 1).toString(), label: month }));

export const yearOptions = years.map((year) => ({
  value: year.toString(),
  label: year.toString(),
}));
