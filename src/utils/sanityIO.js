import React from 'react';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = require('@sanity/client');
export const client = sanityClient({
  projectId: '3ptjvz2p',
  dataset: 'production',
  token: '',
  useCdn: false,
});

export const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const builder = imageUrlBuilder(client);

export const urlFor = source => {
  return builder.image(source);
};
