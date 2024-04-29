import { IFont } from '@core/queries';
import { useEffect, useState } from 'react';

function useFonts(fonts: IFont[]) {
  const [fontFaces] = useState(
    fonts.map((font) => {
      return new FontFace(font.family, `url(${font.files['regular']}) format('woff2')`);
    }),
  );

  async function loadFontFace(fontFace: FontFace) {
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
  }

  useEffect(() => {
    fontFaces.forEach((fontFace) => {
      loadFontFace(fontFace);
    });
  }, [fontFaces]);
}

export default useFonts;
