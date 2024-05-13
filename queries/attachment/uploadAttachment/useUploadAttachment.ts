import { responseWrapper } from '@core/common/services/http';
import { CommonApi } from '@core/queries';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { IUploadAttachmentPayload, IUploadAttachmentResponse } from './useUploadAttachment.types';

export function useUploadAttachment(
  options?: UseMutationOptions<IUploadAttachmentResponse, Error, IUploadAttachmentPayload>,
) {
  const {
    mutate: onUploadAttachment,
    isLoading,
    isSuccess,
  } = useMutation<IUploadAttachmentResponse, Error, IUploadAttachmentPayload>({
    mutationFn: (payload: IUploadAttachmentPayload) =>
      responseWrapper(CommonApi.uploadAttachment, [payload]),
    ...options,
  });

  return {
    onUploadAttachment,
    isLoading,
    isSuccess,
  };
}
