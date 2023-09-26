import React from "react";
import { Form, Cascader, Input, Button, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const sectorOptions = [
  { value: "Oil & Gas Industry", label: "Oil & Gas Industry" },
  {
    value: "Telecommunication & Digital Communication Industry",
    label: "Telecommunication & Digital Communication Industry",
  },
  { value: "Energy & Power Industry", label: "Energy & Power Industry" },
  { value: "Security Industry", label: "Security Industry" },
  { value: "Health & Safety Industry", label: "Health & Safety Industry" },
];

const schoolOptions = [
  {
    "value": "akwa_ibom",
    "label": "Akwa Ibom",
    "children": [
      {
        "value": "university_of_uyo",
        "label": "University of Uyo",
      },
      {
        "value": "akwa_ibom_state_university",
        "label": "Akwa Ibom State University",
      },
      {
        "value": "akwa_ibom_state_polytechnic",
        "label": "Akwa Ibom State Polytechnic",
      },
      {
        "value": "akwa_ibom_state_college_of_art_&_science",
        "label": "Akwa Ibom State College of Art & Science",
      },
      {
        "value": "obong_university",
        "label": "Obong University",
      },
      {
        "value": "ritman_university",
        "label": "Ritman University",
      },
      {
        "value": "topfaith_university",
        "label": "Topfaith University",
      },
      {
        "value": "ibom_metropolitan_polytechnic",
        "label": "Ibom Metropolitan Polytechnic",
      },
      {
        "value": "uyo_city_polytechnic",
        "label": "Uyo City Polytechnic",
      },
      {
        "value": "trinity_polytechnic",
        "label": "Trinity Polytechnic",
      },
      {
        "value": "sure_foundation_polytechnic",
        "label": "Sure Foundation Polytechnic",
      },
      {
        "value": "heritage_polytechnic",
        "label": "Heritage Polytechnic",
      },
      {
        "value": "foundation_college_of_technology_(innovation_polytechnic)",
        "label": "Foundation College of Technology (Innovation Polytechnic)",
      },
      {
        "value": "southern_atlantic_polytechnic",
        "label": "Southern Atlantic Polytechnic",
      },
      {
        "value": "other",
        "label": "other",
      },
    ],
  },
  {
    "value": "bayelsa",
    "label": "Bayelsa",
    "children": [
      {
        "value": "federal_university,_otuoke",
        "label": "Federal University, Otuoke",
      },
      {
        "value": "federal_polytechnic,_ekowe",
        "label": "Federal Polytechnic, Ekowe",
      },
      {
        "value": "federal_science_and_technical_college",
        "label": "Federal Science and Technical College",
      },
      {
        "value": "niger_delta_university_yenagoa",
        "label": "Niger Delta University Yenagoa",
      },
      {
        "value": "university_of_africa_toru_orua",
        "label": "University of Africa Toru Orua",
      },
      {
        "value": "institute_of_science_and_technology_yenagoa",
        "label": "Institute of Science and Technology Yenagoa",
      },
    ],
  },
  {
    "value": "cross_river",
    "label": "Cross River",
    "children": [
      {
        "value": "university_of_calabar",
        "label": "University of Calabar",
      },
      {
        "value": "cross_river_state_university_of_technology",
        "label": "Cross River State University of Technology",
      },
      {
        "value": "havilla_university",
        "label": "Havilla University",
      },
      {
        "value": "arthur_javis_university",
        "label": "Arthur Javis University",
      },
    ],
  },
  {
    "value": "delta",
    "label": "Delta",
    "children": [
      {
        "value": "federal_university_of_petroleum_resources",
        "label": "Federal University of Petroleum Resources",
      },
      {
        "value": "petroleum_training_institute",
        "label": "Petroleum Training Institute",
      },
      {
        "value": "federal_college_of_education_(technical)",
        "label": "Federal College of Education (Technical)",
      },
      {
        "value": "delta_state_university",
        "label": "Delta State University",
      },
      {
        "value": "delta_state_university_of_science_and_technology",
        "label": "Delta State University of Science and Technology",
      },
      {
        "value": "delta_state_polytechnic,_oghara",
        "label": "Delta State Polytechnic, Oghara",
      },
      {
        "value": "delta_state_polytechnic,_ogwashi-uku",
        "label": "Delta State Polytechnic, Ogwashi-Uku",
      },
      {
        "value": "university_of_delta",
        "label": "University of Delta",
      },
      {
        "value": "delta_state_school_of_marine_technology",
        "label": "Delta State School of Marine Technology",
      },
      {
        "value": "college_of_education,_warri",
        "label": "College of Education, Warri",
      },
      {
        "value": "delta_state_college_of_physical_education",
        "label": "Delta State College of Physical Education",
      },
      {
        "value": "dennis_osadebay_university",
        "label": "Dennis Osadebay University",
      },
      {
        "value": "western_delta_university",
        "label": "Western Delta University",
      },
      {
        "value": "novena_university",
        "label": "Novena University",
      },
      {
        "value": "edwin_clark_university",
        "label": "Edwin Clark University",
      },
      {
        "value": "admiralty_university_of_nigeria",
        "label": "Admiralty University of Nigeria",
      },
      {
        "value": "bellmark_polytechnic",
        "label": "Bellmark Polytechnic",
      },
      {
        "value": "calvary_polytechnic",
        "label": "Calvary Polytechnic",
      },
      {
        "value": "michael_and_cecilia_ibru_university",
        "label": "Michael and Cecilia Ibru University",
      },
    ],
  },
  {
    "value": "edo",
    "label": "Edo",
    "children": [
      {
        "value": "university_of_benin",
        "label": "University of Benin",
      },
      {
        "value": "auchi_polytechnic",
        "label": "Auchi Polytechnic",
      },
      {
        "value": "ambrose_alli_university",
        "label": "Ambrose Alli University",
      },
      {
        "value": "edo_state_university",
        "label": "Edo State University",
      },
      {
        "value": "college_of_education,_igueben",
        "label": "College of Education, Igueben",
      },
      {
        "value": "college_of_education_ekiadolor",
        "label": "College of Education Ekiadolor",
      },
      {
        "value": "edo_state_institute_of_technology_and_management",
        "label": "Edo State Institute Of Technology and Management",
      },
      {
        "value": "edo_state_college_of_agriculture,_iguoriakhi.",
        "label": "Edo State College of Agriculture, Iguoriakhi.",
      },
      {
        "value": "benson_idahosa_university",
        "label": "Benson Idahosa University",
      },
      {
        "value": "igbinedion_university",
        "label": "Igbinedion University",
      },
      {
        "value": "samuel_adegboyega_university",
        "label": "Samuel Adegboyega University",
      },
      {
        "value": "wellspring_university",
        "label": "Wellspring University",
      },
      {
        "value": "mudiame_university",
        "label": "Mudiame University",
      },
      {
        "value": "lighthouse_polytechnic",
        "label": "Lighthouse Polytechnic",
      },
      {
        "value": "shaka_polytechnic",
        "label": "Shaka Polytechnic",
      },
      {
        "value": "kings_polytechnic",
        "label": "Kings Polytechnic",
      },
    ],
  },
  {
    "value": "rivers",
    "label": "Rivers",
    "children": [
      {
        "value": "university_of_port_harcourt",
        "label": "University Of Port Harcourt",
      },
      {
        "value": "federal_polytechnic_of_oil_and_gas",
        "label": "Federal Polytechnic Of Oil And Gas",
      },
      {
        "value": "federal_college_of_education_(technical)_omoku",
        "label": "Federal College of Education (Technical) Omoku",
      },
      {
        "value": "federal_college_of_education,_obudu",
        "label": "Federal College of Education, Obudu",
      },
      {
        "value": "rivers_state_university",
        "label": "Rivers State University",
      },
      {
        "value": "captain_elechi_amadi_polytechnic",
        "label": "Captain Elechi Amadi Polytechnic",
      },
      {
        "value": "rivers_college_of_education",
        "label": "Rivers College of Education",
      },
      {
        "value": "kenule_beeson_saro-wiwa_polytechnic",
        "label": "Kenule Beeson Saro-Wiwa Polytechnic",
      },
      {
        "value": "ignatius_ajuru_university_of_education",
        "label": "Ignatius Ajuru University of Education",
      },
      {
        "value": "madonna_university",
        "label": "Madonna University",
      },
      {
        "value": "eastern_polytechnic",
        "label": "Eastern Polytechnic",
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

const { TextArea } = Input;

const onChange = (value) => {
  console.log(value);
};

const onFinish = (values) => {
  console.log("Received values of form:", values);
};

export const RegistrationForm = () => {
  return (
    <div className="w-full">
      <Form
        className="w-full space-y-4"
        scrollToFirstError
        name="amihub_hackathon_registration_form"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
      >
        <div>
          <p className="text-white">Select your School</p>
          <Cascader
            className="w-full"
            options={schoolOptions}
            onChange={onChange}
            changeOnSelect
          />
        </div>
        <div>
          <p className="text-white">If you chose &quot;Other&quot;</p>
          <Input
            placeholder={
              "Name of your university, and LGA. E.g: University of Port Harcourt, Obio/Akpor LGA"
            }
          />{" "}
        </div>
        <div>
          <p className="text-white">Team Tag</p>
          <Input
            required
            name="team_tag"
            placeholder={"The name of your team E.g Awesome Team"}
          />
        </div>
        <div>
          <p className="text-white">
            Names of Team members and their departments, and matric number
          </p>
          <Form.List
            className="w-full flex flex-col items-start justify-start"
            name="names_of_team_members"
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    className="text-white flex flex-col sm:flex-row w-full"
                    {...(index < 5
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                    required={false}
                    label={`Member ${index + 1}`}
                    key={field.key}
                  >
                    <div className="w-full flex flex-row">
                      <Form.Item
                        {...field}
                        className="w-1/2"
                        name={`team_member ${index + 1}`}
                        id={`team_member ${index + 1}`}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input team member's Name.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Full Name"
                          style={{
                            width: "50%",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        className="w-1/2"
                        name={`faculty ${index + 1}`}
                        id={`faculty ${index + 1}`}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input team member's Faculty.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Department"
                          style={{
                            width: "50%",
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        className="w-1/2"
                        name={`matno ${index + 1}`}
                        id={`matno ${index + 1}`}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input team member's Matric No.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Matric No"
                          style={{
                            width: "50%",
                          }}
                        />
                      </Form.Item>
                    </div>
                    {fields.length >= 1 ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => remove(field.name)}
                      >
                        Remove{" "}
                        <MinusCircleOutlined className="dynamic-delete-button" />
                      </div>
                    ) : null}
                  </Form.Item>
                ))}
                <div className="w-full flex flex-col items-start justify-start">
                  {fields.length < 4 ? (
                    <Button
                      className="text-golden sm:w-1/3 w-full border-golden rounded-full"
                      type="default"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                    >
                      Add team member
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
          </Form.List>
        </div>
        <div>
          <p className="text-white">Sector</p>
          <Select
            className="w-full"
            options={sectorOptions}
            placeholder={"e.g Oil & Gas Industry"}
          />
        </div>
        <div>
          <p className="text-white">
            How will the prize money improve your solution?
          </p>
          <TextArea
            className="text-white"
            showCount
            placeholder={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, nesciunt neque. Molestiae officia beatae voluptate ea vel!"
            }
            rows={5}
            maxLength={300}
          />
        </div>
        <div>
          <p className="text-white">
            Link to your problem and solution document (powerpoint)
          </p>
          <Input placeholder={"Google drive link"} />
        </div>
        <div>
          <p className="text-white">
            Link to your 2 minutes video summaeizing your powerpoint document
          </p>
          <Input placeholder={"Google drive link"} />
        </div>
        <br />
        <br />
        <Button
          className="bg-golden sm:w-1/3 w-full rounded-full"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};