// RegisterForm.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface FormElement {
  id: number;
  name: string;
  kind: string;
  label: string;
  placeholder: string;
  defaultValue: string;
  isRequired: boolean;
}

interface RegisterFormProps {
  data: any; // Assuming the API data is passed as props
}

const Register: React.FC<RegisterFormProps> = ({ data }) => {
  const  { cohort } = useParams(); // Get the cohort name from URL params
  const [formFields, setFormFields] = useState<FormElement[]>([]);
  
  useEffect(() => {
    // Get the relevant form fields based on the cohort
    if (data && cohort !== undefined && data.registerForms[cohort]) {
      setFormFields(data.registerForms[cohort]);
    }
  }, [cohort, data]);

  const renderField = (field: FormElement) => {
    switch (field.kind) {
      case 'TEXT':
        return (
          <div key={field.id}>
            <label>{field.label}</label>
            <input type="text" placeholder={field.placeholder} required={field.isRequired} />
          </div>
        );
      case 'EMAIL':
        return (
          <div key={field.id}>
            <label>{field.label}</label>
            <input type="email" placeholder={field.placeholder} required={field.isRequired} />
          </div>
        );
      case 'RADIO':
        const options = JSON.parse(field.defaultValue);
        return (
          <div key={field.id}>
            <label>{field.label}</label>
            {options.map((option: any, index: number) => (
              <div key={index}>
                <input type="radio" value={option.value} name={field.name} />
                {option.label}
              </div>
            ))}
          </div>
        );
      case 'DATE':
        return (
          <div key={field.id}>
            <label>{field.label}</label>
            <input type="date" required={field.isRequired} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form>
      {formFields.map((field) => renderField(field))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
