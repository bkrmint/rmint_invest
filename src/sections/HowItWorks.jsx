import { fold2_text1, fold4_pic_large, fold4_steps } from "../assets/images";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-container flex flex-1 flex-col justify-center items-center">
      <h2 className="text-4xl text-gray font-publicsans font-bold max-sm:text-3xl text-center">
        How does it work?
      </h2>
      <p className="text-gray leading-normal sm:w-2/3 text-center mt-4 mb-2">
        Through the <span className="font-bold text-red">RMINT Distributed Exchange</span>, a groundbreaking platform, RMINT enables secure, transparent, and direct transactions without the need for intermediaries. Here&apos;s what sets it apart:
      </p>
      <ul className="list-disc sm:w-2/3 pl-8">
        <li className="text-gray leading-normal mt-2 mb-2">
        <span className="font-bold">Accessibility:</span>  Opens up investment opportunities to a broader audience
        </li>
        <li className="text-gray leading-normal mt-2 mb-2">
        <span className="font-bold">Security and Compliance:</span> Adheres to stringent regulatory standards, ensuring that your investments are secure.
        </li>
        <li className="text-gray leading-normal mt-2 mb-2">
          <span className="font-bold">Interoperability:</span> RMINT token facilitates a fluid exchange between traditional financial assets and digital assets.
        </li>
      </ul>
      <div className="flex flex-row max-sm:flex-col-reverse gap-14 items-center justify-center">
        <div>
          <img
            src={fold4_steps}
            alt="fold4_steps"
            width={596}
            height={755}
            className="sm:mt-8"
          />
        </div>
        <div>
          <img
            src={fold4_pic_large}
            alt="fold4_pic_large"
            width={500}
            height={417}
            className="max-sm:mt-8"
          />
        </div>
      </div>

    </section>
  )
}

export default HowItWorks