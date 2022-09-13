import React from 'react';
import WebView from 'react-native-x5-webview';

export default function X5() {
  return <WebView
  source={{ uri: 'https://debugtbs.qq.com' }}
  style={{ width: '100%', height: '100%' }}
/>
}
