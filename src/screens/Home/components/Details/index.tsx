import React from 'react';

import {
  Container, Title, Card, KeyValueView, Key, Value, WindDirectionIcon,
} from './styles';
import { IProps } from './types';

const Details: React.FC<IProps> = ({ keyValueList }) => (
  <Container>
    <Title>
      Informações adicionais
    </Title>
    <Card>
      {keyValueList.map(({ key, value }) => (
        <KeyValueView key={key}>
          <Key>
            {key}
          </Key>
          {key.toLowerCase() === 'dir. vento' ? (
            <WindDirectionIcon
              // -90 because the icon is already in 90deg
              deg={parseInt(value, 10) - 90}
              name="wind"
            />
          ) : (
            <Value>
              {value}
            </Value>
          )}
        </KeyValueView>
      ))}
    </Card>
  </Container>
);

export default Details;
