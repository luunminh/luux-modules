export interface IUploadAttachmentResponse {
  original_filename: string;
  url: string;
  secure_url: string;
}

export interface IUploadAttachmentPayload {
  file: File;
}
