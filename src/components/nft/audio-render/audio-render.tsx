import React, { useState, useEffect } from "react";
import { useUnmount } from "ahooks";
import { Spin, message } from "antd";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import WaveSurfer from "wavesurfer.js";
import styles from "./audio-render.module.scss";

export type AudioRenderProps = {
  /**
   * a text to be rendered in the component.
   */
  src: string;
  /**
   * simple: 普通播放，all: 支持拖动进度条
   */
  mode: "simple" | "all";
};

export function AudioRender({ src, mode }: AudioRenderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [waveform, setWaveform] = useState<React.ReactNode>(null);
  const [wavesurferApi, setWavesurferApi] = useState<any>(null);
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // process.browser next
    if (WaveSurfer && waveform && src) {
      var wavesurfer = WaveSurfer.create({
        container: waveform,
        waveColor: "#b2b2b2",
        progressColor: "#000",
        interact: mode === "all",
        height: 80,
        barWidth: 2,
        barGap: 3,
        cursorColor: "transparent",
      } as any);

      wavesurfer.load(src);

      wavesurfer.on("ready", () => {
        // wavesurfer.play();
        setWavesurferApi(wavesurfer);
        setLoading(false);
      });
      wavesurfer.on("error", (e: string) => {
        message.error(`加载失败${e}`);
      });
    }
  }, [waveform, mode, src]);

  // 销毁
  useUnmount(() => {
    wavesurferApi && wavesurferApi.destroy();
  });

  // 播放切换
  const toggle = () => {
    if (status) {
      wavesurferApi.play();
    } else {
      wavesurferApi.pause();
    }
    setStatus(!status);
  };

  return (
    <div className={styles.wrapper}>
      <Spin spinning={loading}>
        <div ref={(e) => setWaveform(e)}></div>
        {!loading ? (
          <button onClick={() => toggle()} className={styles.wavesurferButton}>
            {status ? <CaretRightOutlined /> : <PauseOutlined />}
          </button>
        ) : null}
      </Spin>
    </div>
  );
}
