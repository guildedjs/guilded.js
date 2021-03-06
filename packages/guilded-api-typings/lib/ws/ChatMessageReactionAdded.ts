import { APICustomReaction, CHANNEL_CONTENT_TYPES, CHANNEL_TYPES } from '../common';

export interface WSChatMessageReactionAdded {
    type: 'ChatMessageReactionAdded';
    guildedClientId: string;
    channelId: string;
    channelCategoryId: string | null;
    channelType: CHANNEL_TYPES;
    teamId: string | null;
    contentType: CHANNEL_CONTENT_TYPES;
    reaction: {
        customReactionId: number;
        customReaction: APICustomReaction;
        createdBy: string;
    };
    message: {
        id: string;
    };
    silenceNotification: boolean;
}
