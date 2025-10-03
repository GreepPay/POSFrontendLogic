// Message types for chat functionality

export interface MessageAction {
    label: string;
    message: string;
    type: string;
    value: string;
    handler?: () => void;
}

export interface MessageInfo {
    id: string;
    type: string;
    text_content: string;
    user_uuid: string;
    user_name: string;
    info_icon: string;
    actions: MessageAction[];
    orderSummary: any;
    isOrderSummary: boolean;
    timestamp?: Date;
    metadata?: any;
}

export interface ConversationMessage {
    id: string;
    content: string;
    text_content?: string;
    user_uuid?: string;
    user_name?: string;
    sender?: {
        uuid: string;
        first_name: string;
        last_name: string;
    };
    metadata?: string;
    created_at: string;
    updated_at: string;
}

export interface User {
    uuid: string;
    first_name: string;
    last_name: string;
    email?: string;
    phone?: string;
}