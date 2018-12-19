import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ShanoComponent = (props) => (
  <div>
    <Text tag="h2" className="display-4" field={props.fields.heading} />
    <RichText className="contentDescription" field={props.fields.content} />
  </div>
);

export default ShanoComponent;
