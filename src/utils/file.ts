import { FileWithPath } from "react-dropzone";

/**
 * file url
 * @param file
 * @returns
 */
export const fileUrl = (file: File | FileWithPath | undefined): string => {
  if (file) {
    const URL = window.URL || window.webkitURL;
    return URL.createObjectURL(file);
  } else {
    return "";
  }
};
