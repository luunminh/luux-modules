import { IFont } from '@core/queries';
import _ from 'lodash';
import { useEffect, useState } from 'react';

function useFonts(fonts: IFont[], isEnabled = true) {
  const [fontFaces] = useState(
    fonts.map((font) => {
      const order = ['regular', '300', '500', '700'];
      const fontUrls = _.sortBy(font.fontUrl, (f) => {
        const index = order.indexOf(f.type);
        return index === -1 ? Infinity : index;
      });

      return new FontFace(font.name, `url(${fontUrls[0].url}) format('woff2')`);
    }),
  );

  const createFontFaces = (font: IFont) => {
    const fontFaces = font.fontUrl.map(({ type: weight, url }) => {
      return new FontFace(
        `${font.name}`,
        //@ts-ignore
        `url(${url}) format('woff2')`,
      );
    });

    return fontFaces;
  };

  async function loadFontFace(fontFace: FontFace) {
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
  }

  useEffect(() => {
    if (isEnabled) {
      fontFaces.forEach((fontFace) => {
        loadFontFace(fontFace);
      });
    }
  }, [fontFaces, isEnabled]);

  return { loadFontFace, createFontFaces };
}

export default useFonts;
