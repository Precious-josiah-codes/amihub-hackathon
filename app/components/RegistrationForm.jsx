import React from "react";
import { Form, Cascader, Input, Button, Select, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const sectorOptions = [
  { value: "oil_and_gas_industry", label: "Oil & Gas Industry" },
  {
    value: "telecommunication_and_digital_communication_industry",
    label: "Telecommunication & Digital Communication Industry",
  },
  { value: "energy_and_power_industry", label: "Energy & Power Industry" },
  { value: "security_industry", label: "Security Industry" },
  { value: "health_and_safety_industry", label: "Health & Safety Industry" },
];

const schoolOptions = [
  {
    "value": "akwa_ibom",
    "label": "Akwa Ibom State",
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
        "label": "Foundation College of Technology(Innovation Poly)",
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
    "label": "Bayelsa State",
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
        "label": "Federal Science & Technical College",
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
        "label": "Institute of Science & Technology Yenagoa",
      },
      {
        "value": "other",
        "label": "other",
      },
    ],
  },
  {
    "value": "cross_river",
    "label": "Cross River State",
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
      {
        "value": "other",
        "label": "other",
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
        "label": "Delta State University of Science & Technology",
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
      {
        "value": "other",
        "label": "other",
      },
    ],
  },
  {
    "value": "edo",
    "label": "Edo State",
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
        "label": "Edo State Institute Of Technology & Management",
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
      {
        "value": "other",
        "label": "other",
      },
    ],
  },
  {
    "value": "rivers",
    "label": "Rivers State",
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
      {
        "value": "other",
        "label": "other",
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

export const RegistrationForm = () => {
  const launchDate = new Date("2023-10-09T12:01:00Z"); // Replace with actual launch date

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    state: "",
    school: "",
    other: null,
    team_tag: "",
    team_members: [],
    sector: "",
    prize_money_intent: "",
    powerpoint: "",
    video: "",
  });

  const onSchoolSelect = (value) => {
    setFormData((prev) => {
      return { ...prev, state: value[0], school: value[1] };
    });
  };

  const onOtherSchool = (event) => {
    setFormData((prev) => {
      return { ...prev, other: event.target.value };
    });
  };

  const onTeamTagChange = (event) => {
    setFormData((prev) => {
      return { ...prev, team_tag: event.target.value };
    });
  };
  const onWhyChange = (event) => {
    setFormData((prev) => {
      return { ...prev, prize_money_intent: event.target.value };
    });
  };
  const onPowerpointChange = (event) => {
    setFormData((prev) => {
      return { ...prev, powerpoint: event.target.value };
    });
  };
  const onVideoChange = (event) => {
    setFormData((prev) => {
      return { ...prev, video: event.target.value };
    });
  };

  const onSectorChange = (value) => {
    setFormData((prev) => {
      return { ...prev, sector: value };
    });
  };

  const onFinish = (values) => {
    setFormData((prev) => {
      return { ...prev, team_members: values.names_of_team_members };
    });
    console.log(formData, "the whole thing");
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (
        timeLeft?.days === 0 &&
        timeLeft?.hours === 0 &&
        timeLeft?.minutes === 0 &&
        timeLeft?.seconds === 0
      ) {
        clearInterval(timer);
        setShowForm(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full">
      {showForm ? (
        <Form
          size="large"
          className="w-full space-y-4"
          scrollToFirstError
          name="amihub_hackathon_registration_form"
          {...formItemLayoutWithOutLabel}
          onFinish={onFinish}
        >
          <div>
            <p className="text-white">Select your School</p>
            <Cascader
              allowClear={true}
              showSearch
              dropdownMenuColumnStyle={{ padding: 10 }}
              placeholder="search for your school"
              dropdownRender={(menus) => (
                <div>
                  {menus}
                  <Divider className="m-0" />
                  <div className="p-2 text-golden font-bold">
                    If your school is not in the list, <br /> please select
                    &quot;Other&quot;
                  </div>
                </div>
              )}
              className="w-full text-xs"
              options={schoolOptions}
              onChange={onSchoolSelect}
              changeOnSelect
            />
          </div>
          <div>
            <p className="text-white">If you chose &quot;Other&quot;</p>
            <Input
              placeholder={
                "Name of your university, and LGA. E.g: University of Port Harcourt, Obio/Akpor LGA"
              }
              onChange={onOtherSchool}
            />{" "}
          </div>
          <div>
            <p className="text-white">Team Tag</p>
            <Input
              required
              name="team_tag"
              placeholder={"The name of your team E.g Awesome Team"}
              onChange={onTeamTagChange}
            />
          </div>
          <div>
            <p className="text-white">
              Names of team members, departments, and matric number
            </p>
            <Form.List
              className="w-full flex flex-col items-start justify-start"
              name="names_of_team_members"
            >
              {(fields, { add, remove }) => (
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
                      <div className="w-full flex gap-2 sm:flex-row flex-col">
                        <Form.Item
                          {...field}
                          className="sm:w-1/2 w-full"
                          key={[field.key, `team_member_${index + 1}`]}
                          name={[field.name, `full_name`]}
                          id={`team_member_${index + 1}`}
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
                            className="w-full sm:w-1/2"
                          />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          className="sm:w-1/2 w-full"
                          key={[field.key, `department_${index + 1}`]}
                          name={[field.name, `department`]}
                          id={`department_${index + 1}`}
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
                            className="w-full sm:w-1/2"
                          />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          className="sm:w-1/2 w-full"
                          key={[field.key, `matno_${index + 1}`]}
                          name={[field.name, `matric_no`]}
                          id={`matno_${index + 1}`}
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
                            className="w-full sm:w-1/2"
                          />
                        </Form.Item>
                      </div>
                      {fields.length >= 1 ? (
                        <div
                          className="cursor-pointer"
                          onClick={() => remove(field.name)}
                        >
                          Remove team member{" "}
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
              onSelect={onSectorChange}
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
              onChange={onWhyChange}
            />
          </div>
          <div>
            <p className="text-white">
              Link to your problem and solution document (powerpoint)
            </p>
            <Input
              placeholder={"Google drive link"}
              onChange={onPowerpointChange}
            />
          </div>
          <div>
            <p className="text-white">
              Link to your 2 minutes video summarizing your powerpoint document
            </p>
            <Input placeholder={"Google drive link"} onChange={onVideoChange} />
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
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="sm:text-3xl text-golden">opens in:</h2>
          <div className="w-full flex flex-row items-center sm:gap-4 gap-1 justify-center text-white sm:font-extrabold sm:text-4xl mt-4 bg-golden sm:py-8 py-4 rounded-xl">
            <div>
              <span>{timeLeft?.days}</span> Days :
            </div>
            <div>
              <span>{timeLeft?.hours}</span> Hrs :
            </div>
            <div>
              <span>{timeLeft?.minutes}</span> Mins :
            </div>
            <div>
              <span>{timeLeft?.seconds}</span> Secs
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
