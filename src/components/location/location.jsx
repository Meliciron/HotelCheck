import React from 'react';
import './location.css';
import { useForm } from 'react-hook-form';

import Input from '../common/input/input';
import Container from '../common/container/container';
import Button from '../common/button/button';
import { useDispatch } from 'react-redux';
import {
  getHotels,
  setDataForRequest,
} from '../../redux/actions/actionCreator';
import { today } from '../../utils/todayDateUtil';
import {
  cityValidationRegEx,
  durationValidationRegEx,
} from '../../utils/regExUtil';

function Location() {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'all',
  });

  const onSubmitHandler = (data) => {
    let checkOut = new Date(data.checkIn);
    checkOut = new Date(checkOut.setDate(checkOut.getDate() + +data.duration));
    checkOut = checkOut.toISOString().slice(0, 10);
    dispatch(
      setDataForRequest({
        city: `${data.city}`,
        checkIn: data.checkIn,
        checkOut: checkOut,
        duration: data.duration,
      })
    );
    dispatch(getHotels());
  };

  return (
    <Container>
      <form className="location__form" onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          {...register('city', {
            required: 'Укажите город',
            pattern: cityValidationRegEx,
          })}
          id="city"
          name="city"
          type="text"
          defaultValue="Москва"
          label="Локация"
          className="location-input"
          error={
            errors.city
              ? errors.city.message
                ? errors.city.message
                : 'Неверно указана локация'
              : null
          }
        />
        <Input
          id="checkIn"
          name="checkIn"
          type="date"
          defaultValue={today}
          label="Дата заселения"
          className="location-input"
          {...register('checkIn', {
            required: 'Укажите дату заселения',
            min: today,
          })}
          error={errors.checkIn ? 'Неверная дата' : null}
        />
        <Input
          {...register('duration', {
            required: 'Укажите количество дней',
            pattern: durationValidationRegEx,
          })}
          id="duration"
          name="duration"
          defaultValue="1"
          label="Количество дней"
          className="location-input"
          error={
            errors.duration
              ? errors.duration.message
                ? errors.duration.message
                : 'Поле может содержать только цифры'
              : null
          }
        />
        <Button disabled={!isValid}>Найти</Button>
      </form>
    </Container>
  );
}

export default Location;
