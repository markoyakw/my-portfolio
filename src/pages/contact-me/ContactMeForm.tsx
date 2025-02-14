import MyButton from '@components/UI/MyButton/MyButton'
import MyCard from '@components/UI/MyCard/MyCard'
import MyInput from '@components/UI/MyInput/MyInput'
import MyTextArea from '@components/UI/MyInput/MyTextArea'
import classes from "./ContactMePage.module.css"
import { useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import MyPopupMessage from '@components/UI/MyPopupMessage/MyPopupMessage'
import useDelay from '@hooks/useDelay'
import isEmptyObject from '@utils/isEmptyObject'

type TContactMeFormData = {
    name?: string,
    email?: string,
    phoneNumber?: string,
    message: string
}

const RESET_IS_SUBMIT_SUCCESSFUL_TIME_MS = 3000
const RESPONSE_STATUS_ANIMATION_DELAY = 1000

export const ContactMeForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean | undefined>(undefined)
    const isSubmitSuccessfulTimerRef = useRef<NodeJS.Timeout>()
    const [resetFormAfterSuccessDelay, startResetFormAfterSuccessDelay] = useDelay(RESPONSE_STATUS_ANIMATION_DELAY)

    const { register, getValues, watch, handleSubmit, trigger, setValue, reset, formState: { errors, isValid, isDirty, touchedFields } } = useForm<TContactMeFormData>(
        {
            mode: "all",
            defaultValues: {
                name: "",
                phoneNumber: "",
                email: "",
                message: ""
            }
        }
    )

    useEffect(() => {
        if (resetFormAfterSuccessDelay) {
            reset()
        }
    }, [resetFormAfterSuccessDelay])

    const onFormSubmit = async (data: TContactMeFormData) => {
        setIsSubmitSuccessful(undefined)
        setIsSubmitting(true)
        const formDataJson = JSON.stringify(data)
        const res = await fetch(`https://api.telegram.org/bot7978438245:AAF79rieHepHoViZtYGK54VnsEKk_4nW344/sendMessage?chat_id=5028575361&text=${formDataJson}`)
        if (res.ok) {
            setIsSubmitSuccessful(true)
        }
        else {
            setIsSubmitSuccessful(false)
        }
        setIsSubmitting(false)
    }

    useEffect(() => {
        const resetisSubmitSuccessful = () => {
            setIsSubmitSuccessful(undefined)
        }
        if (isSubmitSuccessful === true || isSubmitSuccessful === false) {
            isSubmitSuccessfulTimerRef.current = setTimeout(resetisSubmitSuccessful, RESET_IS_SUBMIT_SUCCESSFUL_TIME_MS)
        }
        if (isSubmitSuccessful) {
            startResetFormAfterSuccessDelay()
        }
        return () => clearTimeout(isSubmitSuccessfulTimerRef.current)
    }, [isSubmitSuccessful])

    useEffect(() => {
        if (isEmptyObject(touchedFields)) return
        trigger("email")
    }, [watch("phoneNumber"), trigger])

    useEffect(() => {
        if (isEmptyObject(touchedFields)) return
        trigger("phoneNumber")
    }, [watch("email")])

    return (
        <MyCard addedClassName={classes["form-card"]}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={classes["form-card__form"]}>

                <MyInput label="Name" error={errors["name"]?.message?.toString()} addedClassName={classes["input"]}
                    {...register("name", {
                        maxLength: {
                            value: 100,
                            message: "Max lenght of name is 100 symbols"
                        }
                    })} />

                <MyInput label="Email" error={errors["email"]?.message?.toString()} addedClassName={classes["input"]}
                    {...register("email", {
                        validate: (value) => {
                            if (!value && !getValues("phoneNumber")) {
                                return "Please, provide your email or phone if possible"
                            }
                        }
                    })} />

                <MyInput autoComplete='off' inputMode='tel' label="Phone number" error={errors["phoneNumber"]?.message?.toString()} addedClassName={classes["input"]}
                    {...register("phoneNumber", {
                        validate: (value) => {
                            if (!value && !getValues("email")) {
                                return "Please, provide your email or phone if possible"
                            }
                            if (value && value.toString().includes("e")) {
                                return "Please, provide valid phone number"
                            }
                        },
                        maxLength: { value: 19, message: "Max length of a phone number is 19 characters" }
                    })}
                    onInput={(e) => {
                        const numberValue = e.currentTarget.value.replace(/[^\d()+-]/g, "");
                        setValue("phoneNumber", numberValue)
                    }} />

                <MyTextArea
                    label="Message"
                    maxRows={20}
                    value={watch("message")}
                    {...register("message", {
                        required: "This field is required",
                        maxLength: { value: 2000, message: "Max length of this field is 2000 symbols" }
                    })}
                    error={errors["message"]?.message?.toString()}
                />

                <div className={classes["button__container"]}>
                    <MyButton addedClassName={classes["button"]} type="submit"
                        disabled={!isValid && isDirty} isLoading={isSubmitting} isSubmitSuccessful={isSubmitSuccessful}
                    >
                        Send
                    </MyButton>
                </div>

                <MyPopupMessage message='Your message was successfully sent 🚀' type='success' delay={RESPONSE_STATUS_ANIMATION_DELAY} isVisible={isSubmitSuccessful === true} />
                <MyPopupMessage message='Unexpected error 😵 Try again later.' type='error' delay={RESPONSE_STATUS_ANIMATION_DELAY} isVisible={isSubmitSuccessful === false} />

            </form>
        </MyCard>
    )
}
