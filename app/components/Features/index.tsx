import Image from "next/image";
import { Button } from "../shared/Button";
import rocket from "@/app/assets/images/taking-off-rocket1.webp";
import padlock from "@/app/assets/images/padlock.webp";
import paymentApproved from "@/app/assets/images/payment-approved-window.webp";
import { appLink } from "../shared/helper";

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="w-full px-4 md:px-[70px] md:w-full max-w-screen-2xl mx-auto pt-[90px] md:pt-[100px] font-[family-name:var(--font-gilroy-regular)]"
    >
      <h2 className="mb-11 md:mb-20 text-primary text-center text-[30px] md:text-[70px] font-[family-name:var(--font-gilroy-semibold)]">
        Here&apos;s what you can achieve with{" "}
        <i>
          NUGA
          <span className="text-secondary">PAY</span>
        </i>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-tertiary rounded-[3.125rem] col-span-1 p-7 lg:p-[50px] overflow-hidden flex flex-col">
          <h3 className="text-[30px] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.375rem] text-white font-bold leading-tight max-w-[9ch] mb-6">
            Super-fast Loan
          </h3>
          <p className="text-xs md:text-xl">
            Build up credit worthiness and have access to as much as you like
            via the NUGA Pay app.
          </p>
          <div className="flex">
            <Image
              src={rocket}
              width={1380}
              height={981}
              alt="Taking off rocket"
              className="-ml-[50px] -mb-[50px] mt-[50px] mix-blend-soft-light max-w-[200px] md:max-w-[327px] w-4/5 flex self-end"
            />
          </div>
        </div>
        <div className="bg-secondary rounded-[3.125rem] col-span-1 p-7 lg:p-[50px] overflow-hidden">
          <h3 className="text-[30px] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.375rem] break-words text-white font-bold leading-tight !pr-0 max-w-[14ch] z-20 mb-6">
            Secured Transaction
          </h3>
          <div className="flex flex-row md:flex-col lg:flex-row">
            <p className="w-3/5 md:w-full lg:w-3/5 text-xs md:text-xl">
              NUGA Pay is aware that the current banking system is awash with a
              range of common transaction problems. With our platform, you can
              expect swift, efficient transactions at every point in time.
            </p>
            <div className="w-2/5 md:w-3/5 lg:w-2/5 flex self-end items-end">
              <Image
                src={padlock}
                width={550}
                height={600}
                alt="Chip for a plastic card in the form of a lock"
                className="h-auto w-full flex max-w-[105px] md:max-w-[183px] mx-auto lg:mx-auto mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-primary rounded-[3.125rem] p-7 lg:p-[100px] !pb-0 flex flex-col md:flex-row gap-4 overflow-clip">
          <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 pb-4 sm:pb-7 lg:pb-[100px]">
            <h1 className="text-[30px] md:text-[4.375rem] text-white font-medium leading-tight max-w-[11ch]">
              <span className="font-bold">POS</span> Reliability
            </h1>
            <p className="mt-6 md:mb-8 text-xs md:text-xl">
              With NUGA Pay, card and transfer payments are accepted
              effortlessly. Enjoy instantneous settlements and payments, dispute
              resolutions, and the ease that comes with smooth transactions and
              exchanges.
            </p>
            <div className="hidden md:flex justify-start gap-6">
              <Button href={appLink}>
                Download the App
              </Button>
            </div>
          </div>
          <div className="flex w-4/5 sm:w-3/5 md:w-2/5 mx-auto overflow-clip">
            <Image
              src={paymentApproved}
              width={1050}
              height={1599}
              alt="Payment approved displayed on a mobile phone screen"
              className="mix-blend-hard-light h-auto w-auto mx-auto flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
