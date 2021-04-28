import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectedField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

SelectedField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}


function SelectedField(props) {
    const { field, label, placeholder, disabled, options, form } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        // const changeEvent = {
        //     target: {
        //         name: name,
        //         value: selectedValue
        //     }
        // };
        // field.onChange(changeEvent);
        form.setFieldValue(name, selectedValue)
    }
    const selectedOption = options.find(option => option.value === value);

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                value={selectedOption}
                onBlur={onBlur}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}

export default SelectedField;