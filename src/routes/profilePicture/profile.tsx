import { useCallback, useRef, useState, useEffect, SetStateAction, useContext, ChangeEventHandler } from "react";
import classNames from "classnames";
import Image from "next/image";
//styles
import styles from "./profile.module.scss";
//component
import Header from "@/components/common/header/header";
import IconButton from "@/components/common/iconButton/iconButton";

import Loading from "@/components/common/loading/loading";
//types
import { NamePropType } from "../name/type";
//api
import { UploadProfilePicture } from "@/apis/uploadProfilePicture/uploadProfilePicture";
//context
import { AppContext } from "@/providers/app";

const ProfilePicture = ({ back, next, token }: NamePropType) => {

    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [file, setFile] = useState<File | undefined>(undefined);

    const handleChange = useCallback(
        async (event: React.ChangeEvent<HTMLInputElement>) => {
            // const input = event?.target?.files[0]
            if (event?.target?.files) {
                setFile(event.target.files[0])
            }

        },
        []
    );

    const handleClick = useCallback(() => {
        if (hiddenFileInput?.current) {
            hiddenFileInput?.current?.click();
        }
    }, []);

    const uploadImage = useCallback(async () => {
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);

            try {
                const response = await UploadProfilePicture(
                    token,
                    formData
                );

                setLoading(false);
                next && next();
            } catch (e) {
                setLoading(false);
                console.log("error ModifyUser", e);
            }
        }
    }, [file, next, token]);

    return (
        <div className={styles["container"]}>
            <Header back={back} />
            <div className={classNames(styles["ph-24"], styles["mb-64"])}>
                <p className={classNames(styles["login_title"], styles["mb-16"])}>
                    Set a profile picture!
                </p>
                <p className={classNames(styles["subText"])}>
                    Help other players recognise you on the pitch
                </p>
            </div>

            <div className={classNames(styles["ph-24"])}>
                <div className={classNames(styles.image_wrapper)}>
                    <div
                        className={classNames(styles.circle, styles["mb-20"])}
                        onClick={handleClick}
                    >
                        {loading && <Loading />}
                        {
                            file ? <Image
                                height={132}
                                width={132}
                                className={styles.cricular_image}
                                src={URL.createObjectURL(file)}
                                alt={"add-user"}
                            /> : <Image
                                height={40}
                                width={40}
                                src={"/icons/add_user.png"}
                                alt={"add-user"}
                            />
                        }
                    </div>
                    <p className={classNames(styles["title"], styles["text_blue"])}>
                        {file ? 'Edit' : 'Upload'}
                    </p>
                </div>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    accept="image/*"
                    style={{ display: "none" }}
                />
            </div>

            <div className={classNames(styles.bottom_button_wrapper)}>
                <div className={classNames(styles["row"])}>
                    <p onClick={() => {
                        !loading && next()
                    }} className={classNames(styles["terms_text"], styles["mr-28"])}>
                        Skip
                    </p>
                    <IconButton loading={loading} disabled={file === undefined || loading} onClick={uploadImage} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePicture;
