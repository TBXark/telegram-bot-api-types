/** This object represents an incoming update.At most one of the optional parameters can be present in any given update.  https://core.telegram.org/bots/api#update */
export interface Update {
    /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
    update_id: number;
    /** Optional. New incoming message of any kind - text, photo, sticker, etc. */
    message?: Message;
    /** Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
    edited_message?: Message;
    /** Optional. New incoming channel post of any kind - text, photo, sticker, etc. */
    channel_post?: Message;
    /** Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. */
    edited_channel_post?: Message;
    /** Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot */
    business_connection?: BusinessConnection;
    /** Optional. New message from a connected business account */
    business_message?: Message;
    /** Optional. New version of a message from a connected business account */
    edited_business_message?: Message;
    /** Optional. Messages were deleted from a connected business account */
    deleted_business_messages?: BusinessMessagesDeleted;
    /** Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots. */
    message_reaction?: MessageReactionUpdated;
    /** Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes. */
    message_reaction_count?: MessageReactionCountUpdated;
    /** Optional. New incoming inline query */
    inline_query?: InlineQuery;
    /** Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
    chosen_inline_result?: ChosenInlineResult;
    /** Optional. New incoming callback query */
    callback_query?: CallbackQuery;
    /** Optional. New incoming shipping query. Only for invoices with flexible price */
    shipping_query?: ShippingQuery;
    /** Optional. New incoming pre-checkout query. Contains full information about checkout */
    pre_checkout_query?: PreCheckoutQuery;
    /** Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot */
    poll?: Poll;
    /** Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
    poll_answer?: PollAnswer;
    /** Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
    my_chat_member?: ChatMemberUpdated;
    /** Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates. */
    chat_member?: ChatMemberUpdated;
    /** Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
    chat_join_request?: ChatJoinRequest;
    /** Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. */
    chat_boost?: ChatBoostUpdated;
    /** Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. */
    removed_chat_boost?: ChatBoostRemoved;
}


/** Describes the current status of a webhook.  https://core.telegram.org/bots/api#webhookinfo */
export interface WebhookInfo {
    /** Webhook URL, may be empty if webhook is not set up */
    url: string;
    /** True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: boolean;
    /** Number of updates awaiting delivery */
    pending_update_count: number;
    /** Optional. Currently used webhook IP address */
    ip_address?: string;
    /** Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: number;
    /** Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: string;
    /** Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
    last_synchronization_error_date?: number;
    /** Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connections?: number;
    /** Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
    allowed_updates?: Array<string>;
}


/** This object represents a Telegram user or bot.  https://core.telegram.org/bots/api#user */
export interface User {
    /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** True, if this user is a bot */
    is_bot: boolean;
    /** User's or bot's first name */
    first_name: string;
    /** Optional. User's or bot's last name */
    last_name?: string;
    /** Optional. User's or bot's username */
    username?: string;
    /** Optional. IETF language tag of the user's language */
    language_code?: string;
    /** Optional. True, if this user is a Telegram Premium user */
    is_premium?: boolean;
    /** Optional. True, if this user added the bot to the attachment menu */
    added_to_attachment_menu?: boolean;
    /** Optional. True, if the bot can be invited to groups. Returned only in getMe. */
    can_join_groups?: boolean;
    /** Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. */
    can_read_all_group_messages?: boolean;
    /** Optional. True, if the bot supports inline queries. Returned only in getMe. */
    supports_inline_queries?: boolean;
    /** Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe. */
    can_connect_to_business?: boolean;
    /** Optional. True, if the bot has a main Web App. Returned only in getMe. */
    has_main_web_app?: boolean;
}


/** This object represents a chat.  https://core.telegram.org/bots/api#chat */
export interface Chat {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: string;
    /** Optional. Title, for supergroups, channels and group chats */
    title?: string;
    /** Optional. Username, for private chats, supergroups and channels if available */
    username?: string;
    /** Optional. First name of the other party in a private chat */
    first_name?: string;
    /** Optional. Last name of the other party in a private chat */
    last_name?: string;
    /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: boolean;
}


/** This object contains full information about a chat.  https://core.telegram.org/bots/api#chatfullinfo */
export interface ChatFullInfo {
    /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** Type of the chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: string;
    /** Optional. Title, for supergroups, channels and group chats */
    title?: string;
    /** Optional. Username, for private chats, supergroups and channels if available */
    username?: string;
    /** Optional. First name of the other party in a private chat */
    first_name?: string;
    /** Optional. Last name of the other party in a private chat */
    last_name?: string;
    /** Optional. True, if the supergroup chat is a forum (has topics enabled) */
    is_forum?: boolean;
    /** Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details. */
    accent_color_id: number;
    /** The maximum number of reactions that can be set on a message in the chat */
    max_reaction_count: number;
    /** Optional. Chat photo */
    photo?: ChatPhoto;
    /** Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels */
    active_usernames?: Array<string>;
    /** Optional. For private chats, the date of birth of the user */
    birthdate?: Birthdate;
    /** Optional. For private chats with business accounts, the intro of the business */
    business_intro?: BusinessIntro;
    /** Optional. For private chats with business accounts, the location of the business */
    business_location?: BusinessLocation;
    /** Optional. For private chats with business accounts, the opening hours of the business */
    business_opening_hours?: BusinessOpeningHours;
    /** Optional. For private chats, the personal channel of the user */
    personal_chat?: Chat;
    /** Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed. */
    available_reactions?: Array<ReactionType>;
    /** Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background */
    background_custom_emoji_id?: string;
    /** Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details. */
    profile_accent_color_id?: number;
    /** Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background */
    profile_background_custom_emoji_id?: string;
    /** Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat */
    emoji_status_custom_emoji_id?: string;
    /** Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any */
    emoji_status_expiration_date?: number;
    /** Optional. Bio of the other party in a private chat */
    bio?: string;
    /** Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user */
    has_private_forwards?: boolean;
    /** Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat */
    has_restricted_voice_and_video_messages?: boolean;
    /** Optional. True, if users need to join the supergroup before they can send messages */
    join_to_send_messages?: boolean;
    /** Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators */
    join_by_request?: boolean;
    /** Optional. Description, for groups, supergroups and channel chats */
    description?: string;
    /** Optional. Primary invite link, for groups, supergroups and channel chats */
    invite_link?: string;
    /** Optional. The most recent pinned message (by sending date) */
    pinned_message?: Message;
    /** Optional. Default chat member permissions, for groups and supergroups */
    permissions?: ChatPermissions;
    /** Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats. */
    can_send_paid_media?: boolean;
    /** Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds */
    slow_mode_delay?: number;
    /** Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions */
    unrestrict_boost_count?: number;
    /** Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds */
    message_auto_delete_time?: number;
    /** Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. */
    has_aggressive_anti_spam_enabled?: boolean;
    /** Optional. True, if non-administrators can only get the list of bots and administrators in the chat */
    has_hidden_members?: boolean;
    /** Optional. True, if messages from the chat can't be forwarded to other chats */
    has_protected_content?: boolean;
    /** Optional. True, if new chat members will have access to old messages; available only to chat administrators */
    has_visible_history?: boolean;
    /** Optional. For supergroups, name of the group sticker set */
    sticker_set_name?: string;
    /** Optional. True, if the bot can change the group sticker set */
    can_set_sticker_set?: boolean;
    /** Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group. */
    custom_emoji_sticker_set_name?: string;
    /** Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    linked_chat_id?: number;
    /** Optional. For supergroups, the location to which the supergroup is connected */
    location?: ChatLocation;
}


/** This object represents a message.  https://core.telegram.org/bots/api#message */
export interface Message {
    /** Unique message identifier inside this chat */
    message_id: number;
    /** Optional. Unique identifier of a message thread to which the message belongs; for supergroups only */
    message_thread_id?: number;
    /** Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats */
    from?: User;
    /** Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats. */
    sender_chat?: Chat;
    /** Optional. If the sender of the message boosted the chat, the number of boosts added by the user */
    sender_boost_count?: number;
    /** Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account. */
    sender_business_bot?: User;
    /** Date the message was sent in Unix time. It is always a positive number, representing a valid date. */
    date: number;
    /** Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier. */
    business_connection_id?: string;
    /** Chat the message belongs to */
    chat: Chat;
    /** Optional. Information about the original message for forwarded messages */
    forward_origin?: MessageOrigin;
    /** Optional. True, if the message is sent to a forum topic */
    is_topic_message?: boolean;
    /** Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group */
    is_automatic_forward?: boolean;
    /** Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    reply_to_message?: Message;
    /** Optional. Information about the message that is being replied to, which may come from another chat or forum topic */
    external_reply?: ExternalReplyInfo;
    /** Optional. For replies that quote part of the original message, the quoted part of the message */
    quote?: TextQuote;
    /** Optional. For replies to a story, the original story */
    reply_to_story?: Story;
    /** Optional. Bot through which the message was sent */
    via_bot?: User;
    /** Optional. Date the message was last edited in Unix time */
    edit_date?: number;
    /** Optional. True, if the message can't be forwarded */
    has_protected_content?: boolean;
    /** Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message */
    is_from_offline?: boolean;
    /** Optional. The unique identifier of a media message group this message belongs to */
    media_group_id?: string;
    /** Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
    author_signature?: string;
    /** Optional. For text messages, the actual UTF-8 text of the message */
    text?: string;
    /** Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: Array<MessageEntity>;
    /** Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed */
    link_preview_options?: LinkPreviewOptions;
    /** Optional. Unique identifier of the message effect added to the message */
    effect_id?: string;
    /** Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
    animation?: Animation;
    /** Optional. Message is an audio file, information about the file */
    audio?: Audio;
    /** Optional. Message is a general file, information about the file */
    document?: Document;
    /** Optional. Message contains paid media; information about the paid media */
    paid_media?: PaidMediaInfo;
    /** Optional. Message is a photo, available sizes of the photo */
    photo?: Array<PhotoSize>;
    /** Optional. Message is a sticker, information about the sticker */
    sticker?: Sticker;
    /** Optional. Message is a forwarded story */
    story?: Story;
    /** Optional. Message is a video, information about the video */
    video?: Video;
    /** Optional. Message is a video note, information about the video message */
    video_note?: VideoNote;
    /** Optional. Message is a voice message, information about the file */
    voice?: Voice;
    /** Optional. Caption for the animation, audio, document, paid media, photo, video or voice */
    caption?: string;
    /** Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: Array<MessageEntity>;
    /** Optional. True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: boolean;
    /** Optional. Message is a shared contact, information about the contact */
    contact?: Contact;
    /** Optional. Message is a dice with random value */
    dice?: Dice;
    /** Optional. Message is a game, information about the game. More about games » */
    game?: Game;
    /** Optional. Message is a native poll, information about the poll */
    poll?: Poll;
    /** Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
    venue?: Venue;
    /** Optional. Message is a shared location, information about the location */
    location?: Location;
    /** Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: Array<User>;
    /** Optional. A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: User;
    /** Optional. A chat title was changed to this value */
    new_chat_title?: string;
    /** Optional. A chat photo was change to this value */
    new_chat_photo?: Array<PhotoSize>;
    /** Optional. Service message: the chat photo was deleted */
    delete_chat_photo?: boolean;
    /** Optional. Service message: the group has been created */
    group_chat_created?: boolean;
    /** Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: boolean;
    /** Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: boolean;
    /** Optional. Service message: auto-delete timer settings changed in the chat */
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: number;
    /** Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: number;
    /** Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
    pinned_message?: MaybeInaccessibleMessage;
    /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice?: Invoice;
    /** Optional. Message is a service message about a successful payment, information about the payment. More about payments » */
    successful_payment?: SuccessfulPayment;
    /** Optional. Message is a service message about a refunded payment, information about the payment. More about payments » */
    refunded_payment?: RefundedPayment;
    /** Optional. Service message: users were shared with the bot */
    users_shared?: UsersShared;
    /** Optional. Service message: a chat was shared with the bot */
    chat_shared?: ChatShared;
    /** Optional. The domain name of the website on which the user has logged in. More about Telegram Login » */
    connected_website?: string;
    /** Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess */
    write_access_allowed?: WriteAccessAllowed;
    /** Optional. Telegram Passport data */
    passport_data?: PassportData;
    /** Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
    proximity_alert_triggered?: ProximityAlertTriggered;
    /** Optional. Service message: user boosted the chat */
    boost_added?: ChatBoostAdded;
    /** Optional. Service message: chat background set */
    chat_background_set?: ChatBackground;
    /** Optional. Service message: forum topic created */
    forum_topic_created?: ForumTopicCreated;
    /** Optional. Service message: forum topic edited */
    forum_topic_edited?: ForumTopicEdited;
    /** Optional. Service message: forum topic closed */
    forum_topic_closed?: ForumTopicClosed;
    /** Optional. Service message: forum topic reopened */
    forum_topic_reopened?: ForumTopicReopened;
    /** Optional. Service message: the 'General' forum topic hidden */
    general_forum_topic_hidden?: GeneralForumTopicHidden;
    /** Optional. Service message: the 'General' forum topic unhidden */
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
    /** Optional. Service message: a scheduled giveaway was created */
    giveaway_created?: GiveawayCreated;
    /** Optional. The message is a scheduled giveaway message */
    giveaway?: Giveaway;
    /** Optional. A giveaway with public winners was completed */
    giveaway_winners?: GiveawayWinners;
    /** Optional. Service message: a giveaway without public winners was completed */
    giveaway_completed?: GiveawayCompleted;
    /** Optional. Service message: video chat scheduled */
    video_chat_scheduled?: VideoChatScheduled;
    /** Optional. Service message: video chat started */
    video_chat_started?: VideoChatStarted;
    /** Optional. Service message: video chat ended */
    video_chat_ended?: VideoChatEnded;
    /** Optional. Service message: new participants invited to a video chat */
    video_chat_participants_invited?: VideoChatParticipantsInvited;
    /** Optional. Service message: data sent by a Web App */
    web_app_data?: WebAppData;
    /** Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. */
    reply_markup?: InlineKeyboardMarkup;
}


/** This object represents a unique message identifier.  https://core.telegram.org/bots/api#messageid */
export interface MessageId {
    /** Unique message identifier */
    message_id: number;
}


/** This object describes a message that was deleted or is otherwise inaccessible to the bot.  https://core.telegram.org/bots/api#inaccessiblemessage */
export interface InaccessibleMessage {
    /** Chat the message belonged to */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: number;
    /** Always 0. The field can be used to differentiate regular and inaccessible messages. */
    date: number;
}


/** This object describes a message that can be inaccessible to the bot. It can be one of  https://core.telegram.org/bots/api#maybeinaccessiblemessage */
export interface MaybeInaccessibleMessage {
}


/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.  https://core.telegram.org/bots/api#messageentity */
export interface MessageEntity {
    /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers) */
    type: string;
    /** Offset in UTF-16 code units to the start of the entity */
    offset: number;
    /** Length of the entity in UTF-16 code units */
    length: number;
    /** Optional. For “text_link” only, URL that will be opened after user taps on the text */
    url?: string;
    /** Optional. For “text_mention” only, the mentioned user */
    user?: User;
    /** Optional. For “pre” only, the programming language of the entity text */
    language?: string;
    /** Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
    custom_emoji_id?: string;
}


/** This object contains information about the quoted part of a message that is replied to by the given message.  https://core.telegram.org/bots/api#textquote */
export interface TextQuote {
    /** Text of the quoted part of a message that is replied to by the given message */
    text: string;
    /** Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes. */
    entities?: Array<MessageEntity>;
    /** Approximate quote position in the original message in UTF-16 code units as specified by the sender */
    position: number;
    /** Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server. */
    is_manual?: boolean;
}


/** This object contains information about a message that is being replied to, which may come from another chat or forum topic.  https://core.telegram.org/bots/api#externalreplyinfo */
export interface ExternalReplyInfo {
    /** Origin of the message replied to by the given message */
    origin: MessageOrigin;
    /** Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel. */
    chat?: Chat;
    /** Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel. */
    message_id?: number;
    /** Optional. Options used for link preview generation for the original message, if it is a text message */
    link_preview_options?: LinkPreviewOptions;
    /** Optional. Message is an animation, information about the animation */
    animation?: Animation;
    /** Optional. Message is an audio file, information about the file */
    audio?: Audio;
    /** Optional. Message is a general file, information about the file */
    document?: Document;
    /** Optional. Message contains paid media; information about the paid media */
    paid_media?: PaidMediaInfo;
    /** Optional. Message is a photo, available sizes of the photo */
    photo?: Array<PhotoSize>;
    /** Optional. Message is a sticker, information about the sticker */
    sticker?: Sticker;
    /** Optional. Message is a forwarded story */
    story?: Story;
    /** Optional. Message is a video, information about the video */
    video?: Video;
    /** Optional. Message is a video note, information about the video message */
    video_note?: VideoNote;
    /** Optional. Message is a voice message, information about the file */
    voice?: Voice;
    /** Optional. True, if the message media is covered by a spoiler animation */
    has_media_spoiler?: boolean;
    /** Optional. Message is a shared contact, information about the contact */
    contact?: Contact;
    /** Optional. Message is a dice with random value */
    dice?: Dice;
    /** Optional. Message is a game, information about the game. More about games » */
    game?: Game;
    /** Optional. Message is a scheduled giveaway, information about the giveaway */
    giveaway?: Giveaway;
    /** Optional. A giveaway with public winners was completed */
    giveaway_winners?: GiveawayWinners;
    /** Optional. Message is an invoice for a payment, information about the invoice. More about payments » */
    invoice?: Invoice;
    /** Optional. Message is a shared location, information about the location */
    location?: Location;
    /** Optional. Message is a native poll, information about the poll */
    poll?: Poll;
    /** Optional. Message is a venue, information about the venue */
    venue?: Venue;
}


/** Describes reply parameters for the message that is being sent.  https://core.telegram.org/bots/api#replyparameters */
export interface ReplyParameters {
    /** Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified */
    message_id: number;
    /** Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account. */
    chat_id?: number | string;
    /** Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account. */
    allow_sending_without_reply?: boolean;
    /** Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message. */
    quote?: string;
    /** Optional. Mode for parsing entities in the quote. See formatting options for more details. */
    quote_parse_mode?: string;
    /** Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode. */
    quote_entities?: Array<MessageEntity>;
    /** Optional. Position of the quote in the original message in UTF-16 code units */
    quote_position?: number;
}


/** This object describes the origin of a message. It can be one of  https://core.telegram.org/bots/api#messageorigin */
export interface MessageOrigin {
}


/** The message was originally sent by a known user.  https://core.telegram.org/bots/api#messageoriginuser */
export interface MessageOriginUser {
    /** Type of the message origin, always “user” */
    type: string;
    /** Date the message was sent originally in Unix time */
    date: number;
    /** User that sent the message originally */
    sender_user: User;
}


/** The message was originally sent by an unknown user.  https://core.telegram.org/bots/api#messageoriginhiddenuser */
export interface MessageOriginHiddenUser {
    /** Type of the message origin, always “hidden_user” */
    type: string;
    /** Date the message was sent originally in Unix time */
    date: number;
    /** Name of the user that sent the message originally */
    sender_user_name: string;
}


/** The message was originally sent on behalf of a chat to a group chat.  https://core.telegram.org/bots/api#messageoriginchat */
export interface MessageOriginChat {
    /** Type of the message origin, always “chat” */
    type: string;
    /** Date the message was sent originally in Unix time */
    date: number;
    /** Chat that sent the message originally */
    sender_chat: Chat;
    /** Optional. For messages originally sent by an anonymous chat administrator, original message author signature */
    author_signature?: string;
}


/** The message was originally sent to a channel chat.  https://core.telegram.org/bots/api#messageoriginchannel */
export interface MessageOriginChannel {
    /** Type of the message origin, always “channel” */
    type: string;
    /** Date the message was sent originally in Unix time */
    date: number;
    /** Channel chat to which the message was originally sent */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: number;
    /** Optional. Signature of the original post author */
    author_signature?: string;
}


/** This object represents one size of a photo or a file / sticker thumbnail.  https://core.telegram.org/bots/api#photosize */
export interface PhotoSize {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Photo width */
    width: number;
    /** Photo height */
    height: number;
    /** Optional. File size in bytes */
    file_size?: number;
}


/** This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).  https://core.telegram.org/bots/api#animation */
export interface Animation {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width as defined by the sender */
    width: number;
    /** Video height as defined by the sender */
    height: number;
    /** Duration of the video in seconds as defined by the sender */
    duration: number;
    /** Optional. Animation thumbnail as defined by the sender */
    thumbnail?: PhotoSize;
    /** Optional. Original animation filename as defined by the sender */
    file_name?: string;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
}


/** This object represents an audio file to be treated as music by the Telegram clients.  https://core.telegram.org/bots/api#audio */
export interface Audio {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Duration of the audio in seconds as defined by the sender */
    duration: number;
    /** Optional. Performer of the audio as defined by the sender or by audio tags */
    performer?: string;
    /** Optional. Title of the audio as defined by the sender or by audio tags */
    title?: string;
    /** Optional. Original filename as defined by the sender */
    file_name?: string;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
    /** Optional. Thumbnail of the album cover to which the music file belongs */
    thumbnail?: PhotoSize;
}


/** This object represents a general file (as opposed to photos, voice messages and audio files).  https://core.telegram.org/bots/api#document */
export interface Document {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Optional. Document thumbnail as defined by the sender */
    thumbnail?: PhotoSize;
    /** Optional. Original filename as defined by the sender */
    file_name?: string;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
}


/** This object represents a story.  https://core.telegram.org/bots/api#story */
export interface Story {
    /** Chat that posted the story */
    chat: Chat;
    /** Unique identifier for the story in the chat */
    id: number;
}


/** This object represents a video file.  https://core.telegram.org/bots/api#video */
export interface Video {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width as defined by the sender */
    width: number;
    /** Video height as defined by the sender */
    height: number;
    /** Duration of the video in seconds as defined by the sender */
    duration: number;
    /** Optional. Video thumbnail */
    thumbnail?: PhotoSize;
    /** Optional. Original filename as defined by the sender */
    file_name?: string;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
}


/** This object represents a video message (available in Telegram apps as of v.4.0).  https://core.telegram.org/bots/api#videonote */
export interface VideoNote {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Video width and height (diameter of the video message) as defined by the sender */
    length: number;
    /** Duration of the video in seconds as defined by the sender */
    duration: number;
    /** Optional. Video thumbnail */
    thumbnail?: PhotoSize;
    /** Optional. File size in bytes */
    file_size?: number;
}


/** This object represents a voice note.  https://core.telegram.org/bots/api#voice */
export interface Voice {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Duration of the audio in seconds as defined by the sender */
    duration: number;
    /** Optional. MIME type of the file as defined by the sender */
    mime_type?: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
}


/** Describes the paid media added to a message.  https://core.telegram.org/bots/api#paidmediainfo */
export interface PaidMediaInfo {
    /** The number of Telegram Stars that must be paid to buy access to the media */
    star_count: number;
    /** Information about the paid media */
    paid_media: Array<PaidMedia>;
}


/** This object describes paid media. Currently, it can be one of  https://core.telegram.org/bots/api#paidmedia */
export interface PaidMedia {
}


/** The paid media isn't available before the payment.  https://core.telegram.org/bots/api#paidmediapreview */
export interface PaidMediaPreview {
    /** Type of the paid media, always “preview” */
    type: string;
    /** Optional. Media width as defined by the sender */
    width?: number;
    /** Optional. Media height as defined by the sender */
    height?: number;
    /** Optional. Duration of the media in seconds as defined by the sender */
    duration?: number;
}


/** The paid media is a photo.  https://core.telegram.org/bots/api#paidmediaphoto */
export interface PaidMediaPhoto {
    /** Type of the paid media, always “photo” */
    type: string;
    /** The photo */
    photo: Array<PhotoSize>;
}


/** The paid media is a video.  https://core.telegram.org/bots/api#paidmediavideo */
export interface PaidMediaVideo {
    /** Type of the paid media, always “video” */
    type: string;
    /** The video */
    video: Video;
}


/** This object represents a phone contact.  https://core.telegram.org/bots/api#contact */
export interface Contact {
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Optional. Contact's last name */
    last_name?: string;
    /** Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_id?: number;
    /** Optional. Additional data about the contact in the form of a vCard */
    vcard?: string;
}


/** This object represents an animated emoji that displays a random value.  https://core.telegram.org/bots/api#dice */
export interface Dice {
    /** Emoji on which the dice throw animation is based */
    emoji: string;
    /** Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji */
    value: number;
}


/** This object contains information about one answer option in a poll.  https://core.telegram.org/bots/api#polloption */
export interface PollOption {
    /** Option text, 1-100 characters */
    text: string;
    /** Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts */
    text_entities?: Array<MessageEntity>;
    /** Number of users that voted for this option */
    voter_count: number;
}


/** This object contains information about one answer option in a poll to be sent.  https://core.telegram.org/bots/api#inputpolloption */
export interface InputPollOption {
    /** Option text, 1-100 characters */
    text: string;
    /** Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed */
    text_parse_mode?: string;
    /** Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode */
    text_entities?: Array<MessageEntity>;
}


/** This object represents an answer of a user in a non-anonymous poll.  https://core.telegram.org/bots/api#pollanswer */
export interface PollAnswer {
    /** Unique poll identifier */
    poll_id: string;
    /** Optional. The chat that changed the answer to the poll, if the voter is anonymous */
    voter_chat?: Chat;
    /** Optional. The user that changed the answer to the poll, if the voter isn't anonymous */
    user?: User;
    /** 0-based identifiers of chosen answer options. May be empty if the vote was retracted. */
    option_ids: Array<number>;
}


/** This object contains information about a poll.  https://core.telegram.org/bots/api#poll */
export interface Poll {
    /** Unique poll identifier */
    id: string;
    /** Poll question, 1-300 characters */
    question: string;
    /** Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions */
    question_entities?: Array<MessageEntity>;
    /** List of poll options */
    options: Array<PollOption>;
    /** Total number of users that voted in the poll */
    total_voter_count: number;
    /** True, if the poll is closed */
    is_closed: boolean;
    /** True, if the poll is anonymous */
    is_anonymous: boolean;
    /** Poll type, currently can be “regular” or “quiz” */
    type: string;
    /** True, if the poll allows multiple answers */
    allows_multiple_answers: boolean;
    /** Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
    correct_option_id?: number;
    /** Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
    explanation?: string;
    /** Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
    explanation_entities?: Array<MessageEntity>;
    /** Optional. Amount of time in seconds the poll will be active after creation */
    open_period?: number;
    /** Optional. Point in time (Unix timestamp) when the poll will be automatically closed */
    close_date?: number;
}


/** This object represents a point on the map.  https://core.telegram.org/bots/api#location */
export interface Location {
    /** Latitude as defined by the sender */
    latitude: boolean;
    /** Longitude as defined by the sender */
    longitude: boolean;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: boolean;
    /** Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
    live_period?: number;
    /** Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only. */
    heading?: number;
    /** Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
    proximity_alert_radius?: number;
}


/** This object represents a venue.  https://core.telegram.org/bots/api#venue */
export interface Venue {
    /** Venue location. Can't be a live location */
    location: Location;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Optional. Foursquare identifier of the venue */
    foursquare_id?: string;
    /** Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: string;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string;
}


/** Describes data sent from a Web App to the bot.  https://core.telegram.org/bots/api#webappdata */
export interface WebAppData {
    /** The data. Be aware that a bad client can send arbitrary data in this field. */
    data: string;
    /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
    button_text: string;
}


/** This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.  https://core.telegram.org/bots/api#proximityalerttriggered */
export interface ProximityAlertTriggered {
    /** User that triggered the alert */
    traveler: User;
    /** User that set the alert */
    watcher: User;
    /** The distance between the users */
    distance: number;
}


/** This object represents a service message about a change in auto-delete timer settings.  https://core.telegram.org/bots/api#messageautodeletetimerchanged */
export interface MessageAutoDeleteTimerChanged {
    /** New auto-delete time for messages in the chat; in seconds */
    message_auto_delete_time: number;
}


/** This object represents a service message about a user boosting a chat.  https://core.telegram.org/bots/api#chatboostadded */
export interface ChatBoostAdded {
    /** Number of boosts added by the user */
    boost_count: number;
}


/** This object describes the way a background is filled based on the selected colors. Currently, it can be one of  https://core.telegram.org/bots/api#backgroundfill */
export interface BackgroundFill {
}


/** The background is filled using the selected color.  https://core.telegram.org/bots/api#backgroundfillsolid */
export interface BackgroundFillSolid {
    /** Type of the background fill, always “solid” */
    type: string;
    /** The color of the background fill in the RGB24 format */
    color: number;
}


/** The background is a gradient fill.  https://core.telegram.org/bots/api#backgroundfillgradient */
export interface BackgroundFillGradient {
    /** Type of the background fill, always “gradient” */
    type: string;
    /** Top color of the gradient in the RGB24 format */
    top_color: number;
    /** Bottom color of the gradient in the RGB24 format */
    bottom_color: number;
    /** Clockwise rotation angle of the background fill in degrees; 0-359 */
    rotation_angle: number;
}


/** The background is a freeform gradient that rotates after every message in the chat.  https://core.telegram.org/bots/api#backgroundfillfreeformgradient */
export interface BackgroundFillFreeformGradient {
    /** Type of the background fill, always “freeform_gradient” */
    type: string;
    /** A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format */
    colors: Array<number>;
}


/** This object describes the type of a background. Currently, it can be one of  https://core.telegram.org/bots/api#backgroundtype */
export interface BackgroundType {
}


/** The background is automatically filled based on the selected colors.  https://core.telegram.org/bots/api#backgroundtypefill */
export interface BackgroundTypeFill {
    /** Type of the background, always “fill” */
    type: string;
    /** The background fill */
    fill: BackgroundFill;
    /** Dimming of the background in dark themes, as a percentage; 0-100 */
    dark_theme_dimming: number;
}


/** The background is a wallpaper in the JPEG format.  https://core.telegram.org/bots/api#backgroundtypewallpaper */
export interface BackgroundTypeWallpaper {
    /** Type of the background, always “wallpaper” */
    type: string;
    /** Document with the wallpaper */
    document: Document;
    /** Dimming of the background in dark themes, as a percentage; 0-100 */
    dark_theme_dimming: number;
    /** Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12 */
    is_blurred?: boolean;
    /** Optional. True, if the background moves slightly when the device is tilted */
    is_moving?: boolean;
}


/** The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.  https://core.telegram.org/bots/api#backgroundtypepattern */
export interface BackgroundTypePattern {
    /** Type of the background, always “pattern” */
    type: string;
    /** Document with the pattern */
    document: Document;
    /** The background fill that is combined with the pattern */
    fill: BackgroundFill;
    /** Intensity of the pattern when it is shown above the filled background; 0-100 */
    intensity: number;
    /** Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only */
    is_inverted?: boolean;
    /** Optional. True, if the background moves slightly when the device is tilted */
    is_moving?: boolean;
}


/** The background is taken directly from a built-in chat theme.  https://core.telegram.org/bots/api#backgroundtypechattheme */
export interface BackgroundTypeChatTheme {
    /** Type of the background, always “chat_theme” */
    type: string;
    /** Name of the chat theme, which is usually an emoji */
    theme_name: string;
}


/** This object represents a chat background.  https://core.telegram.org/bots/api#chatbackground */
export interface ChatBackground {
    /** Type of the background */
    type: BackgroundType;
}


/** This object represents a service message about a new forum topic created in the chat.  https://core.telegram.org/bots/api#forumtopiccreated */
export interface ForumTopicCreated {
    /** Name of the topic */
    name: string;
    /** Color of the topic icon in RGB format */
    icon_color: number;
    /** Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: string;
}


/** This object represents a service message about a forum topic closed in the chat. Currently holds no information.  https://core.telegram.org/bots/api#forumtopicclosed */
export interface ForumTopicClosed {
}


/** This object represents a service message about an edited forum topic.  https://core.telegram.org/bots/api#forumtopicedited */
export interface ForumTopicEdited {
    /** Optional. New name of the topic, if it was edited */
    name?: string;
    /** Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
    icon_custom_emoji_id?: string;
}


/** This object represents a service message about a forum topic reopened in the chat. Currently holds no information.  https://core.telegram.org/bots/api#forumtopicreopened */
export interface ForumTopicReopened {
}


/** This object represents a service message about General forum topic hidden in the chat. Currently holds no information.  https://core.telegram.org/bots/api#generalforumtopichidden */
export interface GeneralForumTopicHidden {
}


/** This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.  https://core.telegram.org/bots/api#generalforumtopicunhidden */
export interface GeneralForumTopicUnhidden {
}


/** This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.  https://core.telegram.org/bots/api#shareduser */
export interface SharedUser {
    /** Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
    user_id: number;
    /** Optional. First name of the user, if the name was requested by the bot */
    first_name?: string;
    /** Optional. Last name of the user, if the name was requested by the bot */
    last_name?: string;
    /** Optional. Username of the user, if the username was requested by the bot */
    username?: string;
    /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
    photo?: Array<PhotoSize>;
}


/** This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.  https://core.telegram.org/bots/api#usersshared */
export interface UsersShared {
    /** Identifier of the request */
    request_id: number;
    /** Information about users shared with the bot. */
    users: Array<SharedUser>;
}


/** This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.  https://core.telegram.org/bots/api#chatshared */
export interface ChatShared {
    /** Identifier of the request */
    request_id: number;
    /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
    chat_id: number;
    /** Optional. Title of the chat, if the title was requested by the bot. */
    title?: string;
    /** Optional. Username of the chat, if the username was requested by the bot and available. */
    username?: string;
    /** Optional. Available sizes of the chat photo, if the photo was requested by the bot */
    photo?: Array<PhotoSize>;
}


/** This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.  https://core.telegram.org/bots/api#writeaccessallowed */
export interface WriteAccessAllowed {
    /** Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess */
    from_request?: boolean;
    /** Optional. Name of the Web App, if the access was granted when the Web App was launched from a link */
    web_app_name?: string;
    /** Optional. True, if the access was granted when the bot was added to the attachment or side menu */
    from_attachment_menu?: boolean;
}


/** This object represents a service message about a video chat scheduled in the chat.  https://core.telegram.org/bots/api#videochatscheduled */
export interface VideoChatScheduled {
    /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
    start_date: number;
}


/** This object represents a service message about a video chat started in the chat. Currently holds no information.  https://core.telegram.org/bots/api#videochatstarted */
export interface VideoChatStarted {
}


/** This object represents a service message about a video chat ended in the chat.  https://core.telegram.org/bots/api#videochatended */
export interface VideoChatEnded {
    /** Video chat duration in seconds */
    duration: number;
}


/** This object represents a service message about new members invited to a video chat.  https://core.telegram.org/bots/api#videochatparticipantsinvited */
export interface VideoChatParticipantsInvited {
    /** New members that were invited to the video chat */
    users: Array<User>;
}


/** This object represents a service message about the creation of a scheduled giveaway. Currently holds no information.  https://core.telegram.org/bots/api#giveawaycreated */
export interface GiveawayCreated {
}


/** This object represents a message about a scheduled giveaway.  https://core.telegram.org/bots/api#giveaway */
export interface Giveaway {
    /** The list of chats which the user must join to participate in the giveaway */
    chats: Array<Chat>;
    /** Point in time (Unix timestamp) when winners of the giveaway will be selected */
    winners_selection_date: number;
    /** The number of users which are supposed to be selected as winners of the giveaway */
    winner_count: number;
    /** Optional. True, if only users who join the chats after the giveaway started should be eligible to win */
    only_new_members?: boolean;
    /** Optional. True, if the list of giveaway winners will be visible to everyone */
    has_public_winners?: boolean;
    /** Optional. Description of additional giveaway prize */
    prize_description?: string;
    /** Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways. */
    country_codes?: Array<string>;
    /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for */
    premium_subscription_month_count?: number;
}


/** This object represents a message about the completion of a giveaway with public winners.  https://core.telegram.org/bots/api#giveawaywinners */
export interface GiveawayWinners {
    /** The chat that created the giveaway */
    chat: Chat;
    /** Identifier of the message with the giveaway in the chat */
    giveaway_message_id: number;
    /** Point in time (Unix timestamp) when winners of the giveaway were selected */
    winners_selection_date: number;
    /** Total number of winners in the giveaway */
    winner_count: number;
    /** List of up to 100 winners of the giveaway */
    winners: Array<User>;
    /** Optional. The number of other chats the user had to join in order to be eligible for the giveaway */
    additional_chat_count?: number;
    /** Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for */
    premium_subscription_month_count?: number;
    /** Optional. Number of undistributed prizes */
    unclaimed_prize_count?: number;
    /** Optional. True, if only users who had joined the chats after the giveaway started were eligible to win */
    only_new_members?: boolean;
    /** Optional. True, if the giveaway was canceled because the payment for it was refunded */
    was_refunded?: boolean;
    /** Optional. Description of additional giveaway prize */
    prize_description?: string;
}


/** This object represents a service message about the completion of a giveaway without public winners.  https://core.telegram.org/bots/api#giveawaycompleted */
export interface GiveawayCompleted {
    /** Number of winners in the giveaway */
    winner_count: number;
    /** Optional. Number of undistributed prizes */
    unclaimed_prize_count?: number;
    /** Optional. Message with the giveaway that was completed, if it wasn't deleted */
    giveaway_message?: Message;
}


/** Describes the options used for link preview generation.  https://core.telegram.org/bots/api#linkpreviewoptions */
export interface LinkPreviewOptions {
    /** Optional. True, if the link preview is disabled */
    is_disabled?: boolean;
    /** Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used */
    url?: string;
    /** Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
    prefer_small_media?: boolean;
    /** Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview */
    prefer_large_media?: boolean;
    /** Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text */
    show_above_text?: boolean;
}


/** This object represent a user's profile pictures.  https://core.telegram.org/bots/api#userprofilephotos */
export interface UserProfilePhotos {
    /** Total number of profile pictures the target user has */
    total_count: number;
    /** Requested profile pictures (in up to 4 sizes each) */
    photos: Array<Array<PhotoSize>>;
}


/** This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.  https://core.telegram.org/bots/api#file */
export interface File {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
    file_size?: number;
    /** Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
    file_path?: string;
}


/** Describes a Web App.  https://core.telegram.org/bots/api#webappinfo */
export interface WebAppInfo {
    /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
    url: string;
}


/** This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#replykeyboardmarkup */
export interface ReplyKeyboardMarkup {
    /** Array of button rows, each represented by an Array of KeyboardButton objects */
    keyboard: Array<Array<KeyboardButton>>;
    /** Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
    is_persistent?: boolean;
    /** Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
    resize_keyboard?: boolean;
    /** Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
    one_time_keyboard?: boolean;
    /** Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
    input_field_placeholder?: string;
    /** Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
    selective?: boolean;
}


/** This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text.  https://core.telegram.org/bots/api#keyboardbutton */
export interface KeyboardButton {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: string;
    /** Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only. */
    request_users?: KeyboardButtonRequestUsers;
    /** Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
    request_chat?: KeyboardButtonRequestChat;
    /** Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
    request_contact?: boolean;
    /** Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
    request_location?: boolean;
    /** Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
    request_poll?: KeyboardButtonPollType;
    /** Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
    web_app?: WebAppInfo;
}


/** This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »  https://core.telegram.org/bots/api#keyboardbuttonrequestusers */
export interface KeyboardButtonRequestUsers {
    /** Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message */
    request_id: number;
    /** Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied. */
    user_is_bot?: boolean;
    /** Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied. */
    user_is_premium?: boolean;
    /** Optional. The maximum number of users to be selected; 1-10. Defaults to 1. */
    max_quantity?: number;
    /** Optional. Pass True to request the users' first and last names */
    request_name?: boolean;
    /** Optional. Pass True to request the users' usernames */
    request_username?: boolean;
    /** Optional. Pass True to request the users' photos */
    request_photo?: boolean;
}


/** This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».  https://core.telegram.org/bots/api#keyboardbuttonrequestchat */
export interface KeyboardButtonRequestChat {
    /** Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
    request_id: number;
    /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
    chat_is_channel: boolean;
    /** Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
    chat_is_forum?: boolean;
    /** Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
    chat_has_username?: boolean;
    /** Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
    chat_is_created?: boolean;
    /** Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
    user_administrator_rights?: ChatAdministratorRights;
    /** Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
    bot_administrator_rights?: ChatAdministratorRights;
    /** Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
    bot_is_member?: boolean;
    /** Optional. Pass True to request the chat's title */
    request_title?: boolean;
    /** Optional. Pass True to request the chat's username */
    request_username?: boolean;
    /** Optional. Pass True to request the chat's photo */
    request_photo?: boolean;
}


/** This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.  https://core.telegram.org/bots/api#keyboardbuttonpolltype */
export interface KeyboardButtonPollType {
    /** Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
    type?: string;
}


/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#replykeyboardremove */
export interface ReplyKeyboardRemove {
    /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
    remove_keyboard: boolean;
    /** Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
    selective?: boolean;
}


/** This object represents an inline keyboard that appears right next to the message it belongs to.  https://core.telegram.org/bots/api#inlinekeyboardmarkup */
export interface InlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
    inline_keyboard: Array<Array<InlineKeyboardButton>>;
}


/** This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.  https://core.telegram.org/bots/api#inlinekeyboardbutton */
export interface InlineKeyboardButton {
    /** Label text on the button */
    text: string;
    /** Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings. */
    url?: string;
    /** Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes */
    callback_data?: string;
    /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account. */
    web_app?: WebAppInfo;
    /** Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
    login_url?: LoginUrl;
    /** Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account. */
    switch_inline_query?: string;
    /** Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account. */
    switch_inline_query_current_chat?: string;
    /** Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account. */
    switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
    /** Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. */
    callback_game?: CallbackGame;
    /** Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
    pay?: boolean;
}


/** This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:  https://core.telegram.org/bots/api#loginurl */
export interface LoginUrl {
    /** An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization. */
    url: string;
    /** Optional. New text of the button in forwarded messages. */
    forward_text?: string;
    /** Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
    bot_username?: string;
    /** Optional. Pass True to request the permission for your bot to send messages to the user. */
    request_write_access?: boolean;
}


/** This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.  https://core.telegram.org/bots/api#switchinlinequerychosenchat */
export interface SwitchInlineQueryChosenChat {
    /** Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted */
    query?: string;
    /** Optional. True, if private chats with users can be chosen */
    allow_user_chats?: boolean;
    /** Optional. True, if private chats with bots can be chosen */
    allow_bot_chats?: boolean;
    /** Optional. True, if group and supergroup chats can be chosen */
    allow_group_chats?: boolean;
    /** Optional. True, if channel chats can be chosen */
    allow_channel_chats?: boolean;
}


/** This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.  https://core.telegram.org/bots/api#callbackquery */
export interface CallbackQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: User;
    /** Optional. Message sent by the bot with the callback button that originated the query */
    message?: MaybeInaccessibleMessage;
    /** Optional. Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: string;
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
    chat_instance: string;
    /** Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
    data?: string;
    /** Optional. Short name of a Game to be returned, serves as the unique identifier for the game */
    game_short_name?: string;
}


/** Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#forcereply */
export interface ForceReply {
    /** Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply' */
    force_reply: boolean;
    /** Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters */
    input_field_placeholder?: string;
    /** Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. */
    selective?: boolean;
}


/** This object represents a chat photo.  https://core.telegram.org/bots/api#chatphoto */
export interface ChatPhoto {
    /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    small_file_id: string;
    /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    small_file_unique_id: string;
    /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
    big_file_id: string;
    /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    big_file_unique_id: string;
}


/** Represents an invite link for a chat.  https://core.telegram.org/bots/api#chatinvitelink */
export interface ChatInviteLink {
    /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
    invite_link: string;
    /** Creator of the link */
    creator: User;
    /** True, if users joining the chat via the link need to be approved by chat administrators */
    creates_join_request: boolean;
    /** True, if the link is primary */
    is_primary: boolean;
    /** True, if the link is revoked */
    is_revoked: boolean;
    /** Optional. Invite link name */
    name?: string;
    /** Optional. Point in time (Unix timestamp) when the link will expire or has been expired */
    expire_date?: number;
    /** Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: number;
    /** Optional. Number of pending join requests created using this link */
    pending_join_request_count?: number;
    /** Optional. The number of seconds the subscription will be active for before the next payment */
    subscription_period?: number;
    /** Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link */
    subscription_price?: number;
}


/** Represents the rights of an administrator in a chat.  https://core.telegram.org/bots/api#chatadministratorrights */
export interface ChatAdministratorRights {
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
    can_manage_chat: boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: boolean;
    /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members: boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the administrator can post stories to the chat */
    can_post_stories: boolean;
    /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories: boolean;
    /** True, if the administrator can delete stories posted by other users */
    can_delete_stories: boolean;
    /** Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
    can_post_messages?: boolean;
    /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: boolean;
    /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
    can_pin_messages?: boolean;
    /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: boolean;
}


/** This object represents changes in the status of a chat member.  https://core.telegram.org/bots/api#chatmemberupdated */
export interface ChatMemberUpdated {
    /** Chat the user belongs to */
    chat: Chat;
    /** Performer of the action, which resulted in the change */
    from: User;
    /** Date the change was done in Unix time */
    date: number;
    /** Previous information about the chat member */
    old_chat_member: ChatMember;
    /** New information about the chat member */
    new_chat_member: ChatMember;
    /** Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
    invite_link?: ChatInviteLink;
    /** Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator */
    via_join_request?: boolean;
    /** Optional. True, if the user joined the chat via a chat folder invite link */
    via_chat_folder_invite_link?: boolean;
}


/** This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:  https://core.telegram.org/bots/api#chatmember */
export interface ChatMember {
}


/** Represents a chat member that owns the chat and has all administrator privileges.  https://core.telegram.org/bots/api#chatmemberowner */
export interface ChatMemberOwner {
    /** The member's status in the chat, always “creator” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** Optional. Custom title for this user */
    custom_title?: string;
}


/** Represents a chat member that has some additional privileges.  https://core.telegram.org/bots/api#chatmemberadministrator */
export interface ChatMemberAdministrator {
    /** The member's status in the chat, always “administrator” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited: boolean;
    /** True, if the user's presence in the chat is hidden */
    is_anonymous: boolean;
    /** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
    can_manage_chat: boolean;
    /** True, if the administrator can delete messages of other users */
    can_delete_messages: boolean;
    /** True, if the administrator can manage video chats */
    can_manage_video_chats: boolean;
    /** True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members: boolean;
    /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the administrator can post stories to the chat */
    can_post_stories: boolean;
    /** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories: boolean;
    /** True, if the administrator can delete stories posted by other users */
    can_delete_stories: boolean;
    /** Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only */
    can_post_messages?: boolean;
    /** Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: boolean;
    /** Optional. True, if the user is allowed to pin messages; for groups and supergroups only */
    can_pin_messages?: boolean;
    /** Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: boolean;
    /** Optional. Custom title for this user */
    custom_title?: string;
}


/** Represents a chat member that has no additional privileges or restrictions.  https://core.telegram.org/bots/api#chatmembermember */
export interface ChatMemberMember {
    /** The member's status in the chat, always “member” */
    status: string;
    /** Information about the user */
    user: User;
    /** Optional. Date when the user's subscription will expire; Unix time */
    until_date?: number;
}


/** Represents a chat member that is under certain restrictions in the chat. Supergroups only.  https://core.telegram.org/bots/api#chatmemberrestricted */
export interface ChatMemberRestricted {
    /** The member's status in the chat, always “restricted” */
    status: string;
    /** Information about the user */
    user: User;
    /** True, if the user is a member of the chat at the moment of the request */
    is_member: boolean;
    /** True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
    can_send_messages: boolean;
    /** True, if the user is allowed to send audios */
    can_send_audios: boolean;
    /** True, if the user is allowed to send documents */
    can_send_documents: boolean;
    /** True, if the user is allowed to send photos */
    can_send_photos: boolean;
    /** True, if the user is allowed to send videos */
    can_send_videos: boolean;
    /** True, if the user is allowed to send video notes */
    can_send_video_notes: boolean;
    /** True, if the user is allowed to send voice notes */
    can_send_voice_notes: boolean;
    /** True, if the user is allowed to send polls */
    can_send_polls: boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages: boolean;
    /** True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings */
    can_change_info: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users: boolean;
    /** True, if the user is allowed to pin messages */
    can_pin_messages: boolean;
    /** True, if the user is allowed to create forum topics */
    can_manage_topics: boolean;
    /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever */
    until_date: number;
}


/** Represents a chat member that isn't currently a member of the chat, but may join it themselves.  https://core.telegram.org/bots/api#chatmemberleft */
export interface ChatMemberLeft {
    /** The member's status in the chat, always “left” */
    status: string;
    /** Information about the user */
    user: User;
}


/** Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.  https://core.telegram.org/bots/api#chatmemberbanned */
export interface ChatMemberBanned {
    /** The member's status in the chat, always “kicked” */
    status: string;
    /** Information about the user */
    user: User;
    /** Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever */
    until_date: number;
}


/** Represents a join request sent to a chat.  https://core.telegram.org/bots/api#chatjoinrequest */
export interface ChatJoinRequest {
    /** Chat to which the request was sent */
    chat: Chat;
    /** User that sent the join request */
    from: User;
    /** Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user. */
    user_chat_id: number;
    /** Date the request was sent in Unix time */
    date: number;
    /** Optional. Bio of the user. */
    bio?: string;
    /** Optional. Chat invite link that was used by the user to send the join request */
    invite_link?: ChatInviteLink;
}


/** Describes actions that a non-administrator user is allowed to take in a chat.  https://core.telegram.org/bots/api#chatpermissions */
export interface ChatPermissions {
    /** Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues */
    can_send_messages?: boolean;
    /** Optional. True, if the user is allowed to send audios */
    can_send_audios?: boolean;
    /** Optional. True, if the user is allowed to send documents */
    can_send_documents?: boolean;
    /** Optional. True, if the user is allowed to send photos */
    can_send_photos?: boolean;
    /** Optional. True, if the user is allowed to send videos */
    can_send_videos?: boolean;
    /** Optional. True, if the user is allowed to send video notes */
    can_send_video_notes?: boolean;
    /** Optional. True, if the user is allowed to send voice notes */
    can_send_voice_notes?: boolean;
    /** Optional. True, if the user is allowed to send polls */
    can_send_polls?: boolean;
    /** Optional. True, if the user is allowed to send animations, games, stickers and use inline bots */
    can_send_other_messages?: boolean;
    /** Optional. True, if the user is allowed to add web page previews to their messages */
    can_add_web_page_previews?: boolean;
    /** Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: boolean;
    /** Optional. True, if the user is allowed to invite new users to the chat */
    can_invite_users?: boolean;
    /** Optional. True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: boolean;
    /** Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages */
    can_manage_topics?: boolean;
}


/** Describes the birthdate of a user.  https://core.telegram.org/bots/api#birthdate */
export interface Birthdate {
    /** Day of the user's birth; 1-31 */
    day: number;
    /** Month of the user's birth; 1-12 */
    month: number;
    /** Optional. Year of the user's birth */
    year?: number;
}


/** Contains information about the start page settings of a Telegram Business account.  https://core.telegram.org/bots/api#businessintro */
export interface BusinessIntro {
    /** Optional. Title text of the business intro */
    title?: string;
    /** Optional. Message text of the business intro */
    message?: string;
    /** Optional. Sticker of the business intro */
    sticker?: Sticker;
}


/** Contains information about the location of a Telegram Business account.  https://core.telegram.org/bots/api#businesslocation */
export interface BusinessLocation {
    /** Address of the business */
    address: string;
    /** Optional. Location of the business */
    location?: Location;
}


/** Describes an interval of time during which a business is open.  https://core.telegram.org/bots/api#businessopeninghoursinterval */
export interface BusinessOpeningHoursInterval {
    /** The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60 */
    opening_minute: number;
    /** The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60 */
    closing_minute: number;
}


/** Describes the opening hours of a business.  https://core.telegram.org/bots/api#businessopeninghours */
export interface BusinessOpeningHours {
    /** Unique name of the time zone for which the opening hours are defined */
    time_zone_name: string;
    /** List of time intervals describing business opening hours */
    opening_hours: Array<BusinessOpeningHoursInterval>;
}


/** Represents a location to which a chat is connected.  https://core.telegram.org/bots/api#chatlocation */
export interface ChatLocation {
    /** The location to which the supergroup is connected. Can't be a live location. */
    location: Location;
    /** Location address; 1-64 characters, as defined by the chat owner */
    address: string;
}


/** This object describes the type of a reaction. Currently, it can be one of  https://core.telegram.org/bots/api#reactiontype */
export interface ReactionType {
}


/** The reaction is based on an emoji.  https://core.telegram.org/bots/api#reactiontypeemoji */
export interface ReactionTypeEmoji {
    /** Type of the reaction, always “emoji” */
    type: string;
    /** Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" */
    emoji: string;
}


/** The reaction is based on a custom emoji.  https://core.telegram.org/bots/api#reactiontypecustomemoji */
export interface ReactionTypeCustomEmoji {
    /** Type of the reaction, always “custom_emoji” */
    type: string;
    /** Custom emoji identifier */
    custom_emoji_id: string;
}


/** The reaction is paid.  https://core.telegram.org/bots/api#reactiontypepaid */
export interface ReactionTypePaid {
    /** Type of the reaction, always “paid” */
    type: string;
}


/** Represents a reaction added to a message along with the number of times it was added.  https://core.telegram.org/bots/api#reactioncount */
export interface ReactionCount {
    /** Type of the reaction */
    type: ReactionType;
    /** Number of times the reaction was added */
    total_count: number;
}


/** This object represents a change of a reaction on a message performed by a user.  https://core.telegram.org/bots/api#messagereactionupdated */
export interface MessageReactionUpdated {
    /** The chat containing the message the user reacted to */
    chat: Chat;
    /** Unique identifier of the message inside the chat */
    message_id: number;
    /** Optional. The user that changed the reaction, if the user isn't anonymous */
    user?: User;
    /** Optional. The chat on behalf of which the reaction was changed, if the user is anonymous */
    actor_chat?: Chat;
    /** Date of the change in Unix time */
    date: number;
    /** Previous list of reaction types that were set by the user */
    old_reaction: Array<ReactionType>;
    /** New list of reaction types that have been set by the user */
    new_reaction: Array<ReactionType>;
}


/** This object represents reaction changes on a message with anonymous reactions.  https://core.telegram.org/bots/api#messagereactioncountupdated */
export interface MessageReactionCountUpdated {
    /** The chat containing the message */
    chat: Chat;
    /** Unique message identifier inside the chat */
    message_id: number;
    /** Date of the change in Unix time */
    date: number;
    /** List of reactions that are present on the message */
    reactions: Array<ReactionCount>;
}


/** This object represents a forum topic.  https://core.telegram.org/bots/api#forumtopic */
export interface ForumTopic {
    /** Unique identifier of the forum topic */
    message_thread_id: number;
    /** Name of the topic */
    name: string;
    /** Color of the topic icon in RGB format */
    icon_color: number;
    /** Optional. Unique identifier of the custom emoji shown as the topic icon */
    icon_custom_emoji_id?: string;
}


/** This object represents a bot command.  https://core.telegram.org/bots/api#botcommand */
export interface BotCommand {
    /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
    command: string;
    /** Description of the command; 1-256 characters. */
    description: string;
}


/** This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:  https://core.telegram.org/bots/api#botcommandscope */
export interface BotCommandScope {
}


/** Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.  https://core.telegram.org/bots/api#botcommandscopedefault */
export interface BotCommandScopeDefault {
    /** Scope type, must be default */
    type: string;
}


/** Represents the scope of bot commands, covering all private chats.  https://core.telegram.org/bots/api#botcommandscopeallprivatechats */
export interface BotCommandScopeAllPrivateChats {
    /** Scope type, must be all_private_chats */
    type: string;
}


/** Represents the scope of bot commands, covering all group and supergroup chats.  https://core.telegram.org/bots/api#botcommandscopeallgroupchats */
export interface BotCommandScopeAllGroupChats {
    /** Scope type, must be all_group_chats */
    type: string;
}


/** Represents the scope of bot commands, covering all group and supergroup chat administrators.  https://core.telegram.org/bots/api#botcommandscopeallchatadministrators */
export interface BotCommandScopeAllChatAdministrators {
    /** Scope type, must be all_chat_administrators */
    type: string;
}


/** Represents the scope of bot commands, covering a specific chat.  https://core.telegram.org/bots/api#botcommandscopechat */
export interface BotCommandScopeChat {
    /** Scope type, must be chat */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


/** Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.  https://core.telegram.org/bots/api#botcommandscopechatadministrators */
export interface BotCommandScopeChatAdministrators {
    /** Scope type, must be chat_administrators */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


/** Represents the scope of bot commands, covering a specific member of a group or supergroup chat.  https://core.telegram.org/bots/api#botcommandscopechatmember */
export interface BotCommandScopeChatMember {
    /** Scope type, must be chat_member */
    type: string;
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}


/** This object represents the bot's name.  https://core.telegram.org/bots/api#botname */
export interface BotName {
    /** The bot's name */
    name: string;
}


/** This object represents the bot's description.  https://core.telegram.org/bots/api#botdescription */
export interface BotDescription {
    /** The bot's description */
    description: string;
}


/** This object represents the bot's short description.  https://core.telegram.org/bots/api#botshortdescription */
export interface BotShortDescription {
    /** The bot's short description */
    short_description: string;
}


/** This object describes the bot's menu button in a private chat. It should be one of  https://core.telegram.org/bots/api#menubutton */
export interface MenuButton {
}


/** Represents a menu button, which opens the bot's list of commands.  https://core.telegram.org/bots/api#menubuttoncommands */
export interface MenuButtonCommands {
    /** Type of the button, must be commands */
    type: string;
}


/** Represents a menu button, which launches a Web App.  https://core.telegram.org/bots/api#menubuttonwebapp */
export interface MenuButtonWebApp {
    /** Type of the button, must be web_app */
    type: string;
    /** Text on the button */
    text: string;
    /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link. */
    web_app: WebAppInfo;
}


/** Describes that no specific value for the menu button was set.  https://core.telegram.org/bots/api#menubuttondefault */
export interface MenuButtonDefault {
    /** Type of the button, must be default */
    type: string;
}


/** This object describes the source of a chat boost. It can be one of  https://core.telegram.org/bots/api#chatboostsource */
export interface ChatBoostSource {
}


/** The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.  https://core.telegram.org/bots/api#chatboostsourcepremium */
export interface ChatBoostSourcePremium {
    /** Source of the boost, always “premium” */
    source: string;
    /** User that boosted the chat */
    user: User;
}


/** The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.  https://core.telegram.org/bots/api#chatboostsourcegiftcode */
export interface ChatBoostSourceGiftCode {
    /** Source of the boost, always “gift_code” */
    source: string;
    /** User for which the gift code was created */
    user: User;
}


/** The boost was obtained by the creation of a Telegram Premium giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.  https://core.telegram.org/bots/api#chatboostsourcegiveaway */
export interface ChatBoostSourceGiveaway {
    /** Source of the boost, always “giveaway” */
    source: string;
    /** Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet. */
    giveaway_message_id: number;
    /** Optional. User that won the prize in the giveaway if any */
    user?: User;
    /** Optional. True, if the giveaway was completed, but there was no user to win the prize */
    is_unclaimed?: boolean;
}


/** This object contains information about a chat boost.  https://core.telegram.org/bots/api#chatboost */
export interface ChatBoost {
    /** Unique identifier of the boost */
    boost_id: string;
    /** Point in time (Unix timestamp) when the chat was boosted */
    add_date: number;
    /** Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged */
    expiration_date: number;
    /** Source of the added boost */
    source: ChatBoostSource;
}


/** This object represents a boost added to a chat or changed.  https://core.telegram.org/bots/api#chatboostupdated */
export interface ChatBoostUpdated {
    /** Chat which was boosted */
    chat: Chat;
    /** Information about the chat boost */
    boost: ChatBoost;
}


/** This object represents a boost removed from a chat.  https://core.telegram.org/bots/api#chatboostremoved */
export interface ChatBoostRemoved {
    /** Chat which was boosted */
    chat: Chat;
    /** Unique identifier of the boost */
    boost_id: string;
    /** Point in time (Unix timestamp) when the boost was removed */
    remove_date: number;
    /** Source of the removed boost */
    source: ChatBoostSource;
}


/** This object represents a list of boosts added to a chat by a user.  https://core.telegram.org/bots/api#userchatboosts */
export interface UserChatBoosts {
    /** The list of boosts added to the chat by the user */
    boosts: Array<ChatBoost>;
}


/** Describes the connection of the bot with a business account.  https://core.telegram.org/bots/api#businessconnection */
export interface BusinessConnection {
    /** Unique identifier of the business connection */
    id: string;
    /** Business account user that created the business connection */
    user: User;
    /** Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
    user_chat_id: number;
    /** Date the connection was established in Unix time */
    date: number;
    /** True, if the bot can act on behalf of the business account in chats that were active in the last 24 hours */
    can_reply: boolean;
    /** True, if the connection is active */
    is_enabled: boolean;
}


/** This object is received when messages are deleted from a connected business account.  https://core.telegram.org/bots/api#businessmessagesdeleted */
export interface BusinessMessagesDeleted {
    /** Unique identifier of the business connection */
    business_connection_id: string;
    /** Information about a chat in the business account. The bot may not have access to the chat or the corresponding user. */
    chat: Chat;
    /** The list of identifiers of deleted messages in the chat of the business account */
    message_ids: Array<number>;
}


/** Describes why a request was unsuccessful.  https://core.telegram.org/bots/api#responseparameters */
export interface ResponseParameters {
    /** Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: number;
    /** Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: number;
}


/** This object represents the content of a media message to be sent. It should be one of  https://core.telegram.org/bots/api#inputmedia */
export interface InputMedia {
}


/** Represents a photo to be sent.  https://core.telegram.org/bots/api#inputmediaphoto */
export interface InputMediaPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
}


/** Represents a video to be sent.  https://core.telegram.org/bots/api#inputmediavideo */
export interface InputMediaVideo {
    /** Type of the result, must be video */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Video width */
    width?: number;
    /** Optional. Video height */
    height?: number;
    /** Optional. Video duration in seconds */
    duration?: number;
    /** Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: boolean;
    /** Optional. Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
}


/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.  https://core.telegram.org/bots/api#inputmediaanimation */
export interface InputMediaAnimation {
    /** Type of the result, must be animation */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Animation width */
    width?: number;
    /** Optional. Animation height */
    height?: number;
    /** Optional. Animation duration in seconds */
    duration?: number;
    /** Optional. Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
}


/** Represents an audio file to be treated as music to be sent.  https://core.telegram.org/bots/api#inputmediaaudio */
export interface InputMediaAudio {
    /** Type of the result, must be audio */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Duration of the audio in seconds */
    duration?: number;
    /** Optional. Performer of the audio */
    performer?: string;
    /** Optional. Title of the audio */
    title?: string;
}


/** Represents a general file to be sent.  https://core.telegram.org/bots/api#inputmediadocument */
export interface InputMediaDocument {
    /** Type of the result, must be document */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album. */
    disable_content_type_detection?: boolean;
}


/** This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.  https://core.telegram.org/bots/api#inputfile */
export interface InputFile {
}


/** This object describes the paid media to be sent. Currently, it can be one of  https://core.telegram.org/bots/api#inputpaidmedia */
export interface InputPaidMedia {
}


/** The paid media to send is a photo.  https://core.telegram.org/bots/api#inputpaidmediaphoto */
export interface InputPaidMediaPhoto {
    /** Type of the media, must be photo */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
}


/** The paid media to send is a video.  https://core.telegram.org/bots/api#inputpaidmediavideo */
export interface InputPaidMediaVideo {
    /** Type of the media, must be video */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files » */
    media: string;
    /** Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Optional. Video width */
    width?: number;
    /** Optional. Video height */
    height?: number;
    /** Optional. Video duration in seconds */
    duration?: number;
    /** Optional. Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: boolean;
}


/** This object represents a sticker.  https://core.telegram.org/bots/api#sticker */
export interface Sticker {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    type: string;
    /** Sticker width */
    width: number;
    /** Sticker height */
    height: number;
    /** True, if the sticker is animated */
    is_animated: boolean;
    /** True, if the sticker is a video sticker */
    is_video: boolean;
    /** Optional. Sticker thumbnail in the .WEBP or .JPG format */
    thumbnail?: PhotoSize;
    /** Optional. Emoji associated with the sticker */
    emoji?: string;
    /** Optional. Name of the sticker set to which the sticker belongs */
    set_name?: string;
    /** Optional. For premium regular stickers, premium animation for the sticker */
    premium_animation?: File;
    /** Optional. For mask stickers, the position where the mask should be placed */
    mask_position?: MaskPosition;
    /** Optional. For custom emoji stickers, unique identifier of the custom emoji */
    custom_emoji_id?: string;
    /** Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    needs_repainting?: boolean;
    /** Optional. File size in bytes */
    file_size?: number;
}


/** This object represents a sticker set.  https://core.telegram.org/bots/api#stickerset */
export interface StickerSet {
    /** Sticker set name */
    name: string;
    /** Sticker set title */
    title: string;
    /** Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” */
    sticker_type: string;
    /** List of all set stickers */
    stickers: Array<Sticker>;
    /** Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format */
    thumbnail?: PhotoSize;
}


/** This object describes the position on faces where a mask should be placed by default.  https://core.telegram.org/bots/api#maskposition */
export interface MaskPosition {
    /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
    point: string;
    /** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
    x_shift: boolean;
    /** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
    y_shift: boolean;
    /** Mask scaling coefficient. For example, 2.0 means double size. */
    scale: boolean;
}


/** This object describes a sticker to be added to a sticker set.  https://core.telegram.org/bots/api#inputsticker */
export interface InputSticker {
    /** The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files » */
    sticker: InputFile | string;
    /** Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a WEBM video */
    format: string;
    /** List of 1-20 emoji associated with the sticker */
    emoji_list: Array<string>;
    /** Optional. Position where the mask should be placed on faces. For “mask” stickers only. */
    mask_position?: MaskPosition;
    /** Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only. */
    keywords?: Array<string>;
}


/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.  https://core.telegram.org/bots/api#inlinequery */
export interface InlineQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: User;
    /** Text of the query (up to 256 characters) */
    query: string;
    /** Offset of the results to be returned, can be controlled by the bot */
    offset: string;
    /** Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
    chat_type?: string;
    /** Optional. Sender location, only for bots that request user location */
    location?: Location;
}


/** This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.  https://core.telegram.org/bots/api#inlinequeryresultsbutton */
export interface InlineQueryResultsButton {
    /** Label text on the button */
    text: string;
    /** Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. */
    web_app?: WebAppInfo;
    /** Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. */
    start_parameter?: string;
}


/** This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:  https://core.telegram.org/bots/api#inlinequeryresult */
export interface InlineQueryResult {
}


/** Represents a link to an article or web page.  https://core.telegram.org/bots/api#inlinequeryresultarticle */
export interface InlineQueryResultArticle {
    /** Type of the result, must be article */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Title of the result */
    title: string;
    /** Content of the message to be sent */
    input_message_content: InputMessageContent;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. URL of the result */
    url?: string;
    /** Optional. Pass True if you don't want the URL to be shown in the message */
    hide_url?: boolean;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: string;
    /** Optional. Thumbnail width */
    thumbnail_width?: number;
    /** Optional. Thumbnail height */
    thumbnail_height?: number;
}


/** Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.  https://core.telegram.org/bots/api#inlinequeryresultphoto */
export interface InlineQueryResultPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB */
    photo_url: string;
    /** URL of the thumbnail for the photo */
    thumbnail_url: string;
    /** Optional. Width of the photo */
    photo_width?: number;
    /** Optional. Height of the photo */
    photo_height?: number;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent;
}


/** Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultgif */
export interface InlineQueryResultGif {
    /** Type of the result, must be gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the GIF file. File size must not exceed 1MB */
    gif_url: string;
    /** Optional. Width of the GIF */
    gif_width?: number;
    /** Optional. Height of the GIF */
    gif_height?: number;
    /** Optional. Duration of the GIF in seconds */
    gif_duration?: number;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: string;
    /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumbnail_mime_type?: string;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif */
export interface InlineQueryResultMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the MPEG4 file. File size must not exceed 1MB */
    mpeg4_url: string;
    /** Optional. Video width */
    mpeg4_width?: number;
    /** Optional. Video height */
    mpeg4_height?: number;
    /** Optional. Video duration in seconds */
    mpeg4_duration?: number;
    /** URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result */
    thumbnail_url: string;
    /** Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” */
    thumbnail_mime_type?: string;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.  https://core.telegram.org/bots/api#inlinequeryresultvideo */
export interface InlineQueryResultVideo {
    /** Type of the result, must be video */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the embedded video player or video file */
    video_url: string;
    /** MIME type of the content of the video URL, “text/html” or “video/mp4” */
    mime_type: string;
    /** URL of the thumbnail (JPEG only) for the video */
    thumbnail_url: string;
    /** Title for the result */
    title: string;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Video width */
    video_width?: number;
    /** Optional. Video height */
    video_height?: number;
    /** Optional. Video duration in seconds */
    video_duration?: number;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). */
    input_message_content?: InputMessageContent;
}


/** Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.  https://core.telegram.org/bots/api#inlinequeryresultaudio */
export interface InlineQueryResultAudio {
    /** Type of the result, must be audio */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the audio file */
    audio_url: string;
    /** Title */
    title: string;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Performer */
    performer?: string;
    /** Optional. Audio duration in seconds */
    audio_duration?: number;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.  https://core.telegram.org/bots/api#inlinequeryresultvoice */
export interface InlineQueryResultVoice {
    /** Type of the result, must be voice */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid URL for the voice recording */
    voice_url: string;
    /** Recording title */
    title: string;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Recording duration in seconds */
    voice_duration?: number;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the voice recording */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.  https://core.telegram.org/bots/api#inlinequeryresultdocument */
export interface InlineQueryResultDocument {
    /** Type of the result, must be document */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Title for the result */
    title: string;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** A valid URL for the file */
    document_url: string;
    /** MIME type of the content of the file, either “application/pdf” or “application/zip” */
    mime_type: string;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent;
    /** Optional. URL of the thumbnail (JPEG only) for the file */
    thumbnail_url?: string;
    /** Optional. Thumbnail width */
    thumbnail_width?: number;
    /** Optional. Thumbnail height */
    thumbnail_height?: number;
}


/** Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.  https://core.telegram.org/bots/api#inlinequeryresultlocation */
export interface InlineQueryResultLocation {
    /** Type of the result, must be location */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Location latitude in degrees */
    latitude: boolean;
    /** Location longitude in degrees */
    longitude: boolean;
    /** Location title */
    title: string;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: boolean;
    /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: number;
    /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number;
    /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the location */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: string;
    /** Optional. Thumbnail width */
    thumbnail_width?: number;
    /** Optional. Thumbnail height */
    thumbnail_height?: number;
}


/** Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.  https://core.telegram.org/bots/api#inlinequeryresultvenue */
export interface InlineQueryResultVenue {
    /** Type of the result, must be venue */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Latitude of the venue location in degrees */
    latitude: boolean;
    /** Longitude of the venue location in degrees */
    longitude: boolean;
    /** Title of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Optional. Foursquare identifier of the venue if known */
    foursquare_id?: string;
    /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: string;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the venue */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: string;
    /** Optional. Thumbnail width */
    thumbnail_width?: number;
    /** Optional. Thumbnail height */
    thumbnail_height?: number;
}


/** Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.  https://core.telegram.org/bots/api#inlinequeryresultcontact */
export interface InlineQueryResultContact {
    /** Type of the result, must be contact */
    type: string;
    /** Unique identifier for this result, 1-64 Bytes */
    id: string;
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Optional. Contact's last name */
    last_name?: string;
    /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the contact */
    input_message_content?: InputMessageContent;
    /** Optional. Url of the thumbnail for the result */
    thumbnail_url?: string;
    /** Optional. Thumbnail width */
    thumbnail_width?: number;
    /** Optional. Thumbnail height */
    thumbnail_height?: number;
}


/** Represents a Game.  https://core.telegram.org/bots/api#inlinequeryresultgame */
export interface InlineQueryResultGame {
    /** Type of the result, must be game */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Short name of the game */
    game_short_name: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
}


/** Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.  https://core.telegram.org/bots/api#inlinequeryresultcachedphoto */
export interface InlineQueryResultCachedPhoto {
    /** Type of the result, must be photo */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier of the photo */
    photo_file_id: string;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the photo */
    input_message_content?: InputMessageContent;
}


/** Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultcachedgif */
export interface InlineQueryResultCachedGif {
    /** Type of the result, must be gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the GIF file */
    gif_file_id: string;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the GIF animation */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif */
export interface InlineQueryResultCachedMpeg4Gif {
    /** Type of the result, must be mpeg4_gif */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the MPEG4 file */
    mpeg4_file_id: string;
    /** Optional. Title for the result */
    title?: string;
    /** Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video animation */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.  https://core.telegram.org/bots/api#inlinequeryresultcachedsticker */
export interface InlineQueryResultCachedSticker {
    /** Type of the result, must be sticker */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier of the sticker */
    sticker_file_id: string;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the sticker */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.  https://core.telegram.org/bots/api#inlinequeryresultcacheddocument */
export interface InlineQueryResultCachedDocument {
    /** Type of the result, must be document */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** Title for the result */
    title: string;
    /** A valid file identifier for the file */
    document_file_id: string;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Caption of the document to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the file */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.  https://core.telegram.org/bots/api#inlinequeryresultcachedvideo */
export interface InlineQueryResultCachedVideo {
    /** Type of the result, must be video */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the video file */
    video_file_id: string;
    /** Title for the result */
    title: string;
    /** Optional. Short description of the result */
    description?: string;
    /** Optional. Caption of the video to be sent, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the video */
    input_message_content?: InputMessageContent;
}


/** Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.  https://core.telegram.org/bots/api#inlinequeryresultcachedvoice */
export interface InlineQueryResultCachedVoice {
    /** Type of the result, must be voice */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the voice message */
    voice_file_id: string;
    /** Voice message title */
    title: string;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the voice message */
    input_message_content?: InputMessageContent;
}


/** Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.  https://core.telegram.org/bots/api#inlinequeryresultcachedaudio */
export interface InlineQueryResultCachedAudio {
    /** Type of the result, must be audio */
    type: string;
    /** Unique identifier for this result, 1-64 bytes */
    id: string;
    /** A valid file identifier for the audio file */
    audio_file_id: string;
    /** Optional. Caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Optional. Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Optional. Inline keyboard attached to the message */
    reply_markup?: InlineKeyboardMarkup;
    /** Optional. Content of the message to be sent instead of the audio */
    input_message_content?: InputMessageContent;
}


/** This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:  https://core.telegram.org/bots/api#inputmessagecontent */
export interface InputMessageContent {
}


/** Represents the content of a text message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputtextmessagecontent */
export interface InputTextMessageContent {
    /** Text of the message to be sent, 1-4096 characters */
    message_text: string;
    /** Optional. Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: string;
    /** Optional. List of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: Array<MessageEntity>;
    /** Optional. Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
}


/** Represents the content of a location message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputlocationmessagecontent */
export interface InputLocationMessageContent {
    /** Latitude of the location in degrees */
    latitude: boolean;
    /** Longitude of the location in degrees */
    longitude: boolean;
    /** Optional. The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: boolean;
    /** Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: number;
    /** Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number;
    /** Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number;
}


/** Represents the content of a venue message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputvenuemessagecontent */
export interface InputVenueMessageContent {
    /** Latitude of the venue in degrees */
    latitude: boolean;
    /** Longitude of the venue in degrees */
    longitude: boolean;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Optional. Foursquare identifier of the venue, if known */
    foursquare_id?: string;
    /** Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string;
    /** Optional. Google Places identifier of the venue */
    google_place_id?: string;
    /** Optional. Google Places type of the venue. (See supported types.) */
    google_place_type?: string;
}


/** Represents the content of a contact message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputcontactmessagecontent */
export interface InputContactMessageContent {
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Optional. Contact's last name */
    last_name?: string;
    /** Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string;
}


/** Represents the content of an invoice message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputinvoicemessagecontent */
export interface InputInvoiceMessageContent {
    /** Product name, 1-32 characters */
    title: string;
    /** Product description, 1-255 characters */
    description: string;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string;
    /** Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: string;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: string;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: Array<LabeledPrice>;
    /** Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: number;
    /** Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Array<number>;
    /** Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. */
    provider_data?: string;
    /** Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: string;
    /** Optional. Photo size in bytes */
    photo_size?: number;
    /** Optional. Photo width */
    photo_width?: number;
    /** Optional. Photo height */
    photo_height?: number;
    /** Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: boolean;
    /** Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: boolean;
    /** Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: boolean;
    /** Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: boolean;
    /** Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: boolean;
    /** Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: boolean;
    /** Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: boolean;
}


/** Represents a result of an inline query that was chosen by the user and sent to their chat partner.  https://core.telegram.org/bots/api#choseninlineresult */
export interface ChosenInlineResult {
    /** The unique identifier for the result that was chosen */
    result_id: string;
    /** The user that chose the result */
    from: User;
    /** Optional. Sender location, only for bots that require user location */
    location?: Location;
    /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
    inline_message_id?: string;
    /** The query that was used to obtain the result */
    query: string;
}


/** Describes an inline message sent by a Web App on behalf of a user.  https://core.telegram.org/bots/api#sentwebappmessage */
export interface SentWebAppMessage {
    /** Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. */
    inline_message_id?: string;
}


/** This object represents a portion of the price for goods or services.  https://core.telegram.org/bots/api#labeledprice */
export interface LabeledPrice {
    /** Portion label */
    label: string;
    /** Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    amount: number;
}


/** This object contains basic information about an invoice.  https://core.telegram.org/bots/api#invoice */
export interface Invoice {
    /** Product name */
    title: string;
    /** Product description */
    description: string;
    /** Unique bot deep-linking parameter that can be used to generate this invoice */
    start_parameter: string;
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
}


/** This object represents a shipping address.  https://core.telegram.org/bots/api#shippingaddress */
export interface ShippingAddress {
    /** Two-letter ISO 3166-1 alpha-2 country code */
    country_code: string;
    /** State, if applicable */
    state: string;
    /** City */
    city: string;
    /** First line for the address */
    street_line1: string;
    /** Second line for the address */
    street_line2: string;
    /** Address post code */
    post_code: string;
}


/** This object represents information about an order.  https://core.telegram.org/bots/api#orderinfo */
export interface OrderInfo {
    /** Optional. User name */
    name?: string;
    /** Optional. User's phone number */
    phone_number?: string;
    /** Optional. User email */
    email?: string;
    /** Optional. User shipping address */
    shipping_address?: ShippingAddress;
}


/** This object represents one shipping option.  https://core.telegram.org/bots/api#shippingoption */
export interface ShippingOption {
    /** Shipping option identifier */
    id: string;
    /** Option title */
    title: string;
    /** List of price portions */
    prices: Array<LabeledPrice>;
}


/** This object contains basic information about a successful payment.  https://core.telegram.org/bots/api#successfulpayment */
export interface SuccessfulPayment {
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot-specified invoice payload */
    invoice_payload: string;
    /** Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: string;
    /** Optional. Order information provided by the user */
    order_info?: OrderInfo;
    /** Telegram payment identifier */
    telegram_payment_charge_id: string;
    /** Provider payment identifier */
    provider_payment_charge_id: string;
}


/** This object contains basic information about a refunded payment.  https://core.telegram.org/bots/api#refundedpayment */
export interface RefundedPayment {
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR” */
    currency: string;
    /** Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot-specified invoice payload */
    invoice_payload: string;
    /** Telegram payment identifier */
    telegram_payment_charge_id: string;
    /** Optional. Provider payment identifier */
    provider_payment_charge_id?: string;
}


/** This object contains information about an incoming shipping query.  https://core.telegram.org/bots/api#shippingquery */
export interface ShippingQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Bot-specified invoice payload */
    invoice_payload: string;
    /** User specified shipping address */
    shipping_address: ShippingAddress;
}


/** This object contains information about an incoming pre-checkout query.  https://core.telegram.org/bots/api#precheckoutquery */
export interface PreCheckoutQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars */
    currency: string;
    /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    total_amount: number;
    /** Bot-specified invoice payload */
    invoice_payload: string;
    /** Optional. Identifier of the shipping option chosen by the user */
    shipping_option_id?: string;
    /** Optional. Order information provided by the user */
    order_info?: OrderInfo;
}


/** This object describes the state of a revenue withdrawal operation. Currently, it can be one of  https://core.telegram.org/bots/api#revenuewithdrawalstate */
export interface RevenueWithdrawalState {
}


/** The withdrawal is in progress.  https://core.telegram.org/bots/api#revenuewithdrawalstatepending */
export interface RevenueWithdrawalStatePending {
    /** Type of the state, always “pending” */
    type: string;
}


/** The withdrawal succeeded.  https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded */
export interface RevenueWithdrawalStateSucceeded {
    /** Type of the state, always “succeeded” */
    type: string;
    /** Date the withdrawal was completed in Unix time */
    date: number;
    /** An HTTPS URL that can be used to see transaction details */
    url: string;
}


/** The withdrawal failed and the transaction was refunded.  https://core.telegram.org/bots/api#revenuewithdrawalstatefailed */
export interface RevenueWithdrawalStateFailed {
    /** Type of the state, always “failed” */
    type: string;
}


/** This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of  https://core.telegram.org/bots/api#transactionpartner */
export interface TransactionPartner {
}


/** Describes a transaction with a user.  https://core.telegram.org/bots/api#transactionpartneruser */
export interface TransactionPartnerUser {
    /** Type of the transaction partner, always “user” */
    type: string;
    /** Information about the user */
    user: User;
    /** Optional. Bot-specified invoice payload */
    invoice_payload?: string;
    /** Optional. Information about the paid media bought by the user */
    paid_media?: Array<PaidMedia>;
}


/** Describes a withdrawal transaction with Fragment.  https://core.telegram.org/bots/api#transactionpartnerfragment */
export interface TransactionPartnerFragment {
    /** Type of the transaction partner, always “fragment” */
    type: string;
    /** Optional. State of the transaction if the transaction is outgoing */
    withdrawal_state?: RevenueWithdrawalState;
}


/** Describes a withdrawal transaction to the Telegram Ads platform.  https://core.telegram.org/bots/api#transactionpartnertelegramads */
export interface TransactionPartnerTelegramAds {
    /** Type of the transaction partner, always “telegram_ads” */
    type: string;
}


/** Describes a transaction with an unknown source or recipient.  https://core.telegram.org/bots/api#transactionpartnerother */
export interface TransactionPartnerOther {
    /** Type of the transaction partner, always “other” */
    type: string;
}


/** Describes a Telegram Star transaction.  https://core.telegram.org/bots/api#startransaction */
export interface StarTransaction {
    /** Unique identifier of the transaction. Coincides with the identifer of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users. */
    id: string;
    /** Number of Telegram Stars transferred by the transaction */
    amount: number;
    /** Date the transaction was created in Unix time */
    date: number;
    /** Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions */
    source?: TransactionPartner;
    /** Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions */
    receiver?: TransactionPartner;
}


/** Contains a list of Telegram Star transactions.  https://core.telegram.org/bots/api#startransactions */
export interface StarTransactions {
    /** The list of transactions */
    transactions: Array<StarTransaction>;
}


/** Describes Telegram Passport data shared with the bot by the user.  https://core.telegram.org/bots/api#passportdata */
export interface PassportData {
    /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
    data: Array<EncryptedPassportElement>;
    /** Encrypted credentials required to decrypt the data */
    credentials: EncryptedCredentials;
}


/** This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.  https://core.telegram.org/bots/api#passportfile */
export interface PassportFile {
    /** Identifier for this file, which can be used to download or reuse the file */
    file_id: string;
    /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
    file_unique_id: string;
    /** File size in bytes */
    file_size: number;
    /** Unix time when the file was uploaded */
    file_date: number;
}


/** Describes documents or other Telegram Passport elements shared with the bot by the user.  https://core.telegram.org/bots/api#encryptedpassportelement */
export interface EncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: string;
    /** Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. */
    data?: string;
    /** Optional. User's verified phone number; available only for “phone_number” type */
    phone_number?: string;
    /** Optional. User's verified email address; available only for “email” type */
    email?: string;
    /** Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    files?: Array<PassportFile>;
    /** Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    front_side?: PassportFile;
    /** Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    reverse_side?: PassportFile;
    /** Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. */
    selfie?: PassportFile;
    /** Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. */
    translation?: Array<PassportFile>;
    /** Base64-encoded element hash for using in PassportElementErrorUnspecified */
    hash: string;
}


/** Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.  https://core.telegram.org/bots/api#encryptedcredentials */
export interface EncryptedCredentials {
    /** Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication */
    data: string;
    /** Base64-encoded data hash for data authentication */
    hash: string;
    /** Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption */
    secret: string;
}


/** This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:  https://core.telegram.org/bots/api#passportelementerror */
export interface PassportElementError {
}


/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.  https://core.telegram.org/bots/api#passportelementerrordatafield */
export interface PassportElementErrorDataField {
    /** Error source, must be data */
    source: string;
    /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    type: string;
    /** Name of the data field which has the error */
    field_name: string;
    /** Base64-encoded data hash */
    data_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.  https://core.telegram.org/bots/api#passportelementerrorfrontside */
export interface PassportElementErrorFrontSide {
    /** Error source, must be front_side */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string;
    /** Base64-encoded hash of the file with the front side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.  https://core.telegram.org/bots/api#passportelementerrorreverseside */
export interface PassportElementErrorReverseSide {
    /** Error source, must be reverse_side */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” */
    type: string;
    /** Base64-encoded hash of the file with the reverse side of the document */
    file_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.  https://core.telegram.org/bots/api#passportelementerrorselfie */
export interface PassportElementErrorSelfie {
    /** Error source, must be selfie */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” */
    type: string;
    /** Base64-encoded hash of the file with the selfie */
    file_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.  https://core.telegram.org/bots/api#passportelementerrorfile */
export interface PassportElementErrorFile {
    /** Error source, must be file */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.  https://core.telegram.org/bots/api#passportelementerrorfiles */
export interface PassportElementErrorFiles {
    /** Error source, must be files */
    source: string;
    /** The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** List of base64-encoded file hashes */
    file_hashes: Array<string>;
    /** Error message */
    message: string;
}


/** Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.  https://core.telegram.org/bots/api#passportelementerrortranslationfile */
export interface PassportElementErrorTranslationFile {
    /** Error source, must be translation_file */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** Base64-encoded file hash */
    file_hash: string;
    /** Error message */
    message: string;
}


/** Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.  https://core.telegram.org/bots/api#passportelementerrortranslationfiles */
export interface PassportElementErrorTranslationFiles {
    /** Error source, must be translation_files */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” */
    type: string;
    /** List of base64-encoded file hashes */
    file_hashes: Array<string>;
    /** Error message */
    message: string;
}


/** Represents an issue in an unspecified place. The error is considered resolved when new data is added.  https://core.telegram.org/bots/api#passportelementerrorunspecified */
export interface PassportElementErrorUnspecified {
    /** Error source, must be unspecified */
    source: string;
    /** Type of element of the user's Telegram Passport which has the issue */
    type: string;
    /** Base64-encoded element hash */
    element_hash: string;
    /** Error message */
    message: string;
}


/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.  https://core.telegram.org/bots/api#game */
export interface Game {
    /** Title of the game */
    title: string;
    /** Description of the game */
    description: string;
    /** Photo that will be displayed in the game message in chats. */
    photo: Array<PhotoSize>;
    /** Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
    text?: string;
    /** Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
    text_entities?: Array<MessageEntity>;
    /** Optional. Animation that will be displayed in the game message in chats. Upload via BotFather */
    animation?: Animation;
}


/** A placeholder, currently holds no information. Use BotFather to set up your game.  https://core.telegram.org/bots/api#callbackgame */
export interface CallbackGame {
}


/** This object represents one row of the high scores table for a game.  https://core.telegram.org/bots/api#gamehighscore */
export interface GameHighScore {
    /** Position in high score table for the game */
    position: number;
    /** User */
    user: User;
    /** Score */
    score: number;
}

/**  https://core.telegram.org/bots/api#getupdates */
export interface GetUpdatesParams {
    /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. */
    offset?: number;
    /** Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: number;
    /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
    timeout?: number;
    /** A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. */
    allowed_updates?: Array<string>;
}


export interface GetUpdatesRequest {
    /** Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects. https://core.telegram.org/bots/api#getupdates */
    getUpdates: (params: GetUpdatesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setwebhook */
export interface SetWebhookParams {
    /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
    url: string;
    /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
    certificate?: InputFile;
    /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
    ip_address?: string;
    /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. */
    max_connections?: number;
    /** A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
    allowed_updates?: Array<string>;
    /** Pass True to drop all pending updates */
    drop_pending_updates?: boolean;
    /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
    secret_token?: string;
}


export interface SetWebhookRequest {
    /** Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success. https://core.telegram.org/bots/api#setwebhook */
    setWebhook: (params: SetWebhookParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletewebhook */
export interface DeleteWebhookParams {
    /** Pass True to drop all pending updates */
    drop_pending_updates?: boolean;
}


export interface DeleteWebhookRequest {
    /** Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success. https://core.telegram.org/bots/api#deletewebhook */
    deleteWebhook: (params: DeleteWebhookParams) => Promise<Response>;
}



export interface GetWebhookInfoRequest {
    /** Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty. https://core.telegram.org/bots/api#getwebhookinfo */
    getWebhookInfo: () => Promise<Response>;
}



export interface GetMeRequest {
    /** A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object. https://core.telegram.org/bots/api#getme */
    getMe: () => Promise<Response>;
}



export interface LogOutRequest {
    /** Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters. https://core.telegram.org/bots/api#logout */
    logOut: () => Promise<Response>;
}



export interface CloseRequest {
    /** Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters. https://core.telegram.org/bots/api#close */
    close: () => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendmessage */
export interface SendMessageParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Text of the message to be sent, 1-4096 characters after entities parsing */
    text: string;
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: Array<MessageEntity>;
    /** Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendMessageRequest {
    /** Use this method to send text messages. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendmessage */
    sendMessage: (params: SendMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#forwardmessage */
export interface ForwardMessageParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
    from_chat_id: number | string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the forwarded message from forwarding and saving */
    protect_content?: boolean;
    /** Message identifier in the chat specified in from_chat_id */
    message_id: number;
}


export interface ForwardMessageRequest {
    /** Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned. https://core.telegram.org/bots/api#forwardmessage */
    forwardMessage: (params: ForwardMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#forwardmessages */
export interface ForwardMessagesParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
    from_chat_id: number | string;
    /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order. */
    message_ids: Array<number>;
    /** Sends the messages silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the forwarded messages from forwarding and saving */
    protect_content?: boolean;
}


export interface ForwardMessagesRequest {
    /** Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned. https://core.telegram.org/bots/api#forwardmessages */
    forwardMessages: (params: ForwardMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#copymessage */
export interface CopyMessageParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) */
    from_chat_id: number | string;
    /** Message identifier in the chat specified in from_chat_id */
    message_id: number;
    /** New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept */
    caption?: string;
    /** Mode for parsing entities in the new caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified. */
    show_caption_above_media?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface CopyMessageRequest {
    /** Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success. https://core.telegram.org/bots/api#copymessage */
    copyMessage: (params: CopyMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#copymessages */
export interface CopyMessagesParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) */
    from_chat_id: number | string;
    /** A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order. */
    message_ids: Array<number>;
    /** Sends the messages silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent messages from forwarding and saving */
    protect_content?: boolean;
    /** Pass True to copy the messages without their captions */
    remove_caption?: boolean;
}


export interface CopyMessagesRequest {
    /** Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned. https://core.telegram.org/bots/api#copymessages */
    copyMessages: (params: CopyMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendphoto */
export interface SendPhotoParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » */
    photo: InputFile | string;
    /** Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the photo caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Pass True if the photo needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendPhotoRequest {
    /** Use this method to send photos. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendphoto */
    sendPhoto: (params: SendPhotoParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendaudio */
export interface SendAudioParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    audio: InputFile | string;
    /** Audio caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the audio caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Duration of the audio in seconds */
    duration?: number;
    /** Performer */
    performer?: string;
    /** Track name */
    title?: string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendAudioRequest {
    /** Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future. https://core.telegram.org/bots/api#sendaudio */
    sendAudio: (params: SendAudioParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#senddocument */
export interface SendDocumentParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    document: InputFile | string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the document caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Disables automatic server-side content type detection for files uploaded using multipart/form-data */
    disable_content_type_detection?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendDocumentRequest {
    /** Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future. https://core.telegram.org/bots/api#senddocument */
    sendDocument: (params: SendDocumentParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendvideo */
export interface SendVideoParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » */
    video: InputFile | string;
    /** Duration of sent video in seconds */
    duration?: number;
    /** Video width */
    width?: number;
    /** Video height */
    height?: number;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the video caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Pass True if the video needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
    /** Pass True if the uploaded video is suitable for streaming */
    supports_streaming?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendVideoRequest {
    /** Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future. https://core.telegram.org/bots/api#sendvideo */
    sendVideo: (params: SendVideoParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendanimation */
export interface SendAnimationParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » */
    animation: InputFile | string;
    /** Duration of sent animation in seconds */
    duration?: number;
    /** Animation width */
    width?: number;
    /** Animation height */
    height?: number;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the animation caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Pass True if the animation needs to be covered with a spoiler animation */
    has_spoiler?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendAnimationRequest {
    /** Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future. https://core.telegram.org/bots/api#sendanimation */
    sendAnimation: (params: SendAnimationParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendvoice */
export interface SendVoiceParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » */
    voice: InputFile | string;
    /** Voice message caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the voice message caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Duration of the voice message in seconds */
    duration?: number;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendVoiceRequest {
    /** Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future. https://core.telegram.org/bots/api#sendvoice */
    sendVoice: (params: SendVoiceParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendvideonote */
export interface SendVideoNoteParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported */
    video_note: InputFile | string;
    /** Duration of sent video in seconds */
    duration?: number;
    /** Video width and height, i.e. diameter of the video message */
    length?: number;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files » */
    thumbnail?: InputFile | string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendVideoNoteRequest {
    /** As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendvideonote */
    sendVideoNote: (params: SendVideoNoteParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendpaidmedia */
export interface SendPaidMediaParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. */
    chat_id: number | string;
    /** The number of Telegram Stars that must be paid to buy access to the media */
    star_count: number;
    /** A JSON-serialized array describing the media to be sent; up to 10 items */
    media: Array<InputPaidMedia>;
    /** Media caption, 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the media caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media */
    show_caption_above_media?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendPaidMediaRequest {
    /** Use this method to send paid media. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendpaidmedia */
    sendPaidMedia: (params: SendPaidMediaParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendmediagroup */
export interface SendMediaGroupParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** A JSON-serialized array describing messages to be sent, must include 2-10 items */
    media: Array<InputMediaAudio> | Array<InputMediaDocument> | Array<InputMediaPhoto> | InputMediaVideo;
    /** Sends messages silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent messages from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
}


export interface SendMediaGroupRequest {
    /** Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned. https://core.telegram.org/bots/api#sendmediagroup */
    sendMediaGroup: (params: SendMediaGroupParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendlocation */
export interface SendLocationParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Latitude of the location */
    latitude: boolean;
    /** Longitude of the location */
    longitude: boolean;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: boolean;
    /** Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. */
    live_period?: number;
    /** For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number;
    /** For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendLocationRequest {
    /** Use this method to send point on the map. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendlocation */
    sendLocation: (params: SendLocationParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendvenue */
export interface SendVenueParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Latitude of the venue */
    latitude: boolean;
    /** Longitude of the venue */
    longitude: boolean;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Foursquare identifier of the venue */
    foursquare_id?: string;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string;
    /** Google Places identifier of the venue */
    google_place_id?: string;
    /** Google Places type of the venue. (See supported types.) */
    google_place_type?: string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendVenueRequest {
    /** Use this method to send information about a venue. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendvenue */
    sendVenue: (params: SendVenueParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendcontact */
export interface SendContactParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Contact's last name */
    last_name?: string;
    /** Additional data about the contact in the form of a vCard, 0-2048 bytes */
    vcard?: string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendContactRequest {
    /** Use this method to send phone contacts. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendcontact */
    sendContact: (params: SendContactParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendpoll */
export interface SendPollParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Poll question, 1-300 characters */
    question: string;
    /** Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed */
    question_parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode */
    question_entities?: Array<MessageEntity>;
    /** A JSON-serialized list of 2-10 answer options */
    options: Array<InputPollOption>;
    /** True, if the poll needs to be anonymous, defaults to True */
    is_anonymous?: boolean;
    /** Poll type, “quiz” or “regular”, defaults to “regular” */
    type?: string;
    /** True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False */
    allows_multiple_answers?: boolean;
    /** 0-based identifier of the correct answer option, required for polls in quiz mode */
    correct_option_id?: number;
    /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing */
    explanation?: string;
    /** Mode for parsing entities in the explanation. See formatting options for more details. */
    explanation_parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode */
    explanation_entities?: Array<MessageEntity>;
    /** Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. */
    open_period?: number;
    /** Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. */
    close_date?: number;
    /** Pass True if the poll needs to be immediately closed. This can be useful for poll preview. */
    is_closed?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendPollRequest {
    /** Use this method to send a native poll. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendpoll */
    sendPoll: (params: SendPollParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#senddice */
export interface SendDiceParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” */
    emoji?: string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendDiceRequest {
    /** Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned. https://core.telegram.org/bots/api#senddice */
    sendDice: (params: SendDiceParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendchataction */
export interface SendChatActionParams {
    /** Unique identifier of the business connection on behalf of which the action will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread; for supergroups only */
    message_thread_id?: number;
    /** Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. */
    action: string;
}


export interface SendChatActionRequest {
    /** Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success. https://core.telegram.org/bots/api#sendchataction */
    sendChatAction: (params: SendChatActionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmessagereaction */
export interface SetMessageReactionParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead. */
    message_id: number;
    /** A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots. */
    reaction?: Array<ReactionType>;
    /** Pass True to set the reaction with a big animation */
    is_big?: boolean;
}


export interface SetMessageReactionRequest {
    /** Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success. https://core.telegram.org/bots/api#setmessagereaction */
    setMessageReaction: (params: SetMessageReactionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getuserprofilephotos */
export interface GetUserProfilePhotosParams {
    /** Unique identifier of the target user */
    user_id: number;
    /** Sequential number of the first photo to be returned. By default, all photos are returned. */
    offset?: number;
    /** Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: number;
}


export interface GetUserProfilePhotosRequest {
    /** Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object. https://core.telegram.org/bots/api#getuserprofilephotos */
    getUserProfilePhotos: (params: GetUserProfilePhotosParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getfile */
export interface GetFileParams {
    /** File identifier to get information about */
    file_id: string;
}


export interface GetFileRequest {
    /** Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again. https://core.telegram.org/bots/api#getfile */
    getFile: (params: GetFileParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#banchatmember */
export interface BanChatMemberParams {
    /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
    /** Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. */
    until_date?: number;
    /** Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. */
    revoke_messages?: boolean;
}


export interface BanChatMemberRequest {
    /** Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#banchatmember */
    banChatMember: (params: BanChatMemberParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unbanchatmember */
export interface UnbanChatMemberParams {
    /** Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
    /** Do nothing if the user is not banned */
    only_if_banned?: boolean;
}


export interface UnbanChatMemberRequest {
    /** Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success. https://core.telegram.org/bots/api#unbanchatmember */
    unbanChatMember: (params: UnbanChatMemberParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#restrictchatmember */
export interface RestrictChatMemberParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
    /** A JSON-serialized object for new user permissions */
    permissions: ChatPermissions;
    /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
    use_independent_chat_permissions?: boolean;
    /** Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
    until_date?: number;
}


export interface RestrictChatMemberRequest {
    /** Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success. https://core.telegram.org/bots/api#restrictchatmember */
    restrictChatMember: (params: RestrictChatMemberParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#promotechatmember */
export interface PromoteChatMemberParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
    /** Pass True if the administrator's presence in the chat is hidden */
    is_anonymous?: boolean;
    /** Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. */
    can_manage_chat?: boolean;
    /** Pass True if the administrator can delete messages of other users */
    can_delete_messages?: boolean;
    /** Pass True if the administrator can manage video chats */
    can_manage_video_chats?: boolean;
    /** Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics */
    can_restrict_members?: boolean;
    /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
    can_promote_members?: boolean;
    /** Pass True if the administrator can change chat title, photo and other settings */
    can_change_info?: boolean;
    /** Pass True if the administrator can invite new users to the chat */
    can_invite_users?: boolean;
    /** Pass True if the administrator can post stories to the chat */
    can_post_stories?: boolean;
    /** Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive */
    can_edit_stories?: boolean;
    /** Pass True if the administrator can delete stories posted by other users */
    can_delete_stories?: boolean;
    /** Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only */
    can_post_messages?: boolean;
    /** Pass True if the administrator can edit messages of other users and can pin messages; for channels only */
    can_edit_messages?: boolean;
    /** Pass True if the administrator can pin messages; for supergroups only */
    can_pin_messages?: boolean;
    /** Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only */
    can_manage_topics?: boolean;
}


export interface PromoteChatMemberRequest {
    /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success. https://core.telegram.org/bots/api#promotechatmember */
    promoteChatMember: (params: PromoteChatMemberParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatadministratorcustomtitle */
export interface SetChatAdministratorCustomTitleParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
    /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
    custom_title: string;
}


export interface SetChatAdministratorCustomTitleRequest {
    /** Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success. https://core.telegram.org/bots/api#setchatadministratorcustomtitle */
    setChatAdministratorCustomTitle: (params: SetChatAdministratorCustomTitleParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#banchatsenderchat */
export interface BanChatSenderChatParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target sender chat */
    sender_chat_id: number;
}


export interface BanChatSenderChatRequest {
    /** Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#banchatsenderchat */
    banChatSenderChat: (params: BanChatSenderChatParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unbanchatsenderchat */
export interface UnbanChatSenderChatParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target sender chat */
    sender_chat_id: number;
}


export interface UnbanChatSenderChatRequest {
    /** Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#unbanchatsenderchat */
    unbanChatSenderChat: (params: UnbanChatSenderChatParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatpermissions */
export interface SetChatPermissionsParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** A JSON-serialized object for new default chat permissions */
    permissions: ChatPermissions;
    /** Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. */
    use_independent_chat_permissions?: boolean;
}


export interface SetChatPermissionsRequest {
    /** Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success. https://core.telegram.org/bots/api#setchatpermissions */
    setChatPermissions: (params: SetChatPermissionsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#exportchatinvitelink */
export interface ExportChatInviteLinkParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface ExportChatInviteLinkRequest {
    /** Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success. https://core.telegram.org/bots/api#exportchatinvitelink */
    exportChatInviteLink: (params: ExportChatInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#createchatinvitelink */
export interface CreateChatInviteLinkParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Invite link name; 0-32 characters */
    name?: string;
    /** Point in time (Unix timestamp) when the link will expire */
    expire_date?: number;
    /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: number;
    /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    creates_join_request?: boolean;
}


export interface CreateChatInviteLinkRequest {
    /** Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object. https://core.telegram.org/bots/api#createchatinvitelink */
    createChatInviteLink: (params: CreateChatInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editchatinvitelink */
export interface EditChatInviteLinkParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** The invite link to edit */
    invite_link: string;
    /** Invite link name; 0-32 characters */
    name?: string;
    /** Point in time (Unix timestamp) when the link will expire */
    expire_date?: number;
    /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
    member_limit?: number;
    /** True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified */
    creates_join_request?: boolean;
}


export interface EditChatInviteLinkRequest {
    /** Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object. https://core.telegram.org/bots/api#editchatinvitelink */
    editChatInviteLink: (params: EditChatInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#createchatsubscriptioninvitelink */
export interface CreateChatSubscriptionInviteLinkParams {
    /** Unique identifier for the target channel chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Invite link name; 0-32 characters */
    name?: string;
    /** The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days). */
    subscription_period: number;
    /** The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-2500 */
    subscription_price: number;
}


export interface CreateChatSubscriptionInviteLinkRequest {
    /** Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object. https://core.telegram.org/bots/api#createchatsubscriptioninvitelink */
    createChatSubscriptionInviteLink: (params: CreateChatSubscriptionInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editchatsubscriptioninvitelink */
export interface EditChatSubscriptionInviteLinkParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** The invite link to edit */
    invite_link: string;
    /** Invite link name; 0-32 characters */
    name?: string;
}


export interface EditChatSubscriptionInviteLinkRequest {
    /** Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object. https://core.telegram.org/bots/api#editchatsubscriptioninvitelink */
    editChatSubscriptionInviteLink: (params: EditChatSubscriptionInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#revokechatinvitelink */
export interface RevokeChatInviteLinkParams {
    /** Unique identifier of the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** The invite link to revoke */
    invite_link: string;
}


export interface RevokeChatInviteLinkRequest {
    /** Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object. https://core.telegram.org/bots/api#revokechatinvitelink */
    revokeChatInviteLink: (params: RevokeChatInviteLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#approvechatjoinrequest */
export interface ApproveChatJoinRequestParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}


export interface ApproveChatJoinRequestRequest {
    /** Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success. https://core.telegram.org/bots/api#approvechatjoinrequest */
    approveChatJoinRequest: (params: ApproveChatJoinRequestParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#declinechatjoinrequest */
export interface DeclineChatJoinRequestParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}


export interface DeclineChatJoinRequestRequest {
    /** Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success. https://core.telegram.org/bots/api#declinechatjoinrequest */
    declineChatJoinRequest: (params: DeclineChatJoinRequestParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatphoto */
export interface SetChatPhotoParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** New chat photo, uploaded using multipart/form-data */
    photo: InputFile;
}


export interface SetChatPhotoRequest {
    /** Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#setchatphoto */
    setChatPhoto: (params: SetChatPhotoParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletechatphoto */
export interface DeleteChatPhotoParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface DeleteChatPhotoRequest {
    /** Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#deletechatphoto */
    deleteChatPhoto: (params: DeleteChatPhotoParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchattitle */
export interface SetChatTitleParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** New chat title, 1-128 characters */
    title: string;
}


export interface SetChatTitleRequest {
    /** Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#setchattitle */
    setChatTitle: (params: SetChatTitleParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatdescription */
export interface SetChatDescriptionParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** New chat description, 0-255 characters */
    description?: string;
}


export interface SetChatDescriptionRequest {
    /** Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. https://core.telegram.org/bots/api#setchatdescription */
    setChatDescription: (params: SetChatDescriptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#pinchatmessage */
export interface PinChatMessageParams {
    /** Unique identifier of the business connection on behalf of which the message will be pinned */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Identifier of a message to pin */
    message_id: number;
    /** Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. */
    disable_notification?: boolean;
}


export interface PinChatMessageRequest {
    /** Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. https://core.telegram.org/bots/api#pinchatmessage */
    pinChatMessage: (params: PinChatMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unpinchatmessage */
export interface UnpinChatMessageParams {
    /** Unique identifier of the business connection on behalf of which the message will be unpinned */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned. */
    message_id?: number;
}


export interface UnpinChatMessageRequest {
    /** Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. https://core.telegram.org/bots/api#unpinchatmessage */
    unpinChatMessage: (params: UnpinChatMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unpinallchatmessages */
export interface UnpinAllChatMessagesParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface UnpinAllChatMessagesRequest {
    /** Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success. https://core.telegram.org/bots/api#unpinallchatmessages */
    unpinAllChatMessages: (params: UnpinAllChatMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#leavechat */
export interface LeaveChatParams {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface LeaveChatRequest {
    /** Use this method for your bot to leave a group, supergroup or channel. Returns True on success. https://core.telegram.org/bots/api#leavechat */
    leaveChat: (params: LeaveChatParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getchat */
export interface GetChatParams {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface GetChatRequest {
    /** Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success. https://core.telegram.org/bots/api#getchat */
    getChat: (params: GetChatParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getchatadministrators */
export interface GetChatAdministratorsParams {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface GetChatAdministratorsRequest {
    /** Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects. https://core.telegram.org/bots/api#getchatadministrators */
    getChatAdministrators: (params: GetChatAdministratorsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getchatmembercount */
export interface GetChatMemberCountParams {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
}


export interface GetChatMemberCountRequest {
    /** Use this method to get the number of members in a chat. Returns Int on success. https://core.telegram.org/bots/api#getchatmembercount */
    getChatMemberCount: (params: GetChatMemberCountParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getchatmember */
export interface GetChatMemberParams {
    /** Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}


export interface GetChatMemberRequest {
    /** Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success. https://core.telegram.org/bots/api#getchatmember */
    getChatMember: (params: GetChatMemberParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatstickerset */
export interface SetChatStickerSetParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Name of the sticker set to be set as the group sticker set */
    sticker_set_name: string;
}


export interface SetChatStickerSetRequest {
    /** Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success. https://core.telegram.org/bots/api#setchatstickerset */
    setChatStickerSet: (params: SetChatStickerSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletechatstickerset */
export interface DeleteChatStickerSetParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface DeleteChatStickerSetRequest {
    /** Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success. https://core.telegram.org/bots/api#deletechatstickerset */
    deleteChatStickerSet: (params: DeleteChatStickerSetParams) => Promise<Response>;
}



export interface GetForumTopicIconStickersRequest {
    /** Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects. https://core.telegram.org/bots/api#getforumtopiciconstickers */
    getForumTopicIconStickers: () => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#createforumtopic */
export interface CreateForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Topic name, 1-128 characters */
    name: string;
    /** Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) */
    icon_color?: number;
    /** Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. */
    icon_custom_emoji_id?: string;
}


export interface CreateForumTopicRequest {
    /** Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object. https://core.telegram.org/bots/api#createforumtopic */
    createForumTopic: (params: CreateForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editforumtopic */
export interface EditForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: number;
    /** New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept */
    name?: string;
    /** New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept */
    icon_custom_emoji_id?: string;
}


export interface EditForumTopicRequest {
    /** Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. https://core.telegram.org/bots/api#editforumtopic */
    editForumTopic: (params: EditForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#closeforumtopic */
export interface CloseForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: number;
}


export interface CloseForumTopicRequest {
    /** Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. https://core.telegram.org/bots/api#closeforumtopic */
    closeForumTopic: (params: CloseForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#reopenforumtopic */
export interface ReopenForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: number;
}


export interface ReopenForumTopicRequest {
    /** Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success. https://core.telegram.org/bots/api#reopenforumtopic */
    reopenForumTopic: (params: ReopenForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deleteforumtopic */
export interface DeleteForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: number;
}


export interface DeleteForumTopicRequest {
    /** Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success. https://core.telegram.org/bots/api#deleteforumtopic */
    deleteForumTopic: (params: DeleteForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unpinallforumtopicmessages */
export interface UnpinAllForumTopicMessagesParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread of the forum topic */
    message_thread_id: number;
}


export interface UnpinAllForumTopicMessagesRequest {
    /** Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success. https://core.telegram.org/bots/api#unpinallforumtopicmessages */
    unpinAllForumTopicMessages: (params: UnpinAllForumTopicMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editgeneralforumtopic */
export interface EditGeneralForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
    /** New topic name, 1-128 characters */
    name: string;
}


export interface EditGeneralForumTopicRequest {
    /** Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. https://core.telegram.org/bots/api#editgeneralforumtopic */
    editGeneralForumTopic: (params: EditGeneralForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#closegeneralforumtopic */
export interface CloseGeneralForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface CloseGeneralForumTopicRequest {
    /** Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. https://core.telegram.org/bots/api#closegeneralforumtopic */
    closeGeneralForumTopic: (params: CloseGeneralForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#reopengeneralforumtopic */
export interface ReopenGeneralForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface ReopenGeneralForumTopicRequest {
    /** Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success. https://core.telegram.org/bots/api#reopengeneralforumtopic */
    reopenGeneralForumTopic: (params: ReopenGeneralForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#hidegeneralforumtopic */
export interface HideGeneralForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface HideGeneralForumTopicRequest {
    /** Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success. https://core.telegram.org/bots/api#hidegeneralforumtopic */
    hideGeneralForumTopic: (params: HideGeneralForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unhidegeneralforumtopic */
export interface UnhideGeneralForumTopicParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface UnhideGeneralForumTopicRequest {
    /** Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success. https://core.telegram.org/bots/api#unhidegeneralforumtopic */
    unhideGeneralForumTopic: (params: UnhideGeneralForumTopicParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages */
export interface UnpinAllGeneralForumTopicMessagesParams {
    /** Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) */
    chat_id: number | string;
}


export interface UnpinAllGeneralForumTopicMessagesRequest {
    /** Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success. https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages */
    unpinAllGeneralForumTopicMessages: (params: UnpinAllGeneralForumTopicMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#answercallbackquery */
export interface AnswerCallbackQueryParams {
    /** Unique identifier for the query to be answered */
    callback_query_id: string;
    /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
    text?: string;
    /** If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. */
    show_alert?: boolean;
    /** URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. */
    url?: string;
    /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
    cache_time?: number;
}


export interface AnswerCallbackQueryRequest {
    /** Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned. https://core.telegram.org/bots/api#answercallbackquery */
    answerCallbackQuery: (params: AnswerCallbackQueryParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getuserchatboosts */
export interface GetUserChatBoostsParams {
    /** Unique identifier for the chat or username of the channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier of the target user */
    user_id: number;
}


export interface GetUserChatBoostsRequest {
    /** Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object. https://core.telegram.org/bots/api#getuserchatboosts */
    getUserChatBoosts: (params: GetUserChatBoostsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getbusinessconnection */
export interface GetBusinessConnectionParams {
    /** Unique identifier of the business connection */
    business_connection_id: string;
}


export interface GetBusinessConnectionRequest {
    /** Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success. https://core.telegram.org/bots/api#getbusinessconnection */
    getBusinessConnection: (params: GetBusinessConnectionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmycommands */
export interface SetMyCommandsParams {
    /** A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. */
    commands: Array<BotCommand>;
    /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    language_code?: string;
}


export interface SetMyCommandsRequest {
    /** Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success. https://core.telegram.org/bots/api#setmycommands */
    setMyCommands: (params: SetMyCommandsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletemycommands */
export interface DeleteMyCommandsParams {
    /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
    language_code?: string;
}


export interface DeleteMyCommandsRequest {
    /** Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success. https://core.telegram.org/bots/api#deletemycommands */
    deleteMyCommands: (params: DeleteMyCommandsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getmycommands */
export interface GetMyCommandsParams {
    /** A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. */
    scope?: BotCommandScope;
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: string;
}


export interface GetMyCommandsRequest {
    /** Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned. https://core.telegram.org/bots/api#getmycommands */
    getMyCommands: (params: GetMyCommandsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmyname */
export interface SetMyNameParams {
    /** New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language. */
    name?: string;
    /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name. */
    language_code?: string;
}


export interface SetMyNameRequest {
    /** Use this method to change the bot's name. Returns True on success. https://core.telegram.org/bots/api#setmyname */
    setMyName: (params: SetMyNameParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getmyname */
export interface GetMyNameParams {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: string;
}


export interface GetMyNameRequest {
    /** Use this method to get the current bot name for the given user language. Returns BotName on success. https://core.telegram.org/bots/api#getmyname */
    getMyName: (params: GetMyNameParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmydescription */
export interface SetMyDescriptionParams {
    /** New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. */
    description?: string;
    /** A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. */
    language_code?: string;
}


export interface SetMyDescriptionRequest {
    /** Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success. https://core.telegram.org/bots/api#setmydescription */
    setMyDescription: (params: SetMyDescriptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getmydescription */
export interface GetMyDescriptionParams {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: string;
}


export interface GetMyDescriptionRequest {
    /** Use this method to get the current bot description for the given user language. Returns BotDescription on success. https://core.telegram.org/bots/api#getmydescription */
    getMyDescription: (params: GetMyDescriptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmyshortdescription */
export interface SetMyShortDescriptionParams {
    /** New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language. */
    short_description?: string;
    /** A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. */
    language_code?: string;
}


export interface SetMyShortDescriptionRequest {
    /** Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success. https://core.telegram.org/bots/api#setmyshortdescription */
    setMyShortDescription: (params: SetMyShortDescriptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getmyshortdescription */
export interface GetMyShortDescriptionParams {
    /** A two-letter ISO 639-1 language code or an empty string */
    language_code?: string;
}


export interface GetMyShortDescriptionRequest {
    /** Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success. https://core.telegram.org/bots/api#getmyshortdescription */
    getMyShortDescription: (params: GetMyShortDescriptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setchatmenubutton */
export interface SetChatMenuButtonParams {
    /** Unique identifier for the target private chat. If not specified, default bot's menu button will be changed */
    chat_id?: number;
    /** A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault */
    menu_button?: MenuButton;
}


export interface SetChatMenuButtonRequest {
    /** Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success. https://core.telegram.org/bots/api#setchatmenubutton */
    setChatMenuButton: (params: SetChatMenuButtonParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getchatmenubutton */
export interface GetChatMenuButtonParams {
    /** Unique identifier for the target private chat. If not specified, default bot's menu button will be returned */
    chat_id?: number;
}


export interface GetChatMenuButtonRequest {
    /** Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success. https://core.telegram.org/bots/api#getchatmenubutton */
    getChatMenuButton: (params: GetChatMenuButtonParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setmydefaultadministratorrights */
export interface SetMyDefaultAdministratorRightsParams {
    /** A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared. */
    rights?: ChatAdministratorRights;
    /** Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. */
    for_channels?: boolean;
}


export interface SetMyDefaultAdministratorRightsRequest {
    /** Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success. https://core.telegram.org/bots/api#setmydefaultadministratorrights */
    setMyDefaultAdministratorRights: (params: SetMyDefaultAdministratorRightsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getmydefaultadministratorrights */
export interface GetMyDefaultAdministratorRightsParams {
    /** Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. */
    for_channels?: boolean;
}


export interface GetMyDefaultAdministratorRightsRequest {
    /** Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success. https://core.telegram.org/bots/api#getmydefaultadministratorrights */
    getMyDefaultAdministratorRights: (params: GetMyDefaultAdministratorRightsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editmessagetext */
export interface EditMessageTextParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** New text of the message, 1-4096 characters after entities parsing */
    text: string;
    /** Mode for parsing entities in the message text. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
    entities?: Array<MessageEntity>;
    /** Link preview generation options for the message */
    link_preview_options?: LinkPreviewOptions;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface EditMessageTextRequest {
    /** Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. https://core.telegram.org/bots/api#editmessagetext */
    editMessageText: (params: EditMessageTextParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editmessagecaption */
export interface EditMessageCaptionParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** New caption of the message, 0-1024 characters after entities parsing */
    caption?: string;
    /** Mode for parsing entities in the message caption. See formatting options for more details. */
    parse_mode?: string;
    /** A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode */
    caption_entities?: Array<MessageEntity>;
    /** Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages. */
    show_caption_above_media?: boolean;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface EditMessageCaptionRequest {
    /** Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. https://core.telegram.org/bots/api#editmessagecaption */
    editMessageCaption: (params: EditMessageCaptionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editmessagemedia */
export interface EditMessageMediaParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** A JSON-serialized object for a new media content of the message */
    media: InputMedia;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface EditMessageMediaRequest {
    /** Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. https://core.telegram.org/bots/api#editmessagemedia */
    editMessageMedia: (params: EditMessageMediaParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editmessagelivelocation */
export interface EditMessageLiveLocationParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** Latitude of new location */
    latitude: boolean;
    /** Longitude of new location */
    longitude: boolean;
    /** New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged */
    live_period?: number;
    /** The radius of uncertainty for the location, measured in meters; 0-1500 */
    horizontal_accuracy?: boolean;
    /** Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. */
    heading?: number;
    /** The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. */
    proximity_alert_radius?: number;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface EditMessageLiveLocationRequest {
    /** Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. https://core.telegram.org/bots/api#editmessagelivelocation */
    editMessageLiveLocation: (params: EditMessageLiveLocationParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#stopmessagelivelocation */
export interface StopMessageLiveLocationParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message with live location to stop */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** A JSON-serialized object for a new inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface StopMessageLiveLocationRequest {
    /** Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned. https://core.telegram.org/bots/api#stopmessagelivelocation */
    stopMessageLiveLocation: (params: StopMessageLiveLocationParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#editmessagereplymarkup */
export interface EditMessageReplyMarkupParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id?: number | string;
    /** Required if inline_message_id is not specified. Identifier of the message to edit */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
    /** A JSON-serialized object for an inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface EditMessageReplyMarkupRequest {
    /** Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent. https://core.telegram.org/bots/api#editmessagereplymarkup */
    editMessageReplyMarkup: (params: EditMessageReplyMarkupParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#stoppoll */
export interface StopPollParams {
    /** Unique identifier of the business connection on behalf of which the message to be edited was sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Identifier of the original message with the poll */
    message_id: number;
    /** A JSON-serialized object for a new message inline keyboard. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface StopPollRequest {
    /** Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned. https://core.telegram.org/bots/api#stoppoll */
    stopPoll: (params: StopPollParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletemessage */
export interface DeleteMessageParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Identifier of the message to delete */
    message_id: number;
}


export interface DeleteMessageRequest {
    /** Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success. https://core.telegram.org/bots/api#deletemessage */
    deleteMessage: (params: DeleteMessageParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletemessages */
export interface DeleteMessagesParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted */
    message_ids: Array<number>;
}


export interface DeleteMessagesRequest {
    /** Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success. https://core.telegram.org/bots/api#deletemessages */
    deleteMessages: (params: DeleteMessagesParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendsticker */
export interface SendStickerParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. */
    sticker: InputFile | string;
    /** Emoji associated with the sticker; only for just uploaded stickers */
    emoji?: string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user */
    reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}


export interface SendStickerRequest {
    /** Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendsticker */
    sendSticker: (params: SendStickerParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getstickerset */
export interface GetStickerSetParams {
    /** Name of the sticker set */
    name: string;
}


export interface GetStickerSetRequest {
    /** Use this method to get a sticker set. On success, a StickerSet object is returned. https://core.telegram.org/bots/api#getstickerset */
    getStickerSet: (params: GetStickerSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getcustomemojistickers */
export interface GetCustomEmojiStickersParams {
    /** A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. */
    custom_emoji_ids: Array<string>;
}


export interface GetCustomEmojiStickersRequest {
    /** Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects. https://core.telegram.org/bots/api#getcustomemojistickers */
    getCustomEmojiStickers: (params: GetCustomEmojiStickersParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#uploadstickerfile */
export interface UploadStickerFileParams {
    /** User identifier of sticker file owner */
    user_id: number;
    /** A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » */
    sticker: InputFile;
    /** Format of the sticker, must be one of “static”, “animated”, “video” */
    sticker_format: string;
}


export interface UploadStickerFileRequest {
    /** Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success. https://core.telegram.org/bots/api#uploadstickerfile */
    uploadStickerFile: (params: UploadStickerFileParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#createnewstickerset */
export interface CreateNewStickerSetParams {
    /** User identifier of created sticker set owner */
    user_id: number;
    /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. */
    name: string;
    /** Sticker set title, 1-64 characters */
    title: string;
    /** A JSON-serialized list of 1-50 initial stickers to be added to the sticker set */
    stickers: Array<InputSticker>;
    /** Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. */
    sticker_type?: string;
    /** Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only */
    needs_repainting?: boolean;
}


export interface CreateNewStickerSetRequest {
    /** Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success. https://core.telegram.org/bots/api#createnewstickerset */
    createNewStickerSet: (params: CreateNewStickerSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#addstickertoset */
export interface AddStickerToSetParams {
    /** User identifier of sticker set owner */
    user_id: number;
    /** Sticker set name */
    name: string;
    /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. */
    sticker: InputSticker;
}


export interface AddStickerToSetRequest {
    /** Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success. https://core.telegram.org/bots/api#addstickertoset */
    addStickerToSet: (params: AddStickerToSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickerpositioninset */
export interface SetStickerPositionInSetParams {
    /** File identifier of the sticker */
    sticker: string;
    /** New sticker position in the set, zero-based */
    position: number;
}


export interface SetStickerPositionInSetRequest {
    /** Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success. https://core.telegram.org/bots/api#setstickerpositioninset */
    setStickerPositionInSet: (params: SetStickerPositionInSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletestickerfromset */
export interface DeleteStickerFromSetParams {
    /** File identifier of the sticker */
    sticker: string;
}


export interface DeleteStickerFromSetRequest {
    /** Use this method to delete a sticker from a set created by the bot. Returns True on success. https://core.telegram.org/bots/api#deletestickerfromset */
    deleteStickerFromSet: (params: DeleteStickerFromSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#replacestickerinset */
export interface ReplaceStickerInSetParams {
    /** User identifier of the sticker set owner */
    user_id: number;
    /** Sticker set name */
    name: string;
    /** File identifier of the replaced sticker */
    old_sticker: string;
    /** A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged. */
    sticker: InputSticker;
}


export interface ReplaceStickerInSetRequest {
    /** Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success. https://core.telegram.org/bots/api#replacestickerinset */
    replaceStickerInSet: (params: ReplaceStickerInSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickeremojilist */
export interface SetStickerEmojiListParams {
    /** File identifier of the sticker */
    sticker: string;
    /** A JSON-serialized list of 1-20 emoji associated with the sticker */
    emoji_list: Array<string>;
}


export interface SetStickerEmojiListRequest {
    /** Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success. https://core.telegram.org/bots/api#setstickeremojilist */
    setStickerEmojiList: (params: SetStickerEmojiListParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickerkeywords */
export interface SetStickerKeywordsParams {
    /** File identifier of the sticker */
    sticker: string;
    /** A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters */
    keywords?: Array<string>;
}


export interface SetStickerKeywordsRequest {
    /** Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success. https://core.telegram.org/bots/api#setstickerkeywords */
    setStickerKeywords: (params: SetStickerKeywordsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickermaskposition */
export interface SetStickerMaskPositionParams {
    /** File identifier of the sticker */
    sticker: string;
    /** A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. */
    mask_position?: MaskPosition;
}


export interface SetStickerMaskPositionRequest {
    /** Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success. https://core.telegram.org/bots/api#setstickermaskposition */
    setStickerMaskPosition: (params: SetStickerMaskPositionParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickersettitle */
export interface SetStickerSetTitleParams {
    /** Sticker set name */
    name: string;
    /** Sticker set title, 1-64 characters */
    title: string;
}


export interface SetStickerSetTitleRequest {
    /** Use this method to set the title of a created sticker set. Returns True on success. https://core.telegram.org/bots/api#setstickersettitle */
    setStickerSetTitle: (params: SetStickerSetTitleParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setstickersetthumbnail */
export interface SetStickerSetThumbnailParams {
    /** Sticker set name */
    name: string;
    /** User identifier of the sticker set owner */
    user_id: number;
    /** A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. */
    thumbnail?: InputFile | string;
    /** Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video */
    format: string;
}


export interface SetStickerSetThumbnailRequest {
    /** Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success. https://core.telegram.org/bots/api#setstickersetthumbnail */
    setStickerSetThumbnail: (params: SetStickerSetThumbnailParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail */
export interface SetCustomEmojiStickerSetThumbnailParams {
    /** Sticker set name */
    name: string;
    /** Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. */
    custom_emoji_id?: string;
}


export interface SetCustomEmojiStickerSetThumbnailRequest {
    /** Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success. https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail */
    setCustomEmojiStickerSetThumbnail: (params: SetCustomEmojiStickerSetThumbnailParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#deletestickerset */
export interface DeleteStickerSetParams {
    /** Sticker set name */
    name: string;
}


export interface DeleteStickerSetRequest {
    /** Use this method to delete a sticker set that was created by the bot. Returns True on success. https://core.telegram.org/bots/api#deletestickerset */
    deleteStickerSet: (params: DeleteStickerSetParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#answerinlinequery */
export interface AnswerInlineQueryParams {
    /** Unique identifier for the answered query */
    inline_query_id: string;
    /** A JSON-serialized array of results for the inline query */
    results: Array<InlineQueryResult>;
    /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
    cache_time?: number;
    /** Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. */
    is_personal?: boolean;
    /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
    next_offset?: string;
    /** A JSON-serialized object describing a button to be shown above inline query results */
    button?: InlineQueryResultsButton;
}


export interface AnswerInlineQueryRequest {
    /** Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed. https://core.telegram.org/bots/api#answerinlinequery */
    answerInlineQuery: (params: AnswerInlineQueryParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#answerwebappquery */
export interface AnswerWebAppQueryParams {
    /** Unique identifier for the query to be answered */
    web_app_query_id: string;
    /** A JSON-serialized object describing the message to be sent */
    result: InlineQueryResult;
}


export interface AnswerWebAppQueryRequest {
    /** Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned. https://core.telegram.org/bots/api#answerwebappquery */
    answerWebAppQuery: (params: AnswerWebAppQueryParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendinvoice */
export interface SendInvoiceParams {
    /** Unique identifier for the target chat or username of the target channel (in the format @channelusername) */
    chat_id: number | string;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Product name, 1-32 characters */
    title: string;
    /** Product description, 1-255 characters */
    description: string;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string;
    /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: string;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: string;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: Array<LabeledPrice>;
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: number;
    /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Array<number>;
    /** Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter */
    start_parameter?: string;
    /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
    provider_data?: string;
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
    photo_url?: string;
    /** Photo size in bytes */
    photo_size?: number;
    /** Photo width */
    photo_width?: number;
    /** Photo height */
    photo_height?: number;
    /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: boolean;
    /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: boolean;
    /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: boolean;
    /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: boolean;
    /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: boolean;
    /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: boolean;
    /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: boolean;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface SendInvoiceRequest {
    /** Use this method to send invoices. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendinvoice */
    sendInvoice: (params: SendInvoiceParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#createinvoicelink */
export interface CreateInvoiceLinkParams {
    /** Product name, 1-32 characters */
    title: string;
    /** Product description, 1-255 characters */
    description: string;
    /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
    payload: string;
    /** Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. */
    provider_token?: string;
    /** Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. */
    currency: string;
    /** Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars. */
    prices: Array<LabeledPrice>;
    /** The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars. */
    max_tip_amount?: number;
    /** A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. */
    suggested_tip_amounts?: Array<number>;
    /** JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
    provider_data?: string;
    /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. */
    photo_url?: string;
    /** Photo size in bytes */
    photo_size?: number;
    /** Photo width */
    photo_width?: number;
    /** Photo height */
    photo_height?: number;
    /** Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. */
    need_name?: boolean;
    /** Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. */
    need_phone_number?: boolean;
    /** Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. */
    need_email?: boolean;
    /** Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. */
    need_shipping_address?: boolean;
    /** Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_phone_number_to_provider?: boolean;
    /** Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. */
    send_email_to_provider?: boolean;
    /** Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. */
    is_flexible?: boolean;
}


export interface CreateInvoiceLinkRequest {
    /** Use this method to create a link for an invoice. Returns the created invoice link as String on success. https://core.telegram.org/bots/api#createinvoicelink */
    createInvoiceLink: (params: CreateInvoiceLinkParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#answershippingquery */
export interface AnswerShippingQueryParams {
    /** Unique identifier for the query to be answered */
    shipping_query_id: string;
    /** Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
    ok: boolean;
    /** Required if ok is True. A JSON-serialized array of available shipping options. */
    shipping_options?: Array<ShippingOption>;
    /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
    error_message?: string;
}


export interface AnswerShippingQueryRequest {
    /** If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned. https://core.telegram.org/bots/api#answershippingquery */
    answerShippingQuery: (params: AnswerShippingQueryParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#answerprecheckoutquery */
export interface AnswerPreCheckoutQueryParams {
    /** Unique identifier for the query to be answered */
    pre_checkout_query_id: string;
    /** Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
    ok: boolean;
    /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
    error_message?: string;
}


export interface AnswerPreCheckoutQueryRequest {
    /** Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent. https://core.telegram.org/bots/api#answerprecheckoutquery */
    answerPreCheckoutQuery: (params: AnswerPreCheckoutQueryParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getstartransactions */
export interface GetStarTransactionsParams {
    /** Number of transactions to skip in the response */
    offset?: number;
    /** The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. */
    limit?: number;
}


export interface GetStarTransactionsRequest {
    /** Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object. https://core.telegram.org/bots/api#getstartransactions */
    getStarTransactions: (params: GetStarTransactionsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#refundstarpayment */
export interface RefundStarPaymentParams {
    /** Identifier of the user whose payment will be refunded */
    user_id: number;
    /** Telegram payment identifier */
    telegram_payment_charge_id: string;
}


export interface RefundStarPaymentRequest {
    /** Refunds a successful payment in Telegram Stars. Returns True on success. https://core.telegram.org/bots/api#refundstarpayment */
    refundStarPayment: (params: RefundStarPaymentParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setpassportdataerrors */
export interface SetPassportDataErrorsParams {
    /** User identifier */
    user_id: number;
    /** A JSON-serialized array describing the errors */
    errors: Array<PassportElementError>;
}


export interface SetPassportDataErrorsRequest {
    /** Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success. https://core.telegram.org/bots/api#setpassportdataerrors */
    setPassportDataErrors: (params: SetPassportDataErrorsParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#sendgame */
export interface SendGameParams {
    /** Unique identifier of the business connection on behalf of which the message will be sent */
    business_connection_id?: string;
    /** Unique identifier for the target chat */
    chat_id: number;
    /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
    message_thread_id?: number;
    /** Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. */
    game_short_name: string;
    /** Sends the message silently. Users will receive a notification with no sound. */
    disable_notification?: boolean;
    /** Protects the contents of the sent message from forwarding and saving */
    protect_content?: boolean;
    /** Unique identifier of the message effect to be added to the message; for private chats only */
    message_effect_id?: string;
    /** Description of the message to reply to */
    reply_parameters?: ReplyParameters;
    /** A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game. */
    reply_markup?: InlineKeyboardMarkup;
}


export interface SendGameRequest {
    /** Use this method to send a game. On success, the sent Message is returned. https://core.telegram.org/bots/api#sendgame */
    sendGame: (params: SendGameParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#setgamescore */
export interface SetGameScoreParams {
    /** User identifier */
    user_id: number;
    /** New score, must be non-negative */
    score: number;
    /** Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
    force?: boolean;
    /** Pass True if the game message should not be automatically edited to include the current scoreboard */
    disable_edit_message?: boolean;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat */
    chat_id?: number;
    /** Required if inline_message_id is not specified. Identifier of the sent message */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
}


export interface SetGameScoreRequest {
    /** Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False. https://core.telegram.org/bots/api#setgamescore */
    setGameScore: (params: SetGameScoreParams) => Promise<Response>;
}


/**  https://core.telegram.org/bots/api#getgamehighscores */
export interface GetGameHighScoresParams {
    /** Target user id */
    user_id: number;
    /** Required if inline_message_id is not specified. Unique identifier for the target chat */
    chat_id?: number;
    /** Required if inline_message_id is not specified. Identifier of the sent message */
    message_id?: number;
    /** Required if chat_id and message_id are not specified. Identifier of the inline message */
    inline_message_id?: string;
}


export interface GetGameHighScoresRequest {
    /** Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects. https://core.telegram.org/bots/api#getgamehighscores */
    getGameHighScores: (params: GetGameHighScoresParams) => Promise<Response>;
}


export type BotMethod = 'getUpdates' | 'setWebhook' | 'deleteWebhook' | 'getWebhookInfo' | 'getMe' | 'logOut' | 'close' | 'sendMessage' | 'forwardMessage' | 'forwardMessages' | 'copyMessage' | 'copyMessages' | 'sendPhoto' | 'sendAudio' | 'sendDocument' | 'sendVideo' | 'sendAnimation' | 'sendVoice' | 'sendVideoNote' | 'sendPaidMedia' | 'sendMediaGroup' | 'sendLocation' | 'sendVenue' | 'sendContact' | 'sendPoll' | 'sendDice' | 'sendChatAction' | 'setMessageReaction' | 'getUserProfilePhotos' | 'getFile' | 'banChatMember' | 'unbanChatMember' | 'restrictChatMember' | 'promoteChatMember' | 'setChatAdministratorCustomTitle' | 'banChatSenderChat' | 'unbanChatSenderChat' | 'setChatPermissions' | 'exportChatInviteLink' | 'createChatInviteLink' | 'editChatInviteLink' | 'createChatSubscriptionInviteLink' | 'editChatSubscriptionInviteLink' | 'revokeChatInviteLink' | 'approveChatJoinRequest' | 'declineChatJoinRequest' | 'setChatPhoto' | 'deleteChatPhoto' | 'setChatTitle' | 'setChatDescription' | 'pinChatMessage' | 'unpinChatMessage' | 'unpinAllChatMessages' | 'leaveChat' | 'getChat' | 'getChatAdministrators' | 'getChatMemberCount' | 'getChatMember' | 'setChatStickerSet' | 'deleteChatStickerSet' | 'getForumTopicIconStickers' | 'createForumTopic' | 'editForumTopic' | 'closeForumTopic' | 'reopenForumTopic' | 'deleteForumTopic' | 'unpinAllForumTopicMessages' | 'editGeneralForumTopic' | 'closeGeneralForumTopic' | 'reopenGeneralForumTopic' | 'hideGeneralForumTopic' | 'unhideGeneralForumTopic' | 'unpinAllGeneralForumTopicMessages' | 'answerCallbackQuery' | 'getUserChatBoosts' | 'getBusinessConnection' | 'setMyCommands' | 'deleteMyCommands' | 'getMyCommands' | 'setMyName' | 'getMyName' | 'setMyDescription' | 'getMyDescription' | 'setMyShortDescription' | 'getMyShortDescription' | 'setChatMenuButton' | 'getChatMenuButton' | 'setMyDefaultAdministratorRights' | 'getMyDefaultAdministratorRights' | 'editMessageText' | 'editMessageCaption' | 'editMessageMedia' | 'editMessageLiveLocation' | 'stopMessageLiveLocation' | 'editMessageReplyMarkup' | 'stopPoll' | 'deleteMessage' | 'deleteMessages' | 'sendSticker' | 'getStickerSet' | 'getCustomEmojiStickers' | 'uploadStickerFile' | 'createNewStickerSet' | 'addStickerToSet' | 'setStickerPositionInSet' | 'deleteStickerFromSet' | 'replaceStickerInSet' | 'setStickerEmojiList' | 'setStickerKeywords' | 'setStickerMaskPosition' | 'setStickerSetTitle' | 'setStickerSetThumbnail' | 'setCustomEmojiStickerSetThumbnail' | 'deleteStickerSet' | 'answerInlineQuery' | 'answerWebAppQuery' | 'sendInvoice' | 'createInvoiceLink' | 'answerShippingQuery' | 'answerPreCheckoutQuery' | 'getStarTransactions' | 'refundStarPayment' | 'setPassportDataErrors' | 'sendGame' | 'setGameScore' | 'getGameHighScores';


export type AllBotMethods = GetUpdatesRequest & SetWebhookRequest & DeleteWebhookRequest & GetWebhookInfoRequest & GetMeRequest & LogOutRequest & CloseRequest & SendMessageRequest & ForwardMessageRequest & ForwardMessagesRequest & CopyMessageRequest & CopyMessagesRequest & SendPhotoRequest & SendAudioRequest & SendDocumentRequest & SendVideoRequest & SendAnimationRequest & SendVoiceRequest & SendVideoNoteRequest & SendPaidMediaRequest & SendMediaGroupRequest & SendLocationRequest & SendVenueRequest & SendContactRequest & SendPollRequest & SendDiceRequest & SendChatActionRequest & SetMessageReactionRequest & GetUserProfilePhotosRequest & GetFileRequest & BanChatMemberRequest & UnbanChatMemberRequest & RestrictChatMemberRequest & PromoteChatMemberRequest & SetChatAdministratorCustomTitleRequest & BanChatSenderChatRequest & UnbanChatSenderChatRequest & SetChatPermissionsRequest & ExportChatInviteLinkRequest & CreateChatInviteLinkRequest & EditChatInviteLinkRequest & CreateChatSubscriptionInviteLinkRequest & EditChatSubscriptionInviteLinkRequest & RevokeChatInviteLinkRequest & ApproveChatJoinRequestRequest & DeclineChatJoinRequestRequest & SetChatPhotoRequest & DeleteChatPhotoRequest & SetChatTitleRequest & SetChatDescriptionRequest & PinChatMessageRequest & UnpinChatMessageRequest & UnpinAllChatMessagesRequest & LeaveChatRequest & GetChatRequest & GetChatAdministratorsRequest & GetChatMemberCountRequest & GetChatMemberRequest & SetChatStickerSetRequest & DeleteChatStickerSetRequest & GetForumTopicIconStickersRequest & CreateForumTopicRequest & EditForumTopicRequest & CloseForumTopicRequest & ReopenForumTopicRequest & DeleteForumTopicRequest & UnpinAllForumTopicMessagesRequest & EditGeneralForumTopicRequest & CloseGeneralForumTopicRequest & ReopenGeneralForumTopicRequest & HideGeneralForumTopicRequest & UnhideGeneralForumTopicRequest & UnpinAllGeneralForumTopicMessagesRequest & AnswerCallbackQueryRequest & GetUserChatBoostsRequest & GetBusinessConnectionRequest & SetMyCommandsRequest & DeleteMyCommandsRequest & GetMyCommandsRequest & SetMyNameRequest & GetMyNameRequest & SetMyDescriptionRequest & GetMyDescriptionRequest & SetMyShortDescriptionRequest & GetMyShortDescriptionRequest & SetChatMenuButtonRequest & GetChatMenuButtonRequest & SetMyDefaultAdministratorRightsRequest & GetMyDefaultAdministratorRightsRequest & EditMessageTextRequest & EditMessageCaptionRequest & EditMessageMediaRequest & EditMessageLiveLocationRequest & StopMessageLiveLocationRequest & EditMessageReplyMarkupRequest & StopPollRequest & DeleteMessageRequest & DeleteMessagesRequest & SendStickerRequest & GetStickerSetRequest & GetCustomEmojiStickersRequest & UploadStickerFileRequest & CreateNewStickerSetRequest & AddStickerToSetRequest & SetStickerPositionInSetRequest & DeleteStickerFromSetRequest & ReplaceStickerInSetRequest & SetStickerEmojiListRequest & SetStickerKeywordsRequest & SetStickerMaskPositionRequest & SetStickerSetTitleRequest & SetStickerSetThumbnailRequest & SetCustomEmojiStickerSetThumbnailRequest & DeleteStickerSetRequest & AnswerInlineQueryRequest & AnswerWebAppQueryRequest & SendInvoiceRequest & CreateInvoiceLinkRequest & AnswerShippingQueryRequest & AnswerPreCheckoutQueryRequest & GetStarTransactionsRequest & RefundStarPaymentRequest & SetPassportDataErrorsRequest & SendGameRequest & SetGameScoreRequest & GetGameHighScoresRequest;


export interface ResponseSuccess<T> {
    ok: true;
    result: T;
}


export interface ResponseError {
    ok: false;
    error_code: number;
    description: string;
}
