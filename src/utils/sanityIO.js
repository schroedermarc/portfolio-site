import React from 'react';

const sanityClient = require('@sanity/client');
export const client = sanityClient({
  projectId: '3ptjvz2p',
  dataset: 'production',
  token: '',
  useCdn: true,
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
