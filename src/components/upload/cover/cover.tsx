import React, { ReactNode, useState, useMemo, useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { fileUrl } from "./file";
import styles from "./cover.module.scss";

export type CoverProps = {};

export function Cover() {
  const [coverFile, setCoverFile] = useState<FileWithPath>();
  const coverUrl = useMemo(() => fileUrl(coverFile), [coverFile]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      console.log("acceptedFiles", acceptedFiles);

      if (acceptedFiles.length) {
        setCoverFile(acceptedFiles[0]);
      }
    },
    [setCoverFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  return (
    <section>
      <section {...getRootProps()} className={styles.wrapper_drap}>
        <input {...getInputProps()} />

        {coverUrl ? (
          <>
            <section className={styles.wrapper_drap_container}>
              <img
                src={coverUrl}
                alt="Cover"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </section>
            <section className={styles.wrapper_drap_container}>
              <section className={styles.wrapper_drap_container_backdrop}>
                <button className={styles.button} type="button">
                  Replace Cover Image
                </button>
                <button
                  className={styles.button_remove_image}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCoverFile(undefined);
                  }}
                >
                  Remove Image
                </button>
              </section>
            </section>
          </>
        ) : (
          <section className={styles.wrapper_drap_container}>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <button className={styles.button} type="button">
                Upload Cover Image
              </button>
            )}
          </section>
        )}
      </section>
    </section>
  );
}
