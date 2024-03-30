import { FunctionComponent, useState } from "react";
import GoogleOauthButton from "../components/GoogleOauthButton";
import PrimaryInputBox from "../components/PrimaryInputBox";
import { Circle, CircleArrowLeft, Eye, EyeOff, PencilLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const OnboardingStep2: FunctionComponent = () => {
    const navigate = useNavigate();
    const [passwordShow1, setPasswordShow1] = useState<boolean>(false);
    const [passwordShow2, setPasswordShow2] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordUnmatch, setPasswordUnmatch] = useState<boolean>(false);
    const [unauthorisedEmail, setUnauthorisedEmail] = useState<boolean>(true);
    const [newsletter, setNewsletter] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        const email = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setUnauthorisedEmail(true);
        } else {
            setUnauthorisedEmail(false);
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (event.target.value !== confirmPassword) {
            setPasswordUnmatch(true);
        } else {
            setPasswordUnmatch(false);
        }
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setPasswordUnmatch(true);
        } else {
            setPasswordUnmatch(false);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, confirmPassword, newsletter);

        {
            /* add axios post request here */
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-background p-4">
            <div className="max-w-[722px] max-h-[684px] w-full h-full flex flex-col items-center justify-center rounded-3xl p-4 relative ">
                <div className="absolute top-5 left-5">
                    <CircleArrowLeft onClick={() => navigate(-1)} />
                </div>
                <div className="max-width flex items-center justify-center box-border max-w-full text-11xl font-syne">
                    <div className="flex-1 flex flex-col items-center justify-center gap-[19px] max-w-full">
                        <span className=" m-0 text-inherit font-bold font-inherit inline-block z-[1]">
                            Account
                        </span>
                        <div className="max-width self-stretch text-base text-center font-montserrat z-[1] flex flex-col item-center">
                            <span>We suggest using the email address you use at work.</span>
                        </div>
                    </div>
                </div>

                <form
                    method="post"
                    onSubmit={handleFormSubmit}
                    className={`max-w-[454px] w-full max-h-[434px] mt-[50.05px] flex flex-col items-center gap-[16px]`}
                >
                    <div
                        className={`w-full  ${
                            unauthorisedEmail ? "h-[99.66px]" : "h-[73.66px]"
                        } gap-[10px] flex flex-col justify-between`}
                    >
                        <span className="w-full h-[17px] font-montserrat font-[500] text-[14px] leading-[17.07px] text-primary">
                            Email*
                        </span>
                        <div className="relative w-full h-[45px] flex items-center ">
                            <PrimaryInputBox
                                type="email"
                                name="email"
                                placeholder="@work-email.com"
                                onChange={handleEmailChange}
                                className="focus:outline-primary-100 focus:outline"
                                value={email}
                                required
                            />
                            <div className="absolute bg-background text-primary flex items-center right-4">
                                <PencilLine className="bg-inherit" />
                            </div>
                        </div>

                        {unauthorisedEmail && (
                            <div className="w-full h-[16px] flex items-center justify-start">
                                <span className=" h-[16px] font-montserrat font-[300] text-[13px] leading-[15.85px] text-orangered-300">
                                    Unauthorized email
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="w-full h-[72.33px] gap-[10px] flex flex-col justify-between">
                        <span className="w-full h-[17px] font-montserrat font-[500] text-[14px] leading-[17.07px] text-primary">
                            Password*
                        </span>
                        <div className="relative w-full h-[45px] flex items-center ">
                            <PrimaryInputBox
                                type={passwordShow1 ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={handlePasswordChange}
                                className="focus:outline-primary-100 focus:outline"
                                value={password}
                                required
                            />
                            {/*PrimaryInputBox component for password*/}
                            <div
                                onClick={() => setPasswordShow1(!passwordShow1)}
                                className="absolute bg-background text-primary flex items-center right-4 cursor-pointer"
                            >
                                {passwordShow1 ? (
                                    <EyeOff className="bg-inherit" />
                                ) : (
                                    <Eye className="bg-inherit" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className={`w-full  ${
                            passwordUnmatch ? "h-[99.66px]" : "h-[73.66px]"
                        } gap-[10px] flex flex-col justify-between`}
                    >
                        <span className="w-full h-[17px] font-montserrat font-[500] text-[14px] leading-[17.07px] text-primary">
                            Confirm Password*
                        </span>
                        <div className="relative w-full h-[45px] flex items-center ">
                            <PrimaryInputBox
                                type={passwordShow2 ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="confirm_password"
                                onChange={handleConfirmPasswordChange}
                                className="focus:outline-primary-100 focus:outline"
                                value={confirmPassword}
                                required
                            />
                            {/*PrimaryInputBox component for password*/}
                            <div
                                onClick={() => setPasswordShow2(!passwordShow2)}
                                className="absolute bg-background text-primary flex items-center right-4 cursor-pointer"
                            >
                                {passwordShow2 ? (
                                    <EyeOff className="bg-inherit" />
                                ) : (
                                    <Eye className="bg-inherit" />
                                )}
                            </div>
                        </div>

                        {passwordUnmatch && (
                            <div className="w-full h-[16pxpx] flex items-center justify-start">
                                <span className=" h-[16px] font-montserrat font-[300] text-[13px] leading-[15.85px] text-orangered-300">
                                    {passwordUnmatch ? "Password doesn't match" : ""}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="h-[19px] max-w-[330px] w-full flex items-center justify-center gap-1 mt-[3px]">
                        <div className="flex" onClick={() => setNewsletter(!newsletter)}>
                            {newsletter ? (
                                <Circle fill={"#495270"} size={"16px"} />
                            ) : (
                                <Circle size={"16px"} />
                            )}
                        </div>
                        <span className="h-[17px] font-montserrat font-[400] text-[14px] leading-[17.07px]">
                            Send me emails with tips, news, and offers.
                        </span>
                    </div>
                    <div className="h-[40px] max-w-[454px] w-full mt-[23px]">
                        <PrimaryButton
                            disabled={
                                unauthorisedEmail ||
                                passwordUnmatch ||
                                !email ||
                                !password ||
                                !confirmPassword
                            }
                        >
                            Continue
                        </PrimaryButton>
                        {/* Use the PrimaryButton component */}
                    </div>
                </form>

                <div className="w-full h-[25.47px] flex justify-center mt-[25.27px] items-center">
                    <GoogleOauthButton />
                </div>
            </div>
        </div>
    );
};

export default OnboardingStep2;
