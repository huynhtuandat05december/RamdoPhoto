import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/Inputfield';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import SelectedField from 'custom-fields/SelectedField';
import RamdomPhotoField from 'custom-fields/RamdomPhotoField';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';


PhotoForm.propTypes = {
    onSunbmit: PropTypes.func,

};
PhotoForm.defaultProps = {
    onSunbmit: null,
}

function PhotoForm(props) {
    const { initialValues, Addmode } = props;

    const schema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        categoryId: Yup.number().required('This field is required').nullable(),
        photo: Yup.string().required('This field is required'),


    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={props.onSubmit}
        >
            {FormikProps => {
                const { values, errors, touched, isSubmitting } = FormikProps;
                // console.log(values, errors, touched);
                return (
                    <Form>
                        <FastField
                            name='title'
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />
                        <FastField
                            name='categoryId'
                            component={SelectedField}

                            label="CatrgoryID"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField
                            name='photo'
                            component={RamdomPhotoField}

                            label="Photo"

                        />
                        <FormGroup>
                            <Button type="submit" color={Addmode ? 'primary' : 'success'}>
                                {isSubmitting && <Spinner size="sm" />}
                                {Addmode ? 'Add to album' : 'Update your photo'}</Button>
                        </FormGroup>
                    </Form>

                )
            }}

        </Formik>

    );
}

export default PhotoForm;