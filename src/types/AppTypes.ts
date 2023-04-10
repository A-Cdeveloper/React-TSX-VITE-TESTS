export interface TeamType {
  team_id: number;
  team_name: string;
  team_country: string;
}

export interface TeamsType {
  teams: TeamType[];
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersType {
  users: UserType[];
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsType {
  postsList: PostType[];
}
