import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([27, 29, 10]);

  const renderDayWithBadge = (day, _value, DayComponentProps) => {
    const isSelected =
      highlightedDays.some(selectedDay =>
        DayComponentProps.day?.getDate() === selectedDay &&
        DayComponentProps.day?.getMonth() === value.getMonth() &&
        DayComponentProps.day?.getFullYear() === value.getFullYear()
      );

    return (
      <Badge
        key={day.toString()}
        overlap='circular'
        badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
      >
        <PickersDay {...DayComponentProps} />
      </Badge>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        variant='static'
        orientation='portrait'
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        renderDay={renderDayWithBadge}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
