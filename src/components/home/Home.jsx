import React, {useState} from 'react';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { useSelector } from 'react-redux';
import { Drawer } from "@progress/kendo-react-layout";

import {
    Form,
    Field,
    FormElement,
    FieldWrapper,
  } from "@progress/kendo-react-form";
  import { Input } from "@progress/kendo-react-inputs";
import Header from '../Header/Header';
import {
    Card,
    CardTitle,
    CardBody,
  } from "@progress/kendo-react-layout";

    const Home = () => {
    const formDataList = useSelector((state) => state.formData.formDataList);
    const [cards, setCards] = useState(formDataList);
    const [isDrawerVisible, setIsDrawerVisible] = useState(true);
    const [isDrawerVisibleform, setIsDrawerVisibleForm] = useState(true);
    const toggleDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
    };

    const [initialValue, setInitialValue] = useState([]);
    const [fixedValue, setFixedValue] = useState([]);
    const [formDataNew, setFormDataNew] = useState({
        process_date: new Date(),
        process_name: "",
        process_description: "",
    });
    
    const  check = (p_name,index) =>{
        setFixedValue(p_name);
        
        setIsDrawerVisible(!isDrawerVisible);
        setIsDrawerVisibleForm(!isDrawerVisibleform);
        
    }

    const onChange = (e) => {
        if(e.target.name == 'process_name'){
            setFormDataNew({...formDataNew, process_name: fixedValue });
        }else{
            setFormDataNew({...formDataNew, [e.target.name]: e.target.value });
        }
        
    }

    const handleSubmit = (e) => {
        let data ={
            process_date: formDataNew.process_date,
            process_name: fixedValue,
            process_description: formDataNew.process_description,
        }
        setInitialValue([...initialValue, data]);
        setIsDrawerVisibleForm(!isDrawerVisibleform);
    };
  return (
    <div>
        <Header onToggleDrawer={toggleDrawer}/>
        <Grid
            style={{
                height: "300px",
            }}
            
            data={initialValue}
            >
              <GridColumn
                field="process_date"
                filter="date"
                format="{0:D}"
                width="300px"
              />
              <GridColumn field="process_name" width="280px" />
              <GridColumn field="process_description" width="200px" />
        </Grid>


        <div>
      
      {!isDrawerVisible &&<Drawer
        style={{
            float:'right',
            position:'absolute',
            right:'20px',
            top:'80px',
            background:'red',
            width:'250px',
            padding:'20px'
        }}
        position={"end"}
        mode={"push"}
        mini={true}
        
        
      >
        <div className='row' style={{display:'flex',width:'100%',flexWrap:'wrap'}}>
            
                
        {cards.map((card, index) => {
            return(
                <div className='k-card-deck' key={index} style={{width:'50%', paddingTop:'10px'}}>
                    <Card
                    style={{width:'90%'}}
                    onClick={() => check(card.process_name,index)}
                    >
                        <CardBody>
                        <CardTitle
                    style={{
                      marginBottom: "4px",
                    }}
                  >
                    {card.process_name}
                  </CardTitle>
                        </CardBody>
                        
                    </Card>
                </div>
            )})}
            
        </div>
        
        
      </Drawer>}

      {!isDrawerVisibleform &&<Drawer
        style={{
            float:'right',
            position:'absolute',
            right:'20px',
            top:'80px',
            background:'red',
            width:'250px',
            padding:'20px'
        }}
        position={"end"}
        mode={"push"}
        mini={true}
        
        
      >
        
                
        
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
            Process Request Form
            </legend>
            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"process_name"}
                  defaultValue={fixedValue}
                  value={fixedValue}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Process"}
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
                  value={formDataNew.process_description}
                  labelClassName={"k-form-label"}
                  label={"Reason"}
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
              Start Process
            </button>
          </div>
        </FormElement>
      )}
        />
        
      </Drawer>}
    </div>






    </div>
  )
}

export default Home
