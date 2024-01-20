import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-center text-gray-400">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center auto-rows-max">
        <div className="card w-96 bg-base-100 shadow-xl h-full">
          <figure className="h-48">
            <Image
              src="/project1.png"
              alt="project 1"
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-xl lg:text-xl font-extrabold tracking-tight uppercase">
              Dynamic Road Safety system
              <div className="badge text-gray-400 border-black">
                <Link href="https://github.com/sundaram123krishnan/dynamic-road-detective-system">
                  LINK
                </Link>
              </div>
            </h2>
            <p className="text-md lg:text-lg text-muted-foreground text-gray-400">
              Revolutionizing hill road safety, our project is a sophisticated
              detective system safeguarding travelers on intricate curves of
              picturesque destinations like Ooty and Nandi Hills.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Typescript</div>
              <div className="badge badge-outline">Next JS</div>
              <div className="badge badge-outline">Dynamo DB</div>
              <div className="badge badge-outline">Python-yolov3</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
          <figure className="h-48">
            <Image
              src="/project2.png"
              height={300}
              width={300}
              alt="project2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-xl lg:text-xl font-extrabold tracking-tight uppercase">
              Agnel Polytechnic, Vashi
              <div className="badge text-gray-400 border-black">
                <Link href="https://github.com/WhyAsh5114/Agnel-Polytechnic-Vashi">
                  LINK
                </Link>
              </div>
            </h2>
            <p className="text-md lg:text-lg text-muted-foreground text-gray-400">
              Elevate your institutions online presence with a meticulously
              crafted college website that seamlessly integrates information,
              engagement, and accessibility for students and stakeholders.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Typescript</div>
              <div className="badge badge-outline">Svelte</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
          <figure className="h-48">
            <Image
              src="/project3.png"
              height={300}
              width={300}
              alt="project2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-xl lg:text-xl font-extrabold tracking-tight uppercase">
              Book display card
              <div className="badge text-gray-400 border-black">
                <Link href="https://github.com/sundaram123krishnan/Book-Card">
                  LINK
                </Link>
              </div>
            </h2>
            <p className="text-md lg:text-lg text-muted-foreground text-gray-400">
              Effortlessly showcase book details and enhance user experience
              with a dynamic book card component in React.js, featuring
              interactive elements, responsive design, and seamless integration.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Javascript</div>
              <div className="badge badge-outline">React</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
