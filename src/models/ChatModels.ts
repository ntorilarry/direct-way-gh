export interface IChatMessage {
  sender: string;
  receiver: string;
  message: string;
}

export default interface IChat {
  id: string;
  message: string;
  date: string;
  messageId: string;
  sender: string;
  receiver: string;
  status: string;
  deleted: boolean;
}
