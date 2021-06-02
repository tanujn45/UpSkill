import React from 'react'
import { useState, useEffect } from 'react'
import AppHeading2 from './AppHeading2'
import colors from '../constants/colors'

const Timer = () => {

    const [seconds, setSeconds] = React.useState(59);

    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    });

    return (
        <AppHeading2 fontColor={colors.white}>00:{seconds}</AppHeading2>
    )
}

export default Timer
