// import Link from "next/link";
// import clsx from "clsx";
// import {
//   BsFacebook,
//   BsTwitter,
//   BsGithub,
//   BsYoutube,
//   BsLinkedin,
// } from "react-icons/bs";

// export const SocialMediaProfiles = [
//   {
//     title: "Youtube",
//     href: "https://www.youtube.com/@omegayon",
//     icon: BsYoutube,
//   },
//   {
//     title: "GitHub",
//     href: "https://guleryuz/",
//     icon: BsGithub,
//   },
//   {
//     title: "Facebook",
//     href: "https://www.facebook.com/berkeguleryuz1/",
//     icon: BsFacebook,
//   },
//   {
//     title: "Linkedin",
//     href: "https://www.linkedin.com/in/berke-guleryuz/",
//     icon: BsLinkedin,
//   },
//   { title: "Twitter", href: "https://twitter.com/omegayon", icon: BsTwitter },
// ];

// const SocialMedia = ({ className, invert = false }) => {
//   return (
//     <ul
//       role="list"
//       className={clsx(
//         "flex gap-x-10",
//         invert ? "text-white" : "text-neutrla:950",
//         className,
//       )}>
//       {SocialMediaProfiles.map((item) => (
//         <li key={item.title}>
//           <Link
//             href={item.href}
//             aria-label={item.title}
//             className={clsx(
//               "transition",
//               invert ? "hover:text-neutral-200" : "hover:text-neutral-700",
//             )}>
//             <item.icon className="h-6 w-6 fill-current" />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SocialMedia;
