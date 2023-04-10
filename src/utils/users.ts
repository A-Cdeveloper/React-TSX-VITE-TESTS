// eslint-disable-next-line import/prefer-default-export
export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    return new Error('Error fetching users');
  }
  const data = await response.json();
  return data;
};
