import React, { Component, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/components/landingpageComponents/landingpages_Mobile/navbar/navbar'
import classNames from 'classnames';
import axios from 'axios';
import { State } from './type'
//lottie
import Lottie from 'lottie-react';
import loaderanimation from './loader-3dots.json';

//framer-motion
import { motion } from 'framer-motion'
//styles
import styles from './contact.module.scss';

//components
import Footer from '@/components/landingpageComponents/landingpages_Mobile/footer/footer';
import ContactDesign from '@/components/pageComponents/contactDesign/contactDesign';
import Footer_desktop from '@/components/landingpageComponents/landingpage_Desktop/footer_desktop/footer_desktop';
import Navbar_desktop from '@/components/landingpageComponents/landingpage_Desktop/navbar_desktop/navbar_desktop';
import Top_shadows from '@/components/common/top_shadows/top_shadows';
import contactGirlImage from '../../../public/landingimages/contactus.webp';
import Contact_desktop_design from '@/components/pageComponents/contactDesign/contact_desktop_design/contact_desktop_design';
import Contactinivite from '@/components/pageComponents/contactDesign/contactInvite/contactinivite';


class Contact extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullname: '',
      message: '',
      email: '',
      error: {},
      mobile: '',
      msg: false,
      send: false,
      disabled: false,
      dissappear: false,
      validated: false,
      loader: false,
      isMobileView: false
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string): void => {
    this.setState({ [name]: event.target.value, error: {} } as Pick<State, keyof State>);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement | HTMLDivElement>): void => {
    event.preventDefault();
    const error: { [key: string]: string } = {};
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
      this.state.fullname === '' ||
      this.state.fullname === undefined ||
      this.state.fullname.toString().trim().length === 0
    ) {
      error.fullname = 'Please enter your full name';
    } else if (
      this.state.email === '' ||
      this.state.email === undefined ||
      this.state.email?.length < 5 ||
      reg.test(this.state.email) === false ||
      this.state.email.toString().trim().length === 0
    ) {
      error.email = 'Please enter your valid email address';
    } else if (
      this.state.mobile === '' ||
      this.state.mobile === undefined ||
      this.state.mobile.length < 10 ||
      this.state.mobile.toString().trim().length === 0
    ) {
      error.mobile = 'Please enter your mobile';
    } else if (
      this.state.message === '' ||
      this.state.message === undefined ||
      this.state.message.toString().trim().length === 0
    ) {
      error.message = 'Please enter your message';
    }

    if (Object.keys(error).length > 0 && error !== undefined) {
      this.setState({ error });
    } else {
      const { fullname, message, email, mobile } = this.state;
      const name = `${fullname}`;
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      console.log('user', user);

      this.setState({ loader: true, send: true }, () => {
        axios
          .post(`${process.env.BACKEND_HOST_URL}/api/admin/contact`, {
            name: name,
            message: message,
            email: email,
            phone: mobile,
            venue_name: 'Customer Support',
          })
          .then((response) => {
            setTimeout(() => {
              this.setState({
                fullname: '',
                email: '',
                message: '',
                mobile: '',
                msg: true,
                loader: false,
                disabled: true,
                dissappear: true,
              });
            }, 1000);
          })
          .catch((err) => console.log(err.response));
      });
    }
  };

  componentDidMount() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkViewport);
  }

  checkViewport = () => {
    const isMobileView = window.matchMedia('(max-width: 767px)').matches;
    this.setState({ isMobileView });
  };

  render() {
    const { error, isMobileView } = this.state;

    return (

      <>
        {
          isMobileView ?
            <>
              <Navbar />
              <ContactDesign />

              {/* contactForm */}
              <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
                transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} className={classNames(styles.contact_form_container)}>
                {!this.state.dissappear &&
                  <>
                    <div >
                      <div>
                        <label className={classNames(styles.fullname_label)} style={{ marginBottom: 16 }}>Full name</label>
                        <input
                          type="text"
                          disabled={this.state.disabled}
                          className={`${styles.formControl} ${this.state.disabled ? styles.reachText1 : styles.reachText}`}
                          value={this.state.fullname}
                          onChange={(event) => this.handleChange(event, "fullname")}
                        />
                      </div>
                      {
                        this.state.fullname === "" ?
                          <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                            {this.state.error && this.state.error.fullname}
                          </span>
                          :
                          <></>
                      }
                      <div>
                        <label className={classNames(styles.fullname_label)}>Number</label>
                        <input
                          type="tel" pattern="[0-9]{10}"
                          disabled={this.state.disabled}
                          className={`${styles.formControl} ${this.state.disabled ? styles.reachText1 : styles.reachText}`}
                          value={this.state.mobile}
                          onChange={(event) => this.handleChange(event, "mobile")}

                        />
                      </div>
                    </div>
                    {
                      this.state.mobile === "" || this.state.mobile?.length < 10 ?
                        <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                          {this.state.error && this.state.error.mobile}
                        </span>
                        :
                        <></>
                    }
                    <div
                      className="textBox"
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <label className={classNames(styles.fullname_label)}>Email</label>
                      <input
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        disabled={this.state.disabled}
                        className={`${styles.formControl} ${this.state.disabled ? styles.reachText1 : styles.reachText}`}
                        value={this.state.email}
                        onChange={(event) => this.handleChange(event, "email")}

                      />
                    </div>
                    <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                      {this.state.error && this.state.error.email}
                    </span>
                    <div
                      className="textArea"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <label className={classNames(styles.fullname_label)}>Message</label>
                      <textarea
                        disabled={this.state.disabled}
                        className={`${styles.formControl1} ${this.state.disabled ? styles.textareareachus1 : styles.textareareachus}`}
                        value={this.state.message}
                        onChange={(event) => this.handleChange(event, "message")}
                      ></textarea>
                    </div>
                    <div>
                      {!this.state.send ? (
                        <div
                          className={
                            `${this.state.fullname !== "" &&
                              this.state.email !== "" &&
                              this.state.mobile !== "" &&
                              this.state.message !== "" ? styles.submitbuttons : styles.submitbutton}`
                          } onClick={(e) => this.handleSubmit(e)}>
                          Send Message <div className="ml-2 mt-0.5"></div>
                        </div>
                      ) : (
                        <div>
                          {this.state.loader && (
                            <div className={styles.submitbuttons}>
                              <div className={styles.lottie_alignment}>
                                <Lottie animationData={loaderanimation} loop={false} />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                }

                {this.state.msg && (
                  <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 40, opacity: 0 }}
                    transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.6 }}
                    className={classNames(styles.successmessage)}>
                    <div
                      className={styles.successmsg_align} >
                      Thank you for reaching out.
                    </div>
                    <div className={classNames(styles.successmsg_align)} >
                      We will get back to you soon 👍
                    </div>

                  </motion.div>
                )}
              </motion.div>
              <Footer />
            </>
            :
            <>
              <Navbar_desktop />
              <Top_shadows />

              {/* contactForm */}
              <div className='container'>
                <div className={classNames(styles.contact_container_desktop)}>
                  <div className={styles.row}>
                    <div className={classNames(styles.col_1)}>
                    </div>
                    <div className={classNames(styles.col_10)}>
                      <div className={styles.row}>
                        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
                          transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }} className={styles.col_7}>
                          <Contactinivite />
                          {
                            !this.state.dissappear &&
                            <form >
                              <div className={styles.input_desktop_name_container}>
                                <div>
                                  <label className={classNames(styles.fullname_label_desktop)}>Full name</label>
                                  <input
                                    type="text"
                                    disabled={this.state.disabled}
                                    className={`${styles.formControl_desktop} ${this.state.disabled ? styles.reachText1_desktop : styles.reachText_desktop}`}
                                    value={this.state.fullname}
                                    onChange={(event) => this.handleChange(event, "fullname")}
                                    style={{
                                      width: "100%",
                                      background: "#25282B",
                                      border: "1.5px solid #2E2E2E",
                                      borderRadius: "8px",
                                      paddingLeft: 13,
                                    }}
                                  />
                                  {
                                    this.state.fullname === "" ?
                                      <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                                        {this.state.error && this.state.error.fullname}
                                      </span>
                                      :
                                      <></>
                                  }
                                </div>
                                <div>
                                  <label className={classNames(styles.fullname_label_desktop)}>Number</label>
                                  <input
                                    type="tel" pattern="[0-9]{10}"
                                    disabled={this.state.disabled}
                                    className={`${styles.formControl_desktop} ${this.state.disabled ? styles.reachText1_desktop : styles.reachText_desktop}`}
                                    value={this.state.mobile}
                                    onChange={(event) => this.handleChange(event, "mobile")}
                                    style={{
                                      width: "100%",
                                      background: "#25282B",
                                      border: "1.5px solid #2E2E2E",
                                      borderRadius: "8px",
                                      paddingLeft: 13,
                                    }}
                                  />
                                  {
                                    this.state.mobile === "" || this.state.mobile?.length < 10 ?
                                      <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                                        {this.state.error && this.state.error.mobile}
                                      </span>
                                      :
                                      <></>
                                  }
                                </div>
                              </div>
                              <div
                                className="textBox"
                                style={{
                                  alignItems: "center",
                                }}
                              >
                                <label className={classNames(styles.fullname_label_desktop)}>Email</label>
                                <input
                                  type="email"
                                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                  disabled={this.state.disabled}
                                  className={`${styles.formControl_desktop} ${this.state.disabled ? styles.reachText1_desktop : styles.reachText_desktop}`}
                                  value={this.state.email}
                                  onChange={(event) => this.handleChange(event, "email")}
                                  style={{
                                    width: "100%",
                                    background: "#25282B",
                                    border: "1.5px solid #2E2E2E",
                                    borderRadius: "8px",
                                    paddingLeft: 13,
                                  }}
                                />
                              </div>
                              <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                                {this.state.error && this.state.error.email}
                              </span>
                              <div
                                className="textArea"
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginTop: 10,
                                }}
                              >
                                <label className={classNames(styles.fullname_label_desktop)}>Message</label>
                                <textarea
                                  disabled={this.state.disabled}
                                  className={`${styles.formControl1_desktop}
                               ${this.state.disabled ? styles.textareareachus1_desktop : styles.textareareachus_desktop}`}
                                  value={this.state.message}
                                  onChange={(event) => this.handleChange(event, "message")}
                                ></textarea>
                                <span style={{ color: "#E1E2E6", fontSize: 12, fontFamily: "Nexa-Bold" }}>
                                  {this.state.error && this.state.error.message}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "start",
                                  alignItems: "start",
                                }}
                              >
                                {!this.state.send ? (
                                  <div
                                    className={
                                      `${this.state.fullname !== "" &&
                                        this.state.email !== "" &&
                                        this.state.mobile !== "" &&
                                        this.state.message !== "" ? styles.submitbuttons_desktop : styles.submitbutton_desktop}`
                                    }
                                    onClick={this.handleSubmit}
                                  >
                                    Send Message <div className="ml-2 mt-0.5"></div>
                                  </div>
                                ) : (
                                  <div>
                                    {this.state.loader && (
                                      <div className={styles.submitbuttons}>
                                        <div className={styles.lottie_alignment}>
                                          <Lottie animationData={loaderanimation} loop={true} />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </form>
                          }
                          {this.state.msg && (
                            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 40, opacity: 0 }}
                              transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.6 }} className={classNames(styles.successmessage_desktop)}>
                              <div>
                                <div
                                  style={{
                                    color: "#E1E2E5",
                                    fontFamily: "Nexa-Regular",
                                    textAlign: "center",
                                  }}
                                >
                                  Thank you for reaching out.
                                </div>
                                <div
                                  style={{
                                    color: "#E1E2E5",
                                    fontFamily: "Nexa-Regular",
                                    textAlign: "center",
                                  }}
                                >
                                  We will get back to you soon 👍
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                        <div className={styles.col_5}>
                          <Contact_desktop_design />
                        </div>
                      </div>
                    </div>
                    <div className={classNames(styles.col_1)}>
                    </div>
                  </div>
                </div>
              </div>
              <Footer_desktop />
            </>
        }

      </>
    )
  }
}

export default Contact