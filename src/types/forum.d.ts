export interface Posts {
  userName: string;
  userAvatar: string;
  createTime: Date;
  likeCount: number;
  viewCount: number;
  content: string;
  title: string;
  pics: string[];
}

export interface AddPosts {
  content: string;
  title: string;
  pics: string[];
  channelId: string[];
  status: boolean;
}
