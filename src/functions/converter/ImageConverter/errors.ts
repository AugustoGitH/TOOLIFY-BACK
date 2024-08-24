export class ImageConverterError extends Error {
  static type = 'IMAGE_CONVERTER_ERROR';
  constructor() {
    super(ImageConverterError.type);
  }
}
