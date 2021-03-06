import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getFormattedDegrees } from '~/core/utils/helperFunctions';
import { AppStateType } from '~/stores';
import { IKeyValue } from '../Details/types';
import Details from '../Details';

const BottomSection = () => {
  const { data: weatherData } = useSelector((state: AppStateType) => state.weather);

  const detailsKeyValue = useMemo(() => {
    let keyValueList: IKeyValue[] = [];
    if (weatherData) {
      const { main, wind } = weatherData;
      const {
        temp_min, temp_max, pressure, humidity,
      } = main;
      const { deg, speed } = wind;

      keyValueList = [
        { key: 'mínima', value: `${getFormattedDegrees(temp_min)} ºC` },
        { key: 'máxima', value: `${getFormattedDegrees(temp_max)} ºC` },

        { key: 'pressão', value: `${pressure}hPa` },
        { key: 'umidade', value: `${humidity}%` },

        { key: 'vel. vento', value: `${speed}km/h` },
        { key: 'dir. vento', value: `${deg}` },

      ];
    }
    return keyValueList;
  }, [weatherData]);

  return (
    <View>
      <Details
        keyValueList={detailsKeyValue}
      />
    </View>
  );
};

export default BottomSection;
