import Image from "next/image";
import logoOasis from "../app/images/clients/oasis.svg";
import logoWaves from "../app/images/clients/waves.svg";
import logoSignalPlus from "../app/images/clients/signalplus.svg";
import logoStaryum from "../app/images/clients/staryum.svg";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Container from "./Container";

const clients = [
  ["Oasis Foundation", logoOasis],
  ["Waves", logoWaves],
  ["Signal Plus", logoSignalPlus],
  ["Staryum", logoStaryum],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We worked with amazing clients
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 text-center items-center">
            {clients.map(([client, logo]) => (
              <li key={client} className="justify-center items-center text-center">
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
