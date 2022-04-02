declare module '@oguzhnatly/react-native-image-manipulator' {
    import React from 'react';
    import RNImageManipulator from './index';
  
    export type ImageResult = {
      uri: string;
      width: number;
      height: number;
      base64?: string;
    };
  
    export function manipulate(
      uri: string,
      actions: Array<{
        resize?: {width?: number; height?: number};
        rotate?: number;
        flip?: {vertical?: boolean; horizontal?: boolean};
        crop?: {
          originX?: number;
          originY?: number;
          width?: number;
          height?: number;
        };
      }>,
      saveOptions: {
        compress?: number;
        format?: 'jpeg' | 'png';
        base64?: boolean;
      },
      callback: (uri: string) => void,
    ): Promise<ImageResult>;
  
    export default RNImageManipulator;
  }
  