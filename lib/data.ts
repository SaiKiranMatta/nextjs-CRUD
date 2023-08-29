type Post = {
  id: string;
  title: string;
  desc: string;
  date: string;
};
let posts: Post[] = [
  {
    title: "t1",
    desc: "d1",
    date: "2023-08-29T11:38:10.760Z",
    id: "1693309090760",
  },
  {
    title: "t1",
    desc: "d1",
    date: "2023-08-29T11:38:11.560Z",
    id: "1693309091560",
  },
  {
    title: "t1",
    desc: "d1",
    date: "2023-08-29T11:38:14.207Z",
    id: "1693309094207",
  },
];

export const getPosts = () => posts;

export const addPost = (post: Post) => {
  posts.push(post);
};

export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePost = (id: string, title: string, desc: string) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = title;
    post.desc = desc;
  } else {
    throw new Error("No Post Found");
  }
};

export const getById = (id: string) => {
  return posts.find((post) => post.id === id);
};
