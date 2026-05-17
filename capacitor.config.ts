import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tv.mezcan.clip',
  appName: 'MezcanClip',
  webDir: 'dist',
  server: {
    url: 'https://iptv-player-plus.replit.app/mezcan-clip',
    cleartext: false,
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#0E1117',
    allowMixedContent: false
  }
};

export default config;
