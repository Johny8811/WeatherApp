import React from "react";

import { IconType } from '../../state/weather/types'

type Props = {
  iconType: IconType;
  description: string;
}

export const WeatherIcon = ({ iconType, description }: Props) => {
  const iconURL = `https://openweathermap.org/img/wn/${iconType}@2x.png`;

  return (
    <img src={iconURL} alt={description} width="100" height="100" />
  )
}
