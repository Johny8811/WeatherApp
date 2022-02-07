import React from "react";

type IconType = '01d' | '02d' | '03d' | '04d' | '09d' | '10d' | '11d' | '13d' | '50d'
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
