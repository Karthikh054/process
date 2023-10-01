import React , {useState } from 'react';
import {useNavigate} from "react-router-dom";
import {
    Form,
    Field,
    FormElement,
    FieldWrapper,
  } from "@progress/kendo-react-form";
  import { Input } from "@progress/kendo-react-inputs";
  import { useDispatch } from 'react-redux';
  import { addFormData } from '../actions';

const Process = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        process_date: new Date(),
        process_name: "",
        process_description: "",
    });

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        
        dispatch(addFormData(formData));
        navigate('/home');
    };

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'50px'}}>
    <Form
      onSubmit={(e) => handleSubmit(e)}
      render={(formRenderProps) => (
        <FormElement
          style={{
            maxWidth: 650,
            width:'100%',
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"} style={{fontSize:'30px'}}>
            Create Process
            </legend>
            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"process_name"}
                  value={formData.process_name}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Process Name"}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap" >
                <Field
                  name={"process_description"}
                  component={Input}
                  value={formData.process_description}
                  labelClassName={"k-form-label"}
                  label={"Description"}
                  onChange={(e) => onChange(e)}
                  required
                  style={{height:'150px'}}
                />
              </div>
            </FieldWrapper>

            
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
        />
        </div>
  )
}

export default Process
