import style from "./contactsForm.module.scss";


import {formAPI} from "../../../api/formApi";
import {useEffect, useState} from "react";
import Button from "../../../common/uiToolkit/Button";
import {useFormik} from "formik";


const ContactForm = () => {
    const [sendFormResult, setSendFormResult] = useState<string | null>(null);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if (sendFormResult) setSendFormResult(null);
        }, 3000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [sendFormResult]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = "Required";
            } else if (values.name.length > 50) {
                errors.name = "Must be 50 characters or less";
            }

            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }

            if (!values.message) {
                errors.message = "Required";
            } else if (values.message.length > 300) {
                errors.message = "Must be 300 characters or less";
            }

            return errors;
        },
        onSubmit: values => {
            formAPI.sendMessage(values)
                .then(() => {
                    setSendFormResult("Message successfully sent");
                    formik.resetForm();
                })
                .catch(() => {
                    setSendFormResult("Sending failed");
                });
        }
    });

    return (
        <>
            {sendFormResult && <div className={style.formResult}>{sendFormResult}</div>}
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <div className={style.formGroup}>
                    <input
                        className={style.formField}
                        placeholder={"Your name"}
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                </div>
                <div className={style.formGroup}>
                    <input
                        className={style.formField}
                        placeholder={"Your email"}
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                </div>
                <div className={style.formGroup}>
                    <input
                        className={style.formField}
                        placeholder={"Your phone"}
                        {...formik.getFieldProps("phone")}
                    />
                </div>
                <div className={style.formGroup}>
        <textarea
            className={style.formField}
            placeholder={"Tell me more about your needs..."}
            {...formik.getFieldProps("message")}
        />
                    {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
                </div>
                <div className={style.formFooter}>
                    <Button>Send message</Button>
                </div>
            </form>
        </>
    );
};

export default ContactForm


type FormikErrorType = {
    name?: string
    email?: string
    message?: string
    phone?: string
}
