import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RamdoPhoto from 'component/RamdoPhoto';
import { ErrorMessage } from 'formik';

RamdomPhotoField.propTypes = {

};

function RamdomPhotoField(props) {
    const { field, label, form } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    return (
        <FormGroup>
            {label && <Label name={name}>{label}</Label>}
            <RamdoPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            // className={showError ? 'is-invalid' : ''}

            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>

        </FormGroup>
    );
}

export default RamdomPhotoField;