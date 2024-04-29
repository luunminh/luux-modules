import React from 'react';

type Props = {
  content: string;
};

const HtmlConverter = ({ content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlConverter;
