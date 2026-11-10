import AuthStyles from "./authForm.module.css"
import { authClient } from "../lib/auth-client"
import { useNavigate } from "react-router"

function otpField ({ 
    email,
    display,
    setDisplay,
    otp,
    setOtp
}) {
    const navigate = useNavigate()
    
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
            </div>
        </div>
    )
}

export default otpField