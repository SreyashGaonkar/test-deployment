import React, { useState, useEffect } from 'react';
import Navbar from '@/components/landingpageComponents/landingpages_Mobile/navbar/navbar';
import { GetStaticProps } from 'next';
//animation
import { motion } from 'framer-motion'
//styles
import styles from './privacy-policy.module.scss';
import classNames from 'classnames';
import Footer from '@/components/landingpageComponents/landingpages_Mobile/footer/footer';
import Privacy_desktop from './privacy-policy_desktop/privacy_desktop';

const PrivacyPolicy = () => {

    const [isMobileView, setIsMobileView] = useState(true);

    useEffect(() => {
        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => {
            window.removeEventListener('resize', checkViewport);
        };
    }, []);

    const checkViewport = () => {
        const isMobileView = window.matchMedia('(max-width: 767px)').matches;
        setIsMobileView(isMobileView);
    };

    return (
        <div>
            {
                isMobileView ? (
                    <>
                        <Navbar />
                        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 60, opacity: 0 }}
                            transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }}
                            className={classNames(styles.privacy_background)}>
                            <div className={classNames(styles.privacy_title)}>Privacy Policy</div>
                            <div className={classNames(styles.privacy_subtitle)}>How Turf Town collects and uses data</div>
                            <div style={{ borderBottom: "1px solid #272A2E" }} />
                            <div className={classNames(styles.privacy_content)}>
                                <>
                                    <div className={classNames(styles["mb-32"], styles["mt-36"])}> M/s. Turf Town Sporting Pursuits Private Limited and our associates/partners/successors/permitted assignees ("TurfTown", "we", "us"and "our") are fully committed to respecting your privacy and are committed to protecting it through our compliance with this privacy policy ("Policy"). Reference to "you" in this Policy refers to the users of the TurfTown Platform (as defined below), whether or not you access the services available on the Platform or consummate a transaction on the Platform ("Users"). The Policy sets out: (a) the types of information that we may collect from you when you access or use our services (collectively, our "Services") through our Platform, and (b) our practices for collecting, using, maintaining, protecting and disclosing that information.
                                    </div>
                                    <div className={classNames(styles["mb-32"])}>The www.turftown.in Website and TurfTown App, either directly or via licences assigned by us, are jointly referred to as the "Platform". By using or accessing this Platform and providing Information (as defined below) or SPDI (as defined below), you agree to the terms and conditions of this Policy. You also expressly consent to our use and disclosure of your Information and/or SPDI in any manner as described in this Policy and further signify your agreement to this Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Policy, please do not proceed further or use or access this Platform/provide us with any information.
                                    </div>
                                </>
                            </div>
                            <div >
                                <div className={classNames(styles.privacy_list)}>I. Definitions</div>
                                <div>
                                    <div className={classNames(styles.privacy_content1)}>
                                        1. "Account" refers to the password-protected account created by users to access and participate in the Platform.
                                    </div>
                                    <div className={classNames(styles.privacy_content1)}>2. "Non-personal Identification Information" refers to any non-personal information collected from Users pursuant to their interaction on the Platform, including but not limited to the browser name, the type of computer and technical information about Users means of connection to the Platform such as the operating system, the Internet service providers utilized and other similar information.</div>
                                    <div className={classNames(styles.privacy_content1)}>3. "Personal Identification Information" refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, when Users visit the Platform, register, conclude a transaction, respond to a survey, fill out a form, and anything else in connection with other activities, services, features or resources we make available on the Platform. Users may be asked for personal information including, but not limited to name, email address, phone number and residential address disclosed by you in relation to the services available on the Platform. Users may, however, visit our site anonymously. TurfTown will collect Personal Identification Information from Users only if they voluntarily submit such information to us. Users can always refuse to supply Personally Identification Information, except that it may prevent them from engaging in certain activities/services available on the Platform.</div>
                                    <div className={classNames(styles.privacy_content)}>For the purposes of this Policy, Personal Identification Information and Non-personal Identification Information shall together be referred to as "Information".</div>
                                </div>

                                <div className={classNames(styles.privacy_content1)}>4. "Sensitive personal data or information"/"SPDI" consists of information relating to the following:</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> i. passwords;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> ii. financial information such as bank account or credit card or debit card or other payment instrument details;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> iii. physical, physiological and mental health condition;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> iv. sexual orientation;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> v. medical records and history;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> vi. biometric information;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> vii. any detail relating to the above clauses as provided to body corporate for providing service; and</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> viii. any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise.</div>

                                <div className={classNames(styles.privacy_content1)}>5. "Third-Party" refers to any person or entity other than you or us.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>II. Collection of Personal Information by TurfTown</div>
                                <div className={classNames(styles.privacy_content_title)}>a) In relation to the use of the Platform.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>
                                    For the purposes of creation of an Account on the Platform, Users will be required to disclose information including personal contact details. The type of Information collected from a User varies based on the interaction with the Platform.
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>During the creation of an Account for Users, we will collect information such as your name, telephone number, email address, residential/commercial address and other Information. In some situations, we will also require you to disclose demographic information including gender, age, education and other information relevant to the provision of Services. We may also collect Information that you post in your offer, profile, requirements, or feedback and any other correspondence site on the Platform.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>When you use our location-enabled services, we may collect and process information about your mobile device's GPS location (including the latitude, longitude or altitude) and the time the information is recorded, to customize the Services. We may associate your location data with your device ID and other information we hold about you. You can withdraw your consent for this feature by disabling the GPS or any other location-tracking functions on your device.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We also reserve the right to monitor conversations between two Users facilitated by TurfTown through any mechanism on the Platform. This information can be used to but not limited to monitor and prohibit abuse, safeguard the rights of the Users and resolve any disputes that may arise.</div>

                                <div className={classNames(styles.privacy_content_title)}>b) From third-party sites.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>You may also register for an Account using your existing Facebook, Google, Twitter or such other accounts and log-in credentials (your "Third-Party Site Account"). As part of the functionality of the Platform, you may link your account with Third-Party Site Accounts, by either:
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>a. providing your Third-Party Site Account login information to us through the Platform; or</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>b. allowing us to access your Third-Party Site Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Site Account. </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> As part of the functionality of the Platform, you may link your account with Third-Party Site Accounts, by either:</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> a. providing your Third-Party Site Account login information to us through the Platform;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>b. allowing us to access your Third-Party Site Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Site Account. </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> You represent that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account (including, but not limited to, for the purposes described herein), without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account and without obligating us to pay any fees or making us subject to any usage limitations imposed by the applicable Third-Party Site service provider.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>If you decide to register by logging into a Third-Party Site Account via our Platform, we will obtain the Personal Information you have provided to the applicable Third-Party Site service provider (such as your "real" name, email address, profile picture, names of friends, names of groups to which you belong, other information you make publicly available via the applicable Third-Party Site service provider and/or other information you authorize us to access by authorizing the Third-Party Site service provider to provide such information) from your Third-Party Site Accounts and use that information to create your account and profile page and you will become a member. Depending on the Third-Party Site Accounts you choose and subject to the privacy settings that you have set in such Third-Party Site Accounts, you understand that by granting us access to the Third-Party Site Accounts, we will access, make available and store (if applicable and as permitted by the Third-Party Site service provider and authorized by you) the information in your Third-Party Site Accounts so that it is available on and through your account on the Platform.</div>

                                <div className={classNames(styles.privacy_content_title)}>c) Cookies</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> Cookies are small pieces of information saved by your browser. Cookies are used to record various aspects of your visit and assist us to provide you with uninterrupted service. They also allow ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. Cookies may be set in your browser by us when you access the Platform or may be set in when you visit Third-Party websites.
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>This anonymous information is maintained distinctly and is not linked to the Information that you submit to us. We use cookies collected to:</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>1. Authenticate your login information;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>2. Enable our security features;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>3. Contextualize and show you advertising; and</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>4. Improve and develop the features of the Website.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>Please feel free to change your browser settings if you do not wish to accept cookies. However, please note that changing your browser setting may affect your experience on the Platform.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>This Policy does not cover the use of cookies by any advertisers.</div>

                                <div className={classNames(styles.privacy_content_title)}>d) Collection of SPDI. </div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>For the purposes of creation of an Account on the Platform, Users will be required to disclose certain SPDI including credit card/debit card detail for payment purposes, required by payment gateways and financial institutions to consummate a transaction. We do not gain any access or store any SPDI related to financial transactions on our Platform; such SPDI is availed directly by the payment gateway via an integration with our Platform and we ensure to utilize payment gateways of repute with industry accepted credentials and security measures. The type of Information collected from a User varies based on the interaction with the Platform. TurfTown undertakes to protect the data provided by you in accordance with reasonable security practices and procedures. TurfTown undertakes not to transfer or disclose your SPDI to a third-party for any purpose without your prior consent.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>III. Use of Personal Information by TurfTown</div>
                                <div className={classNames(styles.privacy_content_title)}>e) For the purposes of providing Services on the Platform.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>
                                    We may, for the purposes of providing Services on the Platform, use your Information:
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>1. To process and respond to User's queries;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>2. To understand the Users' requirements;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>3. To diagnose technical glitches;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>4. To provide users with customer support;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>5. To perform our obligations arising from the contract between TurfTown and the Users, including for billing and collection;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>6. To allow Users to participate in interactive features offered through the Services;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>7. In any other way that TurfTown specifies at the time of seeking information from Users;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>8. For monetization and processing of statistics for advertising, affiliate marketing and analytics;</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>9. For any other purpose with the User's consent.</div>

                                <div className={classNames(styles.privacy_content_title)}>f) Communication.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We may offer phone call, email, application notifications, short message service, multimedia message service or other forms of communication to share information with you about certain promotions or features the Platform may choose to offer or about our affiliates, subsidiaries, business partners, advertisers and sponsors, including company news, updates, related product or service information. You may receive such communication when you have registered as a User in order to provide advertisements about goods and services of interest to you. If at any time the User would like to unsubscribe from receiving future emails not related to a transaction you have undertaken on the Platform, we include detailed unsubscribe instructions at the bottom of each email or the User may contact the concerned person.
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We do not, however, sell to any Third-Party user-specific Information for the above purposes, and all data shared with Third-Parties in relation to the above purposes, will be on a no-name aggregate basis.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>IV. Sharing of Personal Information by TurfTown</div>
                                <div className={classNames(styles.privacy_content_title)}>g) General information disclosure.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We do not sell, trade, or rent Users' Information to others. We may share generic aggregated demographic information
                                    regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. However, Personal Identification Information may
                                    be shared if required, with (a) our subsidiaries or affiliates (b) a buyer or successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other
                                    sale or transfer of some or all of TurfTown's assets, whether as a going concern or as a part of bankruptcy, liquidation or similar proceeding, in which Information of Users held by
                                    TurfTown are among the assets transferred.
                                </div>

                                <div className={classNames(styles.privacy_content_title)}>h) Legal proceedings and law enforcement.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>In the event we are required to respond to subpoenas, court orders or other legal process, your Information may be
                                    disclosed pursuant to such subpoena, court order or legal process, which may be without notice to you. We will also disclose your Information,
                                    including, without limitation, your name, city, state, telephone number, email address and activity history on the Platform, to law enforcement agencies or
                                    other government officials if we are required to do so by law, regulation or any other governmental authority or otherwise in cooperation with an investigation
                                    of a governmental authority.
                                </div>

                                <div className={classNames(styles.privacy_content_title)}>i) Third-Party service providers in relation to the Platform.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>To the extent necessary to provide you the services on the Platform, we may provide your Information to Third-Party
                                    contractors who work on behalf of or with us to provide you with such Services, to help us communicate with you or to maintain the Platform.
                                </div>

                                <div className={classNames(styles.privacy_content_title)}>j. With consent.</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We may share your Information and/or SPDI in any circumstances where we have your consent.
                                </div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>V. Security</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We strive to ensure the security, integrity and privacy of your Information and SPDI and to protect it against unauthorized access or unauthorized alteration, disclosure or destruction. We implement appropriate physical, electronic and managerial procedures to safeguard and help prevent unauthorized access and for the purposes of maintaining data security. Our payment gateway partners are compliant with the payment card industry standard (PCI standard) and also use SSL secured communication channels, encryption, passwords and physical security measures in order to protect the Information and SPDI of Users.
                                </div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>
                                    However, we cannot guarantee absolute security as no method of protection and transmission
                                    of data is completely secure. We are also not responsible for any breach of security or for any actions of any
                                    Third-Parties that receive your Information. The Services are also linked to many other sites and we are not/shall be not responsible
                                    for their privacy policies or practices as it is beyond our control. Notwithstanding anything contained in this Policy or elsewhere, we shall not be held responsible for any
                                    loss, damage or misuse of your Information or SPDI, if such loss, damage or misuse is attributable to any event that is beyond our reasonable control.
                                </div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>VI. Updating, Deleting and Amending Your Information</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>We will take reasonable steps to accurately record the Information that you provide to us including any subsequent updates. You can review, update and amend the Information that we maintain about you, and you may request we delete Information about you that is inaccurate, incomplete or irrelevant for legitimate purposes, or is being processed in a way which infringes any applicable legal requirement.</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>Your right to review, update, amend and delete your Information may be limited: (a) where the rights or safety of another person or persons would be encroached upon, or (b) if the information you request relates to existing or anticipated legal proceedings between you and us, or providing access to you would prejudice negotiations between us or an investigation of possible unlawful activity. Your right to review, update, amend and delete your Information is also subject to applicable law, including any statutory retention requirements. </div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>VII. Link to Third-Party Apps and Websites</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> The Platform and any communication sent to you may also contain/display Third-Party advertisements and links to other websites or
                                    products and services. You agree and acknowledge that these applications and websites are operated by Third-Parties and are not controlled by,
                                    or affiliated to, or associated with us unless expressly specified. Accordingly, we do not make any representations concerning the privacy practices
                                    or policies of such Third-Parties or terms of use of such websites or applications. The information provided by you to such Third-Party websites shall
                                    be governed in accordance with the privacy policies of such websites and it is recommended that you review the privacy policy on any such websites and
                                    applications prior to using such websites.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>VIII. Amendment to The Policy</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> TurfTown has the discretion to update this Policy at any time. When we do, we will revise the updated date at the bottom of this Policy and additionally also send you an e-mail apprising you of the same. We encourage Users to frequently check this page to stay informed on any changes to the Policy. You acknowledge and agree that it is your responsibility to review this Policy periodically in order to be updated of any modifications. Your continued use of our Platform after we any changes to the Policy is signifies your acceptance of those changes.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>IX. Third-Party Policies</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}> As you access and use our services, we collect certain information from you, including but not limited to, phone number, email address, device make-details, and IP address. By accessing and using our services, you expressly consent to the sharing and disclosure of your information so collected, with our third-party service providers, business partners, and agents. For example, your information may be shared with third-party services like GetSimpl to ensure fraud prevention and PayLater check out experience. Please refer to the third-party privacy policy for more details.</div>

                            </div>
                            <div className={classNames(styles.privacy_content)}>
                                <div className={classNames(styles.privacy_list)}>X. Contact Us</div>

                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>  If you have any queries relating to the processing/usage of Information or SPDI provided by you or this Policy, you may email us at enter email here  or write to the following address:</div>
                                <div className={classNames(styles.privacy_content, styles["mb-32"])}>M/s. Turf Town Sporting Pursuits Private Limited, </div>
                                <div className={classNames(styles.privacy_content, styles["mb-120"])}>No.17, Lakshmi Street, Kilpauk, Chennai 600 010.</div>

                            </div>
                        </motion.div>
                        <Footer />
                    </>
                )
                    :
                    (
                        <Privacy_desktop />
                    )
            }

        </div>

    )
}

export default PrivacyPolicy

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
        },
    };
}
