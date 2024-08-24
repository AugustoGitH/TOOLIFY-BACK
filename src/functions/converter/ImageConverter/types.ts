import sharp from 'sharp';

export type ImageFormater = keyof Pick<
  sharp.FormatEnum,
  'jpeg' | 'png' | 'webp'
>;

export type ImageConverterProps = {
  file: Buffer | string;
  format: ImageFormater;
};
