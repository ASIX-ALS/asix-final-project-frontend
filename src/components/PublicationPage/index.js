import React from 'react';
import { FieldGroup, Button } from 'react-bootstrap';

import styles from './styles.scss';

const PublicationPage = () => (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Button>
      Submit
    </Button>
  </form>
);

export default PublicationPage;
