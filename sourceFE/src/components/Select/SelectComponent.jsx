import PropTypes from "prop-types";
import Select from "react-select";

export const SelectComponent = (props) => {
    const {
        options,
        onChange,
        value,
        placeholder,
        id,
        isMulti,
        className,
        defaultValue,
        isRequired,
        name,
    } = props;
    const handleChange = (selectedOption) => {
        // Create a synthetic event to pass to the parent component's handler
        const event = {
            target: {
                name: name,
                value: isMulti
                    ? selectedOption.map(option => option.value)
                    : selectedOption.value
            }
        };
        onChange(event);
    };
    return (
        <>
            <Select
                defaultValue={defaultValue}
                options={options}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                className={className}
                id={id}
                name={name}
                isMulti={isMulti}
                isRequired={isRequired}
                styles={{
                    control: (provided) => ({
                        ...provided,
                        border: "",
                        borderRadius: "0.5rem",
                        padding: "0.1rem 0.5rem",
                        cursor: "pointer",
                    }),
                    option: (provided) => ({
                        ...provided,
                        cursor: "pointer",
                    }),
                }}></Select>
        </>
    );
};

SelectComponent.propTypes = {
    className: PropTypes.string,
    isMulti: PropTypes.bool,
    options: PropTypes.array,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    isRequired: PropTypes.bool,
    name: PropTypes.string
};
