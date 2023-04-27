import Twit from 'twit';
import { ContentTemplates, ReplaceKeys, TwitterActions } from '../models';

const apiConfig = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token: process.env.TWITTER_ACCESS_TOKEN || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
};

const twit = new Twit(apiConfig);

const postTweet = async (content: string): Promise<void> => {
  await twit.post(TwitterActions.Post, {
    status: content,
  });
};

const generateReplyFollowTweet = (username: string): string => {
  return ContentTemplates.ReplyFollow.replace(ReplaceKeys.Username, username);
};

export default {
  postTweet,
  generateReplyFollowTweet,
};
