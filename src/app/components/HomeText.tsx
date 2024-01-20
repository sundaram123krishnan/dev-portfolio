import Image from "next/image";
import Link from "next/link";

export default function HomeText() {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 lg:px-0 text-gray-400 gap-5 lg:text-right
"
    >
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left">
        Sundaram KRISHNAN,
      </h1>
      <div className="text-lg lg:text-xl text-muted-foreground text-center lg:text-left">
        A passionate and innovative programmer dedicated to crafting seamless
        <br />
        digital experiences. With a love for turning ideas into reality through
        <br />
        code, I thrive in the dynamic world of programming.
      </div>
      <div className="flex items-center justify-center gap-2 mb-10">
        <Link href="https://github.com/sundaram123krishnan">
          <Image src="/github.png" width={50} height={50} alt="github logo" />
        </Link>
        <Link href="https://twitter.com/krishnsundaram">
          <Image
            src="/twitter-sign.png"
            width={50}
            height={50}
            alt="twitter logo"
          />
        </Link>
        <Link href="https://stackoverflow.com/users/23269585/sundaram-krishnan">
          <Image src="/social.png" width={50} height={50} alt="social logo" />
        </Link>
        <Image src="/facebook.png" width={50} height={50} alt="facebook logo" />
        <Link href="https://www.linkedin.com/in/sundaram-krishnan-b95806237/">
          <Image
            src="/linkedin.png"
            width={50}
            height={50}
            alt="linkedin logo"
          />
        </Link>
      </div>
    </div>
  );
}
