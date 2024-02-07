export enum ChannelList {
  General = 'General',
  Club = 'Club',
  Tech = 'Tech',
  Others = 'Others',
}

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
  userId: number;
  content: string;
  title: string;
  pics: string[];
  channelId: string[];
  status: boolean;
}

export interface AddPostsReq {
  userId: number;
  content: string;
  title: string;
  pics: string[];
  channelId: number[];
  status: number;
}

export const ChannelListMap: { [key: ChannelList]: number } = {
  [ChannelList.General]: 1,
  [ChannelList.Club]: 2,
  [ChannelList.Tech]: 3,
  [ChannelList.Others]: 4,
};
