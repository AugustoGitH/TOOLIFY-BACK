import sharp from 'sharp';
import { ImageConverterError } from './errors';
import { ImageConverterProps } from './types';

export const ImageConverterToBuffer = async ({
  file,
  format,
}: ImageConverterProps) => {
  try {
    return sharp(file).toFormat(format).toBuffer();
  } catch (error) {
    console.error(error);
    throw new ImageConverterError();
  }
};
