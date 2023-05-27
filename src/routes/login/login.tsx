import classNames from "classnames";
import { useCallback, useState } from "react";
//styles
import styles from "./login.module.scss";
//types
import { loginStep } from "./types";
//components
import { GetStaticProps } from "next";
//pages
import Phone from "../phone/phone";
import OtpPage from "../otpPage/otpPage";
import Name from "../name/name";
import Handle from "../handle/handle";
//import ProfilePicture from "../profilePicture/profile";


const Login = (): JSX.Element => {
    //state
    const [step, setStep] = useState<loginStep>(loginStep.PHONE);
    const [phone, setPhone] = useState<string>("");
    const [newUser, SetUser] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");

    const renderPage = useCallback(() => {
        switch (step) {
            case loginStep.PHONE:
                return (
                    <Phone
                        next={(phone, newUser) => {

                            setPhone(phone);
                            SetUser(newUser);
                            setStep(loginStep.OTP);
                        }}
                        back={() => { }}
                    />
                );
            case loginStep.OTP:
                return (
                    <OtpPage
                        phone={phone}
                        newUser={newUser}
                        next={(token, id) => {
                            setToken(token);
                            setId(id);
                            if (newUser) {
                                setStep(loginStep.NAME);
                            }
                        }}
                        back={() => {
                            setStep(loginStep.PHONE);
                        }}
                    />
                );
            case loginStep.NAME:
                return (
                    <Name
                        next={(name) => {
                            if (name) {
                                setName(name);
                            }
                            setStep(loginStep.HANDLE);
                        }}
                        back={() => {
                            setStep(loginStep.OTP);
                        }}
                        token={token}
                        id={id}
                    />
                );
            case loginStep.HANDLE:
                return (
                    <Handle
                        next={() => {

                        }}
                        back={() => {
                            setStep(loginStep.NAME);
                        }}
                        token={token}
                        id={id}
                        name={name} />
                );
            default:
                return <></>;
        }
    }, [id, name, newUser, phone, step, token]);

    return (
        <div className={classNames(styles["App"], styles["p-0"])}>
            {renderPage()}
        </div>
    );
};

export default Login;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
        },
    };
}

