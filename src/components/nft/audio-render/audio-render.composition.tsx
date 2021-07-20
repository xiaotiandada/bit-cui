import React from 'react';
import { AudioRender } from './audio-render';

export const BasicAudioRender = () => (
  <div style={{ padding: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 20 }}>
    <AudioRender src="https://stream.mux.com/Keq1IO7KZbkkOxaM00pHQvvR401JOjy5tMeXS1ZJCCJ2o/audio.m4a" mode="simple" />
    <AudioRender src="https://stream.mux.com/Keq1IO7KZbkkOxaM00pHQvvR401JOjy5tMeXS1ZJCCJ2o/audio.m4a" mode="all" />
  </div>
);
