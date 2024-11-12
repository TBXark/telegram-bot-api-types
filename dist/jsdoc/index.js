/**
 * @typedef {('private' | 'group' | 'supergroup' | 'channel')} ChatType
 */


/**
 * @typedef {('typing' | 'upload_photo' | 'record_video' | 'upload_video' | 'record_voice' | 'upload_voice' | 'upload_document' | 'find_location' | 'record_video_note' | 'upload_video_note')} ChatAction
 */


/**
 * @typedef {('mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'pre' | 'text_link' | 'text_mention' | 'spoiler' | 'custom_emoji')} MessageEntityType
 */


/**
 * @typedef {('Markdown' | 'MarkdownV2' | 'HTML')} ParseMode
 */


/**
 * This object represents an incoming update.At most one of the optional parameters can be present in any given update.  https://core.telegram.org/bots/api#update
 * @typedef {Object} Update
 * @property {number} update_id The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
 * @property {Message} [message] Optional. New incoming message of any kind - text, photo, sticker, etc.
 * @property {Message} [edited_message] Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
 * @property {Message} [channel_post] Optional. New incoming channel post of any kind - text, photo, sticker, etc.
 * @property {Message} [edited_channel_post] Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
 * @property {BusinessConnection} [business_connection] Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
 * @property {Message} [business_message] Optional. New message from a connected business account
 * @property {Message} [edited_business_message] Optional. New version of a message from a connected business account
 * @property {BusinessMessagesDeleted} [deleted_business_messages] Optional. Messages were deleted from a connected business account
 * @property {MessageReactionUpdated} [message_reaction] Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots.
 * @property {MessageReactionCountUpdated} [message_reaction_count] Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
 * @property {InlineQuery} [inline_query] Optional. New incoming inline query
 * @property {ChosenInlineResult} [chosen_inline_result] Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
 * @property {CallbackQuery} [callback_query] Optional. New incoming callback query
 * @property {ShippingQuery} [shipping_query] Optional. New incoming shipping query. Only for invoices with flexible price
 * @property {PreCheckoutQuery} [pre_checkout_query] Optional. New incoming pre-checkout query. Contains full information about checkout
 * @property {PaidMediaPurchased} [purchased_paid_media] Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
 * @property {Poll} [poll] Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
 * @property {PollAnswer} [poll_answer] Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
 * @property {ChatMemberUpdated} [my_chat_member] Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
 * @property {ChatMemberUpdated} [chat_member] Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
 * @property {ChatJoinRequest} [chat_join_request] Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
 * @property {ChatBoostUpdated} [chat_boost] Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
 * @property {ChatBoostRemoved} [removed_chat_boost] Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
 */


/**
 * Describes the current status of a webhook.  https://core.telegram.org/bots/api#webhookinfo
 * @typedef {Object} WebhookInfo
 * @property {string} url Webhook URL, may be empty if webhook is not set up
 * @property {boolean} has_custom_certificate True, if a custom certificate was provided for webhook certificate checks
 * @property {number} pending_update_count Number of updates awaiting delivery
 * @property {string} [ip_address] Optional. Currently used webhook IP address
 * @property {number} [last_error_date] Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
 * @property {string} [last_error_message] Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
 * @property {number} [last_synchronization_error_date] Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
 * @property {number} [max_connections] Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
 * @property {Array<string>} [allowed_updates] Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
 */


/**
 * This object represents a Telegram user or bot.  https://core.telegram.org/bots/api#user
 * @typedef {Object} User
 * @property {number} id Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {boolean} is_bot True, if this user is a bot
 * @property {string} first_name User's or bot's first name
 * @property {string} [last_name] Optional. User's or bot's last name
 * @property {string} [username] Optional. User's or bot's username
 * @property {string} [language_code] Optional. IETF language tag of the user's language
 * @property {boolean} [is_premium] Optional. True, if this user is a Telegram Premium user
 * @property {boolean} [added_to_attachment_menu] Optional. True, if this user added the bot to the attachment menu
 * @property {boolean} [can_join_groups] Optional. True, if the bot can be invited to groups. Returned only in getMe.
 * @property {boolean} [can_read_all_group_messages] Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
 * @property {boolean} [supports_inline_queries] Optional. True, if the bot supports inline queries. Returned only in getMe.
 * @property {boolean} [can_connect_to_business] Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
 * @property {boolean} [has_main_web_app] Optional. True, if the bot has a main Web App. Returned only in getMe.
 */


/**
 * This object represents a chat.  https://core.telegram.org/bots/api#chat
 * @typedef {Object} Chat
 * @property {number} id Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {ChatType} type Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
 * @property {string} [title] Optional. Title, for supergroups, channels and group chats
 * @property {string} [username] Optional. Username, for private chats, supergroups and channels if available
 * @property {string} [first_name] Optional. First name of the other party in a private chat
 * @property {string} [last_name] Optional. Last name of the other party in a private chat
 * @property {boolean} [is_forum] Optional. True, if the supergroup chat is a forum (has topics enabled)
 */


/**
 * This object contains full information about a chat.  https://core.telegram.org/bots/api#chatfullinfo
 * @typedef {Object} ChatFullInfo
 * @property {number} id Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {ChatType} type Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
 * @property {string} [title] Optional. Title, for supergroups, channels and group chats
 * @property {string} [username] Optional. Username, for private chats, supergroups and channels if available
 * @property {string} [first_name] Optional. First name of the other party in a private chat
 * @property {string} [last_name] Optional. Last name of the other party in a private chat
 * @property {boolean} [is_forum] Optional. True, if the supergroup chat is a forum (has topics enabled)
 * @property {number} accent_color_id Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.
 * @property {number} max_reaction_count The maximum number of reactions that can be set on a message in the chat
 * @property {ChatPhoto} [photo] Optional. Chat photo
 * @property {Array<string>} [active_usernames] Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels
 * @property {Birthdate} [birthdate] Optional. For private chats, the date of birth of the user
 * @property {BusinessIntro} [business_intro] Optional. For private chats with business accounts, the intro of the business
 * @property {BusinessLocation} [business_location] Optional. For private chats with business accounts, the location of the business
 * @property {BusinessOpeningHours} [business_opening_hours] Optional. For private chats with business accounts, the opening hours of the business
 * @property {Chat} [personal_chat] Optional. For private chats, the personal channel of the user
 * @property {Array<ReactionType>} [available_reactions] Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.
 * @property {string} [background_custom_emoji_id] Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
 * @property {number} [profile_accent_color_id] Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details.
 * @property {string} [profile_background_custom_emoji_id] Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background
 * @property {string} [emoji_status_custom_emoji_id] Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
 * @property {number} [emoji_status_expiration_date] Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
 * @property {string} [bio] Optional. Bio of the other party in a private chat
 * @property {boolean} [has_private_forwards] Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user
 * @property {boolean} [has_restricted_voice_and_video_messages] Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
 * @property {boolean} [join_to_send_messages] Optional. True, if users need to join the supergroup before they can send messages
 * @property {boolean} [join_by_request] Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
 * @property {string} [description] Optional. Description, for groups, supergroups and channel chats
 * @property {string} [invite_link] Optional. Primary invite link, for groups, supergroups and channel chats
 * @property {Message} [pinned_message] Optional. The most recent pinned message (by sending date)
 * @property {ChatPermissions} [permissions] Optional. Default chat member permissions, for groups and supergroups
 * @property {boolean} [can_send_paid_media] Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
 * @property {number} [slow_mode_delay] Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
 * @property {number} [unrestrict_boost_count] Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions
 * @property {number} [message_auto_delete_time] Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds
 * @property {boolean} [has_aggressive_anti_spam_enabled] Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.
 * @property {boolean} [has_hidden_members] Optional. True, if non-administrators can only get the list of bots and administrators in the chat
 * @property {boolean} [has_protected_content] Optional. True, if messages from the chat can't be forwarded to other chats
 * @property {boolean} [has_visible_history] Optional. True, if new chat members will have access to old messages; available only to chat administrators
 * @property {string} [sticker_set_name] Optional. For supergroups, name of the group sticker set
 * @property {boolean} [can_set_sticker_set] Optional. True, if the bot can change the group sticker set
 * @property {string} [custom_emoji_sticker_set_name] Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
 * @property {number} [linked_chat_id] Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
 * @property {ChatLocation} [location] Optional. For supergroups, the location to which the supergroup is connected
 */


/**
 * This object represents a message.  https://core.telegram.org/bots/api#message
 * @typedef {Object} Message
 * @property {number} message_id Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
 * @property {number} [message_thread_id] Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
 * @property {User} [from] Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
 * @property {Chat} [sender_chat] Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
 * @property {number} [sender_boost_count] Optional. If the sender of the message boosted the chat, the number of boosts added by the user
 * @property {User} [sender_business_bot] Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.
 * @property {number} date Date the message was sent in Unix time. It is always a positive number, representing a valid date.
 * @property {string} [business_connection_id] Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
 * @property {Chat} chat Chat the message belongs to
 * @property {MessageOrigin} [forward_origin] Optional. Information about the original message for forwarded messages
 * @property {boolean} [is_topic_message] Optional. True, if the message is sent to a forum topic
 * @property {boolean} [is_automatic_forward] Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
 * @property {Message} [reply_to_message] Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
 * @property {ExternalReplyInfo} [external_reply] Optional. Information about the message that is being replied to, which may come from another chat or forum topic
 * @property {TextQuote} [quote] Optional. For replies that quote part of the original message, the quoted part of the message
 * @property {Story} [reply_to_story] Optional. For replies to a story, the original story
 * @property {User} [via_bot] Optional. Bot through which the message was sent
 * @property {number} [edit_date] Optional. Date the message was last edited in Unix time
 * @property {boolean} [has_protected_content] Optional. True, if the message can't be forwarded
 * @property {boolean} [is_from_offline] Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
 * @property {string} [media_group_id] Optional. The unique identifier of a media message group this message belongs to
 * @property {string} [author_signature] Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
 * @property {string} [text] Optional. For text messages, the actual UTF-8 text of the message
 * @property {Array<MessageEntity>} [entities] Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
 * @property {LinkPreviewOptions} [link_preview_options] Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed
 * @property {string} [effect_id] Optional. Unique identifier of the message effect added to the message
 * @property {Animation} [animation] Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
 * @property {Audio} [audio] Optional. Message is an audio file, information about the file
 * @property {Document} [document] Optional. Message is a general file, information about the file
 * @property {PaidMediaInfo} [paid_media] Optional. Message contains paid media; information about the paid media
 * @property {Array<PhotoSize>} [photo] Optional. Message is a photo, available sizes of the photo
 * @property {Sticker} [sticker] Optional. Message is a sticker, information about the sticker
 * @property {Story} [story] Optional. Message is a forwarded story
 * @property {Video} [video] Optional. Message is a video, information about the video
 * @property {VideoNote} [video_note] Optional. Message is a video note, information about the video message
 * @property {Voice} [voice] Optional. Message is a voice message, information about the file
 * @property {string} [caption] Optional. Caption for the animation, audio, document, paid media, photo, video or voice
 * @property {Array<MessageEntity>} [caption_entities] Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
 * @property {boolean} [show_caption_above_media] Optional. True, if the caption must be shown above the message media
 * @property {boolean} [has_media_spoiler] Optional. True, if the message media is covered by a spoiler animation
 * @property {Contact} [contact] Optional. Message is a shared contact, information about the contact
 * @property {Dice} [dice] Optional. Message is a dice with random value
 * @property {Game} [game] Optional. Message is a game, information about the game. More about games »
 * @property {Poll} [poll] Optional. Message is a native poll, information about the poll
 * @property {Venue} [venue] Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
 * @property {Location} [location] Optional. Message is a shared location, information about the location
 * @property {Array<User>} [new_chat_members] Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
 * @property {User} [left_chat_member] Optional. A member was removed from the group, information about them (this member may be the bot itself)
 * @property {string} [new_chat_title] Optional. A chat title was changed to this value
 * @property {Array<PhotoSize>} [new_chat_photo] Optional. A chat photo was change to this value
 * @property {boolean} [delete_chat_photo] Optional. Service message: the chat photo was deleted
 * @property {boolean} [group_chat_created] Optional. Service message: the group has been created
 * @property {boolean} [supergroup_chat_created] Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
 * @property {boolean} [channel_chat_created] Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
 * @property {MessageAutoDeleteTimerChanged} [message_auto_delete_timer_changed] Optional. Service message: auto-delete timer settings changed in the chat
 * @property {number} [migrate_to_chat_id] Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {number} [migrate_from_chat_id] Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {MaybeInaccessibleMessage} [pinned_message] Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
 * @property {Invoice} [invoice] Optional. Message is an invoice for a payment, information about the invoice. More about payments »
 * @property {SuccessfulPayment} [successful_payment] Optional. Message is a service message about a successful payment, information about the payment. More about payments »
 * @property {RefundedPayment} [refunded_payment] Optional. Message is a service message about a refunded payment, information about the payment. More about payments »
 * @property {UsersShared} [users_shared] Optional. Service message: users were shared with the bot
 * @property {ChatShared} [chat_shared] Optional. Service message: a chat was shared with the bot
 * @property {string} [connected_website] Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
 * @property {WriteAccessAllowed} [write_access_allowed] Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess
 * @property {PassportData} [passport_data] Optional. Telegram Passport data
 * @property {ProximityAlertTriggered} [proximity_alert_triggered] Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
 * @property {ChatBoostAdded} [boost_added] Optional. Service message: user boosted the chat
 * @property {ChatBackground} [chat_background_set] Optional. Service message: chat background set
 * @property {ForumTopicCreated} [forum_topic_created] Optional. Service message: forum topic created
 * @property {ForumTopicEdited} [forum_topic_edited] Optional. Service message: forum topic edited
 * @property {ForumTopicClosed} [forum_topic_closed] Optional. Service message: forum topic closed
 * @property {ForumTopicReopened} [forum_topic_reopened] Optional. Service message: forum topic reopened
 * @property {GeneralForumTopicHidden} [general_forum_topic_hidden] Optional. Service message: the 'General' forum topic hidden
 * @property {GeneralForumTopicUnhidden} [general_forum_topic_unhidden] Optional. Service message: the 'General' forum topic unhidden
 * @property {GiveawayCreated} [giveaway_created] Optional. Service message: a scheduled giveaway was created
 * @property {Giveaway} [giveaway] Optional. The message is a scheduled giveaway message
 * @property {GiveawayWinners} [giveaway_winners] Optional. A giveaway with public winners was completed
 * @property {GiveawayCompleted} [giveaway_completed] Optional. Service message: a giveaway without public winners was completed
 * @property {VideoChatScheduled} [video_chat_scheduled] Optional. Service message: video chat scheduled
 * @property {VideoChatStarted} [video_chat_started] Optional. Service message: video chat started
 * @property {VideoChatEnded} [video_chat_ended] Optional. Service message: video chat ended
 * @property {VideoChatParticipantsInvited} [video_chat_participants_invited] Optional. Service message: new participants invited to a video chat
 * @property {WebAppData} [web_app_data] Optional. Service message: data sent by a Web App
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
 */


/**
 * This object represents a unique message identifier.  https://core.telegram.org/bots/api#messageid
 * @typedef {Object} MessageId
 * @property {number} message_id Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
 */


/**
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.  https://core.telegram.org/bots/api#inaccessiblemessage
 * @typedef {Object} InaccessibleMessage
 * @property {Chat} chat Chat the message belonged to
 * @property {number} message_id Unique message identifier inside the chat
 * @property {number} date Always 0. The field can be used to differentiate regular and inaccessible messages.
 */


/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.  https://core.telegram.org/bots/api#messageentity
 * @typedef {Object} MessageEntity
 * @property {MessageEntityType} type Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag or #hashtag@chatusername), “cashtag” ($USD or $USD@chatusername), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers)
 * @property {number} offset Offset in UTF-16 code units to the start of the entity
 * @property {number} length Length of the entity in UTF-16 code units
 * @property {string} [url] Optional. For “text_link” only, URL that will be opened after user taps on the text
 * @property {User} [user] Optional. For “text_mention” only, the mentioned user
 * @property {string} [language] Optional. For “pre” only, the programming language of the entity text
 * @property {string} [custom_emoji_id] Optional. For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
 */


/**
 * This object contains information about the quoted part of a message that is replied to by the given message.  https://core.telegram.org/bots/api#textquote
 * @typedef {Object} TextQuote
 * @property {string} text Text of the quoted part of a message that is replied to by the given message
 * @property {Array<MessageEntity>} [entities] Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.
 * @property {number} position Approximate quote position in the original message in UTF-16 code units as specified by the sender
 * @property {boolean} [is_manual] Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
 */


/**
 * This object contains information about a message that is being replied to, which may come from another chat or forum topic.  https://core.telegram.org/bots/api#externalreplyinfo
 * @typedef {Object} ExternalReplyInfo
 * @property {MessageOrigin} origin Origin of the message replied to by the given message
 * @property {Chat} [chat] Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
 * @property {number} [message_id] Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
 * @property {LinkPreviewOptions} [link_preview_options] Optional. Options used for link preview generation for the original message, if it is a text message
 * @property {Animation} [animation] Optional. Message is an animation, information about the animation
 * @property {Audio} [audio] Optional. Message is an audio file, information about the file
 * @property {Document} [document] Optional. Message is a general file, information about the file
 * @property {PaidMediaInfo} [paid_media] Optional. Message contains paid media; information about the paid media
 * @property {Array<PhotoSize>} [photo] Optional. Message is a photo, available sizes of the photo
 * @property {Sticker} [sticker] Optional. Message is a sticker, information about the sticker
 * @property {Story} [story] Optional. Message is a forwarded story
 * @property {Video} [video] Optional. Message is a video, information about the video
 * @property {VideoNote} [video_note] Optional. Message is a video note, information about the video message
 * @property {Voice} [voice] Optional. Message is a voice message, information about the file
 * @property {boolean} [has_media_spoiler] Optional. True, if the message media is covered by a spoiler animation
 * @property {Contact} [contact] Optional. Message is a shared contact, information about the contact
 * @property {Dice} [dice] Optional. Message is a dice with random value
 * @property {Game} [game] Optional. Message is a game, information about the game. More about games »
 * @property {Giveaway} [giveaway] Optional. Message is a scheduled giveaway, information about the giveaway
 * @property {GiveawayWinners} [giveaway_winners] Optional. A giveaway with public winners was completed
 * @property {Invoice} [invoice] Optional. Message is an invoice for a payment, information about the invoice. More about payments »
 * @property {Location} [location] Optional. Message is a shared location, information about the location
 * @property {Poll} [poll] Optional. Message is a native poll, information about the poll
 * @property {Venue} [venue] Optional. Message is a venue, information about the venue
 */


/**
 * Describes reply parameters for the message that is being sent.  https://core.telegram.org/bots/api#replyparameters
 * @typedef {Object} ReplyParameters
 * @property {number} message_id Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified
 * @property {number | string} [chat_id] Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account.
 * @property {boolean} [allow_sending_without_reply] Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
 * @property {string} [quote] Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message.
 * @property {string} [quote_parse_mode] Optional. Mode for parsing entities in the quote. See formatting options for more details.
 * @property {Array<MessageEntity>} [quote_entities] Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.
 * @property {number} [quote_position] Optional. Position of the quote in the original message in UTF-16 code units
 */


/**
 * The message was originally sent by a known user.  https://core.telegram.org/bots/api#messageoriginuser
 * @typedef {Object} MessageOriginUser
 * @property {"user"} type Type of the message origin, always “user”
 * @property {number} date Date the message was sent originally in Unix time
 * @property {User} sender_user User that sent the message originally
 */


/**
 * The message was originally sent by an unknown user.  https://core.telegram.org/bots/api#messageoriginhiddenuser
 * @typedef {Object} MessageOriginHiddenUser
 * @property {"hidden_user"} type Type of the message origin, always “hidden_user”
 * @property {number} date Date the message was sent originally in Unix time
 * @property {string} sender_user_name Name of the user that sent the message originally
 */


/**
 * The message was originally sent on behalf of a chat to a group chat.  https://core.telegram.org/bots/api#messageoriginchat
 * @typedef {Object} MessageOriginChat
 * @property {"chat"} type Type of the message origin, always “chat”
 * @property {number} date Date the message was sent originally in Unix time
 * @property {Chat} sender_chat Chat that sent the message originally
 * @property {string} [author_signature] Optional. For messages originally sent by an anonymous chat administrator, original message author signature
 */


/**
 * The message was originally sent to a channel chat.  https://core.telegram.org/bots/api#messageoriginchannel
 * @typedef {Object} MessageOriginChannel
 * @property {"channel"} type Type of the message origin, always “channel”
 * @property {number} date Date the message was sent originally in Unix time
 * @property {Chat} chat Channel chat to which the message was originally sent
 * @property {number} message_id Unique message identifier inside the chat
 * @property {string} [author_signature] Optional. Signature of the original post author
 */


/**
 * This object represents one size of a photo or a file / sticker thumbnail.  https://core.telegram.org/bots/api#photosize
 * @typedef {Object} PhotoSize
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} width Photo width
 * @property {number} height Photo height
 * @property {number} [file_size] Optional. File size in bytes
 */


/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).  https://core.telegram.org/bots/api#animation
 * @typedef {Object} Animation
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} width Video width as defined by the sender
 * @property {number} height Video height as defined by the sender
 * @property {number} duration Duration of the video in seconds as defined by the sender
 * @property {PhotoSize} [thumbnail] Optional. Animation thumbnail as defined by the sender
 * @property {string} [file_name] Optional. Original animation filename as defined by the sender
 * @property {string} [mime_type] Optional. MIME type of the file as defined by the sender
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 */


/**
 * This object represents an audio file to be treated as music by the Telegram clients.  https://core.telegram.org/bots/api#audio
 * @typedef {Object} Audio
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} duration Duration of the audio in seconds as defined by the sender
 * @property {string} [performer] Optional. Performer of the audio as defined by the sender or by audio tags
 * @property {string} [title] Optional. Title of the audio as defined by the sender or by audio tags
 * @property {string} [file_name] Optional. Original filename as defined by the sender
 * @property {string} [mime_type] Optional. MIME type of the file as defined by the sender
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 * @property {PhotoSize} [thumbnail] Optional. Thumbnail of the album cover to which the music file belongs
 */


/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).  https://core.telegram.org/bots/api#document
 * @typedef {Object} Document
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {PhotoSize} [thumbnail] Optional. Document thumbnail as defined by the sender
 * @property {string} [file_name] Optional. Original filename as defined by the sender
 * @property {string} [mime_type] Optional. MIME type of the file as defined by the sender
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 */


/**
 * This object represents a story.  https://core.telegram.org/bots/api#story
 * @typedef {Object} Story
 * @property {Chat} chat Chat that posted the story
 * @property {number} id Unique identifier for the story in the chat
 */


/**
 * This object represents a video file.  https://core.telegram.org/bots/api#video
 * @typedef {Object} Video
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} width Video width as defined by the sender
 * @property {number} height Video height as defined by the sender
 * @property {number} duration Duration of the video in seconds as defined by the sender
 * @property {PhotoSize} [thumbnail] Optional. Video thumbnail
 * @property {string} [file_name] Optional. Original filename as defined by the sender
 * @property {string} [mime_type] Optional. MIME type of the file as defined by the sender
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 */


/**
 * This object represents a video message (available in Telegram apps as of v.4.0).  https://core.telegram.org/bots/api#videonote
 * @typedef {Object} VideoNote
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} length Video width and height (diameter of the video message) as defined by the sender
 * @property {number} duration Duration of the video in seconds as defined by the sender
 * @property {PhotoSize} [thumbnail] Optional. Video thumbnail
 * @property {number} [file_size] Optional. File size in bytes
 */


/**
 * This object represents a voice note.  https://core.telegram.org/bots/api#voice
 * @typedef {Object} Voice
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} duration Duration of the audio in seconds as defined by the sender
 * @property {string} [mime_type] Optional. MIME type of the file as defined by the sender
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 */


/**
 * Describes the paid media added to a message.  https://core.telegram.org/bots/api#paidmediainfo
 * @typedef {Object} PaidMediaInfo
 * @property {number} star_count The number of Telegram Stars that must be paid to buy access to the media
 * @property {Array<PaidMedia>} paid_media Information about the paid media
 */


/**
 * The paid media isn't available before the payment.  https://core.telegram.org/bots/api#paidmediapreview
 * @typedef {Object} PaidMediaPreview
 * @property {"preview"} type Type of the paid media, always “preview”
 * @property {number} [width] Optional. Media width as defined by the sender
 * @property {number} [height] Optional. Media height as defined by the sender
 * @property {number} [duration] Optional. Duration of the media in seconds as defined by the sender
 */


/**
 * The paid media is a photo.  https://core.telegram.org/bots/api#paidmediaphoto
 * @typedef {Object} PaidMediaPhoto
 * @property {"photo"} type Type of the paid media, always “photo”
 * @property {Array<PhotoSize>} photo The photo
 */


/**
 * The paid media is a video.  https://core.telegram.org/bots/api#paidmediavideo
 * @typedef {Object} PaidMediaVideo
 * @property {"video"} type Type of the paid media, always “video”
 * @property {Video} video The video
 */


/**
 * This object represents a phone contact.  https://core.telegram.org/bots/api#contact
 * @typedef {Object} Contact
 * @property {string} phone_number Contact's phone number
 * @property {string} first_name Contact's first name
 * @property {string} [last_name] Optional. Contact's last name
 * @property {number} [user_id] Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {string} [vcard] Optional. Additional data about the contact in the form of a vCard
 */


/**
 * This object represents an animated emoji that displays a random value.  https://core.telegram.org/bots/api#dice
 * @typedef {Object} Dice
 * @property {string} emoji Emoji on which the dice throw animation is based
 * @property {number} value Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
 */


/**
 * This object contains information about one answer option in a poll.  https://core.telegram.org/bots/api#polloption
 * @typedef {Object} PollOption
 * @property {string} text Option text, 1-100 characters
 * @property {Array<MessageEntity>} [text_entities] Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
 * @property {number} voter_count Number of users that voted for this option
 */


/**
 * This object contains information about one answer option in a poll to be sent.  https://core.telegram.org/bots/api#inputpolloption
 * @typedef {Object} InputPollOption
 * @property {string} text Option text, 1-100 characters
 * @property {string} [text_parse_mode] Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
 * @property {Array<MessageEntity>} [text_entities] Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode
 */


/**
 * This object represents an answer of a user in a non-anonymous poll.  https://core.telegram.org/bots/api#pollanswer
 * @typedef {Object} PollAnswer
 * @property {string} poll_id Unique poll identifier
 * @property {Chat} [voter_chat] Optional. The chat that changed the answer to the poll, if the voter is anonymous
 * @property {User} [user] Optional. The user that changed the answer to the poll, if the voter isn't anonymous
 * @property {Array<number>} option_ids 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
 */


/**
 * This object contains information about a poll.  https://core.telegram.org/bots/api#poll
 * @typedef {Object} Poll
 * @property {string} id Unique poll identifier
 * @property {string} question Poll question, 1-300 characters
 * @property {Array<MessageEntity>} [question_entities] Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
 * @property {Array<PollOption>} options List of poll options
 * @property {number} total_voter_count Total number of users that voted in the poll
 * @property {boolean} is_closed True, if the poll is closed
 * @property {boolean} is_anonymous True, if the poll is anonymous
 * @property {string} type Poll type, currently can be “regular” or “quiz”
 * @property {boolean} allows_multiple_answers True, if the poll allows multiple answers
 * @property {number} [correct_option_id] Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
 * @property {string} [explanation] Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
 * @property {Array<MessageEntity>} [explanation_entities] Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
 * @property {number} [open_period] Optional. Amount of time in seconds the poll will be active after creation
 * @property {number} [close_date] Optional. Point in time (Unix timestamp) when the poll will be automatically closed
 */


/**
 * This object represents a point on the map.  https://core.telegram.org/bots/api#location
 * @typedef {Object} Location
 * @property {number} latitude Latitude as defined by the sender
 * @property {number} longitude Longitude as defined by the sender
 * @property {number} [horizontal_accuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {number} [live_period] Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
 * @property {number} [heading] Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
 * @property {number} [proximity_alert_radius] Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
 */


/**
 * This object represents a venue.  https://core.telegram.org/bots/api#venue
 * @typedef {Object} Venue
 * @property {Location} location Venue location. Can't be a live location
 * @property {string} title Name of the venue
 * @property {string} address Address of the venue
 * @property {string} [foursquare_id] Optional. Foursquare identifier of the venue
 * @property {string} [foursquare_type] Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {string} [google_place_id] Optional. Google Places identifier of the venue
 * @property {string} [google_place_type] Optional. Google Places type of the venue. (See supported types.)
 */


/**
 * Describes data sent from a Web App to the bot.  https://core.telegram.org/bots/api#webappdata
 * @typedef {Object} WebAppData
 * @property {string} data The data. Be aware that a bad client can send arbitrary data in this field.
 * @property {string} button_text Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
 */


/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.  https://core.telegram.org/bots/api#proximityalerttriggered
 * @typedef {Object} ProximityAlertTriggered
 * @property {User} traveler User that triggered the alert
 * @property {User} watcher User that set the alert
 * @property {number} distance The distance between the users
 */


/**
 * This object represents a service message about a change in auto-delete timer settings.  https://core.telegram.org/bots/api#messageautodeletetimerchanged
 * @typedef {Object} MessageAutoDeleteTimerChanged
 * @property {number} message_auto_delete_time New auto-delete time for messages in the chat; in seconds
 */


/**
 * This object represents a service message about a user boosting a chat.  https://core.telegram.org/bots/api#chatboostadded
 * @typedef {Object} ChatBoostAdded
 * @property {number} boost_count Number of boosts added by the user
 */


/**
 * The background is filled using the selected color.  https://core.telegram.org/bots/api#backgroundfillsolid
 * @typedef {Object} BackgroundFillSolid
 * @property {"solid"} type Type of the background fill, always “solid”
 * @property {number} color The color of the background fill in the RGB24 format
 */


/**
 * The background is a gradient fill.  https://core.telegram.org/bots/api#backgroundfillgradient
 * @typedef {Object} BackgroundFillGradient
 * @property {"gradient"} type Type of the background fill, always “gradient”
 * @property {number} top_color Top color of the gradient in the RGB24 format
 * @property {number} bottom_color Bottom color of the gradient in the RGB24 format
 * @property {number} rotation_angle Clockwise rotation angle of the background fill in degrees; 0-359
 */


/**
 * The background is a freeform gradient that rotates after every message in the chat.  https://core.telegram.org/bots/api#backgroundfillfreeformgradient
 * @typedef {Object} BackgroundFillFreeformGradient
 * @property {"freeform_gradient"} type Type of the background fill, always “freeform_gradient”
 * @property {Array<number>} colors A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
 */


/**
 * The background is automatically filled based on the selected colors.  https://core.telegram.org/bots/api#backgroundtypefill
 * @typedef {Object} BackgroundTypeFill
 * @property {"fill"} type Type of the background, always “fill”
 * @property {BackgroundFill} fill The background fill
 * @property {number} dark_theme_dimming Dimming of the background in dark themes, as a percentage; 0-100
 */


/**
 * The background is a wallpaper in the JPEG format.  https://core.telegram.org/bots/api#backgroundtypewallpaper
 * @typedef {Object} BackgroundTypeWallpaper
 * @property {"wallpaper"} type Type of the background, always “wallpaper”
 * @property {Document} document Document with the wallpaper
 * @property {number} dark_theme_dimming Dimming of the background in dark themes, as a percentage; 0-100
 * @property {boolean} [is_blurred] Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
 * @property {boolean} [is_moving] Optional. True, if the background moves slightly when the device is tilted
 */


/**
 * The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.  https://core.telegram.org/bots/api#backgroundtypepattern
 * @typedef {Object} BackgroundTypePattern
 * @property {"pattern"} type Type of the background, always “pattern”
 * @property {Document} document Document with the pattern
 * @property {BackgroundFill} fill The background fill that is combined with the pattern
 * @property {number} intensity Intensity of the pattern when it is shown above the filled background; 0-100
 * @property {boolean} [is_inverted] Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
 * @property {boolean} [is_moving] Optional. True, if the background moves slightly when the device is tilted
 */


/**
 * The background is taken directly from a built-in chat theme.  https://core.telegram.org/bots/api#backgroundtypechattheme
 * @typedef {Object} BackgroundTypeChatTheme
 * @property {"chat_theme"} type Type of the background, always “chat_theme”
 * @property {string} theme_name Name of the chat theme, which is usually an emoji
 */


/**
 * This object represents a chat background.  https://core.telegram.org/bots/api#chatbackground
 * @typedef {Object} ChatBackground
 * @property {BackgroundType} type Type of the background
 */


/**
 * This object represents a service message about a new forum topic created in the chat.  https://core.telegram.org/bots/api#forumtopiccreated
 * @typedef {Object} ForumTopicCreated
 * @property {string} name Name of the topic
 * @property {number} icon_color Color of the topic icon in RGB format
 * @property {string} [icon_custom_emoji_id] Optional. Unique identifier of the custom emoji shown as the topic icon
 */


/**
 * This object represents a service message about a forum topic closed in the chat. Currently holds no information.  https://core.telegram.org/bots/api#forumtopicclosed
 * @typedef {Object} ForumTopicClosed
 */


/**
 * This object represents a service message about an edited forum topic.  https://core.telegram.org/bots/api#forumtopicedited
 * @typedef {Object} ForumTopicEdited
 * @property {string} [name] Optional. New name of the topic, if it was edited
 * @property {string} [icon_custom_emoji_id] Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
 */


/**
 * This object represents a service message about a forum topic reopened in the chat. Currently holds no information.  https://core.telegram.org/bots/api#forumtopicreopened
 * @typedef {Object} ForumTopicReopened
 */


/**
 * This object represents a service message about General forum topic hidden in the chat. Currently holds no information.  https://core.telegram.org/bots/api#generalforumtopichidden
 * @typedef {Object} GeneralForumTopicHidden
 */


/**
 * This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.  https://core.telegram.org/bots/api#generalforumtopicunhidden
 * @typedef {Object} GeneralForumTopicUnhidden
 */


/**
 * This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.  https://core.telegram.org/bots/api#shareduser
 * @typedef {Object} SharedUser
 * @property {number} user_id Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
 * @property {string} [first_name] Optional. First name of the user, if the name was requested by the bot
 * @property {string} [last_name] Optional. Last name of the user, if the name was requested by the bot
 * @property {string} [username] Optional. Username of the user, if the username was requested by the bot
 * @property {Array<PhotoSize>} [photo] Optional. Available sizes of the chat photo, if the photo was requested by the bot
 */


/**
 * This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.  https://core.telegram.org/bots/api#usersshared
 * @typedef {Object} UsersShared
 * @property {number} request_id Identifier of the request
 * @property {Array<SharedUser>} users Information about users shared with the bot.
 */


/**
 * This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.  https://core.telegram.org/bots/api#chatshared
 * @typedef {Object} ChatShared
 * @property {number} request_id Identifier of the request
 * @property {number} chat_id Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
 * @property {string} [title] Optional. Title of the chat, if the title was requested by the bot.
 * @property {string} [username] Optional. Username of the chat, if the username was requested by the bot and available.
 * @property {Array<PhotoSize>} [photo] Optional. Available sizes of the chat photo, if the photo was requested by the bot
 */


/**
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.  https://core.telegram.org/bots/api#writeaccessallowed
 * @typedef {Object} WriteAccessAllowed
 * @property {boolean} [from_request] Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
 * @property {string} [web_app_name] Optional. Name of the Web App, if the access was granted when the Web App was launched from a link
 * @property {boolean} [from_attachment_menu] Optional. True, if the access was granted when the bot was added to the attachment or side menu
 */


/**
 * This object represents a service message about a video chat scheduled in the chat.  https://core.telegram.org/bots/api#videochatscheduled
 * @typedef {Object} VideoChatScheduled
 * @property {number} start_date Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
 */


/**
 * This object represents a service message about a video chat started in the chat. Currently holds no information.  https://core.telegram.org/bots/api#videochatstarted
 * @typedef {Object} VideoChatStarted
 */


/**
 * This object represents a service message about a video chat ended in the chat.  https://core.telegram.org/bots/api#videochatended
 * @typedef {Object} VideoChatEnded
 * @property {number} duration Video chat duration in seconds
 */


/**
 * This object represents a service message about new members invited to a video chat.  https://core.telegram.org/bots/api#videochatparticipantsinvited
 * @typedef {Object} VideoChatParticipantsInvited
 * @property {Array<User>} users New members that were invited to the video chat
 */


/**
 * This object represents a service message about the creation of a scheduled giveaway.  https://core.telegram.org/bots/api#giveawaycreated
 * @typedef {Object} GiveawayCreated
 * @property {number} [prize_star_count] Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
 */


/**
 * This object represents a message about a scheduled giveaway.  https://core.telegram.org/bots/api#giveaway
 * @typedef {Object} Giveaway
 * @property {Array<Chat>} chats The list of chats which the user must join to participate in the giveaway
 * @property {number} winners_selection_date Point in time (Unix timestamp) when winners of the giveaway will be selected
 * @property {number} winner_count The number of users which are supposed to be selected as winners of the giveaway
 * @property {boolean} [only_new_members] Optional. True, if only users who join the chats after the giveaway started should be eligible to win
 * @property {boolean} [has_public_winners] Optional. True, if the list of giveaway winners will be visible to everyone
 * @property {string} [prize_description] Optional. Description of additional giveaway prize
 * @property {Array<string>} [country_codes] Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
 * @property {number} [prize_star_count] Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
 * @property {number} [premium_subscription_month_count] Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
 */


/**
 * This object represents a message about the completion of a giveaway with public winners.  https://core.telegram.org/bots/api#giveawaywinners
 * @typedef {Object} GiveawayWinners
 * @property {Chat} chat The chat that created the giveaway
 * @property {number} giveaway_message_id Identifier of the message with the giveaway in the chat
 * @property {number} winners_selection_date Point in time (Unix timestamp) when winners of the giveaway were selected
 * @property {number} winner_count Total number of winners in the giveaway
 * @property {Array<User>} winners List of up to 100 winners of the giveaway
 * @property {number} [additional_chat_count] Optional. The number of other chats the user had to join in order to be eligible for the giveaway
 * @property {number} [prize_star_count] Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
 * @property {number} [premium_subscription_month_count] Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
 * @property {number} [unclaimed_prize_count] Optional. Number of undistributed prizes
 * @property {boolean} [only_new_members] Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
 * @property {boolean} [was_refunded] Optional. True, if the giveaway was canceled because the payment for it was refunded
 * @property {string} [prize_description] Optional. Description of additional giveaway prize
 */


/**
 * This object represents a service message about the completion of a giveaway without public winners.  https://core.telegram.org/bots/api#giveawaycompleted
 * @typedef {Object} GiveawayCompleted
 * @property {number} winner_count Number of winners in the giveaway
 * @property {number} [unclaimed_prize_count] Optional. Number of undistributed prizes
 * @property {Message} [giveaway_message] Optional. Message with the giveaway that was completed, if it wasn't deleted
 * @property {boolean} [is_star_giveaway] Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
 */


/**
 * Describes the options used for link preview generation.  https://core.telegram.org/bots/api#linkpreviewoptions
 * @typedef {Object} LinkPreviewOptions
 * @property {boolean} [is_disabled] Optional. True, if the link preview is disabled
 * @property {string} [url] Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used
 * @property {boolean} [prefer_small_media] Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
 * @property {boolean} [prefer_large_media] Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
 * @property {boolean} [show_above_text] Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
 */


/**
 * This object represent a user's profile pictures.  https://core.telegram.org/bots/api#userprofilephotos
 * @typedef {Object} UserProfilePhotos
 * @property {number} total_count Total number of profile pictures the target user has
 * @property {Array<Array<PhotoSize>>} photos Requested profile pictures (in up to 4 sizes each)
 */


/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.  https://core.telegram.org/bots/api#file
 * @typedef {Object} File
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} [file_size] Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
 * @property {string} [file_path] Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.
 */


/**
 * Describes a Web App.  https://core.telegram.org/bots/api#webappinfo
 * @typedef {Object} WebAppInfo
 * @property {string} url An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
 */


/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#replykeyboardmarkup
 * @typedef {Object} ReplyKeyboardMarkup
 * @property {Array<Array<KeyboardButton>>} keyboard Array of button rows, each represented by an Array of KeyboardButton objects
 * @property {boolean} [is_persistent] Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
 * @property {boolean} [resize_keyboard] Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
 * @property {boolean} [one_time_keyboard] Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
 * @property {string} [input_field_placeholder] Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
 * @property {boolean} [selective] Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
 */


/**
 * This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text.  https://core.telegram.org/bots/api#keyboardbutton
 * @typedef {Object} KeyboardButton
 * @property {string} text Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
 * @property {KeyboardButtonRequestUsers} [request_users] Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.
 * @property {KeyboardButtonRequestChat} [request_chat] Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.
 * @property {boolean} [request_contact] Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
 * @property {boolean} [request_location] Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.
 * @property {KeyboardButtonPollType} [request_poll] Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
 * @property {WebAppInfo} [web_app] Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.
 */


/**
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »  https://core.telegram.org/bots/api#keyboardbuttonrequestusers
 * @typedef {Object} KeyboardButtonRequestUsers
 * @property {number} request_id Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message
 * @property {boolean} [user_is_bot] Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.
 * @property {boolean} [user_is_premium] Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.
 * @property {number} [max_quantity] Optional. The maximum number of users to be selected; 1-10. Defaults to 1.
 * @property {boolean} [request_name] Optional. Pass True to request the users' first and last names
 * @property {boolean} [request_username] Optional. Pass True to request the users' usernames
 * @property {boolean} [request_photo] Optional. Pass True to request the users' photos
 */


/**
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats ».  https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 * @typedef {Object} KeyboardButtonRequestChat
 * @property {number} request_id Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message
 * @property {boolean} chat_is_channel Pass True to request a channel chat, pass False to request a group or a supergroup chat.
 * @property {boolean} [chat_is_forum] Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
 * @property {boolean} [chat_has_username] Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
 * @property {boolean} [chat_is_created] Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
 * @property {ChatAdministratorRights} [user_administrator_rights] Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
 * @property {ChatAdministratorRights} [bot_administrator_rights] Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
 * @property {boolean} [bot_is_member] Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
 * @property {boolean} [request_title] Optional. Pass True to request the chat's title
 * @property {boolean} [request_username] Optional. Pass True to request the chat's username
 * @property {boolean} [request_photo] Optional. Pass True to request the chat's photo
 */


/**
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.  https://core.telegram.org/bots/api#keyboardbuttonpolltype
 * @typedef {Object} KeyboardButtonPollType
 * @property {string} [type] Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
 */


/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#replykeyboardremove
 * @typedef {Object} ReplyKeyboardRemove
 * @property {boolean} remove_keyboard Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
 * @property {boolean} [selective] Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
 */


/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.  https://core.telegram.org/bots/api#inlinekeyboardmarkup
 * @typedef {Object} InlineKeyboardMarkup
 * @property {Array<Array<InlineKeyboardButton>>} inline_keyboard Array of button rows, each represented by an Array of InlineKeyboardButton objects
 */


/**
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.  https://core.telegram.org/bots/api#inlinekeyboardbutton
 * @typedef {Object} InlineKeyboardButton
 * @property {string} text Label text on the button
 * @property {string} [url] Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
 * @property {string} [callback_data] Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
 * @property {WebAppInfo} [web_app] Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
 * @property {LoginUrl} [login_url] Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
 * @property {string} [switch_inline_query] Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account.
 * @property {string} [switch_inline_query_current_chat] Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 * @property {SwitchInlineQueryChosenChat} [switch_inline_query_chosen_chat] Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account.
 * @property {CopyTextButton} [copy_text] Optional. Description of the button that copies the specified text to the clipboard.
 * @property {CallbackGame} [callback_game] Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
 * @property {boolean} [pay] Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
 */


/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:  https://core.telegram.org/bots/api#loginurl
 * @typedef {Object} LoginUrl
 * @property {string} url An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
 * @property {string} [forward_text] Optional. New text of the button in forwarded messages.
 * @property {string} [bot_username] Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
 * @property {boolean} [request_write_access] Optional. Pass True to request the permission for your bot to send messages to the user.
 */


/**
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.  https://core.telegram.org/bots/api#switchinlinequerychosenchat
 * @typedef {Object} SwitchInlineQueryChosenChat
 * @property {string} [query] Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted
 * @property {boolean} [allow_user_chats] Optional. True, if private chats with users can be chosen
 * @property {boolean} [allow_bot_chats] Optional. True, if private chats with bots can be chosen
 * @property {boolean} [allow_group_chats] Optional. True, if group and supergroup chats can be chosen
 * @property {boolean} [allow_channel_chats] Optional. True, if channel chats can be chosen
 */


/**
 * This object represents an inline keyboard button that copies specified text to the clipboard.  https://core.telegram.org/bots/api#copytextbutton
 * @typedef {Object} CopyTextButton
 * @property {string} text The text to be copied to the clipboard; 1-256 characters
 */


/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.  https://core.telegram.org/bots/api#callbackquery
 * @typedef {Object} CallbackQuery
 * @property {string} id Unique identifier for this query
 * @property {User} from Sender
 * @property {MaybeInaccessibleMessage} [message] Optional. Message sent by the bot with the callback button that originated the query
 * @property {string} [inline_message_id] Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
 * @property {string} chat_instance Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
 * @property {string} [data] Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
 * @property {string} [game_short_name] Optional. Short name of a Game to be returned, serves as the unique identifier for the game
 */


/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.  https://core.telegram.org/bots/api#forcereply
 * @typedef {Object} ForceReply
 * @property {boolean} force_reply Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
 * @property {string} [input_field_placeholder] Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters
 * @property {boolean} [selective] Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
 */


/**
 * This object represents a chat photo.  https://core.telegram.org/bots/api#chatphoto
 * @typedef {Object} ChatPhoto
 * @property {string} small_file_id File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property {string} small_file_unique_id Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {string} big_file_id File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property {string} big_file_unique_id Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 */


/**
 * Represents an invite link for a chat.  https://core.telegram.org/bots/api#chatinvitelink
 * @typedef {Object} ChatInviteLink
 * @property {string} invite_link The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
 * @property {User} creator Creator of the link
 * @property {boolean} creates_join_request True, if users joining the chat via the link need to be approved by chat administrators
 * @property {boolean} is_primary True, if the link is primary
 * @property {boolean} is_revoked True, if the link is revoked
 * @property {string} [name] Optional. Invite link name
 * @property {number} [expire_date] Optional. Point in time (Unix timestamp) when the link will expire or has been expired
 * @property {number} [member_limit] Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 * @property {number} [pending_join_request_count] Optional. Number of pending join requests created using this link
 * @property {number} [subscription_period] Optional. The number of seconds the subscription will be active for before the next payment
 * @property {number} [subscription_price] Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
 */


/**
 * Represents the rights of an administrator in a chat.  https://core.telegram.org/bots/api#chatadministratorrights
 * @typedef {Object} ChatAdministratorRights
 * @property {boolean} is_anonymous True, if the user's presence in the chat is hidden
 * @property {boolean} can_manage_chat True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
 * @property {boolean} can_delete_messages True, if the administrator can delete messages of other users
 * @property {boolean} can_manage_video_chats True, if the administrator can manage video chats
 * @property {boolean} can_restrict_members True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
 * @property {boolean} can_promote_members True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
 * @property {boolean} can_change_info True, if the user is allowed to change the chat title, photo and other settings
 * @property {boolean} can_invite_users True, if the user is allowed to invite new users to the chat
 * @property {boolean} can_post_stories True, if the administrator can post stories to the chat
 * @property {boolean} can_edit_stories True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
 * @property {boolean} can_delete_stories True, if the administrator can delete stories posted by other users
 * @property {boolean} [can_post_messages] Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
 * @property {boolean} [can_edit_messages] Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
 * @property {boolean} [can_pin_messages] Optional. True, if the user is allowed to pin messages; for groups and supergroups only
 * @property {boolean} [can_manage_topics] Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
 */


/**
 * This object represents changes in the status of a chat member.  https://core.telegram.org/bots/api#chatmemberupdated
 * @typedef {Object} ChatMemberUpdated
 * @property {Chat} chat Chat the user belongs to
 * @property {User} from Performer of the action, which resulted in the change
 * @property {number} date Date the change was done in Unix time
 * @property {ChatMember} old_chat_member Previous information about the chat member
 * @property {ChatMember} new_chat_member New information about the chat member
 * @property {ChatInviteLink} [invite_link] Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
 * @property {boolean} [via_join_request] Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
 * @property {boolean} [via_chat_folder_invite_link] Optional. True, if the user joined the chat via a chat folder invite link
 */


/**
 * Represents a chat member that owns the chat and has all administrator privileges.  https://core.telegram.org/bots/api#chatmemberowner
 * @typedef {Object} ChatMemberOwner
 * @property {"creator"} status The member's status in the chat, always “creator”
 * @property {User} user Information about the user
 * @property {boolean} is_anonymous True, if the user's presence in the chat is hidden
 * @property {string} [custom_title] Optional. Custom title for this user
 */


/**
 * Represents a chat member that has some additional privileges.  https://core.telegram.org/bots/api#chatmemberadministrator
 * @typedef {Object} ChatMemberAdministrator
 * @property {"administrator"} status The member's status in the chat, always “administrator”
 * @property {User} user Information about the user
 * @property {boolean} can_be_edited True, if the bot is allowed to edit administrator privileges of that user
 * @property {boolean} is_anonymous True, if the user's presence in the chat is hidden
 * @property {boolean} can_manage_chat True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
 * @property {boolean} can_delete_messages True, if the administrator can delete messages of other users
 * @property {boolean} can_manage_video_chats True, if the administrator can manage video chats
 * @property {boolean} can_restrict_members True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
 * @property {boolean} can_promote_members True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
 * @property {boolean} can_change_info True, if the user is allowed to change the chat title, photo and other settings
 * @property {boolean} can_invite_users True, if the user is allowed to invite new users to the chat
 * @property {boolean} can_post_stories True, if the administrator can post stories to the chat
 * @property {boolean} can_edit_stories True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
 * @property {boolean} can_delete_stories True, if the administrator can delete stories posted by other users
 * @property {boolean} [can_post_messages] Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
 * @property {boolean} [can_edit_messages] Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
 * @property {boolean} [can_pin_messages] Optional. True, if the user is allowed to pin messages; for groups and supergroups only
 * @property {boolean} [can_manage_topics] Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
 * @property {string} [custom_title] Optional. Custom title for this user
 */


/**
 * Represents a chat member that has no additional privileges or restrictions.  https://core.telegram.org/bots/api#chatmembermember
 * @typedef {Object} ChatMemberMember
 * @property {"member"} status The member's status in the chat, always “member”
 * @property {User} user Information about the user
 * @property {number} [until_date] Optional. Date when the user's subscription will expire; Unix time
 */


/**
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.  https://core.telegram.org/bots/api#chatmemberrestricted
 * @typedef {Object} ChatMemberRestricted
 * @property {"restricted"} status The member's status in the chat, always “restricted”
 * @property {User} user Information about the user
 * @property {boolean} is_member True, if the user is a member of the chat at the moment of the request
 * @property {boolean} can_send_messages True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
 * @property {boolean} can_send_audios True, if the user is allowed to send audios
 * @property {boolean} can_send_documents True, if the user is allowed to send documents
 * @property {boolean} can_send_photos True, if the user is allowed to send photos
 * @property {boolean} can_send_videos True, if the user is allowed to send videos
 * @property {boolean} can_send_video_notes True, if the user is allowed to send video notes
 * @property {boolean} can_send_voice_notes True, if the user is allowed to send voice notes
 * @property {boolean} can_send_polls True, if the user is allowed to send polls
 * @property {boolean} can_send_other_messages True, if the user is allowed to send animations, games, stickers and use inline bots
 * @property {boolean} can_add_web_page_previews True, if the user is allowed to add web page previews to their messages
 * @property {boolean} can_change_info True, if the user is allowed to change the chat title, photo and other settings
 * @property {boolean} can_invite_users True, if the user is allowed to invite new users to the chat
 * @property {boolean} can_pin_messages True, if the user is allowed to pin messages
 * @property {boolean} can_manage_topics True, if the user is allowed to create forum topics
 * @property {number} until_date Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
 */


/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.  https://core.telegram.org/bots/api#chatmemberleft
 * @typedef {Object} ChatMemberLeft
 * @property {"left"} status The member's status in the chat, always “left”
 * @property {User} user Information about the user
 */


/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.  https://core.telegram.org/bots/api#chatmemberbanned
 * @typedef {Object} ChatMemberBanned
 * @property {"kicked"} status The member's status in the chat, always “kicked”
 * @property {User} user Information about the user
 * @property {number} until_date Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
 */


/**
 * Represents a join request sent to a chat.  https://core.telegram.org/bots/api#chatjoinrequest
 * @typedef {Object} ChatJoinRequest
 * @property {Chat} chat Chat to which the request was sent
 * @property {User} from User that sent the join request
 * @property {number} user_chat_id Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
 * @property {number} date Date the request was sent in Unix time
 * @property {string} [bio] Optional. Bio of the user.
 * @property {ChatInviteLink} [invite_link] Optional. Chat invite link that was used by the user to send the join request
 */


/**
 * Describes actions that a non-administrator user is allowed to take in a chat.  https://core.telegram.org/bots/api#chatpermissions
 * @typedef {Object} ChatPermissions
 * @property {boolean} [can_send_messages] Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
 * @property {boolean} [can_send_audios] Optional. True, if the user is allowed to send audios
 * @property {boolean} [can_send_documents] Optional. True, if the user is allowed to send documents
 * @property {boolean} [can_send_photos] Optional. True, if the user is allowed to send photos
 * @property {boolean} [can_send_videos] Optional. True, if the user is allowed to send videos
 * @property {boolean} [can_send_video_notes] Optional. True, if the user is allowed to send video notes
 * @property {boolean} [can_send_voice_notes] Optional. True, if the user is allowed to send voice notes
 * @property {boolean} [can_send_polls] Optional. True, if the user is allowed to send polls
 * @property {boolean} [can_send_other_messages] Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
 * @property {boolean} [can_add_web_page_previews] Optional. True, if the user is allowed to add web page previews to their messages
 * @property {boolean} [can_change_info] Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
 * @property {boolean} [can_invite_users] Optional. True, if the user is allowed to invite new users to the chat
 * @property {boolean} [can_pin_messages] Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
 * @property {boolean} [can_manage_topics] Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
 */


/**
 * Describes the birthdate of a user.  https://core.telegram.org/bots/api#birthdate
 * @typedef {Object} Birthdate
 * @property {number} day Day of the user's birth; 1-31
 * @property {number} month Month of the user's birth; 1-12
 * @property {number} [year] Optional. Year of the user's birth
 */


/**
 * Contains information about the start page settings of a Telegram Business account.  https://core.telegram.org/bots/api#businessintro
 * @typedef {Object} BusinessIntro
 * @property {string} [title] Optional. Title text of the business intro
 * @property {string} [message] Optional. Message text of the business intro
 * @property {Sticker} [sticker] Optional. Sticker of the business intro
 */


/**
 * Contains information about the location of a Telegram Business account.  https://core.telegram.org/bots/api#businesslocation
 * @typedef {Object} BusinessLocation
 * @property {string} address Address of the business
 * @property {Location} [location] Optional. Location of the business
 */


/**
 * Describes an interval of time during which a business is open.  https://core.telegram.org/bots/api#businessopeninghoursinterval
 * @typedef {Object} BusinessOpeningHoursInterval
 * @property {number} opening_minute The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
 * @property {number} closing_minute The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
 */


/**
 * Describes the opening hours of a business.  https://core.telegram.org/bots/api#businessopeninghours
 * @typedef {Object} BusinessOpeningHours
 * @property {string} time_zone_name Unique name of the time zone for which the opening hours are defined
 * @property {Array<BusinessOpeningHoursInterval>} opening_hours List of time intervals describing business opening hours
 */


/**
 * Represents a location to which a chat is connected.  https://core.telegram.org/bots/api#chatlocation
 * @typedef {Object} ChatLocation
 * @property {Location} location The location to which the supergroup is connected. Can't be a live location.
 * @property {string} address Location address; 1-64 characters, as defined by the chat owner
 */


/**
 * The reaction is based on an emoji.  https://core.telegram.org/bots/api#reactiontypeemoji
 * @typedef {Object} ReactionTypeEmoji
 * @property {"emoji"} type Type of the reaction, always “emoji”
 * @property {string} emoji Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
 */


/**
 * The reaction is based on a custom emoji.  https://core.telegram.org/bots/api#reactiontypecustomemoji
 * @typedef {Object} ReactionTypeCustomEmoji
 * @property {"custom_emoji"} type Type of the reaction, always “custom_emoji”
 * @property {string} custom_emoji_id Custom emoji identifier
 */


/**
 * The reaction is paid.  https://core.telegram.org/bots/api#reactiontypepaid
 * @typedef {Object} ReactionTypePaid
 * @property {"paid"} type Type of the reaction, always “paid”
 */


/**
 * Represents a reaction added to a message along with the number of times it was added.  https://core.telegram.org/bots/api#reactioncount
 * @typedef {Object} ReactionCount
 * @property {ReactionType} type Type of the reaction
 * @property {number} total_count Number of times the reaction was added
 */


/**
 * This object represents a change of a reaction on a message performed by a user.  https://core.telegram.org/bots/api#messagereactionupdated
 * @typedef {Object} MessageReactionUpdated
 * @property {Chat} chat The chat containing the message the user reacted to
 * @property {number} message_id Unique identifier of the message inside the chat
 * @property {User} [user] Optional. The user that changed the reaction, if the user isn't anonymous
 * @property {Chat} [actor_chat] Optional. The chat on behalf of which the reaction was changed, if the user is anonymous
 * @property {number} date Date of the change in Unix time
 * @property {Array<ReactionType>} old_reaction Previous list of reaction types that were set by the user
 * @property {Array<ReactionType>} new_reaction New list of reaction types that have been set by the user
 */


/**
 * This object represents reaction changes on a message with anonymous reactions.  https://core.telegram.org/bots/api#messagereactioncountupdated
 * @typedef {Object} MessageReactionCountUpdated
 * @property {Chat} chat The chat containing the message
 * @property {number} message_id Unique message identifier inside the chat
 * @property {number} date Date of the change in Unix time
 * @property {Array<ReactionCount>} reactions List of reactions that are present on the message
 */


/**
 * This object represents a forum topic.  https://core.telegram.org/bots/api#forumtopic
 * @typedef {Object} ForumTopic
 * @property {number} message_thread_id Unique identifier of the forum topic
 * @property {string} name Name of the topic
 * @property {number} icon_color Color of the topic icon in RGB format
 * @property {string} [icon_custom_emoji_id] Optional. Unique identifier of the custom emoji shown as the topic icon
 */


/**
 * This object represents a bot command.  https://core.telegram.org/bots/api#botcommand
 * @typedef {Object} BotCommand
 * @property {string} command Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
 * @property {string} description Description of the command; 1-256 characters.
 */


/**
 * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.  https://core.telegram.org/bots/api#botcommandscopedefault
 * @typedef {Object} BotCommandScopeDefault
 * @property {string} type Scope type, must be default
 */


/**
 * Represents the scope of bot commands, covering all private chats.  https://core.telegram.org/bots/api#botcommandscopeallprivatechats
 * @typedef {Object} BotCommandScopeAllPrivateChats
 * @property {string} type Scope type, must be all_private_chats
 */


/**
 * Represents the scope of bot commands, covering all group and supergroup chats.  https://core.telegram.org/bots/api#botcommandscopeallgroupchats
 * @typedef {Object} BotCommandScopeAllGroupChats
 * @property {string} type Scope type, must be all_group_chats
 */


/**
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.  https://core.telegram.org/bots/api#botcommandscopeallchatadministrators
 * @typedef {Object} BotCommandScopeAllChatAdministrators
 * @property {string} type Scope type, must be all_chat_administrators
 */


/**
 * Represents the scope of bot commands, covering a specific chat.  https://core.telegram.org/bots/api#botcommandscopechat
 * @typedef {Object} BotCommandScopeChat
 * @property {string} type Scope type, must be chat
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.  https://core.telegram.org/bots/api#botcommandscopechatadministrators
 * @typedef {Object} BotCommandScopeChatAdministrators
 * @property {string} type Scope type, must be chat_administrators
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.  https://core.telegram.org/bots/api#botcommandscopechatmember
 * @typedef {Object} BotCommandScopeChatMember
 * @property {string} type Scope type, must be chat_member
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} user_id Unique identifier of the target user
 */


/**
 * This object represents the bot's name.  https://core.telegram.org/bots/api#botname
 * @typedef {Object} BotName
 * @property {string} name The bot's name
 */


/**
 * This object represents the bot's description.  https://core.telegram.org/bots/api#botdescription
 * @typedef {Object} BotDescription
 * @property {string} description The bot's description
 */


/**
 * This object represents the bot's short description.  https://core.telegram.org/bots/api#botshortdescription
 * @typedef {Object} BotShortDescription
 * @property {string} short_description The bot's short description
 */


/**
 * Represents a menu button, which opens the bot's list of commands.  https://core.telegram.org/bots/api#menubuttoncommands
 * @typedef {Object} MenuButtonCommands
 * @property {string} type Type of the button, must be commands
 */


/**
 * Represents a menu button, which launches a Web App.  https://core.telegram.org/bots/api#menubuttonwebapp
 * @typedef {Object} MenuButtonWebApp
 * @property {string} type Type of the button, must be web_app
 * @property {string} text Text on the button
 * @property {WebAppInfo} web_app Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.
 */


/**
 * Describes that no specific value for the menu button was set.  https://core.telegram.org/bots/api#menubuttondefault
 * @typedef {Object} MenuButtonDefault
 * @property {string} type Type of the button, must be default
 */


/**
 * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.  https://core.telegram.org/bots/api#chatboostsourcepremium
 * @typedef {Object} ChatBoostSourcePremium
 * @property {"premium"} source Source of the boost, always “premium”
 * @property {User} user User that boosted the chat
 */


/**
 * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.  https://core.telegram.org/bots/api#chatboostsourcegiftcode
 * @typedef {Object} ChatBoostSourceGiftCode
 * @property {"gift_code"} source Source of the boost, always “gift_code”
 * @property {User} user User for which the gift code was created
 */


/**
 * The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.  https://core.telegram.org/bots/api#chatboostsourcegiveaway
 * @typedef {Object} ChatBoostSourceGiveaway
 * @property {"giveaway"} source Source of the boost, always “giveaway”
 * @property {number} giveaway_message_id Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
 * @property {User} [user] Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only
 * @property {number} [prize_star_count] Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
 * @property {boolean} [is_unclaimed] Optional. True, if the giveaway was completed, but there was no user to win the prize
 */


/**
 * This object contains information about a chat boost.  https://core.telegram.org/bots/api#chatboost
 * @typedef {Object} ChatBoost
 * @property {string} boost_id Unique identifier of the boost
 * @property {number} add_date Point in time (Unix timestamp) when the chat was boosted
 * @property {number} expiration_date Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
 * @property {ChatBoostSource} source Source of the added boost
 */


/**
 * This object represents a boost added to a chat or changed.  https://core.telegram.org/bots/api#chatboostupdated
 * @typedef {Object} ChatBoostUpdated
 * @property {Chat} chat Chat which was boosted
 * @property {ChatBoost} boost Information about the chat boost
 */


/**
 * This object represents a boost removed from a chat.  https://core.telegram.org/bots/api#chatboostremoved
 * @typedef {Object} ChatBoostRemoved
 * @property {Chat} chat Chat which was boosted
 * @property {string} boost_id Unique identifier of the boost
 * @property {number} remove_date Point in time (Unix timestamp) when the boost was removed
 * @property {ChatBoostSource} source Source of the removed boost
 */


/**
 * This object represents a list of boosts added to a chat by a user.  https://core.telegram.org/bots/api#userchatboosts
 * @typedef {Object} UserChatBoosts
 * @property {Array<ChatBoost>} boosts The list of boosts added to the chat by the user
 */


/**
 * Describes the connection of the bot with a business account.  https://core.telegram.org/bots/api#businessconnection
 * @typedef {Object} BusinessConnection
 * @property {string} id Unique identifier of the business connection
 * @property {User} user Business account user that created the business connection
 * @property {number} user_chat_id Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {number} date Date the connection was established in Unix time
 * @property {boolean} can_reply True, if the bot can act on behalf of the business account in chats that were active in the last 24 hours
 * @property {boolean} is_enabled True, if the connection is active
 */


/**
 * This object is received when messages are deleted from a connected business account.  https://core.telegram.org/bots/api#businessmessagesdeleted
 * @typedef {Object} BusinessMessagesDeleted
 * @property {string} business_connection_id Unique identifier of the business connection
 * @property {Chat} chat Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
 * @property {Array<number>} message_ids The list of identifiers of deleted messages in the chat of the business account
 */


/**
 * Describes why a request was unsuccessful.  https://core.telegram.org/bots/api#responseparameters
 * @typedef {Object} ResponseParameters
 * @property {number} [migrate_to_chat_id] Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {number} [retry_after] Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
 */


/**
 * Represents a photo to be sent.  https://core.telegram.org/bots/api#inputmediaphoto
 * @typedef {Object} InputMediaPhoto
 * @property {string} type Type of the result, must be photo
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {string} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {boolean} [has_spoiler] Optional. Pass True if the photo needs to be covered with a spoiler animation
 */


/**
 * Represents a video to be sent.  https://core.telegram.org/bots/api#inputmediavideo
 * @typedef {Object} InputMediaVideo
 * @property {string} type Type of the result, must be video
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {number} [width] Optional. Video width
 * @property {number} [height] Optional. Video height
 * @property {number} [duration] Optional. Video duration in seconds
 * @property {boolean} [supports_streaming] Optional. Pass True if the uploaded video is suitable for streaming
 * @property {boolean} [has_spoiler] Optional. Pass True if the video needs to be covered with a spoiler animation
 */


/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.  https://core.telegram.org/bots/api#inputmediaanimation
 * @typedef {Object} InputMediaAnimation
 * @property {string} type Type of the result, must be animation
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {number} [width] Optional. Animation width
 * @property {number} [height] Optional. Animation height
 * @property {number} [duration] Optional. Animation duration in seconds
 * @property {boolean} [has_spoiler] Optional. Pass True if the animation needs to be covered with a spoiler animation
 */


/**
 * Represents an audio file to be treated as music to be sent.  https://core.telegram.org/bots/api#inputmediaaudio
 * @typedef {Object} InputMediaAudio
 * @property {string} type Type of the result, must be audio
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {number} [duration] Optional. Duration of the audio in seconds
 * @property {string} [performer] Optional. Performer of the audio
 * @property {string} [title] Optional. Title of the audio
 */


/**
 * Represents a general file to be sent.  https://core.telegram.org/bots/api#inputmediadocument
 * @typedef {Object} InputMediaDocument
 * @property {string} type Type of the result, must be document
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [disable_content_type_detection] Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
 */


/**
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.  https://core.telegram.org/bots/api#inputfile
 * @typedef {Object} InputFile
 */


/**
 * The paid media to send is a photo.  https://core.telegram.org/bots/api#inputpaidmediaphoto
 * @typedef {Object} InputPaidMediaPhoto
 * @property {string} type Type of the media, must be photo
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 */


/**
 * The paid media to send is a video.  https://core.telegram.org/bots/api#inputpaidmediavideo
 * @typedef {Object} InputPaidMediaVideo
 * @property {string} type Type of the media, must be video
 * @property {string} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {number} [width] Optional. Video width
 * @property {number} [height] Optional. Video height
 * @property {number} [duration] Optional. Video duration in seconds
 * @property {boolean} [supports_streaming] Optional. Pass True if the uploaded video is suitable for streaming
 */


/**
 * This object represents a sticker.  https://core.telegram.org/bots/api#sticker
 * @typedef {Object} Sticker
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {string} type Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
 * @property {number} width Sticker width
 * @property {number} height Sticker height
 * @property {boolean} is_animated True, if the sticker is animated
 * @property {boolean} is_video True, if the sticker is a video sticker
 * @property {PhotoSize} [thumbnail] Optional. Sticker thumbnail in the .WEBP or .JPG format
 * @property {string} [emoji] Optional. Emoji associated with the sticker
 * @property {string} [set_name] Optional. Name of the sticker set to which the sticker belongs
 * @property {File} [premium_animation] Optional. For premium regular stickers, premium animation for the sticker
 * @property {MaskPosition} [mask_position] Optional. For mask stickers, the position where the mask should be placed
 * @property {string} [custom_emoji_id] Optional. For custom emoji stickers, unique identifier of the custom emoji
 * @property {boolean} [needs_repainting] Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
 * @property {number} [file_size] Optional. File size in bytes
 */


/**
 * This object represents a sticker set.  https://core.telegram.org/bots/api#stickerset
 * @typedef {Object} StickerSet
 * @property {string} name Sticker set name
 * @property {string} title Sticker set title
 * @property {string} sticker_type Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”
 * @property {Array<Sticker>} stickers List of all set stickers
 * @property {PhotoSize} [thumbnail] Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
 */


/**
 * This object describes the position on faces where a mask should be placed by default.  https://core.telegram.org/bots/api#maskposition
 * @typedef {Object} MaskPosition
 * @property {string} point The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
 * @property {number} x_shift Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
 * @property {number} y_shift Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
 * @property {number} scale Mask scaling coefficient. For example, 2.0 means double size.
 */


/**
 * This object describes a sticker to be added to a sticker set.  https://core.telegram.org/bots/api#inputsticker
 * @typedef {Object} InputSticker
 * @property {InputFile | string} sticker The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files »
 * @property {string} format Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a WEBM video
 * @property {Array<string>} emoji_list List of 1-20 emoji associated with the sticker
 * @property {MaskPosition} [mask_position] Optional. Position where the mask should be placed on faces. For “mask” stickers only.
 * @property {Array<string>} [keywords] Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.
 */


/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.  https://core.telegram.org/bots/api#inlinequery
 * @typedef {Object} InlineQuery
 * @property {string} id Unique identifier for this query
 * @property {User} from Sender
 * @property {string} query Text of the query (up to 256 characters)
 * @property {string} offset Offset of the results to be returned, can be controlled by the bot
 * @property {string} [chat_type] Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
 * @property {Location} [location] Optional. Sender location, only for bots that request user location
 */


/**
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.  https://core.telegram.org/bots/api#inlinequeryresultsbutton
 * @typedef {Object} InlineQueryResultsButton
 * @property {string} text Label text on the button
 * @property {WebAppInfo} [web_app] Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
 * @property {string} [start_parameter] Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
 */


/**
 * Represents a link to an article or web page.  https://core.telegram.org/bots/api#inlinequeryresultarticle
 * @typedef {Object} InlineQueryResultArticle
 * @property {string} type Type of the result, must be article
 * @property {string} id Unique identifier for this result, 1-64 Bytes
 * @property {string} title Title of the result
 * @property {InputMessageContent} input_message_content Content of the message to be sent
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {string} [url] Optional. URL of the result
 * @property {boolean} [hide_url] Optional. Pass True if you don't want the URL to be shown in the message
 * @property {string} [description] Optional. Short description of the result
 * @property {string} [thumbnail_url] Optional. Url of the thumbnail for the result
 * @property {number} [thumbnail_width] Optional. Thumbnail width
 * @property {number} [thumbnail_height] Optional. Thumbnail height
 */


/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.  https://core.telegram.org/bots/api#inlinequeryresultphoto
 * @typedef {Object} InlineQueryResultPhoto
 * @property {string} type Type of the result, must be photo
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} photo_url A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB
 * @property {string} thumbnail_url URL of the thumbnail for the photo
 * @property {number} [photo_width] Optional. Width of the photo
 * @property {number} [photo_height] Optional. Height of the photo
 * @property {string} [title] Optional. Title for the result
 * @property {string} [description] Optional. Short description of the result
 * @property {string} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the photo
 */


/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultgif
 * @typedef {Object} InlineQueryResultGif
 * @property {string} type Type of the result, must be gif
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} gif_url A valid URL for the GIF file. File size must not exceed 1MB
 * @property {number} [gif_width] Optional. Width of the GIF
 * @property {number} [gif_height] Optional. Height of the GIF
 * @property {number} [gif_duration] Optional. Duration of the GIF in seconds
 * @property {string} thumbnail_url URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property {string} [thumbnail_mime_type] Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property {string} [title] Optional. Title for the result
 * @property {string} [caption] Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the GIF animation
 */


/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
 * @typedef {Object} InlineQueryResultMpeg4Gif
 * @property {string} type Type of the result, must be mpeg4_gif
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} mpeg4_url A valid URL for the MPEG4 file. File size must not exceed 1MB
 * @property {number} [mpeg4_width] Optional. Video width
 * @property {number} [mpeg4_height] Optional. Video height
 * @property {number} [mpeg4_duration] Optional. Video duration in seconds
 * @property {string} thumbnail_url URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property {string} [thumbnail_mime_type] Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property {string} [title] Optional. Title for the result
 * @property {string} [caption] Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the video animation
 */


/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.  https://core.telegram.org/bots/api#inlinequeryresultvideo
 * @typedef {Object} InlineQueryResultVideo
 * @property {string} type Type of the result, must be video
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} video_url A valid URL for the embedded video player or video file
 * @property {string} mime_type MIME type of the content of the video URL, “text/html” or “video/mp4”
 * @property {string} thumbnail_url URL of the thumbnail (JPEG only) for the video
 * @property {string} title Title for the result
 * @property {string} [caption] Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {number} [video_width] Optional. Video width
 * @property {number} [video_height] Optional. Video height
 * @property {number} [video_duration] Optional. Video duration in seconds
 * @property {string} [description] Optional. Short description of the result
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
 */


/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.  https://core.telegram.org/bots/api#inlinequeryresultaudio
 * @typedef {Object} InlineQueryResultAudio
 * @property {string} type Type of the result, must be audio
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} audio_url A valid URL for the audio file
 * @property {string} title Title
 * @property {string} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {string} [performer] Optional. Performer
 * @property {number} [audio_duration] Optional. Audio duration in seconds
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the audio
 */


/**
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.  https://core.telegram.org/bots/api#inlinequeryresultvoice
 * @typedef {Object} InlineQueryResultVoice
 * @property {string} type Type of the result, must be voice
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} voice_url A valid URL for the voice recording
 * @property {string} title Recording title
 * @property {string} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {number} [voice_duration] Optional. Recording duration in seconds
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the voice recording
 */


/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.  https://core.telegram.org/bots/api#inlinequeryresultdocument
 * @typedef {Object} InlineQueryResultDocument
 * @property {string} type Type of the result, must be document
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} title Title for the result
 * @property {string} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {string} document_url A valid URL for the file
 * @property {string} mime_type MIME type of the content of the file, either “application/pdf” or “application/zip”
 * @property {string} [description] Optional. Short description of the result
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the file
 * @property {string} [thumbnail_url] Optional. URL of the thumbnail (JPEG only) for the file
 * @property {number} [thumbnail_width] Optional. Thumbnail width
 * @property {number} [thumbnail_height] Optional. Thumbnail height
 */


/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.  https://core.telegram.org/bots/api#inlinequeryresultlocation
 * @typedef {Object} InlineQueryResultLocation
 * @property {string} type Type of the result, must be location
 * @property {string} id Unique identifier for this result, 1-64 Bytes
 * @property {number} latitude Location latitude in degrees
 * @property {number} longitude Location longitude in degrees
 * @property {string} title Location title
 * @property {number} [horizontal_accuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {number} [live_period] Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
 * @property {number} [heading] Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the location
 * @property {string} [thumbnail_url] Optional. Url of the thumbnail for the result
 * @property {number} [thumbnail_width] Optional. Thumbnail width
 * @property {number} [thumbnail_height] Optional. Thumbnail height
 */


/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.  https://core.telegram.org/bots/api#inlinequeryresultvenue
 * @typedef {Object} InlineQueryResultVenue
 * @property {string} type Type of the result, must be venue
 * @property {string} id Unique identifier for this result, 1-64 Bytes
 * @property {number} latitude Latitude of the venue location in degrees
 * @property {number} longitude Longitude of the venue location in degrees
 * @property {string} title Title of the venue
 * @property {string} address Address of the venue
 * @property {string} [foursquare_id] Optional. Foursquare identifier of the venue if known
 * @property {string} [foursquare_type] Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {string} [google_place_id] Optional. Google Places identifier of the venue
 * @property {string} [google_place_type] Optional. Google Places type of the venue. (See supported types.)
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the venue
 * @property {string} [thumbnail_url] Optional. Url of the thumbnail for the result
 * @property {number} [thumbnail_width] Optional. Thumbnail width
 * @property {number} [thumbnail_height] Optional. Thumbnail height
 */


/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.  https://core.telegram.org/bots/api#inlinequeryresultcontact
 * @typedef {Object} InlineQueryResultContact
 * @property {string} type Type of the result, must be contact
 * @property {string} id Unique identifier for this result, 1-64 Bytes
 * @property {string} phone_number Contact's phone number
 * @property {string} first_name Contact's first name
 * @property {string} [last_name] Optional. Contact's last name
 * @property {string} [vcard] Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the contact
 * @property {string} [thumbnail_url] Optional. Url of the thumbnail for the result
 * @property {number} [thumbnail_width] Optional. Thumbnail width
 * @property {number} [thumbnail_height] Optional. Thumbnail height
 */


/**
 * Represents a Game.  https://core.telegram.org/bots/api#inlinequeryresultgame
 * @typedef {Object} InlineQueryResultGame
 * @property {string} type Type of the result, must be game
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} game_short_name Short name of the game
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 */


/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.  https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 * @typedef {Object} InlineQueryResultCachedPhoto
 * @property {string} type Type of the result, must be photo
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} photo_file_id A valid file identifier of the photo
 * @property {string} [title] Optional. Title for the result
 * @property {string} [description] Optional. Short description of the result
 * @property {string} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the photo
 */


/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultcachedgif
 * @typedef {Object} InlineQueryResultCachedGif
 * @property {string} type Type of the result, must be gif
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} gif_file_id A valid file identifier for the GIF file
 * @property {string} [title] Optional. Title for the result
 * @property {string} [caption] Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the GIF animation
 */


/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.  https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
 * @typedef {Object} InlineQueryResultCachedMpeg4Gif
 * @property {string} type Type of the result, must be mpeg4_gif
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} mpeg4_file_id A valid file identifier for the MPEG4 file
 * @property {string} [title] Optional. Title for the result
 * @property {string} [caption] Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the video animation
 */


/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.  https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 * @typedef {Object} InlineQueryResultCachedSticker
 * @property {string} type Type of the result, must be sticker
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} sticker_file_id A valid file identifier of the sticker
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the sticker
 */


/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.  https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
 * @typedef {Object} InlineQueryResultCachedDocument
 * @property {string} type Type of the result, must be document
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} title Title for the result
 * @property {string} document_file_id A valid file identifier for the file
 * @property {string} [description] Optional. Short description of the result
 * @property {string} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the file
 */


/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.  https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
 * @typedef {Object} InlineQueryResultCachedVideo
 * @property {string} type Type of the result, must be video
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} video_file_id A valid file identifier for the video file
 * @property {string} title Title for the result
 * @property {string} [description] Optional. Short description of the result
 * @property {string} [caption] Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Optional. Pass True, if the caption must be shown above the message media
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the video
 */


/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.  https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
 * @typedef {Object} InlineQueryResultCachedVoice
 * @property {string} type Type of the result, must be voice
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} voice_file_id A valid file identifier for the voice message
 * @property {string} title Voice message title
 * @property {string} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the voice message
 */


/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.  https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
 * @typedef {Object} InlineQueryResultCachedAudio
 * @property {string} type Type of the result, must be audio
 * @property {string} id Unique identifier for this result, 1-64 bytes
 * @property {string} audio_file_id A valid file identifier for the audio file
 * @property {string} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [reply_markup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [input_message_content] Optional. Content of the message to be sent instead of the audio
 */


/**
 * Represents the content of a text message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputtextmessagecontent
 * @typedef {Object} InputTextMessageContent
 * @property {string} message_text Text of the message to be sent, 1-4096 characters
 * @property {string} [parse_mode] Optional. Mode for parsing entities in the message text. See formatting options for more details.
 * @property {Array<MessageEntity>} [entities] Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
 * @property {LinkPreviewOptions} [link_preview_options] Optional. Link preview generation options for the message
 */


/**
 * Represents the content of a location message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputlocationmessagecontent
 * @typedef {Object} InputLocationMessageContent
 * @property {number} latitude Latitude of the location in degrees
 * @property {number} longitude Longitude of the location in degrees
 * @property {number} [horizontal_accuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {number} [live_period] Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
 * @property {number} [heading] Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 */


/**
 * Represents the content of a venue message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputvenuemessagecontent
 * @typedef {Object} InputVenueMessageContent
 * @property {number} latitude Latitude of the venue in degrees
 * @property {number} longitude Longitude of the venue in degrees
 * @property {string} title Name of the venue
 * @property {string} address Address of the venue
 * @property {string} [foursquare_id] Optional. Foursquare identifier of the venue, if known
 * @property {string} [foursquare_type] Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {string} [google_place_id] Optional. Google Places identifier of the venue
 * @property {string} [google_place_type] Optional. Google Places type of the venue. (See supported types.)
 */


/**
 * Represents the content of a contact message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputcontactmessagecontent
 * @typedef {Object} InputContactMessageContent
 * @property {string} phone_number Contact's phone number
 * @property {string} first_name Contact's first name
 * @property {string} [last_name] Optional. Contact's last name
 * @property {string} [vcard] Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 */


/**
 * Represents the content of an invoice message to be sent as the result of an inline query.  https://core.telegram.org/bots/api#inputinvoicemessagecontent
 * @typedef {Object} InputInvoiceMessageContent
 * @property {string} title Product name, 1-32 characters
 * @property {string} description Product description, 1-255 characters
 * @property {string} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
 * @property {string} [provider_token] Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
 * @property {string} currency Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
 * @property {Array<LabeledPrice>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
 * @property {number} [max_tip_amount] Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
 * @property {Array<number>} [suggested_tip_amounts] Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @property {string} [provider_data] Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
 * @property {string} [photo_url] Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
 * @property {number} [photo_size] Optional. Photo size in bytes
 * @property {number} [photo_width] Optional. Photo width
 * @property {number} [photo_height] Optional. Photo height
 * @property {boolean} [need_name] Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_phone_number] Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_email] Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_shipping_address] Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_phone_number_to_provider] Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_email_to_provider] Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [is_flexible] Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
 */


/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.  https://core.telegram.org/bots/api#choseninlineresult
 * @typedef {Object} ChosenInlineResult
 * @property {string} result_id The unique identifier for the result that was chosen
 * @property {User} from The user that chose the result
 * @property {Location} [location] Optional. Sender location, only for bots that require user location
 * @property {string} [inline_message_id] Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
 * @property {string} query The query that was used to obtain the result
 */


/**
 * Describes an inline message sent by a Web App on behalf of a user.  https://core.telegram.org/bots/api#sentwebappmessage
 * @typedef {Object} SentWebAppMessage
 * @property {string} [inline_message_id] Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
 */


/**
 * This object represents a portion of the price for goods or services.  https://core.telegram.org/bots/api#labeledprice
 * @typedef {Object} LabeledPrice
 * @property {string} label Portion label
 * @property {number} amount Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 */


/**
 * This object contains basic information about an invoice.  https://core.telegram.org/bots/api#invoice
 * @typedef {Object} Invoice
 * @property {string} title Product name
 * @property {string} description Product description
 * @property {string} start_parameter Unique bot deep-linking parameter that can be used to generate this invoice
 * @property {string} currency Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
 * @property {number} total_amount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 */


/**
 * This object represents a shipping address.  https://core.telegram.org/bots/api#shippingaddress
 * @typedef {Object} ShippingAddress
 * @property {string} country_code Two-letter ISO 3166-1 alpha-2 country code
 * @property {string} state State, if applicable
 * @property {string} city City
 * @property {string} street_line1 First line for the address
 * @property {string} street_line2 Second line for the address
 * @property {string} post_code Address post code
 */


/**
 * This object represents information about an order.  https://core.telegram.org/bots/api#orderinfo
 * @typedef {Object} OrderInfo
 * @property {string} [name] Optional. User name
 * @property {string} [phone_number] Optional. User's phone number
 * @property {string} [email] Optional. User email
 * @property {ShippingAddress} [shipping_address] Optional. User shipping address
 */


/**
 * This object represents one shipping option.  https://core.telegram.org/bots/api#shippingoption
 * @typedef {Object} ShippingOption
 * @property {string} id Shipping option identifier
 * @property {string} title Option title
 * @property {Array<LabeledPrice>} prices List of price portions
 */


/**
 * This object contains basic information about a successful payment.  https://core.telegram.org/bots/api#successfulpayment
 * @typedef {Object} SuccessfulPayment
 * @property {string} currency Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
 * @property {number} total_amount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property {string} invoice_payload Bot-specified invoice payload
 * @property {string} [shipping_option_id] Optional. Identifier of the shipping option chosen by the user
 * @property {OrderInfo} [order_info] Optional. Order information provided by the user
 * @property {string} telegram_payment_charge_id Telegram payment identifier
 * @property {string} provider_payment_charge_id Provider payment identifier
 */


/**
 * This object contains basic information about a refunded payment.  https://core.telegram.org/bots/api#refundedpayment
 * @typedef {Object} RefundedPayment
 * @property {"XTR"} currency Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR”
 * @property {number} total_amount Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property {string} invoice_payload Bot-specified invoice payload
 * @property {string} telegram_payment_charge_id Telegram payment identifier
 * @property {string} [provider_payment_charge_id] Optional. Provider payment identifier
 */


/**
 * This object contains information about an incoming shipping query.  https://core.telegram.org/bots/api#shippingquery
 * @typedef {Object} ShippingQuery
 * @property {string} id Unique query identifier
 * @property {User} from User who sent the query
 * @property {string} invoice_payload Bot-specified invoice payload
 * @property {ShippingAddress} shipping_address User specified shipping address
 */


/**
 * This object contains information about an incoming pre-checkout query.  https://core.telegram.org/bots/api#precheckoutquery
 * @typedef {Object} PreCheckoutQuery
 * @property {string} id Unique query identifier
 * @property {User} from User who sent the query
 * @property {string} currency Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
 * @property {number} total_amount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property {string} invoice_payload Bot-specified invoice payload
 * @property {string} [shipping_option_id] Optional. Identifier of the shipping option chosen by the user
 * @property {OrderInfo} [order_info] Optional. Order information provided by the user
 */


/**
 * This object contains information about a paid media purchase.  https://core.telegram.org/bots/api#paidmediapurchased
 * @typedef {Object} PaidMediaPurchased
 * @property {User} from User who purchased the media
 * @property {string} paid_media_payload Bot-specified paid media payload
 */


/**
 * The withdrawal is in progress.  https://core.telegram.org/bots/api#revenuewithdrawalstatepending
 * @typedef {Object} RevenueWithdrawalStatePending
 * @property {"pending"} type Type of the state, always “pending”
 */


/**
 * The withdrawal succeeded.  https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded
 * @typedef {Object} RevenueWithdrawalStateSucceeded
 * @property {"succeeded"} type Type of the state, always “succeeded”
 * @property {number} date Date the withdrawal was completed in Unix time
 * @property {string} url An HTTPS URL that can be used to see transaction details
 */


/**
 * The withdrawal failed and the transaction was refunded.  https://core.telegram.org/bots/api#revenuewithdrawalstatefailed
 * @typedef {Object} RevenueWithdrawalStateFailed
 * @property {"failed"} type Type of the state, always “failed”
 */


/**
 * Describes a transaction with a user.  https://core.telegram.org/bots/api#transactionpartneruser
 * @typedef {Object} TransactionPartnerUser
 * @property {"user"} type Type of the transaction partner, always “user”
 * @property {User} user Information about the user
 * @property {string} [invoice_payload] Optional. Bot-specified invoice payload
 * @property {Array<PaidMedia>} [paid_media] Optional. Information about the paid media bought by the user
 * @property {string} [paid_media_payload] Optional. Bot-specified paid media payload
 */


/**
 * Describes a withdrawal transaction with Fragment.  https://core.telegram.org/bots/api#transactionpartnerfragment
 * @typedef {Object} TransactionPartnerFragment
 * @property {"fragment"} type Type of the transaction partner, always “fragment”
 * @property {RevenueWithdrawalState} [withdrawal_state] Optional. State of the transaction if the transaction is outgoing
 */


/**
 * Describes a withdrawal transaction to the Telegram Ads platform.  https://core.telegram.org/bots/api#transactionpartnertelegramads
 * @typedef {Object} TransactionPartnerTelegramAds
 * @property {"telegram_ads"} type Type of the transaction partner, always “telegram_ads”
 */


/**
 * Describes a transaction with payment for paid broadcasting.  https://core.telegram.org/bots/api#transactionpartnertelegramapi
 * @typedef {Object} TransactionPartnerTelegramApi
 * @property {"telegram_api"} type Type of the transaction partner, always “telegram_api”
 * @property {number} request_count The number of successful requests that exceeded regular limits and were therefore billed
 */


/**
 * Describes a transaction with an unknown source or recipient.  https://core.telegram.org/bots/api#transactionpartnerother
 * @typedef {Object} TransactionPartnerOther
 * @property {"other"} type Type of the transaction partner, always “other”
 */


/**
 * Describes a Telegram Star transaction.  https://core.telegram.org/bots/api#startransaction
 * @typedef {Object} StarTransaction
 * @property {string} id Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.
 * @property {number} amount Number of Telegram Stars transferred by the transaction
 * @property {number} date Date the transaction was created in Unix time
 * @property {TransactionPartner} [source] Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions
 * @property {TransactionPartner} [receiver] Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions
 */


/**
 * Contains a list of Telegram Star transactions.  https://core.telegram.org/bots/api#startransactions
 * @typedef {Object} StarTransactions
 * @property {Array<StarTransaction>} transactions The list of transactions
 */


/**
 * Describes Telegram Passport data shared with the bot by the user.  https://core.telegram.org/bots/api#passportdata
 * @typedef {Object} PassportData
 * @property {Array<EncryptedPassportElement>} data Array with information about documents and other Telegram Passport elements that was shared with the bot
 * @property {EncryptedCredentials} credentials Encrypted credentials required to decrypt the data
 */


/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.  https://core.telegram.org/bots/api#passportfile
 * @typedef {Object} PassportFile
 * @property {string} file_id Identifier for this file, which can be used to download or reuse the file
 * @property {string} file_unique_id Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {number} file_size File size in bytes
 * @property {number} file_date Unix time when the file was uploaded
 */


/**
 * Describes documents or other Telegram Passport elements shared with the bot by the user.  https://core.telegram.org/bots/api#encryptedpassportelement
 * @typedef {Object} EncryptedPassportElement
 * @property {string} type Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
 * @property {string} [data] Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {string} [phone_number] Optional. User's verified phone number; available only for “phone_number” type
 * @property {string} [email] Optional. User's verified email address; available only for “email” type
 * @property {Array<PassportFile>} [files] Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [front_side] Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [reverse_side] Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [selfie] Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {Array<PassportFile>} [translation] Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {string} hash Base64-encoded element hash for using in PassportElementErrorUnspecified
 */


/**
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.  https://core.telegram.org/bots/api#encryptedcredentials
 * @typedef {Object} EncryptedCredentials
 * @property {string} data Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
 * @property {string} hash Base64-encoded data hash for data authentication
 * @property {string} secret Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
 */


/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.  https://core.telegram.org/bots/api#passportelementerrordatafield
 * @typedef {Object} PassportElementErrorDataField
 * @property {string} source Error source, must be data
 * @property {string} type The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
 * @property {string} field_name Name of the data field which has the error
 * @property {string} data_hash Base64-encoded data hash
 * @property {string} message Error message
 */


/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.  https://core.telegram.org/bots/api#passportelementerrorfrontside
 * @typedef {Object} PassportElementErrorFrontSide
 * @property {string} source Error source, must be front_side
 * @property {string} type The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property {string} file_hash Base64-encoded hash of the file with the front side of the document
 * @property {string} message Error message
 */


/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.  https://core.telegram.org/bots/api#passportelementerrorreverseside
 * @typedef {Object} PassportElementErrorReverseSide
 * @property {string} source Error source, must be reverse_side
 * @property {string} type The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
 * @property {string} file_hash Base64-encoded hash of the file with the reverse side of the document
 * @property {string} message Error message
 */


/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.  https://core.telegram.org/bots/api#passportelementerrorselfie
 * @typedef {Object} PassportElementErrorSelfie
 * @property {string} source Error source, must be selfie
 * @property {string} type The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property {string} file_hash Base64-encoded hash of the file with the selfie
 * @property {string} message Error message
 */


/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.  https://core.telegram.org/bots/api#passportelementerrorfile
 * @typedef {Object} PassportElementErrorFile
 * @property {string} source Error source, must be file
 * @property {string} type The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {string} file_hash Base64-encoded file hash
 * @property {string} message Error message
 */


/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.  https://core.telegram.org/bots/api#passportelementerrorfiles
 * @typedef {Object} PassportElementErrorFiles
 * @property {string} source Error source, must be files
 * @property {string} type The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {Array<string>} file_hashes List of base64-encoded file hashes
 * @property {string} message Error message
 */


/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.  https://core.telegram.org/bots/api#passportelementerrortranslationfile
 * @typedef {Object} PassportElementErrorTranslationFile
 * @property {string} source Error source, must be translation_file
 * @property {string} type Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {string} file_hash Base64-encoded file hash
 * @property {string} message Error message
 */


/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.  https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 * @typedef {Object} PassportElementErrorTranslationFiles
 * @property {string} source Error source, must be translation_files
 * @property {string} type Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {Array<string>} file_hashes List of base64-encoded file hashes
 * @property {string} message Error message
 */


/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.  https://core.telegram.org/bots/api#passportelementerrorunspecified
 * @typedef {Object} PassportElementErrorUnspecified
 * @property {string} source Error source, must be unspecified
 * @property {string} type Type of element of the user's Telegram Passport which has the issue
 * @property {string} element_hash Base64-encoded element hash
 * @property {string} message Error message
 */


/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.  https://core.telegram.org/bots/api#game
 * @typedef {Object} Game
 * @property {string} title Title of the game
 * @property {string} description Description of the game
 * @property {Array<PhotoSize>} photo Photo that will be displayed in the game message in chats.
 * @property {string} [text] Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
 * @property {Array<MessageEntity>} [text_entities] Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
 * @property {Animation} [animation] Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
 */


/**
 * A placeholder, currently holds no information. Use BotFather to set up your game.  https://core.telegram.org/bots/api#callbackgame
 * @typedef {Object} CallbackGame
 */


/**
 * This object represents one row of the high scores table for a game.  https://core.telegram.org/bots/api#gamehighscore
 * @typedef {Object} GameHighScore
 * @property {number} position Position in high score table for the game
 * @property {User} user User
 * @property {number} score Score
 */


/**
 * @typedef {Message | InaccessibleMessage} MaybeInaccessibleMessage This object describes a message that can be inaccessible to the bot. It can be one of  https://core.telegram.org/bots/api#maybeinaccessiblemessage
 */


/**
 * @typedef {MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel} MessageOrigin This object describes the origin of a message. It can be one of  https://core.telegram.org/bots/api#messageorigin
 */


/**
 * @typedef {PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo} PaidMedia This object describes paid media. Currently, it can be one of  https://core.telegram.org/bots/api#paidmedia
 */


/**
 * @typedef {BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient} BackgroundFill This object describes the way a background is filled based on the selected colors. Currently, it can be one of  https://core.telegram.org/bots/api#backgroundfill
 */


/**
 * @typedef {BackgroundTypeFill | BackgroundTypeWallpaper | BackgroundTypePattern | BackgroundTypeChatTheme} BackgroundType This object describes the type of a background. Currently, it can be one of  https://core.telegram.org/bots/api#backgroundtype
 */


/**
 * @typedef {ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned} ChatMember This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:  https://core.telegram.org/bots/api#chatmember
 */


/**
 * @typedef {ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid} ReactionType This object describes the type of a reaction. Currently, it can be one of  https://core.telegram.org/bots/api#reactiontype
 */


/**
 * @typedef {BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember} BotCommandScope This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:  https://core.telegram.org/bots/api#botcommandscope
 */


/**
 * @typedef {MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault} MenuButton This object describes the bot's menu button in a private chat. It should be one of  https://core.telegram.org/bots/api#menubutton
 */


/**
 * @typedef {ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway} ChatBoostSource This object describes the source of a chat boost. It can be one of  https://core.telegram.org/bots/api#chatboostsource
 */


/**
 * @typedef {InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo} InputMedia This object represents the content of a media message to be sent. It should be one of  https://core.telegram.org/bots/api#inputmedia
 */


/**
 * @typedef {InputPaidMediaPhoto | InputPaidMediaVideo} InputPaidMedia This object describes the paid media to be sent. Currently, it can be one of  https://core.telegram.org/bots/api#inputpaidmedia
 */


/**
 * @typedef {InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice} InlineQueryResult This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:  https://core.telegram.org/bots/api#inlinequeryresult
 */


/**
 * @typedef {InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent} InputMessageContent This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:  https://core.telegram.org/bots/api#inputmessagecontent
 */


/**
 * @typedef {RevenueWithdrawalStatePending | RevenueWithdrawalStateSucceeded | RevenueWithdrawalStateFailed} RevenueWithdrawalState This object describes the state of a revenue withdrawal operation. Currently, it can be one of  https://core.telegram.org/bots/api#revenuewithdrawalstate
 */


/**
 * @typedef {TransactionPartnerUser | TransactionPartnerFragment | TransactionPartnerTelegramAds | TransactionPartnerTelegramApi | TransactionPartnerOther} TransactionPartner This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of  https://core.telegram.org/bots/api#transactionpartner
 */


/**
 * @typedef {PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified} PassportElementError This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:  https://core.telegram.org/bots/api#passportelementerror
 */


/**
 * @template T
 * @typedef {Object} ResponseSuccess<T>
 * @property {true} ok 
 * @property {T} result
 */


/**
 * @typedef {Object} ResponseError
 * @property {false} ok 
 * @property {number} error_code 
 * @property {string} description
 */


/**
 * @typedef {true} SuccessWithOutData
 */


/**
 * @typedef {ResponseSuccess<SuccessWithOutData>} ResponseWithOutData
 */


/**
 * @typedef {ResponseSuccess<Message>} ResponseWithMessage
 */


/**
 * https://core.telegram.org/bots/api#getupdates
 * @typedef {Object} GetUpdatesParams
 * @property {number} [offset] Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
 * @property {number} [limit] Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 * @property {number} [timeout] Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
 * @property {Array<string>} [allowed_updates] A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
 */


/**
 * @typedef {ResponseSuccess<Array<Update>>} GetUpdatesResponse
 */


/**
 * @interface GetUpdatesRequest
 * 
 * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.  https://core.telegram.org/bots/api#getupdates
 * @function getUpdates
 * @memberof GetUpdatesRequest
 * @param {GetUpdatesParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getUpdatesWithReturns
 * @memberof GetUpdatesRequest
 * @param {GetUpdatesParams} [params]
 * @returns {Promise<ResponseSuccess<Array<Update>>>}
 */


/**
 * https://core.telegram.org/bots/api#setwebhook
 * @typedef {Object} SetWebhookParams
 * @property {string} url HTTPS URL to send updates to. Use an empty string to remove webhook integration
 * @property {InputFile} [certificate] Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
 * @property {string} [ip_address] The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
 * @property {number} [max_connections] The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
 * @property {Array<string>} [allowed_updates] A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
 * @property {boolean} [drop_pending_updates] Pass True to drop all pending updates
 * @property {string} [secret_token] A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
 */


/**
 * @typedef {ResponseWithOutData} SetWebhookResponse
 */


/**
 * @interface SetWebhookRequest
 * 
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.  https://core.telegram.org/bots/api#setwebhook
 * @function setWebhook
 * @memberof SetWebhookRequest
 * @param {SetWebhookParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletewebhook
 * @typedef {Object} DeleteWebhookParams
 * @property {boolean} [drop_pending_updates] Pass True to drop all pending updates
 */


/**
 * @typedef {ResponseWithOutData} DeleteWebhookResponse
 */


/**
 * @interface DeleteWebhookRequest
 * 
 * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.  https://core.telegram.org/bots/api#deletewebhook
 * @function deleteWebhook
 * @memberof DeleteWebhookRequest
 * @param {DeleteWebhookParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * @typedef {ResponseSuccess<WebhookInfo>} GetWebhookInfoResponse
 */


/**
 * @interface GetWebhookInfoRequest
 * 
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.  https://core.telegram.org/bots/api#getwebhookinfo
 * @function getWebhookInfo
 * @memberof GetWebhookInfoRequest
 * @returns {Promise<Response>}
 * 
 * @function getWebhookInfoWithReturns
 * @memberof GetWebhookInfoRequest
 * @returns {Promise<ResponseSuccess<WebhookInfo>>}
 */


/**
 * @typedef {ResponseSuccess<User>} GetMeResponse
 */


/**
 * @interface GetMeRequest
 * 
 * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.  https://core.telegram.org/bots/api#getme
 * @function getMe
 * @memberof GetMeRequest
 * @returns {Promise<Response>}
 * 
 * @function getMeWithReturns
 * @memberof GetMeRequest
 * @returns {Promise<ResponseSuccess<User>>}
 */


/**
 * @typedef {ResponseWithOutData} LogOutResponse
 */


/**
 * @interface LogOutRequest
 * 
 * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.  https://core.telegram.org/bots/api#logout
 * @function logOut
 * @memberof LogOutRequest
 * @returns {Promise<Response>}
 */


/**
 * @typedef {ResponseWithOutData} CloseResponse
 */


/**
 * @interface CloseRequest
 * 
 * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.  https://core.telegram.org/bots/api#close
 * @function close
 * @memberof CloseRequest
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#sendmessage
 * @typedef {Object} SendMessageParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} text Text of the message to be sent, 1-4096 characters after entities parsing
 * @property {ParseMode} [parse_mode] Mode for parsing entities in the message text. See formatting options for more details.
 * @property {Array<MessageEntity>} [entities] A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
 * @property {LinkPreviewOptions} [link_preview_options] Link preview generation options for the message
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendMessageResponse
 */


/**
 * @interface SendMessageRequest
 * 
 * Use this method to send text messages. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendmessage
 * @function sendMessage
 * @memberof SendMessageRequest
 * @param {SendMessageParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendMessageWithReturns
 * @memberof SendMessageRequest
 * @param {SendMessageParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#forwardmessage
 * @typedef {Object} ForwardMessageParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number | string} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the forwarded message from forwarding and saving
 * @property {number} message_id Message identifier in the chat specified in from_chat_id
 */


/**
 * @typedef {ResponseWithMessage} ForwardMessageResponse
 */


/**
 * @interface ForwardMessageRequest
 * 
 * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.  https://core.telegram.org/bots/api#forwardmessage
 * @function forwardMessage
 * @memberof ForwardMessageRequest
 * @param {ForwardMessageParams} params
 * @returns {Promise<Response>}
 * 
 * @function forwardMessageWithReturns
 * @memberof ForwardMessageRequest
 * @param {ForwardMessageParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#forwardmessages
 * @typedef {Object} ForwardMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number | string} from_chat_id Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
 * @property {Array<number>} message_ids A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
 * @property {boolean} [disable_notification] Sends the messages silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the forwarded messages from forwarding and saving
 */


/**
 * @typedef {ResponseSuccess<Array<number>>} ForwardMessagesResponse
 */


/**
 * @interface ForwardMessagesRequest
 * 
 * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.  https://core.telegram.org/bots/api#forwardmessages
 * @function forwardMessages
 * @memberof ForwardMessagesRequest
 * @param {ForwardMessagesParams} params
 * @returns {Promise<Response>}
 * 
 * @function forwardMessagesWithReturns
 * @memberof ForwardMessagesRequest
 * @param {ForwardMessagesParams} params
 * @returns {Promise<ResponseSuccess<Array<number>>>}
 */


/**
 * https://core.telegram.org/bots/api#copymessage
 * @typedef {Object} CopyMessageParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number | string} from_chat_id Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
 * @property {number} message_id Message identifier in the chat specified in from_chat_id
 * @property {string} [caption] New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
 * @property {string} [parse_mode] Mode for parsing entities in the new caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseSuccess<number>} CopyMessageResponse
 */


/**
 * @interface CopyMessageRequest
 * 
 * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.  https://core.telegram.org/bots/api#copymessage
 * @function copyMessage
 * @memberof CopyMessageRequest
 * @param {CopyMessageParams} params
 * @returns {Promise<Response>}
 * 
 * @function copyMessageWithReturns
 * @memberof CopyMessageRequest
 * @param {CopyMessageParams} params
 * @returns {Promise<ResponseSuccess<number>>}
 */


/**
 * https://core.telegram.org/bots/api#copymessages
 * @typedef {Object} CopyMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number | string} from_chat_id Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
 * @property {Array<number>} message_ids A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
 * @property {boolean} [disable_notification] Sends the messages silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent messages from forwarding and saving
 * @property {boolean} [remove_caption] Pass True to copy the messages without their captions
 */


/**
 * @typedef {ResponseSuccess<Array<number>>} CopyMessagesResponse
 */


/**
 * @interface CopyMessagesRequest
 * 
 * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.  https://core.telegram.org/bots/api#copymessages
 * @function copyMessages
 * @memberof CopyMessagesRequest
 * @param {CopyMessagesParams} params
 * @returns {Promise<Response>}
 * 
 * @function copyMessagesWithReturns
 * @memberof CopyMessagesRequest
 * @param {CopyMessagesParams} params
 * @returns {Promise<ResponseSuccess<Array<number>>>}
 */


/**
 * https://core.telegram.org/bots/api#sendphoto
 * @typedef {Object} SendPhotoParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} photo Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
 * @property {string} [caption] Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media
 * @property {boolean} [has_spoiler] Pass True if the photo needs to be covered with a spoiler animation
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendPhotoResponse
 */


/**
 * @interface SendPhotoRequest
 * 
 * Use this method to send photos. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendphoto
 * @function sendPhoto
 * @memberof SendPhotoRequest
 * @param {SendPhotoParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendPhotoWithReturns
 * @memberof SendPhotoRequest
 * @param {SendPhotoParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendaudio
 * @typedef {Object} SendAudioParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} audio Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
 * @property {string} [caption] Audio caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {number} [duration] Duration of the audio in seconds
 * @property {string} [performer] Performer
 * @property {string} [title] Track name
 * @property {InputFile | string} [thumbnail] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendAudioResponse
 */


/**
 * @interface SendAudioRequest
 * 
 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.  https://core.telegram.org/bots/api#sendaudio
 * @function sendAudio
 * @memberof SendAudioRequest
 * @param {SendAudioParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendAudioWithReturns
 * @memberof SendAudioRequest
 * @param {SendAudioParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#senddocument
 * @typedef {Object} SendDocumentParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} document File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
 * @property {InputFile | string} [thumbnail] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [disable_content_type_detection] Disables automatic server-side content type detection for files uploaded using multipart/form-data
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendDocumentResponse
 */


/**
 * @interface SendDocumentRequest
 * 
 * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.  https://core.telegram.org/bots/api#senddocument
 * @function sendDocument
 * @memberof SendDocumentRequest
 * @param {SendDocumentParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendDocumentWithReturns
 * @memberof SendDocumentRequest
 * @param {SendDocumentParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendvideo
 * @typedef {Object} SendVideoParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} video Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
 * @property {number} [duration] Duration of sent video in seconds
 * @property {number} [width] Video width
 * @property {number} [height] Video height
 * @property {InputFile | string} [thumbnail] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media
 * @property {boolean} [has_spoiler] Pass True if the video needs to be covered with a spoiler animation
 * @property {boolean} [supports_streaming] Pass True if the uploaded video is suitable for streaming
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendVideoResponse
 */


/**
 * @interface SendVideoRequest
 * 
 * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.  https://core.telegram.org/bots/api#sendvideo
 * @function sendVideo
 * @memberof SendVideoRequest
 * @param {SendVideoParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendVideoWithReturns
 * @memberof SendVideoRequest
 * @param {SendVideoParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendanimation
 * @typedef {Object} SendAnimationParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} animation Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
 * @property {number} [duration] Duration of sent animation in seconds
 * @property {number} [width] Animation width
 * @property {number} [height] Animation height
 * @property {InputFile | string} [thumbnail] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {string} [caption] Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the animation caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media
 * @property {boolean} [has_spoiler] Pass True if the animation needs to be covered with a spoiler animation
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendAnimationResponse
 */


/**
 * @interface SendAnimationRequest
 * 
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.  https://core.telegram.org/bots/api#sendanimation
 * @function sendAnimation
 * @memberof SendAnimationRequest
 * @param {SendAnimationParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendAnimationWithReturns
 * @memberof SendAnimationRequest
 * @param {SendAnimationParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendvoice
 * @typedef {Object} SendVoiceParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} voice Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
 * @property {string} [caption] Voice message caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {number} [duration] Duration of the voice message in seconds
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendVoiceResponse
 */


/**
 * @interface SendVoiceRequest
 * 
 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.  https://core.telegram.org/bots/api#sendvoice
 * @function sendVoice
 * @memberof SendVoiceRequest
 * @param {SendVoiceParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendVoiceWithReturns
 * @memberof SendVoiceRequest
 * @param {SendVoiceParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendvideonote
 * @typedef {Object} SendVideoNoteParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} video_note Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
 * @property {number} [duration] Duration of sent video in seconds
 * @property {number} [length] Video width and height, i.e. diameter of the video message
 * @property {InputFile | string} [thumbnail] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendVideoNoteResponse
 */


/**
 * @interface SendVideoNoteRequest
 * 
 * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendvideonote
 * @function sendVideoNote
 * @memberof SendVideoNoteRequest
 * @param {SendVideoNoteParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendVideoNoteWithReturns
 * @memberof SendVideoNoteRequest
 * @param {SendVideoNoteParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendpaidmedia
 * @typedef {Object} SendPaidMediaParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
 * @property {number} star_count The number of Telegram Stars that must be paid to buy access to the media; 1-2500
 * @property {Array<InputPaidMedia>} media A JSON-serialized array describing the media to be sent; up to 10 items
 * @property {string} [payload] Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
 * @property {string} [caption] Media caption, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the media caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendPaidMediaResponse
 */


/**
 * @interface SendPaidMediaRequest
 * 
 * Use this method to send paid media. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendpaidmedia
 * @function sendPaidMedia
 * @memberof SendPaidMediaRequest
 * @param {SendPaidMediaParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendPaidMediaWithReturns
 * @memberof SendPaidMediaRequest
 * @param {SendPaidMediaParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendmediagroup
 * @typedef {Object} SendMediaGroupParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {Array<InputMediaAudio> | Array<InputMediaDocument> | Array<InputMediaPhoto> | InputMediaVideo} media A JSON-serialized array describing messages to be sent, must include 2-10 items
 * @property {boolean} [disable_notification] Sends messages silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent messages from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 */


/**
 * @typedef {ResponseSuccess<Array<Message>>} SendMediaGroupResponse
 */


/**
 * @interface SendMediaGroupRequest
 * 
 * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.  https://core.telegram.org/bots/api#sendmediagroup
 * @function sendMediaGroup
 * @memberof SendMediaGroupRequest
 * @param {SendMediaGroupParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendMediaGroupWithReturns
 * @memberof SendMediaGroupRequest
 * @param {SendMediaGroupParams} params
 * @returns {Promise<ResponseSuccess<Array<Message>>>}
 */


/**
 * https://core.telegram.org/bots/api#sendlocation
 * @typedef {Object} SendLocationParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number} latitude Latitude of the location
 * @property {number} longitude Longitude of the location
 * @property {number} [horizontal_accuracy] The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {number} [live_period] Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
 * @property {number} [heading] For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendLocationResponse
 */


/**
 * @interface SendLocationRequest
 * 
 * Use this method to send point on the map. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendlocation
 * @function sendLocation
 * @memberof SendLocationRequest
 * @param {SendLocationParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendLocationWithReturns
 * @memberof SendLocationRequest
 * @param {SendLocationParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendvenue
 * @typedef {Object} SendVenueParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {number} latitude Latitude of the venue
 * @property {number} longitude Longitude of the venue
 * @property {string} title Name of the venue
 * @property {string} address Address of the venue
 * @property {string} [foursquare_id] Foursquare identifier of the venue
 * @property {string} [foursquare_type] Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {string} [google_place_id] Google Places identifier of the venue
 * @property {string} [google_place_type] Google Places type of the venue. (See supported types.)
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendVenueResponse
 */


/**
 * @interface SendVenueRequest
 * 
 * Use this method to send information about a venue. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendvenue
 * @function sendVenue
 * @memberof SendVenueRequest
 * @param {SendVenueParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendVenueWithReturns
 * @memberof SendVenueRequest
 * @param {SendVenueParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendcontact
 * @typedef {Object} SendContactParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} phone_number Contact's phone number
 * @property {string} first_name Contact's first name
 * @property {string} [last_name] Contact's last name
 * @property {string} [vcard] Additional data about the contact in the form of a vCard, 0-2048 bytes
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendContactResponse
 */


/**
 * @interface SendContactRequest
 * 
 * Use this method to send phone contacts. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendcontact
 * @function sendContact
 * @memberof SendContactRequest
 * @param {SendContactParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendContactWithReturns
 * @memberof SendContactRequest
 * @param {SendContactParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendpoll
 * @typedef {Object} SendPollParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} question Poll question, 1-300 characters
 * @property {string} [question_parse_mode] Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
 * @property {Array<MessageEntity>} [question_entities] A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
 * @property {Array<InputPollOption>} options A JSON-serialized list of 2-10 answer options
 * @property {boolean} [is_anonymous] True, if the poll needs to be anonymous, defaults to True
 * @property {string} [type] Poll type, “quiz” or “regular”, defaults to “regular”
 * @property {boolean} [allows_multiple_answers] True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
 * @property {number} [correct_option_id] 0-based identifier of the correct answer option, required for polls in quiz mode
 * @property {string} [explanation] Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
 * @property {string} [explanation_parse_mode] Mode for parsing entities in the explanation. See formatting options for more details.
 * @property {Array<MessageEntity>} [explanation_entities] A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
 * @property {number} [open_period] Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
 * @property {number} [close_date] Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
 * @property {boolean} [is_closed] Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendPollResponse
 */


/**
 * @interface SendPollRequest
 * 
 * Use this method to send a native poll. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendpoll
 * @function sendPoll
 * @memberof SendPollRequest
 * @param {SendPollParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendPollWithReturns
 * @memberof SendPollRequest
 * @param {SendPollParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#senddice
 * @typedef {Object} SendDiceParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} [emoji] Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “”
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendDiceResponse
 */


/**
 * @interface SendDiceRequest
 * 
 * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.  https://core.telegram.org/bots/api#senddice
 * @function sendDice
 * @memberof SendDiceRequest
 * @param {SendDiceParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendDiceWithReturns
 * @memberof SendDiceRequest
 * @param {SendDiceParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#sendchataction
 * @typedef {Object} SendChatActionParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the action will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread; for supergroups only
 * @property {ChatAction} action Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
 */


/**
 * @typedef {ResponseWithOutData} SendChatActionResponse
 */


/**
 * @interface SendChatActionRequest
 * 
 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.  https://core.telegram.org/bots/api#sendchataction
 * @function sendChatAction
 * @memberof SendChatActionRequest
 * @param {SendChatActionParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setmessagereaction
 * @typedef {Object} SetMessageReactionParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} message_id Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
 * @property {Array<ReactionType>} [reaction] A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
 * @property {boolean} [is_big] Pass True to set the reaction with a big animation
 */


/**
 * @typedef {ResponseWithOutData} SetMessageReactionResponse
 */


/**
 * @interface SetMessageReactionRequest
 * 
 * Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.  https://core.telegram.org/bots/api#setmessagereaction
 * @function setMessageReaction
 * @memberof SetMessageReactionRequest
 * @param {SetMessageReactionParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getuserprofilephotos
 * @typedef {Object} GetUserProfilePhotosParams
 * @property {number} user_id Unique identifier of the target user
 * @property {number} [offset] Sequential number of the first photo to be returned. By default, all photos are returned.
 * @property {number} [limit] Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 */


/**
 * @typedef {ResponseSuccess<UserProfilePhotos>} GetUserProfilePhotosResponse
 */


/**
 * @interface GetUserProfilePhotosRequest
 * 
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.  https://core.telegram.org/bots/api#getuserprofilephotos
 * @function getUserProfilePhotos
 * @memberof GetUserProfilePhotosRequest
 * @param {GetUserProfilePhotosParams} params
 * @returns {Promise<Response>}
 * 
 * @function getUserProfilePhotosWithReturns
 * @memberof GetUserProfilePhotosRequest
 * @param {GetUserProfilePhotosParams} params
 * @returns {Promise<ResponseSuccess<UserProfilePhotos>>}
 */


/**
 * https://core.telegram.org/bots/api#getfile
 * @typedef {Object} GetFileParams
 * @property {string} file_id File identifier to get information about
 */


/**
 * @typedef {ResponseSuccess<File>} GetFileResponse
 */


/**
 * @interface GetFileRequest
 * 
 * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.  https://core.telegram.org/bots/api#getfile
 * @function getFile
 * @memberof GetFileRequest
 * @param {GetFileParams} params
 * @returns {Promise<Response>}
 * 
 * @function getFileWithReturns
 * @memberof GetFileRequest
 * @param {GetFileParams} params
 * @returns {Promise<ResponseSuccess<File>>}
 */


/**
 * https://core.telegram.org/bots/api#banchatmember
 * @typedef {Object} BanChatMemberParams
 * @property {number | string} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 * @property {number} [until_date] Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
 * @property {boolean} [revoke_messages] Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
 */


/**
 * @typedef {ResponseWithOutData} BanChatMemberResponse
 */


/**
 * @interface BanChatMemberRequest
 * 
 * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#banchatmember
 * @function banChatMember
 * @memberof BanChatMemberRequest
 * @param {BanChatMemberParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unbanchatmember
 * @typedef {Object} UnbanChatMemberParams
 * @property {number | string} chat_id Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 * @property {boolean} [only_if_banned] Do nothing if the user is not banned
 */


/**
 * @typedef {ResponseWithOutData} UnbanChatMemberResponse
 */


/**
 * @interface UnbanChatMemberRequest
 * 
 * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.  https://core.telegram.org/bots/api#unbanchatmember
 * @function unbanChatMember
 * @memberof UnbanChatMemberRequest
 * @param {UnbanChatMemberParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#restrictchatmember
 * @typedef {Object} RestrictChatMemberParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} user_id Unique identifier of the target user
 * @property {ChatPermissions} permissions A JSON-serialized object for new user permissions
 * @property {boolean} [use_independent_chat_permissions] Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
 * @property {number} [until_date] Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
 */


/**
 * @typedef {ResponseWithOutData} RestrictChatMemberResponse
 */


/**
 * @interface RestrictChatMemberRequest
 * 
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.  https://core.telegram.org/bots/api#restrictchatmember
 * @function restrictChatMember
 * @memberof RestrictChatMemberRequest
 * @param {RestrictChatMemberParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#promotechatmember
 * @typedef {Object} PromoteChatMemberParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 * @property {boolean} [is_anonymous] Pass True if the administrator's presence in the chat is hidden
 * @property {boolean} [can_manage_chat] Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
 * @property {boolean} [can_delete_messages] Pass True if the administrator can delete messages of other users
 * @property {boolean} [can_manage_video_chats] Pass True if the administrator can manage video chats
 * @property {boolean} [can_restrict_members] Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
 * @property {boolean} [can_promote_members] Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
 * @property {boolean} [can_change_info] Pass True if the administrator can change chat title, photo and other settings
 * @property {boolean} [can_invite_users] Pass True if the administrator can invite new users to the chat
 * @property {boolean} [can_post_stories] Pass True if the administrator can post stories to the chat
 * @property {boolean} [can_edit_stories] Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
 * @property {boolean} [can_delete_stories] Pass True if the administrator can delete stories posted by other users
 * @property {boolean} [can_post_messages] Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only
 * @property {boolean} [can_edit_messages] Pass True if the administrator can edit messages of other users and can pin messages; for channels only
 * @property {boolean} [can_pin_messages] Pass True if the administrator can pin messages; for supergroups only
 * @property {boolean} [can_manage_topics] Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
 */


/**
 * @typedef {ResponseWithOutData} PromoteChatMemberResponse
 */


/**
 * @interface PromoteChatMemberRequest
 * 
 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.  https://core.telegram.org/bots/api#promotechatmember
 * @function promoteChatMember
 * @memberof PromoteChatMemberRequest
 * @param {PromoteChatMemberParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setchatadministratorcustomtitle
 * @typedef {Object} SetChatAdministratorCustomTitleParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} user_id Unique identifier of the target user
 * @property {string} custom_title New custom title for the administrator; 0-16 characters, emoji are not allowed
 */


/**
 * @typedef {ResponseWithOutData} SetChatAdministratorCustomTitleResponse
 */


/**
 * @interface SetChatAdministratorCustomTitleRequest
 * 
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.  https://core.telegram.org/bots/api#setchatadministratorcustomtitle
 * @function setChatAdministratorCustomTitle
 * @memberof SetChatAdministratorCustomTitleRequest
 * @param {SetChatAdministratorCustomTitleParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#banchatsenderchat
 * @typedef {Object} BanChatSenderChatParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} sender_chat_id Unique identifier of the target sender chat
 */


/**
 * @typedef {ResponseWithOutData} BanChatSenderChatResponse
 */


/**
 * @interface BanChatSenderChatRequest
 * 
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#banchatsenderchat
 * @function banChatSenderChat
 * @memberof BanChatSenderChatRequest
 * @param {BanChatSenderChatParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unbanchatsenderchat
 * @typedef {Object} UnbanChatSenderChatParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} sender_chat_id Unique identifier of the target sender chat
 */


/**
 * @typedef {ResponseWithOutData} UnbanChatSenderChatResponse
 */


/**
 * @interface UnbanChatSenderChatRequest
 * 
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#unbanchatsenderchat
 * @function unbanChatSenderChat
 * @memberof UnbanChatSenderChatRequest
 * @param {UnbanChatSenderChatParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setchatpermissions
 * @typedef {Object} SetChatPermissionsParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {ChatPermissions} permissions A JSON-serialized object for new default chat permissions
 * @property {boolean} [use_independent_chat_permissions] Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
 */


/**
 * @typedef {ResponseWithOutData} SetChatPermissionsResponse
 */


/**
 * @interface SetChatPermissionsRequest
 * 
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.  https://core.telegram.org/bots/api#setchatpermissions
 * @function setChatPermissions
 * @memberof SetChatPermissionsRequest
 * @param {SetChatPermissionsParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#exportchatinvitelink
 * @typedef {Object} ExportChatInviteLinkParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseSuccess<string>} ExportChatInviteLinkResponse
 */


/**
 * @interface ExportChatInviteLinkRequest
 * 
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.  https://core.telegram.org/bots/api#exportchatinvitelink
 * @function exportChatInviteLink
 * @memberof ExportChatInviteLinkRequest
 * @param {ExportChatInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function exportChatInviteLinkWithReturns
 * @memberof ExportChatInviteLinkRequest
 * @param {ExportChatInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<string>>}
 */


/**
 * https://core.telegram.org/bots/api#createchatinvitelink
 * @typedef {Object} CreateChatInviteLinkParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {string} [name] Invite link name; 0-32 characters
 * @property {number} [expire_date] Point in time (Unix timestamp) when the link will expire
 * @property {number} [member_limit] The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 * @property {boolean} [creates_join_request] True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
 */


/**
 * @typedef {ResponseSuccess<ChatInviteLink>} CreateChatInviteLinkResponse
 */


/**
 * @interface CreateChatInviteLinkRequest
 * 
 * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.  https://core.telegram.org/bots/api#createchatinvitelink
 * @function createChatInviteLink
 * @memberof CreateChatInviteLinkRequest
 * @param {CreateChatInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function createChatInviteLinkWithReturns
 * @memberof CreateChatInviteLinkRequest
 * @param {CreateChatInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<ChatInviteLink>>}
 */


/**
 * https://core.telegram.org/bots/api#editchatinvitelink
 * @typedef {Object} EditChatInviteLinkParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {string} invite_link The invite link to edit
 * @property {string} [name] Invite link name; 0-32 characters
 * @property {number} [expire_date] Point in time (Unix timestamp) when the link will expire
 * @property {number} [member_limit] The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 * @property {boolean} [creates_join_request] True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
 */


/**
 * @typedef {ResponseSuccess<ChatInviteLink>} EditChatInviteLinkResponse
 */


/**
 * @interface EditChatInviteLinkRequest
 * 
 * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.  https://core.telegram.org/bots/api#editchatinvitelink
 * @function editChatInviteLink
 * @memberof EditChatInviteLinkRequest
 * @param {EditChatInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function editChatInviteLinkWithReturns
 * @memberof EditChatInviteLinkRequest
 * @param {EditChatInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<ChatInviteLink>>}
 */


/**
 * https://core.telegram.org/bots/api#createchatsubscriptioninvitelink
 * @typedef {Object} CreateChatSubscriptionInviteLinkParams
 * @property {number | string} chat_id Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
 * @property {string} [name] Invite link name; 0-32 characters
 * @property {number} subscription_period The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
 * @property {number} subscription_price The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-2500
 */


/**
 * @typedef {ResponseSuccess<ChatInviteLink>} CreateChatSubscriptionInviteLinkResponse
 */


/**
 * @interface CreateChatSubscriptionInviteLinkRequest
 * 
 * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.  https://core.telegram.org/bots/api#createchatsubscriptioninvitelink
 * @function createChatSubscriptionInviteLink
 * @memberof CreateChatSubscriptionInviteLinkRequest
 * @param {CreateChatSubscriptionInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function createChatSubscriptionInviteLinkWithReturns
 * @memberof CreateChatSubscriptionInviteLinkRequest
 * @param {CreateChatSubscriptionInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<ChatInviteLink>>}
 */


/**
 * https://core.telegram.org/bots/api#editchatsubscriptioninvitelink
 * @typedef {Object} EditChatSubscriptionInviteLinkParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {string} invite_link The invite link to edit
 * @property {string} [name] Invite link name; 0-32 characters
 */


/**
 * @typedef {ResponseSuccess<ChatInviteLink>} EditChatSubscriptionInviteLinkResponse
 */


/**
 * @interface EditChatSubscriptionInviteLinkRequest
 * 
 * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.  https://core.telegram.org/bots/api#editchatsubscriptioninvitelink
 * @function editChatSubscriptionInviteLink
 * @memberof EditChatSubscriptionInviteLinkRequest
 * @param {EditChatSubscriptionInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function editChatSubscriptionInviteLinkWithReturns
 * @memberof EditChatSubscriptionInviteLinkRequest
 * @param {EditChatSubscriptionInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<ChatInviteLink>>}
 */


/**
 * https://core.telegram.org/bots/api#revokechatinvitelink
 * @typedef {Object} RevokeChatInviteLinkParams
 * @property {number | string} chat_id Unique identifier of the target chat or username of the target channel (in the format @channelusername)
 * @property {string} invite_link The invite link to revoke
 */


/**
 * @typedef {ResponseSuccess<ChatInviteLink>} RevokeChatInviteLinkResponse
 */


/**
 * @interface RevokeChatInviteLinkRequest
 * 
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.  https://core.telegram.org/bots/api#revokechatinvitelink
 * @function revokeChatInviteLink
 * @memberof RevokeChatInviteLinkRequest
 * @param {RevokeChatInviteLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function revokeChatInviteLinkWithReturns
 * @memberof RevokeChatInviteLinkRequest
 * @param {RevokeChatInviteLinkParams} params
 * @returns {Promise<ResponseSuccess<ChatInviteLink>>}
 */


/**
 * https://core.telegram.org/bots/api#approvechatjoinrequest
 * @typedef {Object} ApproveChatJoinRequestParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 */


/**
 * @typedef {ResponseWithOutData} ApproveChatJoinRequestResponse
 */


/**
 * @interface ApproveChatJoinRequestRequest
 * 
 * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.  https://core.telegram.org/bots/api#approvechatjoinrequest
 * @function approveChatJoinRequest
 * @memberof ApproveChatJoinRequestRequest
 * @param {ApproveChatJoinRequestParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#declinechatjoinrequest
 * @typedef {Object} DeclineChatJoinRequestParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 */


/**
 * @typedef {ResponseWithOutData} DeclineChatJoinRequestResponse
 */


/**
 * @interface DeclineChatJoinRequestRequest
 * 
 * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.  https://core.telegram.org/bots/api#declinechatjoinrequest
 * @function declineChatJoinRequest
 * @memberof DeclineChatJoinRequestRequest
 * @param {DeclineChatJoinRequestParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setchatphoto
 * @typedef {Object} SetChatPhotoParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {InputFile} photo New chat photo, uploaded using multipart/form-data
 */


/**
 * @typedef {ResponseWithOutData} SetChatPhotoResponse
 */


/**
 * @interface SetChatPhotoRequest
 * 
 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#setchatphoto
 * @function setChatPhoto
 * @memberof SetChatPhotoRequest
 * @param {SetChatPhotoParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletechatphoto
 * @typedef {Object} DeleteChatPhotoParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseWithOutData} DeleteChatPhotoResponse
 */


/**
 * @interface DeleteChatPhotoRequest
 * 
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#deletechatphoto
 * @function deleteChatPhoto
 * @memberof DeleteChatPhotoRequest
 * @param {DeleteChatPhotoParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setchattitle
 * @typedef {Object} SetChatTitleParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {string} title New chat title, 1-128 characters
 */


/**
 * @typedef {ResponseWithOutData} SetChatTitleResponse
 */


/**
 * @interface SetChatTitleRequest
 * 
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#setchattitle
 * @function setChatTitle
 * @memberof SetChatTitleRequest
 * @param {SetChatTitleParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setchatdescription
 * @typedef {Object} SetChatDescriptionParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {string} [description] New chat description, 0-255 characters
 */


/**
 * @typedef {ResponseWithOutData} SetChatDescriptionResponse
 */


/**
 * @interface SetChatDescriptionRequest
 * 
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.  https://core.telegram.org/bots/api#setchatdescription
 * @function setChatDescription
 * @memberof SetChatDescriptionRequest
 * @param {SetChatDescriptionParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#pinchatmessage
 * @typedef {Object} PinChatMessageParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be pinned
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} message_id Identifier of a message to pin
 * @property {boolean} [disable_notification] Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
 */


/**
 * @typedef {ResponseWithOutData} PinChatMessageResponse
 */


/**
 * @interface PinChatMessageRequest
 * 
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.  https://core.telegram.org/bots/api#pinchatmessage
 * @function pinChatMessage
 * @memberof PinChatMessageRequest
 * @param {PinChatMessageParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unpinchatmessage
 * @typedef {Object} UnpinChatMessageParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be unpinned
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
 */


/**
 * @typedef {ResponseWithOutData} UnpinChatMessageResponse
 */


/**
 * @interface UnpinChatMessageRequest
 * 
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.  https://core.telegram.org/bots/api#unpinchatmessage
 * @function unpinChatMessage
 * @memberof UnpinChatMessageRequest
 * @param {UnpinChatMessageParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unpinallchatmessages
 * @typedef {Object} UnpinAllChatMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseWithOutData} UnpinAllChatMessagesResponse
 */


/**
 * @interface UnpinAllChatMessagesRequest
 * 
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.  https://core.telegram.org/bots/api#unpinallchatmessages
 * @function unpinAllChatMessages
 * @memberof UnpinAllChatMessagesRequest
 * @param {UnpinAllChatMessagesParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#leavechat
 * @typedef {Object} LeaveChatParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseWithOutData} LeaveChatResponse
 */


/**
 * @interface LeaveChatRequest
 * 
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.  https://core.telegram.org/bots/api#leavechat
 * @function leaveChat
 * @memberof LeaveChatRequest
 * @param {LeaveChatParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getchat
 * @typedef {Object} GetChatParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseSuccess<ChatFullInfo>} GetChatResponse
 */


/**
 * @interface GetChatRequest
 * 
 * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.  https://core.telegram.org/bots/api#getchat
 * @function getChat
 * @memberof GetChatRequest
 * @param {GetChatParams} params
 * @returns {Promise<Response>}
 * 
 * @function getChatWithReturns
 * @memberof GetChatRequest
 * @param {GetChatParams} params
 * @returns {Promise<ResponseSuccess<ChatFullInfo>>}
 */


/**
 * https://core.telegram.org/bots/api#getchatadministrators
 * @typedef {Object} GetChatAdministratorsParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseSuccess<Array<ChatMember>>} GetChatAdministratorsResponse
 */


/**
 * @interface GetChatAdministratorsRequest
 * 
 * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.  https://core.telegram.org/bots/api#getchatadministrators
 * @function getChatAdministrators
 * @memberof GetChatAdministratorsRequest
 * @param {GetChatAdministratorsParams} params
 * @returns {Promise<Response>}
 * 
 * @function getChatAdministratorsWithReturns
 * @memberof GetChatAdministratorsRequest
 * @param {GetChatAdministratorsParams} params
 * @returns {Promise<ResponseSuccess<Array<ChatMember>>>}
 */


/**
 * https://core.telegram.org/bots/api#getchatmembercount
 * @typedef {Object} GetChatMemberCountParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 */


/**
 * @typedef {ResponseSuccess<number>} GetChatMemberCountResponse
 */


/**
 * @interface GetChatMemberCountRequest
 * 
 * Use this method to get the number of members in a chat. Returns Int on success.  https://core.telegram.org/bots/api#getchatmembercount
 * @function getChatMemberCount
 * @memberof GetChatMemberCountRequest
 * @param {GetChatMemberCountParams} params
 * @returns {Promise<Response>}
 * 
 * @function getChatMemberCountWithReturns
 * @memberof GetChatMemberCountRequest
 * @param {GetChatMemberCountParams} params
 * @returns {Promise<ResponseSuccess<number>>}
 */


/**
 * https://core.telegram.org/bots/api#getchatmember
 * @typedef {Object} GetChatMemberParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 */


/**
 * @typedef {ResponseSuccess<ChatMember>} GetChatMemberResponse
 */


/**
 * @interface GetChatMemberRequest
 * 
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.  https://core.telegram.org/bots/api#getchatmember
 * @function getChatMember
 * @memberof GetChatMemberRequest
 * @param {GetChatMemberParams} params
 * @returns {Promise<Response>}
 * 
 * @function getChatMemberWithReturns
 * @memberof GetChatMemberRequest
 * @param {GetChatMemberParams} params
 * @returns {Promise<ResponseSuccess<ChatMember>>}
 */


/**
 * https://core.telegram.org/bots/api#setchatstickerset
 * @typedef {Object} SetChatStickerSetParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {string} sticker_set_name Name of the sticker set to be set as the group sticker set
 */


/**
 * @typedef {ResponseWithOutData} SetChatStickerSetResponse
 */


/**
 * @interface SetChatStickerSetRequest
 * 
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.  https://core.telegram.org/bots/api#setchatstickerset
 * @function setChatStickerSet
 * @memberof SetChatStickerSetRequest
 * @param {SetChatStickerSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletechatstickerset
 * @typedef {Object} DeleteChatStickerSetParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} DeleteChatStickerSetResponse
 */


/**
 * @interface DeleteChatStickerSetRequest
 * 
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.  https://core.telegram.org/bots/api#deletechatstickerset
 * @function deleteChatStickerSet
 * @memberof DeleteChatStickerSetRequest
 * @param {DeleteChatStickerSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * @typedef {ResponseSuccess<Array<Sticker>>} GetForumTopicIconStickersResponse
 */


/**
 * @interface GetForumTopicIconStickersRequest
 * 
 * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.  https://core.telegram.org/bots/api#getforumtopiciconstickers
 * @function getForumTopicIconStickers
 * @memberof GetForumTopicIconStickersRequest
 * @returns {Promise<Response>}
 * 
 * @function getForumTopicIconStickersWithReturns
 * @memberof GetForumTopicIconStickersRequest
 * @returns {Promise<ResponseSuccess<Array<Sticker>>>}
 */


/**
 * https://core.telegram.org/bots/api#createforumtopic
 * @typedef {Object} CreateForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {string} name Topic name, 1-128 characters
 * @property {number} [icon_color] Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
 * @property {string} [icon_custom_emoji_id] Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
 */


/**
 * @typedef {ResponseSuccess<ForumTopic>} CreateForumTopicResponse
 */


/**
 * @interface CreateForumTopicRequest
 * 
 * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.  https://core.telegram.org/bots/api#createforumtopic
 * @function createForumTopic
 * @memberof CreateForumTopicRequest
 * @param {CreateForumTopicParams} params
 * @returns {Promise<Response>}
 * 
 * @function createForumTopicWithReturns
 * @memberof CreateForumTopicRequest
 * @param {CreateForumTopicParams} params
 * @returns {Promise<ResponseSuccess<ForumTopic>>}
 */


/**
 * https://core.telegram.org/bots/api#editforumtopic
 * @typedef {Object} EditForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} message_thread_id Unique identifier for the target message thread of the forum topic
 * @property {string} [name] New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
 * @property {string} [icon_custom_emoji_id] New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
 */


/**
 * @typedef {ResponseWithOutData} EditForumTopicResponse
 */


/**
 * @interface EditForumTopicRequest
 * 
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.  https://core.telegram.org/bots/api#editforumtopic
 * @function editForumTopic
 * @memberof EditForumTopicRequest
 * @param {EditForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#closeforumtopic
 * @typedef {Object} CloseForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} message_thread_id Unique identifier for the target message thread of the forum topic
 */


/**
 * @typedef {ResponseWithOutData} CloseForumTopicResponse
 */


/**
 * @interface CloseForumTopicRequest
 * 
 * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.  https://core.telegram.org/bots/api#closeforumtopic
 * @function closeForumTopic
 * @memberof CloseForumTopicRequest
 * @param {CloseForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#reopenforumtopic
 * @typedef {Object} ReopenForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} message_thread_id Unique identifier for the target message thread of the forum topic
 */


/**
 * @typedef {ResponseWithOutData} ReopenForumTopicResponse
 */


/**
 * @interface ReopenForumTopicRequest
 * 
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.  https://core.telegram.org/bots/api#reopenforumtopic
 * @function reopenForumTopic
 * @memberof ReopenForumTopicRequest
 * @param {ReopenForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deleteforumtopic
 * @typedef {Object} DeleteForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} message_thread_id Unique identifier for the target message thread of the forum topic
 */


/**
 * @typedef {ResponseWithOutData} DeleteForumTopicResponse
 */


/**
 * @interface DeleteForumTopicRequest
 * 
 * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.  https://core.telegram.org/bots/api#deleteforumtopic
 * @function deleteForumTopic
 * @memberof DeleteForumTopicRequest
 * @param {DeleteForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unpinallforumtopicmessages
 * @typedef {Object} UnpinAllForumTopicMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {number} message_thread_id Unique identifier for the target message thread of the forum topic
 */


/**
 * @typedef {ResponseWithOutData} UnpinAllForumTopicMessagesResponse
 */


/**
 * @interface UnpinAllForumTopicMessagesRequest
 * 
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.  https://core.telegram.org/bots/api#unpinallforumtopicmessages
 * @function unpinAllForumTopicMessages
 * @memberof UnpinAllForumTopicMessagesRequest
 * @param {UnpinAllForumTopicMessagesParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#editgeneralforumtopic
 * @typedef {Object} EditGeneralForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 * @property {string} name New topic name, 1-128 characters
 */


/**
 * @typedef {ResponseWithOutData} EditGeneralForumTopicResponse
 */


/**
 * @interface EditGeneralForumTopicRequest
 * 
 * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.  https://core.telegram.org/bots/api#editgeneralforumtopic
 * @function editGeneralForumTopic
 * @memberof EditGeneralForumTopicRequest
 * @param {EditGeneralForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#closegeneralforumtopic
 * @typedef {Object} CloseGeneralForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} CloseGeneralForumTopicResponse
 */


/**
 * @interface CloseGeneralForumTopicRequest
 * 
 * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.  https://core.telegram.org/bots/api#closegeneralforumtopic
 * @function closeGeneralForumTopic
 * @memberof CloseGeneralForumTopicRequest
 * @param {CloseGeneralForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#reopengeneralforumtopic
 * @typedef {Object} ReopenGeneralForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} ReopenGeneralForumTopicResponse
 */


/**
 * @interface ReopenGeneralForumTopicRequest
 * 
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.  https://core.telegram.org/bots/api#reopengeneralforumtopic
 * @function reopenGeneralForumTopic
 * @memberof ReopenGeneralForumTopicRequest
 * @param {ReopenGeneralForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#hidegeneralforumtopic
 * @typedef {Object} HideGeneralForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} HideGeneralForumTopicResponse
 */


/**
 * @interface HideGeneralForumTopicRequest
 * 
 * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.  https://core.telegram.org/bots/api#hidegeneralforumtopic
 * @function hideGeneralForumTopic
 * @memberof HideGeneralForumTopicRequest
 * @param {HideGeneralForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unhidegeneralforumtopic
 * @typedef {Object} UnhideGeneralForumTopicParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} UnhideGeneralForumTopicResponse
 */


/**
 * @interface UnhideGeneralForumTopicRequest
 * 
 * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.  https://core.telegram.org/bots/api#unhidegeneralforumtopic
 * @function unhideGeneralForumTopic
 * @memberof UnhideGeneralForumTopicRequest
 * @param {UnhideGeneralForumTopicParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
 * @typedef {Object} UnpinAllGeneralForumTopicMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
 */


/**
 * @typedef {ResponseWithOutData} UnpinAllGeneralForumTopicMessagesResponse
 */


/**
 * @interface UnpinAllGeneralForumTopicMessagesRequest
 * 
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.  https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
 * @function unpinAllGeneralForumTopicMessages
 * @memberof UnpinAllGeneralForumTopicMessagesRequest
 * @param {UnpinAllGeneralForumTopicMessagesParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#answercallbackquery
 * @typedef {Object} AnswerCallbackQueryParams
 * @property {string} callback_query_id Unique identifier for the query to be answered
 * @property {string} [text] Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
 * @property {boolean} [show_alert] If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
 * @property {string} [url] URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
 * @property {number} [cache_time] The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
 */


/**
 * @typedef {ResponseWithOutData} AnswerCallbackQueryResponse
 */


/**
 * @interface AnswerCallbackQueryRequest
 * 
 * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.  https://core.telegram.org/bots/api#answercallbackquery
 * @function answerCallbackQuery
 * @memberof AnswerCallbackQueryRequest
 * @param {AnswerCallbackQueryParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getuserchatboosts
 * @typedef {Object} GetUserChatBoostsParams
 * @property {number | string} chat_id Unique identifier for the chat or username of the channel (in the format @channelusername)
 * @property {number} user_id Unique identifier of the target user
 */


/**
 * @typedef {ResponseSuccess<UserChatBoosts>} GetUserChatBoostsResponse
 */


/**
 * @interface GetUserChatBoostsRequest
 * 
 * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.  https://core.telegram.org/bots/api#getuserchatboosts
 * @function getUserChatBoosts
 * @memberof GetUserChatBoostsRequest
 * @param {GetUserChatBoostsParams} params
 * @returns {Promise<Response>}
 * 
 * @function getUserChatBoostsWithReturns
 * @memberof GetUserChatBoostsRequest
 * @param {GetUserChatBoostsParams} params
 * @returns {Promise<ResponseSuccess<UserChatBoosts>>}
 */


/**
 * https://core.telegram.org/bots/api#getbusinessconnection
 * @typedef {Object} GetBusinessConnectionParams
 * @property {string} business_connection_id Unique identifier of the business connection
 */


/**
 * @typedef {ResponseSuccess<BusinessConnection>} GetBusinessConnectionResponse
 */


/**
 * @interface GetBusinessConnectionRequest
 * 
 * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.  https://core.telegram.org/bots/api#getbusinessconnection
 * @function getBusinessConnection
 * @memberof GetBusinessConnectionRequest
 * @param {GetBusinessConnectionParams} params
 * @returns {Promise<Response>}
 * 
 * @function getBusinessConnectionWithReturns
 * @memberof GetBusinessConnectionRequest
 * @param {GetBusinessConnectionParams} params
 * @returns {Promise<ResponseSuccess<BusinessConnection>>}
 */


/**
 * https://core.telegram.org/bots/api#setmycommands
 * @typedef {Object} SetMyCommandsParams
 * @property {Array<BotCommand>} commands A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
 * @property {BotCommandScope} [scope] A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 */


/**
 * @typedef {ResponseWithOutData} SetMyCommandsResponse
 */


/**
 * @interface SetMyCommandsRequest
 * 
 * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.  https://core.telegram.org/bots/api#setmycommands
 * @function setMyCommands
 * @memberof SetMyCommandsRequest
 * @param {SetMyCommandsParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletemycommands
 * @typedef {Object} DeleteMyCommandsParams
 * @property {BotCommandScope} [scope] A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 */


/**
 * @typedef {ResponseWithOutData} DeleteMyCommandsResponse
 */


/**
 * @interface DeleteMyCommandsRequest
 * 
 * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.  https://core.telegram.org/bots/api#deletemycommands
 * @function deleteMyCommands
 * @memberof DeleteMyCommandsRequest
 * @param {DeleteMyCommandsParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getmycommands
 * @typedef {Object} GetMyCommandsParams
 * @property {BotCommandScope} [scope] A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
 * @property {string} [language_code] A two-letter ISO 639-1 language code or an empty string
 */


/**
 * @typedef {ResponseSuccess<Array<BotCommand>>} GetMyCommandsResponse
 */


/**
 * @interface GetMyCommandsRequest
 * 
 * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.  https://core.telegram.org/bots/api#getmycommands
 * @function getMyCommands
 * @memberof GetMyCommandsRequest
 * @param {GetMyCommandsParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getMyCommandsWithReturns
 * @memberof GetMyCommandsRequest
 * @param {GetMyCommandsParams} [params]
 * @returns {Promise<ResponseSuccess<Array<BotCommand>>>}
 */


/**
 * https://core.telegram.org/bots/api#setmyname
 * @typedef {Object} SetMyNameParams
 * @property {string} [name] New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
 */


/**
 * @typedef {ResponseWithOutData} SetMyNameResponse
 */


/**
 * @interface SetMyNameRequest
 * 
 * Use this method to change the bot's name. Returns True on success.  https://core.telegram.org/bots/api#setmyname
 * @function setMyName
 * @memberof SetMyNameRequest
 * @param {SetMyNameParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getmyname
 * @typedef {Object} GetMyNameParams
 * @property {string} [language_code] A two-letter ISO 639-1 language code or an empty string
 */


/**
 * @typedef {ResponseSuccess<BotName>} GetMyNameResponse
 */


/**
 * @interface GetMyNameRequest
 * 
 * Use this method to get the current bot name for the given user language. Returns BotName on success.  https://core.telegram.org/bots/api#getmyname
 * @function getMyName
 * @memberof GetMyNameRequest
 * @param {GetMyNameParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getMyNameWithReturns
 * @memberof GetMyNameRequest
 * @param {GetMyNameParams} [params]
 * @returns {Promise<ResponseSuccess<BotName>>}
 */


/**
 * https://core.telegram.org/bots/api#setmydescription
 * @typedef {Object} SetMyDescriptionParams
 * @property {string} [description] New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
 */


/**
 * @typedef {ResponseWithOutData} SetMyDescriptionResponse
 */


/**
 * @interface SetMyDescriptionRequest
 * 
 * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.  https://core.telegram.org/bots/api#setmydescription
 * @function setMyDescription
 * @memberof SetMyDescriptionRequest
 * @param {SetMyDescriptionParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getmydescription
 * @typedef {Object} GetMyDescriptionParams
 * @property {string} [language_code] A two-letter ISO 639-1 language code or an empty string
 */


/**
 * @typedef {ResponseSuccess<BotDescription>} GetMyDescriptionResponse
 */


/**
 * @interface GetMyDescriptionRequest
 * 
 * Use this method to get the current bot description for the given user language. Returns BotDescription on success.  https://core.telegram.org/bots/api#getmydescription
 * @function getMyDescription
 * @memberof GetMyDescriptionRequest
 * @param {GetMyDescriptionParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getMyDescriptionWithReturns
 * @memberof GetMyDescriptionRequest
 * @param {GetMyDescriptionParams} [params]
 * @returns {Promise<ResponseSuccess<BotDescription>>}
 */


/**
 * https://core.telegram.org/bots/api#setmyshortdescription
 * @typedef {Object} SetMyShortDescriptionParams
 * @property {string} [short_description] New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
 * @property {string} [language_code] A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
 */


/**
 * @typedef {ResponseWithOutData} SetMyShortDescriptionResponse
 */


/**
 * @interface SetMyShortDescriptionRequest
 * 
 * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.  https://core.telegram.org/bots/api#setmyshortdescription
 * @function setMyShortDescription
 * @memberof SetMyShortDescriptionRequest
 * @param {SetMyShortDescriptionParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getmyshortdescription
 * @typedef {Object} GetMyShortDescriptionParams
 * @property {string} [language_code] A two-letter ISO 639-1 language code or an empty string
 */


/**
 * @typedef {ResponseSuccess<BotShortDescription>} GetMyShortDescriptionResponse
 */


/**
 * @interface GetMyShortDescriptionRequest
 * 
 * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.  https://core.telegram.org/bots/api#getmyshortdescription
 * @function getMyShortDescription
 * @memberof GetMyShortDescriptionRequest
 * @param {GetMyShortDescriptionParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getMyShortDescriptionWithReturns
 * @memberof GetMyShortDescriptionRequest
 * @param {GetMyShortDescriptionParams} [params]
 * @returns {Promise<ResponseSuccess<BotShortDescription>>}
 */


/**
 * https://core.telegram.org/bots/api#setchatmenubutton
 * @typedef {Object} SetChatMenuButtonParams
 * @property {number} [chat_id] Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
 * @property {MenuButton} [menu_button] A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
 */


/**
 * @typedef {ResponseWithOutData} SetChatMenuButtonResponse
 */


/**
 * @interface SetChatMenuButtonRequest
 * 
 * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.  https://core.telegram.org/bots/api#setchatmenubutton
 * @function setChatMenuButton
 * @memberof SetChatMenuButtonRequest
 * @param {SetChatMenuButtonParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getchatmenubutton
 * @typedef {Object} GetChatMenuButtonParams
 * @property {number} [chat_id] Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
 */


/**
 * @typedef {ResponseSuccess<MenuButton>} GetChatMenuButtonResponse
 */


/**
 * @interface GetChatMenuButtonRequest
 * 
 * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.  https://core.telegram.org/bots/api#getchatmenubutton
 * @function getChatMenuButton
 * @memberof GetChatMenuButtonRequest
 * @param {GetChatMenuButtonParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getChatMenuButtonWithReturns
 * @memberof GetChatMenuButtonRequest
 * @param {GetChatMenuButtonParams} [params]
 * @returns {Promise<ResponseSuccess<MenuButton>>}
 */


/**
 * https://core.telegram.org/bots/api#setmydefaultadministratorrights
 * @typedef {Object} SetMyDefaultAdministratorRightsParams
 * @property {ChatAdministratorRights} [rights] A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
 * @property {boolean} [for_channels] Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
 */


/**
 * @typedef {ResponseWithOutData} SetMyDefaultAdministratorRightsResponse
 */


/**
 * @interface SetMyDefaultAdministratorRightsRequest
 * 
 * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.  https://core.telegram.org/bots/api#setmydefaultadministratorrights
 * @function setMyDefaultAdministratorRights
 * @memberof SetMyDefaultAdministratorRightsRequest
 * @param {SetMyDefaultAdministratorRightsParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getmydefaultadministratorrights
 * @typedef {Object} GetMyDefaultAdministratorRightsParams
 * @property {boolean} [for_channels] Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
 */


/**
 * @typedef {ResponseSuccess<ChatAdministratorRights>} GetMyDefaultAdministratorRightsResponse
 */


/**
 * @interface GetMyDefaultAdministratorRightsRequest
 * 
 * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.  https://core.telegram.org/bots/api#getmydefaultadministratorrights
 * @function getMyDefaultAdministratorRights
 * @memberof GetMyDefaultAdministratorRightsRequest
 * @param {GetMyDefaultAdministratorRightsParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getMyDefaultAdministratorRightsWithReturns
 * @memberof GetMyDefaultAdministratorRightsRequest
 * @param {GetMyDefaultAdministratorRightsParams} [params]
 * @returns {Promise<ResponseSuccess<ChatAdministratorRights>>}
 */


/**
 * https://core.telegram.org/bots/api#editmessagetext
 * @typedef {Object} EditMessageTextParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message to edit
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {string} text New text of the message, 1-4096 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the message text. See formatting options for more details.
 * @property {Array<MessageEntity>} [entities] A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
 * @property {LinkPreviewOptions} [link_preview_options] Link preview generation options for the message
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} EditMessageTextResponse
 */


/**
 * @interface EditMessageTextRequest
 * 
 * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.  https://core.telegram.org/bots/api#editmessagetext
 * @function editMessageText
 * @memberof EditMessageTextRequest
 * @param {EditMessageTextParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#editmessagecaption
 * @typedef {Object} EditMessageCaptionParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message to edit
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {string} [caption] New caption of the message, 0-1024 characters after entities parsing
 * @property {string} [parse_mode] Mode for parsing entities in the message caption. See formatting options for more details.
 * @property {Array<MessageEntity>} [caption_entities] A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {boolean} [show_caption_above_media] Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} EditMessageCaptionResponse
 */


/**
 * @interface EditMessageCaptionRequest
 * 
 * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.  https://core.telegram.org/bots/api#editmessagecaption
 * @function editMessageCaption
 * @memberof EditMessageCaptionRequest
 * @param {EditMessageCaptionParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#editmessagemedia
 * @typedef {Object} EditMessageMediaParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message to edit
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {InputMedia} media A JSON-serialized object for a new media content of the message
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} EditMessageMediaResponse
 */


/**
 * @interface EditMessageMediaRequest
 * 
 * Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.  https://core.telegram.org/bots/api#editmessagemedia
 * @function editMessageMedia
 * @memberof EditMessageMediaRequest
 * @param {EditMessageMediaParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#editmessagelivelocation
 * @typedef {Object} EditMessageLiveLocationParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message to edit
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {number} latitude Latitude of new location
 * @property {number} longitude Longitude of new location
 * @property {number} [live_period] New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged
 * @property {number} [horizontal_accuracy] The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {number} [heading] Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {number} [proximity_alert_radius] The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} EditMessageLiveLocationResponse
 */


/**
 * @interface EditMessageLiveLocationRequest
 * 
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.  https://core.telegram.org/bots/api#editmessagelivelocation
 * @function editMessageLiveLocation
 * @memberof EditMessageLiveLocationRequest
 * @param {EditMessageLiveLocationParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#stopmessagelivelocation
 * @typedef {Object} StopMessageLiveLocationParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message with live location to stop
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} StopMessageLiveLocationResponse
 */


/**
 * @interface StopMessageLiveLocationRequest
 * 
 * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.  https://core.telegram.org/bots/api#stopmessagelivelocation
 * @function stopMessageLiveLocation
 * @memberof StopMessageLiveLocationRequest
 * @param {StopMessageLiveLocationParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#editmessagereplymarkup
 * @typedef {Object} EditMessageReplyMarkupParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the message to edit
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard.
 */


/**
 * @typedef {ResponseWithOutData} EditMessageReplyMarkupResponse
 */


/**
 * @interface EditMessageReplyMarkupRequest
 * 
 * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.  https://core.telegram.org/bots/api#editmessagereplymarkup
 * @function editMessageReplyMarkup
 * @memberof EditMessageReplyMarkupRequest
 * @param {EditMessageReplyMarkupParams} [params]
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#stoppoll
 * @typedef {Object} StopPollParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message to be edited was sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} message_id Identifier of the original message with the poll
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for a new message inline keyboard.
 */


/**
 * @typedef {ResponseSuccess<Poll>} StopPollResponse
 */


/**
 * @interface StopPollRequest
 * 
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.  https://core.telegram.org/bots/api#stoppoll
 * @function stopPoll
 * @memberof StopPollRequest
 * @param {StopPollParams} params
 * @returns {Promise<Response>}
 * 
 * @function stopPollWithReturns
 * @memberof StopPollRequest
 * @param {StopPollParams} params
 * @returns {Promise<ResponseSuccess<Poll>>}
 */


/**
 * https://core.telegram.org/bots/api#deletemessage
 * @typedef {Object} DeleteMessageParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} message_id Identifier of the message to delete
 */


/**
 * @typedef {ResponseWithOutData} DeleteMessageResponse
 */


/**
 * @interface DeleteMessageRequest
 * 
 * Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can't be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.  https://core.telegram.org/bots/api#deletemessage
 * @function deleteMessage
 * @memberof DeleteMessageRequest
 * @param {DeleteMessageParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletemessages
 * @typedef {Object} DeleteMessagesParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {Array<number>} message_ids A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
 */


/**
 * @typedef {ResponseWithOutData} DeleteMessagesResponse
 */


/**
 * @interface DeleteMessagesRequest
 * 
 * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.  https://core.telegram.org/bots/api#deletemessages
 * @function deleteMessages
 * @memberof DeleteMessagesRequest
 * @param {DeleteMessagesParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#sendsticker
 * @typedef {Object} SendStickerParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {InputFile | string} sticker Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL.
 * @property {string} [emoji] Emoji associated with the sticker; only for just uploaded stickers
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [reply_markup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
 */


/**
 * @typedef {ResponseWithMessage} SendStickerResponse
 */


/**
 * @interface SendStickerRequest
 * 
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendsticker
 * @function sendSticker
 * @memberof SendStickerRequest
 * @param {SendStickerParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendStickerWithReturns
 * @memberof SendStickerRequest
 * @param {SendStickerParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#getstickerset
 * @typedef {Object} GetStickerSetParams
 * @property {string} name Name of the sticker set
 */


/**
 * @typedef {ResponseSuccess<StickerSet>} GetStickerSetResponse
 */


/**
 * @interface GetStickerSetRequest
 * 
 * Use this method to get a sticker set. On success, a StickerSet object is returned.  https://core.telegram.org/bots/api#getstickerset
 * @function getStickerSet
 * @memberof GetStickerSetRequest
 * @param {GetStickerSetParams} params
 * @returns {Promise<Response>}
 * 
 * @function getStickerSetWithReturns
 * @memberof GetStickerSetRequest
 * @param {GetStickerSetParams} params
 * @returns {Promise<ResponseSuccess<StickerSet>>}
 */


/**
 * https://core.telegram.org/bots/api#getcustomemojistickers
 * @typedef {Object} GetCustomEmojiStickersParams
 * @property {Array<string>} custom_emoji_ids A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
 */


/**
 * @typedef {ResponseSuccess<Array<Sticker>>} GetCustomEmojiStickersResponse
 */


/**
 * @interface GetCustomEmojiStickersRequest
 * 
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.  https://core.telegram.org/bots/api#getcustomemojistickers
 * @function getCustomEmojiStickers
 * @memberof GetCustomEmojiStickersRequest
 * @param {GetCustomEmojiStickersParams} params
 * @returns {Promise<Response>}
 * 
 * @function getCustomEmojiStickersWithReturns
 * @memberof GetCustomEmojiStickersRequest
 * @param {GetCustomEmojiStickersParams} params
 * @returns {Promise<ResponseSuccess<Array<Sticker>>>}
 */


/**
 * https://core.telegram.org/bots/api#uploadstickerfile
 * @typedef {Object} UploadStickerFileParams
 * @property {number} user_id User identifier of sticker file owner
 * @property {InputFile} sticker A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files »
 * @property {string} sticker_format Format of the sticker, must be one of “static”, “animated”, “video”
 */


/**
 * @typedef {ResponseSuccess<File>} UploadStickerFileResponse
 */


/**
 * @interface UploadStickerFileRequest
 * 
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.  https://core.telegram.org/bots/api#uploadstickerfile
 * @function uploadStickerFile
 * @memberof UploadStickerFileRequest
 * @param {UploadStickerFileParams} params
 * @returns {Promise<Response>}
 * 
 * @function uploadStickerFileWithReturns
 * @memberof UploadStickerFileRequest
 * @param {UploadStickerFileParams} params
 * @returns {Promise<ResponseSuccess<File>>}
 */


/**
 * https://core.telegram.org/bots/api#createnewstickerset
 * @typedef {Object} CreateNewStickerSetParams
 * @property {number} user_id User identifier of created sticker set owner
 * @property {string} name Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
 * @property {string} title Sticker set title, 1-64 characters
 * @property {Array<InputSticker>} stickers A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
 * @property {string} [sticker_type] Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
 * @property {boolean} [needs_repainting] Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
 */


/**
 * @typedef {ResponseWithOutData} CreateNewStickerSetResponse
 */


/**
 * @interface CreateNewStickerSetRequest
 * 
 * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.  https://core.telegram.org/bots/api#createnewstickerset
 * @function createNewStickerSet
 * @memberof CreateNewStickerSetRequest
 * @param {CreateNewStickerSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#addstickertoset
 * @typedef {Object} AddStickerToSetParams
 * @property {number} user_id User identifier of sticker set owner
 * @property {string} name Sticker set name
 * @property {InputSticker} sticker A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
 */


/**
 * @typedef {ResponseWithOutData} AddStickerToSetResponse
 */


/**
 * @interface AddStickerToSetRequest
 * 
 * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.  https://core.telegram.org/bots/api#addstickertoset
 * @function addStickerToSet
 * @memberof AddStickerToSetRequest
 * @param {AddStickerToSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickerpositioninset
 * @typedef {Object} SetStickerPositionInSetParams
 * @property {string} sticker File identifier of the sticker
 * @property {number} position New sticker position in the set, zero-based
 */


/**
 * @typedef {ResponseWithOutData} SetStickerPositionInSetResponse
 */


/**
 * @interface SetStickerPositionInSetRequest
 * 
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.  https://core.telegram.org/bots/api#setstickerpositioninset
 * @function setStickerPositionInSet
 * @memberof SetStickerPositionInSetRequest
 * @param {SetStickerPositionInSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletestickerfromset
 * @typedef {Object} DeleteStickerFromSetParams
 * @property {string} sticker File identifier of the sticker
 */


/**
 * @typedef {ResponseWithOutData} DeleteStickerFromSetResponse
 */


/**
 * @interface DeleteStickerFromSetRequest
 * 
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.  https://core.telegram.org/bots/api#deletestickerfromset
 * @function deleteStickerFromSet
 * @memberof DeleteStickerFromSetRequest
 * @param {DeleteStickerFromSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#replacestickerinset
 * @typedef {Object} ReplaceStickerInSetParams
 * @property {number} user_id User identifier of the sticker set owner
 * @property {string} name Sticker set name
 * @property {string} old_sticker File identifier of the replaced sticker
 * @property {InputSticker} sticker A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
 */


/**
 * @typedef {ResponseWithOutData} ReplaceStickerInSetResponse
 */


/**
 * @interface ReplaceStickerInSetRequest
 * 
 * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.  https://core.telegram.org/bots/api#replacestickerinset
 * @function replaceStickerInSet
 * @memberof ReplaceStickerInSetRequest
 * @param {ReplaceStickerInSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickeremojilist
 * @typedef {Object} SetStickerEmojiListParams
 * @property {string} sticker File identifier of the sticker
 * @property {Array<string>} emoji_list A JSON-serialized list of 1-20 emoji associated with the sticker
 */


/**
 * @typedef {ResponseWithOutData} SetStickerEmojiListResponse
 */


/**
 * @interface SetStickerEmojiListRequest
 * 
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.  https://core.telegram.org/bots/api#setstickeremojilist
 * @function setStickerEmojiList
 * @memberof SetStickerEmojiListRequest
 * @param {SetStickerEmojiListParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickerkeywords
 * @typedef {Object} SetStickerKeywordsParams
 * @property {string} sticker File identifier of the sticker
 * @property {Array<string>} [keywords] A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
 */


/**
 * @typedef {ResponseWithOutData} SetStickerKeywordsResponse
 */


/**
 * @interface SetStickerKeywordsRequest
 * 
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.  https://core.telegram.org/bots/api#setstickerkeywords
 * @function setStickerKeywords
 * @memberof SetStickerKeywordsRequest
 * @param {SetStickerKeywordsParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickermaskposition
 * @typedef {Object} SetStickerMaskPositionParams
 * @property {string} sticker File identifier of the sticker
 * @property {MaskPosition} [mask_position] A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
 */


/**
 * @typedef {ResponseWithOutData} SetStickerMaskPositionResponse
 */


/**
 * @interface SetStickerMaskPositionRequest
 * 
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.  https://core.telegram.org/bots/api#setstickermaskposition
 * @function setStickerMaskPosition
 * @memberof SetStickerMaskPositionRequest
 * @param {SetStickerMaskPositionParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickersettitle
 * @typedef {Object} SetStickerSetTitleParams
 * @property {string} name Sticker set name
 * @property {string} title Sticker set title, 1-64 characters
 */


/**
 * @typedef {ResponseWithOutData} SetStickerSetTitleResponse
 */


/**
 * @interface SetStickerSetTitleRequest
 * 
 * Use this method to set the title of a created sticker set. Returns True on success.  https://core.telegram.org/bots/api#setstickersettitle
 * @function setStickerSetTitle
 * @memberof SetStickerSetTitleRequest
 * @param {SetStickerSetTitleParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setstickersetthumbnail
 * @typedef {Object} SetStickerSetThumbnailParams
 * @property {string} name Sticker set name
 * @property {number} user_id User identifier of the sticker set owner
 * @property {InputFile | string} [thumbnail] A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
 * @property {string} format Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video
 */


/**
 * @typedef {ResponseWithOutData} SetStickerSetThumbnailResponse
 */


/**
 * @interface SetStickerSetThumbnailRequest
 * 
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.  https://core.telegram.org/bots/api#setstickersetthumbnail
 * @function setStickerSetThumbnail
 * @memberof SetStickerSetThumbnailRequest
 * @param {SetStickerSetThumbnailParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
 * @typedef {Object} SetCustomEmojiStickerSetThumbnailParams
 * @property {string} name Sticker set name
 * @property {string} [custom_emoji_id] Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
 */


/**
 * @typedef {ResponseWithOutData} SetCustomEmojiStickerSetThumbnailResponse
 */


/**
 * @interface SetCustomEmojiStickerSetThumbnailRequest
 * 
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.  https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
 * @function setCustomEmojiStickerSetThumbnail
 * @memberof SetCustomEmojiStickerSetThumbnailRequest
 * @param {SetCustomEmojiStickerSetThumbnailParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#deletestickerset
 * @typedef {Object} DeleteStickerSetParams
 * @property {string} name Sticker set name
 */


/**
 * @typedef {ResponseWithOutData} DeleteStickerSetResponse
 */


/**
 * @interface DeleteStickerSetRequest
 * 
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.  https://core.telegram.org/bots/api#deletestickerset
 * @function deleteStickerSet
 * @memberof DeleteStickerSetRequest
 * @param {DeleteStickerSetParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#answerinlinequery
 * @typedef {Object} AnswerInlineQueryParams
 * @property {string} inline_query_id Unique identifier for the answered query
 * @property {Array<InlineQueryResult>} results A JSON-serialized array of results for the inline query
 * @property {number} [cache_time] The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
 * @property {boolean} [is_personal] Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
 * @property {string} [next_offset] Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
 * @property {InlineQueryResultsButton} [button] A JSON-serialized object describing a button to be shown above inline query results
 */


/**
 * @typedef {ResponseWithOutData} AnswerInlineQueryResponse
 */


/**
 * @interface AnswerInlineQueryRequest
 * 
 * Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.  https://core.telegram.org/bots/api#answerinlinequery
 * @function answerInlineQuery
 * @memberof AnswerInlineQueryRequest
 * @param {AnswerInlineQueryParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#answerwebappquery
 * @typedef {Object} AnswerWebAppQueryParams
 * @property {string} web_app_query_id Unique identifier for the query to be answered
 * @property {InlineQueryResult} result A JSON-serialized object describing the message to be sent
 */


/**
 * @typedef {ResponseSuccess<SentWebAppMessage>} AnswerWebAppQueryResponse
 */


/**
 * @interface AnswerWebAppQueryRequest
 * 
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.  https://core.telegram.org/bots/api#answerwebappquery
 * @function answerWebAppQuery
 * @memberof AnswerWebAppQueryRequest
 * @param {AnswerWebAppQueryParams} params
 * @returns {Promise<Response>}
 * 
 * @function answerWebAppQueryWithReturns
 * @memberof AnswerWebAppQueryRequest
 * @param {AnswerWebAppQueryParams} params
 * @returns {Promise<ResponseSuccess<SentWebAppMessage>>}
 */


/**
 * https://core.telegram.org/bots/api#sendinvoice
 * @typedef {Object} SendInvoiceParams
 * @property {number | string} chat_id Unique identifier for the target chat or username of the target channel (in the format @channelusername)
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} title Product name, 1-32 characters
 * @property {string} description Product description, 1-255 characters
 * @property {string} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
 * @property {string} [provider_token] Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
 * @property {string} currency Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
 * @property {Array<LabeledPrice>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
 * @property {number} [max_tip_amount] The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
 * @property {Array<number>} [suggested_tip_amounts] A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @property {string} [start_parameter] Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
 * @property {string} [provider_data] JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
 * @property {string} [photo_url] URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
 * @property {number} [photo_size] Photo size in bytes
 * @property {number} [photo_width] Photo width
 * @property {number} [photo_height] Photo height
 * @property {boolean} [need_name] Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_phone_number] Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_email] Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_shipping_address] Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_phone_number_to_provider] Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_email_to_provider] Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [is_flexible] Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
 */


/**
 * @typedef {ResponseWithMessage} SendInvoiceResponse
 */


/**
 * @interface SendInvoiceRequest
 * 
 * Use this method to send invoices. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendinvoice
 * @function sendInvoice
 * @memberof SendInvoiceRequest
 * @param {SendInvoiceParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendInvoiceWithReturns
 * @memberof SendInvoiceRequest
 * @param {SendInvoiceParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#createinvoicelink
 * @typedef {Object} CreateInvoiceLinkParams
 * @property {string} title Product name, 1-32 characters
 * @property {string} description Product description, 1-255 characters
 * @property {string} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
 * @property {string} [provider_token] Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
 * @property {string} currency Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
 * @property {Array<LabeledPrice>} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
 * @property {number} [max_tip_amount] The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
 * @property {Array<number>} [suggested_tip_amounts] A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @property {string} [provider_data] JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
 * @property {string} [photo_url] URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
 * @property {number} [photo_size] Photo size in bytes
 * @property {number} [photo_width] Photo width
 * @property {number} [photo_height] Photo height
 * @property {boolean} [need_name] Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_phone_number] Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_email] Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [need_shipping_address] Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_phone_number_to_provider] Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [send_email_to_provider] Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
 * @property {boolean} [is_flexible] Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
 */


/**
 * @typedef {ResponseSuccess<string>} CreateInvoiceLinkResponse
 */


/**
 * @interface CreateInvoiceLinkRequest
 * 
 * Use this method to create a link for an invoice. Returns the created invoice link as String on success.  https://core.telegram.org/bots/api#createinvoicelink
 * @function createInvoiceLink
 * @memberof CreateInvoiceLinkRequest
 * @param {CreateInvoiceLinkParams} params
 * @returns {Promise<Response>}
 * 
 * @function createInvoiceLinkWithReturns
 * @memberof CreateInvoiceLinkRequest
 * @param {CreateInvoiceLinkParams} params
 * @returns {Promise<ResponseSuccess<string>>}
 */


/**
 * https://core.telegram.org/bots/api#answershippingquery
 * @typedef {Object} AnswerShippingQueryParams
 * @property {string} shipping_query_id Unique identifier for the query to be answered
 * @property {boolean} ok Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
 * @property {Array<ShippingOption>} [shipping_options] Required if ok is True. A JSON-serialized array of available shipping options.
 * @property {string} [error_message] Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
 */


/**
 * @typedef {ResponseWithOutData} AnswerShippingQueryResponse
 */


/**
 * @interface AnswerShippingQueryRequest
 * 
 * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.  https://core.telegram.org/bots/api#answershippingquery
 * @function answerShippingQuery
 * @memberof AnswerShippingQueryRequest
 * @param {AnswerShippingQueryParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#answerprecheckoutquery
 * @typedef {Object} AnswerPreCheckoutQueryParams
 * @property {string} pre_checkout_query_id Unique identifier for the query to be answered
 * @property {boolean} ok Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
 * @property {string} [error_message] Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
 */


/**
 * @typedef {ResponseWithOutData} AnswerPreCheckoutQueryResponse
 */


/**
 * @interface AnswerPreCheckoutQueryRequest
 * 
 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.  https://core.telegram.org/bots/api#answerprecheckoutquery
 * @function answerPreCheckoutQuery
 * @memberof AnswerPreCheckoutQueryRequest
 * @param {AnswerPreCheckoutQueryParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getstartransactions
 * @typedef {Object} GetStarTransactionsParams
 * @property {number} [offset] Number of transactions to skip in the response
 * @property {number} [limit] The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
 */


/**
 * @typedef {ResponseSuccess<StarTransactions>} GetStarTransactionsResponse
 */


/**
 * @interface GetStarTransactionsRequest
 * 
 * Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.  https://core.telegram.org/bots/api#getstartransactions
 * @function getStarTransactions
 * @memberof GetStarTransactionsRequest
 * @param {GetStarTransactionsParams} [params]
 * @returns {Promise<Response>}
 * 
 * @function getStarTransactionsWithReturns
 * @memberof GetStarTransactionsRequest
 * @param {GetStarTransactionsParams} [params]
 * @returns {Promise<ResponseSuccess<StarTransactions>>}
 */


/**
 * https://core.telegram.org/bots/api#refundstarpayment
 * @typedef {Object} RefundStarPaymentParams
 * @property {number} user_id Identifier of the user whose payment will be refunded
 * @property {string} telegram_payment_charge_id Telegram payment identifier
 */


/**
 * @typedef {ResponseWithOutData} RefundStarPaymentResponse
 */


/**
 * @interface RefundStarPaymentRequest
 * 
 * Refunds a successful payment in Telegram Stars. Returns True on success.  https://core.telegram.org/bots/api#refundstarpayment
 * @function refundStarPayment
 * @memberof RefundStarPaymentRequest
 * @param {RefundStarPaymentParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#setpassportdataerrors
 * @typedef {Object} SetPassportDataErrorsParams
 * @property {number} user_id User identifier
 * @property {Array<PassportElementError>} errors A JSON-serialized array describing the errors
 */


/**
 * @typedef {ResponseWithOutData} SetPassportDataErrorsResponse
 */


/**
 * @interface SetPassportDataErrorsRequest
 * 
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.  https://core.telegram.org/bots/api#setpassportdataerrors
 * @function setPassportDataErrors
 * @memberof SetPassportDataErrorsRequest
 * @param {SetPassportDataErrorsParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#sendgame
 * @typedef {Object} SendGameParams
 * @property {string} [business_connection_id] Unique identifier of the business connection on behalf of which the message will be sent
 * @property {number} chat_id Unique identifier for the target chat
 * @property {number} [message_thread_id] Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
 * @property {string} game_short_name Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
 * @property {boolean} [disable_notification] Sends the message silently. Users will receive a notification with no sound.
 * @property {boolean} [protect_content] Protects the contents of the sent message from forwarding and saving
 * @property {boolean} [allow_paid_broadcast] Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
 * @property {string} [message_effect_id] Unique identifier of the message effect to be added to the message; for private chats only
 * @property {ReplyParameters} [reply_parameters] Description of the message to reply to
 * @property {InlineKeyboardMarkup} [reply_markup] A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
 */


/**
 * @typedef {ResponseWithMessage} SendGameResponse
 */


/**
 * @interface SendGameRequest
 * 
 * Use this method to send a game. On success, the sent Message is returned.  https://core.telegram.org/bots/api#sendgame
 * @function sendGame
 * @memberof SendGameRequest
 * @param {SendGameParams} params
 * @returns {Promise<Response>}
 * 
 * @function sendGameWithReturns
 * @memberof SendGameRequest
 * @param {SendGameParams} params
 * @returns {Promise<ResponseWithMessage>}
 */


/**
 * https://core.telegram.org/bots/api#setgamescore
 * @typedef {Object} SetGameScoreParams
 * @property {number} user_id User identifier
 * @property {number} score New score, must be non-negative
 * @property {boolean} [force] Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
 * @property {boolean} [disable_edit_message] Pass True if the game message should not be automatically edited to include the current scoreboard
 * @property {number} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the sent message
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 */


/**
 * @typedef {ResponseWithOutData} SetGameScoreResponse
 */


/**
 * @interface SetGameScoreRequest
 * 
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.  https://core.telegram.org/bots/api#setgamescore
 * @function setGameScore
 * @memberof SetGameScoreRequest
 * @param {SetGameScoreParams} params
 * @returns {Promise<Response>}
 */


/**
 * https://core.telegram.org/bots/api#getgamehighscores
 * @typedef {Object} GetGameHighScoresParams
 * @property {number} user_id Target user id
 * @property {number} [chat_id] Required if inline_message_id is not specified. Unique identifier for the target chat
 * @property {number} [message_id] Required if inline_message_id is not specified. Identifier of the sent message
 * @property {string} [inline_message_id] Required if chat_id and message_id are not specified. Identifier of the inline message
 */


/**
 * @typedef {ResponseSuccess<Array<GameHighScore>>} GetGameHighScoresResponse
 */


/**
 * @interface GetGameHighScoresRequest
 * 
 * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.  https://core.telegram.org/bots/api#getgamehighscores
 * @function getGameHighScores
 * @memberof GetGameHighScoresRequest
 * @param {GetGameHighScoresParams} params
 * @returns {Promise<Response>}
 * 
 * @function getGameHighScoresWithReturns
 * @memberof GetGameHighScoresRequest
 * @param {GetGameHighScoresParams} params
 * @returns {Promise<ResponseSuccess<Array<GameHighScore>>>}
 */


/**
 * @typedef {('getUpdates' | 'setWebhook' | 'deleteWebhook' | 'getWebhookInfo' | 'getMe' | 'logOut' | 'close' | 'sendMessage' | 'forwardMessage' | 'forwardMessages' | 'copyMessage' | 'copyMessages' | 'sendPhoto' | 'sendAudio' | 'sendDocument' | 'sendVideo' | 'sendAnimation' | 'sendVoice' | 'sendVideoNote' | 'sendPaidMedia' | 'sendMediaGroup' | 'sendLocation' | 'sendVenue' | 'sendContact' | 'sendPoll' | 'sendDice' | 'sendChatAction' | 'setMessageReaction' | 'getUserProfilePhotos' | 'getFile' | 'banChatMember' | 'unbanChatMember' | 'restrictChatMember' | 'promoteChatMember' | 'setChatAdministratorCustomTitle' | 'banChatSenderChat' | 'unbanChatSenderChat' | 'setChatPermissions' | 'exportChatInviteLink' | 'createChatInviteLink' | 'editChatInviteLink' | 'createChatSubscriptionInviteLink' | 'editChatSubscriptionInviteLink' | 'revokeChatInviteLink' | 'approveChatJoinRequest' | 'declineChatJoinRequest' | 'setChatPhoto' | 'deleteChatPhoto' | 'setChatTitle' | 'setChatDescription' | 'pinChatMessage' | 'unpinChatMessage' | 'unpinAllChatMessages' | 'leaveChat' | 'getChat' | 'getChatAdministrators' | 'getChatMemberCount' | 'getChatMember' | 'setChatStickerSet' | 'deleteChatStickerSet' | 'getForumTopicIconStickers' | 'createForumTopic' | 'editForumTopic' | 'closeForumTopic' | 'reopenForumTopic' | 'deleteForumTopic' | 'unpinAllForumTopicMessages' | 'editGeneralForumTopic' | 'closeGeneralForumTopic' | 'reopenGeneralForumTopic' | 'hideGeneralForumTopic' | 'unhideGeneralForumTopic' | 'unpinAllGeneralForumTopicMessages' | 'answerCallbackQuery' | 'getUserChatBoosts' | 'getBusinessConnection' | 'setMyCommands' | 'deleteMyCommands' | 'getMyCommands' | 'setMyName' | 'getMyName' | 'setMyDescription' | 'getMyDescription' | 'setMyShortDescription' | 'getMyShortDescription' | 'setChatMenuButton' | 'getChatMenuButton' | 'setMyDefaultAdministratorRights' | 'getMyDefaultAdministratorRights' | 'editMessageText' | 'editMessageCaption' | 'editMessageMedia' | 'editMessageLiveLocation' | 'stopMessageLiveLocation' | 'editMessageReplyMarkup' | 'stopPoll' | 'deleteMessage' | 'deleteMessages' | 'sendSticker' | 'getStickerSet' | 'getCustomEmojiStickers' | 'uploadStickerFile' | 'createNewStickerSet' | 'addStickerToSet' | 'setStickerPositionInSet' | 'deleteStickerFromSet' | 'replaceStickerInSet' | 'setStickerEmojiList' | 'setStickerKeywords' | 'setStickerMaskPosition' | 'setStickerSetTitle' | 'setStickerSetThumbnail' | 'setCustomEmojiStickerSetThumbnail' | 'deleteStickerSet' | 'answerInlineQuery' | 'answerWebAppQuery' | 'sendInvoice' | 'createInvoiceLink' | 'answerShippingQuery' | 'answerPreCheckoutQuery' | 'getStarTransactions' | 'refundStarPayment' | 'setPassportDataErrors' | 'sendGame' | 'setGameScore' | 'getGameHighScores')} BotMethod
 */


/**
 * @typedef {GetUpdatesRequest & SetWebhookRequest & DeleteWebhookRequest & GetWebhookInfoRequest & GetMeRequest & LogOutRequest & CloseRequest & SendMessageRequest & ForwardMessageRequest & ForwardMessagesRequest & CopyMessageRequest & CopyMessagesRequest & SendPhotoRequest & SendAudioRequest & SendDocumentRequest & SendVideoRequest & SendAnimationRequest & SendVoiceRequest & SendVideoNoteRequest & SendPaidMediaRequest & SendMediaGroupRequest & SendLocationRequest & SendVenueRequest & SendContactRequest & SendPollRequest & SendDiceRequest & SendChatActionRequest & SetMessageReactionRequest & GetUserProfilePhotosRequest & GetFileRequest & BanChatMemberRequest & UnbanChatMemberRequest & RestrictChatMemberRequest & PromoteChatMemberRequest & SetChatAdministratorCustomTitleRequest & BanChatSenderChatRequest & UnbanChatSenderChatRequest & SetChatPermissionsRequest & ExportChatInviteLinkRequest & CreateChatInviteLinkRequest & EditChatInviteLinkRequest & CreateChatSubscriptionInviteLinkRequest & EditChatSubscriptionInviteLinkRequest & RevokeChatInviteLinkRequest & ApproveChatJoinRequestRequest & DeclineChatJoinRequestRequest & SetChatPhotoRequest & DeleteChatPhotoRequest & SetChatTitleRequest & SetChatDescriptionRequest & PinChatMessageRequest & UnpinChatMessageRequest & UnpinAllChatMessagesRequest & LeaveChatRequest & GetChatRequest & GetChatAdministratorsRequest & GetChatMemberCountRequest & GetChatMemberRequest & SetChatStickerSetRequest & DeleteChatStickerSetRequest & GetForumTopicIconStickersRequest & CreateForumTopicRequest & EditForumTopicRequest & CloseForumTopicRequest & ReopenForumTopicRequest & DeleteForumTopicRequest & UnpinAllForumTopicMessagesRequest & EditGeneralForumTopicRequest & CloseGeneralForumTopicRequest & ReopenGeneralForumTopicRequest & HideGeneralForumTopicRequest & UnhideGeneralForumTopicRequest & UnpinAllGeneralForumTopicMessagesRequest & AnswerCallbackQueryRequest & GetUserChatBoostsRequest & GetBusinessConnectionRequest & SetMyCommandsRequest & DeleteMyCommandsRequest & GetMyCommandsRequest & SetMyNameRequest & GetMyNameRequest & SetMyDescriptionRequest & GetMyDescriptionRequest & SetMyShortDescriptionRequest & GetMyShortDescriptionRequest & SetChatMenuButtonRequest & GetChatMenuButtonRequest & SetMyDefaultAdministratorRightsRequest & GetMyDefaultAdministratorRightsRequest & EditMessageTextRequest & EditMessageCaptionRequest & EditMessageMediaRequest & EditMessageLiveLocationRequest & StopMessageLiveLocationRequest & EditMessageReplyMarkupRequest & StopPollRequest & DeleteMessageRequest & DeleteMessagesRequest & SendStickerRequest & GetStickerSetRequest & GetCustomEmojiStickersRequest & UploadStickerFileRequest & CreateNewStickerSetRequest & AddStickerToSetRequest & SetStickerPositionInSetRequest & DeleteStickerFromSetRequest & ReplaceStickerInSetRequest & SetStickerEmojiListRequest & SetStickerKeywordsRequest & SetStickerMaskPositionRequest & SetStickerSetTitleRequest & SetStickerSetThumbnailRequest & SetCustomEmojiStickerSetThumbnailRequest & DeleteStickerSetRequest & AnswerInlineQueryRequest & AnswerWebAppQueryRequest & SendInvoiceRequest & CreateInvoiceLinkRequest & AnswerShippingQueryRequest & AnswerPreCheckoutQueryRequest & GetStarTransactionsRequest & RefundStarPaymentRequest & SetPassportDataErrorsRequest & SendGameRequest & SetGameScoreRequest & GetGameHighScoresRequest} AllBotMethods
 */