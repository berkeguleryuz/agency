import Image from "next/image";
import logoOasis from "../app/images/clients/oasis.svg";
import logoWaves from "../app/images/clients/waves.svg";
import logoSignalPlus from "../app/images/clients/signalplus.svg";
import logoStaryum from "../app/images/clients/staryum.svg";
import logoGoMining from "../app/images/clients/gomining.png";
import logoOCW from "../app/images/clients/onchainwin.png";
import logoActivate from "../app/images/clients/activate.png";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Container from "./Container";
import { useTranslations } from "next-intl";

const clients = [
  ["Oasis Foundation", logoOasis],
  ["Waves", logoWaves],
  ["Signal Plus", logoSignalPlus],
  ["Staryum", logoStaryum],
  ["GoMining", logoGoMining],
  ["OnChainWin", logoOCW],
  ["Activate", logoActivate],
];

const Clients = () => {
  const t = useTranslations("Clients");
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {t("Clients0")}
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 text-center items-center">
            {clients.map(([client, logo]) => (
              <div
                key={client}
                className="w-auto h-auto justify-center text-center items-center self-center flex">
                <li
                  key={client}
                  className="justify-center items-center text-center ">
                  <FadeIn>
                    <Image
                      src={logo}
                      alt={client}
                      className="float-left w-[190px] h-[150px] bg-cover bg-center bg-no-repeat"
                      unoptimized
                    />
                  </FadeIn>
                </li>
              </div>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
