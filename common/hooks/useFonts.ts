import { IFont } from '@core/queries';
import { useEffect, useState } from 'react';

function useFonts(fonts: IFont[], isEnabled = true) {
  const [fontFaces] = useState(
    fonts.map((font) => {
      return new FontFace(
        font.family,
        `url(${
          font.files.regular ||
          font.files[300] ||
          font.files[500] ||
          font.files[600] ||
          font.files[700]
        }) format('woff2')`,
      );
    }),
  );

  const createFontFace = (font: IFont) => {
    return new FontFace(
      font.family,
      `url(${
        font.files.regular ||
        font.files[300] ||
        font.files[500] ||
        font.files[600] ||
        font.files[700]
      }) format('woff2')`,
    );
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

  return { loadFontFace, createFontFace };
}

export default useFonts;
