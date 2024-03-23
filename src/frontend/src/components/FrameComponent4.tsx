import { FunctionComponent } from "react";
import RoundArrowRightSvgrepoCom1 from "./RoundArrowRightSvgrepoCom1";
import FrameComponent5 from "./FrameComponent5";
import Component from "./Component";
import GoogleOauthButton from "./GoogleOauthButton";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-[25px] pb-[108.09999999999992px] box-border relative gap-[47.90000000000009px] min-w-[469px] max-w-full text-left text-11xl text-darkslateblue-100 font-montserrat mq750:gap-[24px_47.9px] mq750:min-w-full mq450:pb-[45px] mq450:box-border mq1050:pt-5 mq1050:pb-[70px] mq1050:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-506.svg"
      />
      <RoundArrowRightSvgrepoCom1 />
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="w-[454px] flex flex-col items-end justify-start gap-[33px] max-w-full mq450:gap-[16px_33px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px] box-border max-w-full font-syne">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
                <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq750:text-5xl mq450:text-lg">
                  Account
                </h1>
              </div>
              <div className="self-stretch relative text-base font-montserrat text-center z-[1]">
                We suggest using the email address you use at work. 🧑‍💻
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[16.666666666666668px] max-w-full text-sm">
            <FrameComponent5
              // email="Email*"
              // workEmailcom="@work-email.com"
              // pen2SvgrepoCom="/pen2svgrepocom1.svg"
              // unauthorizedEmail="Unauthorized email"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.300000000000182px]">
              <div className="relative font-medium inline-block min-w-[75px] z-[1]">
                Password*
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[13.299999999999727px] px-[18.200000000000045px] pb-[13.700000000000273px] relative text-mini text-darkslateblue-200">
                <div className="relative inline-block min-w-[73px] z-[2]">
                  Password
                </div>
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/rectangle-522.svg"
                  />
                  <img
                    className="absolute top-[13.5px] left-[418px] w-[21.5px] h-[19px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/component-62--3.svg"
                  />
                </div>
              </div>
            </div>
            <FrameComponent5
              // email="Confirm Password*"
              // workEmailcom="Confirm Password"
              // pen2SvgrepoCom="/component-62--1.svg"
              // unauthorizedEmail="Password doesn’t match"
              // propMinWidth="unset"
              // propLeft="416.2px"
              // propWidth="21.5px"
              // propMinWidth1="unset"
            />
            <div className="h-[19px] flex flex-row items-start justify-end py-0 px-14 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <Component />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[25.300000000000185px] text-mini">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-10 relative">
              <img
                className="absolute top-[0px] left-[0px] w-[454px] h-10 z-[1]"
                alt=""
                src="/rectangle-512.svg"
              />
              <div className="absolute top-[10px] left-[191.5px] text-mini font-semibold font-montserrat text-whitesmoke text-left inline-block min-w-[72px] z-[2]">
                Continue
              </div>
            </button>
            <div className="self-stretch h-[25.5px] flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border">
              <GoogleOauthButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
