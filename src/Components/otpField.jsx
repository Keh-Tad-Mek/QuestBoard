import { useState, useEffect } from "react"
import { authClient } from "../lib/auth-client"
import AuthStyles from "./authForm.module.css"
import { useNavigate } from "react-router"

function otpField ({ 
    email,
    display,
    setDisplay,
    otp,
    setOtp
}) {
    const [otpResendDisabled, setOtpResendDisabled] = useState(true)
    const [seconds, setSeconds] = useState(30)
    const navigate = useNavigate()

    useEffect(() => {   
        if (!otpResendDisabled) return

        if (seconds <= 0) {
            setOtpResendDisabled(false)
            return
        }

        const id = setTimeout(() => setSeconds(s => s - 1), 1000)
        return () => clearTimeout(id)
    }, [seconds, otpResendDisabled])

    useEffect(() => {
        if (display === "none") return 
        setSeconds(30)
        setOtpResendDisabled(true)
    }, [display])
    

    const verifyOtp = async (otp) => {
        const { data, error } = await authClient.emailOtp.verifyEmail({
            email: email,
            type: "email-verification",
            otp: otp
        })

        if (error) {
            console.log(error)
        } else {
            navigate("/", { replace: true })
        }

    }

    const resendOtp = async () => {
        if (otpResendDisabled) {
            console.log("Not time yet")
            return
        }

        const { error } = await authClient.emailOtp.sendVerificationOtp({
            email, 
            type: "email-verification"
        })

        if (error) {
            console.log(error)
            return
        }

        setSeconds(30)
        setOtpResendDisabled(true)
    }


    return (
        <div style={{
                display:`${display}`
            }}
            className={AuthStyles.blur}
        >
            <div className={AuthStyles.otpField}>
                <div>
                    <h1>Verify yerself</h1>

                </div>
                <p>
                    We have sent a raven with a code number to yer raven address if ye provided a valid one.
                </p>
                <input type="text" onChange={(e) => setOtp(e.currentTarget.value)}/>
                <div className={AuthStyles.footer}>
                    <button
                        value={otp}
                        onClick={(e) => verifyOtp(e.currentTarget.value)}
                    >Verify</button>
                    <button
                        onClick={() => {
                            setOtp("")
                            setDisplay("none")}
                        }
                    >Cancel</button>
                </div>
                <p
                    className={AuthStyles.resendOtp}
                    onClick={resendOtp}
                    style={{ cursor: otpResendDisabled ? "default" : "pointer" }}
                >
                    {otpResendDisabled
                        ? `Send another raven in ${seconds}s`
                        : "Send another raven"}
                </p>
            </div>
        </div>
    )
}

export default otpField