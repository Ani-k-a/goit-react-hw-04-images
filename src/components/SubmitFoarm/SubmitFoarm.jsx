import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaSearch } from 'react-icons/fa';
import css from './SubmitFoarm.module.css';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  search: yup.string().min(2).required(),
});

const initialValues = {
  search: '',
};
export function SubmitFoarm({ submitForm }) {
  const handleSubmit = (values, { resetForm }) => {
    const { search } = values;
    console.log(search);
    submitForm(search);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off" autoFocus className={css.form}>
        <button type="submit" className={css.button}>
          <FaSearch />
        </button>

        <Field
          className={css.input}
          type="text"
          name="search"
          placeholder="Search images and photos"
        />
        <ErrorMessage
          name="search"
          className={css.errorMessage}
          component="div"
        />
      </Form>
    </Formik>
  );
}

SubmitFoarm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
