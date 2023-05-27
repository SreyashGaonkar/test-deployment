import React, { useState, useEffect } from 'react';
import Navbar from '@/components/landingpageComponents/landingpages_Mobile/navbar/navbar';
import { GetStaticProps } from 'next';
//animation
import { motion } from 'framer-motion';

import classNames from 'classnames';
//styles
import styles from './termsofservice.module.scss';
import Footer from '@/components/landingpageComponents/landingpages_Mobile/footer/footer';
import Termsofservice_desktop from './terms-desktop/termsofservice_desktop';

const Termsofservice = () => {

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
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 80, opacity: 0 }}
              transition={{ type: 'spring', damping: 34, stiffness: 230, mass: 2, delay: 0.4 }}
              className={classNames(styles.terms_background)}>
              <div className={classNames(styles.terms_title)}>Terms of Service</div>
              <div className={classNames(styles.terms_subtitle)}>Your rights and responsibilities when using our services</div>
              <div style={{ borderBottom: "1px solid #272A2E" }} />
              <div className={classNames(styles.terms_content)}>

                <div className={classNames(styles.terms_content, styles["mb-32"], styles["mt-36"])}>Turf Town enables people to connect with each other, build connections, host, find locations that cater to their needs and grow their businesses.<br /></div>
                <div className={classNames(styles.terms_content, styles["mb-32"])}>By accessing and using www.turftown.in (Website) and/or TURF TOWN application (App), the user accepts and agrees to be bound by the Terms of Service. Please read these Terms carefully. Your use of the Website and the App (the Website and the App are collectively referred to as the ‘Platform’) is at your own risk, including the risk that you might be exposed to content that is objectionable or otherwise inappropriate.
                </div>
                <div className={classNames(styles.terms_content, styles["mb-32"])}>The Platform is owned and operated by M/s. Turf Town Sporting Pursuits Private Limited, a private limited company incorporated under the Companies Act, 2013 and having its registered at having its Registered Office at No.17, Lakshmi Street, Kilpauk, Chennai 600 010.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>I. Definitions</div>

                <div className={classNames(styles.terms_content1)}>1.The terms ‘user’ or ‘you’ or ‘your’ refer to you, as a user of the Platform.
                  A user is a person who
                  accesses or uses the Platform for the purposes of sharing, displaying, hosting, publishing,
                  transacting, or uploading information or views or pictures and includes other persons jointly
                  participating in using the Platform.</div>
                <div className={classNames(styles.terms_content1)}>2. The terms "TURF TOWN', "we", "us" or "our" shall mean
                  M/s. Turf Town Sporting Pursuits Private Limited.
                </div>
                <div className={classNames(styles.terms_content1)}>3. The Terms, together with the ‘Privacy Policy’, shall constitute the entire agreement
                  between you and us concerning the Platform. No failure or delay by us in exercising any right, power or privilege under
                  the Terms shall operate as a waiver of such right or acceptance of any variation of the Terms and nor
                  shall any single or partial exercise by either party of any right, power or privilege preclude any further
                  exercise of that right or the exercise of any other right, power or privilege.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>II. Services offered by Turf Town</div>

                <div className={classNames(styles.terms_content1)}>1.Turf Town provides its users a personalised experience using the data provided
                  to us by you to show posts, events, stadiums, activity centres and other features you might use.</div>
                <div className={classNames(styles.terms_content1)}>2. Turf Town enables you to connect with people, group, businesses, organisations,
                  and others. We use the data provided to us by you to make suggestions for you and to personalise your experience. Turf
                  Town enables you to explore events and tournaments that are conducted near your locality
                  and connect with sportsmen who share similar interest as you.
                </div>
                <div className={classNames(styles.terms_content1)}>3. Turf Town enables you to book stadiums or activity centres (Venues) at the various
                  locations listed and offered for rent on the Platform. Users can also create events or tournaments to connect with
                  other users on the Platform. For booking stadiums or activity centres, we may charge the users of
                  the Platform a service fee (inclusive of applicable taxes whenever not expressly mentioned)
                  determined on the basis of various factors including but not limited to duration of the rental, demand
                  for the stadium or activity centre, weather conditions, seasonal peaks or other such parameters as
                  may be determined from time to time.
                </div>
                <div className={classNames(styles.terms_content1)}>4. Turf Town enables you to communicate with your connections by enabling you to post
                  photos, videos
                  and stories across the Turf Town platform, send messages directly to your connections or people who
                  are using the Platform, view photos, videos and stories posted on the Platform by other users, and by
                  helping you to find people, groups, businesses, organisations and others.</div>
                <div className={classNames(styles.terms_content, styles["mb-32"])}>5. We display ads, offers and other sponsored content to help you discover content,products, and
                  services that are offered by the many businesses and organisations that use our Platform. </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>III. Use of the services provided by Turf Town by the user</div>

                <div className={classNames(styles.terms_content1)}>1.    You must create an account in order to use some of the features offered by the
                  Platform. You must
                  keep your password confidential and you are solely responsible for maintaining the confidentiality
                  and security of your account, all changes and updates submitted through your account, and all
                  activities that occur in connection with your account. You authorise us to collect your authentication
                  information, and other information that may be available on or through your social media account
                  consistent with your application settings and instruction.</div>
                <div className={classNames(styles.terms_content1)}>2. You are solely responsible for all the activities that occur in your account.
                  You agree to notify us
                  immediately of any unauthorised use of your account in order to enable us to take necessary
                  corrective action. You also agree that you will not allow any third party to use your account for any
                  purpose and that you will be liable for such unauthorised access.
                </div>
                <div className={classNames(styles.terms_content1)}>3. By creating an account, you agree to receive
                  communications in connection with the Platform.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>IV. Carrier rates may apply</div>

                <div className={classNames(styles.terms_content1)}>1. By accessing the Platform through a mobile or other device, you may besubject to
                  charges by your
                  Internet or mobile service provider, so checkwith them first if you are not sure, as you will be solely
                  responsible for any such costs incurred.</div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>V. Turf Town’s Intellectual Property Rights</div>

                <div className={classNames(styles.terms_content1)}>1.      We are the sole and exclusive copyright owners of the services and ourcontents of the App and
                  the Website. We also exclusively own the copyrights, trademarks, service marks, logos, trade names,
                  trade dress and other intellectual and proprietary rights throughout the world (the &quot;IP
                  Rights&quot;) associated with the services and the content, which may be protected by copyright,
                  patent, trademark and other applicable intellectual property and proprietary rights and laws. You
                  acknowledge that the services contain original works and have been developed, compiled, prepared,
                  revised, selected, and arranged by us and others through the application of methods and standards
                  of judgment developed and applied through the expenditure of substantial time, effort, and money
                  and constitutes valuable intellectual property of us and such others. You further acknowledge that
                  the services may contain information which is designated as confidential by us and that you shall not
                  disclose such information without our prior written consent.</div>
                <div className={classNames(styles.terms_content1)}>2. You agree to protect our proprietary rights and the proprietary rights of all others having rights
                  in
                  the services during and after the term of this agreement and to comply with all reasonable written
                  requests made by us or our suppliers and licensors of content or otherwise to protect their and
                  others&#39; contractual, statutory, and common law rights in the Services. You acknowledge and
                  agree that we own all legal right, title and interest in and to the services, including any IP Rights
                  which subsist in the services (whether those rights happen to be registered or not, and wherever in
                  the world those rights may exist). Unless you have agreed otherwise in writing with Turf Town,
                  nothing in the Terms gives you a right to use any of Turf Town&#39;s trade names, trademarks,
                  service marks, logos, domain names, and other distinctive brand features.
                </div>
                <div className={classNames(styles.terms_content1)}>3. You agree not to use any framing techniques to enclose any trademark or logo or other proprietary
                  information of Turf Town; or remove, conceal or obliterate any copyright or other proprietary notice
                  or source identifier, including without limitation, the size, colour, location or style of any proprietary
                  mark(s). Any infringement shall lead to appropriate legal proceedings against you at appropriate
                  forum for seeking all available/possible remedies under applicable laws of the country of violation.
                  You cannot modify, reproduce, publicly display or exploit in any form or manner whatsoever any of
                  the our content in whole or in part.
                </div>
                <div className={classNames(styles.terms_content1)}>4. You may link to the Platform, provided that you acknowledge and agree that you will not link the
                  Platform to any website containing any inappropriate, profane, defamatory, infringing, obscene,
                  indecent, or unlawful topic, name, material, or information or that violates any intellectual property,
                  propriety, privacy, or publicity rights. Any violation of this provision may, in our sole discretion, result
                  in termination of your use
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>VI. Governing Law/Waiver</div>

                <div className={classNames(styles.terms_content1)}>1. You must commence any legal action against us within one (1) month after the alleged harm initially
                  occurs. failure to commence the action within that period shall forever bar any claims or causes of
                  action regarding the same facts or occurrence, notwithstanding any statute of limitations or other
                  law to the contrary, within this period, any failure by us to enforce or exercise any provision
                  of these terms or any related right shall not constitute a waiver of that right or provision.</div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>VII. Restrictions on use</div>

                <div className={classNames(styles.terms_content1)}>1. Without limiting the generality of these Terms, in using the Services, you specifically agree not to
                  post
                  or comment or transmit any content (including review) or engage in any activity that, in our sole
                  discretion:</div>
                <ul className={classNames(styles.list_align)}>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}> Is harmful, threatening, abusive, harassing, tortious, indecent, defamatory, discriminatory, vulgar,
                    profane, obscene, libellous, hateful or otherwise objectionable, invasive of another&#39;s privacy,
                    relating or encouraging money laundering or gambling;         </li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Constitutes an inauthentic or knowingly erroneous review, or does not address the goods and
                    services, atmosphere, or other attributes of the business you are reviewing.</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Contains material that violates the standards of good taste or the standards of the services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Violates any third-party right, including, but not limited to, right of privacy, right of publicity,
                    copyright, trademark, patent, trade secret, or any other intellectual property or proprietary rights;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Accuses others of illegal activity, or describes physical confrontations;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Is illegal, or violates any national, state, or local law or regulation;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Attempts to impersonate another person or entity;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Disguises or attempts to disguise the origin of your content, including but not limited to by: (i)
                    submitting your posts/comments under a false name or false pretences; or (ii) disguising or
                    attempting to disguise the IP address from which your post/ comment is submitted;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Constitutes a form of deceptive advertisement or causes, or is result of, a conflict of interest;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Is commercial in nature, including but not limited to spam, surveys contests, pyramid schemes,
                    postings or reviews submitted or removed in exchange for payment, postings or reviews submitted or
                    removed by or at the request of the business being reviewed, or other advertising materials;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Asserts or implies that your contents/ posts/ comments is in any way sponsored or endorsed by us;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Falsely states, misrepresents, or conceals your affiliation with another person or entity;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Accesses or uses the account of another user without permission;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Distributes computer viruses or other code, files, or programs that interrupt, destroy, or limit the
                    functionality of any computer software or hardware or electronic communications equipment;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Interferes with, disrupts, or destroys the functionality or use of any features of the
                    services or the servers or networks connected to the services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>"Hacks" or accesses without permission our proprietary or confidential records, records of
                    another user, or those of anyone else;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Violates any contract or fiduciary relationship;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Decompiles, reverse engineers, disassembles or otherwise attempts to derive source code from the
                    services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Removes, circumvents, disables, damages or otherwise interferes with security-related features, or
                    features that enforce limitations on use of, the Services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Violates the restrictions in any robot exclusion headers on the services, if any, or bypasses or
                    circumvents other measures employed to prevent or limit access to the services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Collects, accesses, or stores personal information about other users of the Services;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Is posted by a bot;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Harms minors in any way;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Threatens the unity, integrity, defense, security or sovereignty of India or of the country of use,
                    friendly relations with foreign states, or public order or causes incitement to the commission of any
                    cognizable offence or prevents investigation of any offence or is insulting any other nation;</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Modifies, copies, scrapes or crawls, displays, publishes, licenses, sells, rents, leases,
                    lends, transfers or
                    otherwise commercialize any rights to the Services or Our Content; or</li>
                  <li className={classNames(styles.terms_content, styles["mb-32"])}>Attempts to do any of the foregoing.</li>
                </ul>
              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>VIII. Disclaimer of Warranties, limitation of liability, and Indemnification</div>
                <div className={classNames(styles.terms_content_title)} style={{ marginTop: "48px" }}>1. Disclaimer of Warranties</div>

                <div className={classNames(styles.terms_content1)}>You acknowledge and agree that the services are provided “as is” and “as
                  available” and that your use of the platform shall be at your sole risk.
                  To the fullest extent permitted by applicable law, Turf Town, its affiliates and their
                  respective officers, directors, employees, agents, affiliates, branches, subsidiaries,
                  and licensors disclaim all warranties, express or implies, in connection with the platform
                  and your use of them. To the fullest extent permitted by the applicable law, Turf Town makes
                  no warranties or representations that the services have been and will be provided with due skill,
                  care and diligence or about the accuracy or completeness of the services’ content and assume
                  no responsibility for any (i) errors, mistakes, or inaccuracies of content, (ii)
                  personal injury or property damage, of any nature whatsoever, resulting from your access
                  to and use of any content posted, emailed, transmitted, or otherwise made available via the
                  platform. Any material downloaded or otherwise obtained through the use of the platform is
                  done at your own discretion and risk and you will be solely responsible for any damage to your
                  computer system or other device or loss of data that results from the download of such material.
                  Turf Town will not be a party to or in any way responsible for monitoring any transaction
                  between you and third-party providers of services such as the owners of different Venue.
                  You are solely responsible for all of your communications and interactions with other users
                  of the platform and
                </div>
                <div className={classNames(styles.terms_content1)}>
                  with other persons with whom you communicate or interact as a result of your use of the platform.
                  No advice or information, whether oral or written, obtained by you from Turf Town or through or from
                  the platform  shall create any warranty not expressly stated in the terms of service. No advice or
                  information, whether oral or written, obtained by you from Turf Town or through or from the platform
                  shall create any warranty not expressly stated in the terms. Unless you have been expressly authorised
                  to do so in writing by Turf Town, you agree that in using the platform, you will not use any trade mark,
                  service mark, trade name, logo of any company or organisation in a way that is likely or intended to cause
                  confusion about the owner or authorised user of such marks, names or logos.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_content_title)}>2. Limitation of Liability</div>

                <div className={classNames(styles.terms_content1)}>To the fullest extent permitted by applicable law, in no event shall Turf Town be liable to you for any
                  damages resulting from any (i) errors, mistakes, or inaccuracies of content, and/or (ii) personal injury or
                  property damage, of any nature whatsoever, resulting from your access to and use of the platform and/
                  or (iii) any unauthorised access to or use of our servers and/or any and all personal information stored
                  therein and/or (iv) any interruption or cessation of transmission to or from our servers and/or (v) any
                  bugs, viruses, trojan horses, or the like, which may be transmitted to or through the platform by any
                  third party, and/or (vi) any loss of your data or content from their services, and/or
                  (vii) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any
                  content posted, transmitted, or otherwise made available via the platform, whether based on warranty,
                  contract, tort, or any other legal theory, and whether or not Turf Town parties are advised on the
                  possibility of such damages, and/or (viii) the disclosure of information pursuant to these terms or our
                  privacy policy, and/or (ix) you failure to keep your password or account details secure and confidential,
                  and/or (x) loss or damage which may be incurred by you, including but not limited to loss or damage as a
                  result of reliance placed by you on the completeness, accuracy or existence of any advertising, or as a
                  result of any relationship or transaction between you and any advertiser or sponsor whose advertising
                  appears on the platform, and/or delay in failure in performance resulting from causes beyond turf
                  town’s reasonable control. In no event shall Turf Town be liable to you for any indirect, incidental, special,
                  punitive, exemplary or consequential damages whatsoever, however cause and under any theory of
                  liability, including but not limited to, any loss of profit (whether incurred directly or indirectly), any loss of
                  goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or
                  services, or other intangible loss.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_content_title)}>3. Indemnification</div>

                <div className={classNames(styles.terms_content1)}>You agree to indemnify, defend, and hold harmless Turf Town from and against any third party claims,
                  damages (actual and/or consequential), actions, proceedings, demands, losses, liabilities, costs and
                  expenses (including reasonable legal fees) suffered or reasonably incurred by us arising as a result of, or
                  in connection with: (i) your content, (ii) your unauthorised use of the Platform, or products or services
                  included or advertised in the Platform, (iii) your access to and use of the Platform, (iv) your violation of
                  any rights of another party, or (v) your breach of these Terms, including, but not limited to, any
                  infringement by you of the copyright or intellectual property rights of any third party. We retain the
                  exclusive right to settle, compromise and pay, without your prior consent, any and all claims or causes of
                  action which are brought against us. We reserve the right, at your expense, to assume the exclusive
                  defense and control of any matter for which are bought against us. We reserve the right, at your
                  expense, to assume the exclusive defense and control of any matter for which you are required to
                  indemnify us and you agree to cooperate with our defense of these claims. You agree not to settle any
                  matter in which we are named as a defendant and/or for which you have indemnity obligations without
                  our prior written consent. We will use reasonable efforts to notify you of any such claim, action or
                  proceeding upon becoming aware of it.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>IX. Removal of posts, comments and the like</div>

                <div className={classNames(styles.terms_content1)}>Turf Town reserves the right, at any time and without prior notice, to remove, block, or disable access to
                  any of your account, posts, photos, comments and the like that we, for any reason or no reason, consider
                  to be objectionable, in violation of the Terms or otherwise harmful to the Services or our users in our sole
                  discretion. Subject to the requirements of applicable law, we are not obligated to return any of your
                  content to you under any circumstances.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>X. Termination of your access to the Platform</div>

                <div className={classNames(styles.terms_content, styles["mb-32"])}>1. You can delete your account at any time by signing out and deleting the App from your electronic
                  device and cease further use of the Platform.</div>
                <div className={classNames(styles.terms_content, styles["mb-32"])}>2. We may terminate your use of the Platform and deny you access to the Platform in our sole
                  discretion for any reason or no reason, including your: (i) violation of these Terms; or (ii) lack of use of
                  the Platform. You agree that any termination of your access to the Platform may be affected without
                  any prior notice, and acknowledge and agree that we may immediately deactivate or delete your
                  account and all other related information and/or bar any further access to your account or the
                  Platform. If you use the Platform in violation of these Terms, we may, in our sole discretion, retain all
                  data collected from the use of the Platform. Further, you agree that we shall not be liable to you or
                  any third party for the discontinuation or termination of your access to the Platform.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>XI. Severability</div>

                <div className={classNames(styles.terms_content, styles["mb-32"])}>If any of these Terms of Use should be determined to be illegal, invalid or otherwise unenforceable by
                  reason of the laws of any state in which these Terms of Use are intended to be effective, then to the
                  extent and within the jurisdiction where that term is illegal, invalid or unenforceable, it shall be severed
                  and deleted and the remaining Terms of Use shall survive, remain in full force and effect and continue to
                  be binding and enforceable.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>XII. Non-assignment</div>

                <div className={classNames(styles.terms_content, styles["mb-32"])}>You shall not assign or transfer or purport to assign or transfer the contract between you and us to any
                  other person.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>XIII. Governing law and dispute resolution</div>

                <div className={classNames(styles.terms_content, styles["mb-32"])}>These Terms of Use are governed by the laws of India. Any action, suit, or other legal proceeding, which
                  is commenced to resolve any matter arising under or relating to this Platform, shall be subject to the
                  urisdiction of the courts at Chennai, India.
                </div>

              </div>
              <div className={classNames(styles.terms_content)}>
                <div className={classNames(styles.terms_list)}>XIV. Modifications</div>

                <div className={classNames(styles.terms_content, styles["mb-32"])}>Turf Town may revise these terms of service at any time without notice. By using this website and or app you are agreeing to be bound by the then current version of these terms of service.
                </div>
                <div className={classNames(styles.terms_content, styles["mb-120"])}>Last modified Feb 17, 2023</div>
              </div>
            </motion.div>
            <Footer />
          </>
        )
          :
          (
            <>
              <Termsofservice_desktop />
            </>
          )
      }

    </div>
  )
}

export default Termsofservice

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
    },
  };
}
