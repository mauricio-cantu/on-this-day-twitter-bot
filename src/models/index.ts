export enum TwitterActions {
  Post = 'statuses/update',
}

export enum ReplaceKeys {
  Username = '##USER##',
}

export const ContentTemplates = {
  ReplyFollow: `Hey ${ReplaceKeys.Username}, thanks for following!\nThis day will be marked in history!`,
};
