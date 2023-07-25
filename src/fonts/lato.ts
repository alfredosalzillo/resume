import {Font} from "@react-pdf/renderer";

export const registerFonts = (baseUrl: string = '.') => {
  Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/',
  });
  Font
    // @ts-ignore
    .register({
      family: 'Lato',
      fonts: [
        {
          fontStyle: 'normal',
          fontWeight: 'thin',
          src: `${baseUrl}/fonts/Lato/Lato-Thin.ttf`,
        },
        {
          fontStyle: 'italic',
          fontWeight: 'thin',
          src: `${baseUrl}/fonts/Lato/Lato-ThinItalic.ttf`,
        },
        {
          fontStyle: 'normal',
          fontWeight: 'light',
          src: `${baseUrl}/fonts/Lato/Lato-Light.ttf`,
        },
        {
          fontStyle: 'italic',
          fontWeight: 'light',
          src: `${baseUrl}/fonts/Lato/Lato-LightItalic.ttf`,
        },
        {
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `${baseUrl}/fonts/Lato/Lato-Regular.ttf`,
        },
        {
          fontStyle: 'italic',
          fontWeight: 'normal',
          src: `${baseUrl}/fonts/Lato/Lato-Italic.ttf`,
        },
        {
          fontStyle: 'normal',
          fontWeight: 'bold',
          src: `${baseUrl}/fonts/Lato/Lato-Bold.ttf`,
        },
        {
          fontStyle: 'italic',
          fontWeight: 'bold',
          src: `${baseUrl}/fonts/Lato/Lato-BoldItalic.ttf`,
        },
        {
          fontStyle: 'normal',
          fontWeight: 'black',
          src: `${baseUrl}/fonts/Lato/Lato-Black.ttf`,
        },
        {
          fontStyle: 'italic',
          fontWeight: 'black',
          src: `${baseUrl}/fonts/Lato/Lato-BlackItalic.ttf`,
        },
      ]
    });
}