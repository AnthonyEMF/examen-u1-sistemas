import { useState } from 'react';
import { Colors } from '@/constants/Colors';

export const useColors = () => {
  const [temperature, setTemperature] = useState(20);
  const [backgroundColor, setBackgroundColor] = useState('#202020');

  // funcion para obtener el color segun el valor de temperature
  const getColor = () => {
    if (temperature <= 15) {
      return Colors.blue;
    } else if (temperature <= 25) {
      return Colors.green;
    } else {
      return Colors.red;
    }
  };

  // funcion para generar un color aleatorio
  const getRandomColor = () => {
    const numbers = '0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++){
      color += numbers[Math.floor(Math.random()*16)];
    }

    return color;
  };

  return {
    // Properties
    temperature,
    backgroundColor,

    // Functions
    setTemperature,
    getColor,
    setBackgroundColor,
    getRandomColor,
  };
};
