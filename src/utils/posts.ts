// eslint-disable-next-line import/prefer-default-export
export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};
