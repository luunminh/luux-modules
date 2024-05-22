export interface IUploadAttachmentResponse {
  original_filename: string;
  url: string;
  secure_url: string;
}

export enum UploadFileTypeEnum {
  USER_AVATAR = 'USER_AVATAR',
  THUMBNAIL = 'THUMBNAIL',
  ATTACHMENTS = 'ATTACHMENTS',
}
export interface IUploadAttachmentPayload {
  file: File;
  type: UploadFileTypeEnum;
}
