import { fold3_pic_mobile, fold3_pic_wide } from "../assets/images"

const Tokens = () => {
  return (
    <section id="tokens" className="max-container flex flex-1 flex-col justify-center items-center">
      <h2 className="text-4xl text-gray font-publicsans font-bold max-sm:text-3xl text-center max-sm:leading-tight">
      RMINT Security Token <br />
      Creates <span className="text-red">New</span> Private Market
      </h2>
      <p className="text-gray leading-normal sm:w-2/3 text-center mt-4 mb-2">
        RMINT security token  represents a real-world, tangible asset (RWA). It stands at the crossroads of two worlds: the trusted, traditional finance, and the boundless, innovative potential of DeFi.
      </p>
      <p className="text-gray leading-normal sm:w-2/3 text-center mt-2 mb-2">
        This unique position allows RMINT to offer the best of both worlds: the reliability and regulatory compliance of traditional financial instruments coupled with the accessibility, transparency, and efficiency of DeFi.
      </p>
      <p className="text-gray leading-normal sm:w-2/3 text-center mt-2 mb-2">
        Security tokens are best of ICO/IPO. To know more, please read this:  <a className="underline" href="https://www.gemini.com/cryptopedia/security-token-offering-vs-initial-coin-offering-stos">What are security tokens?</a> 
      </p>
      <img
        src={fold3_pic_wide}
        alt="fold3_pic_wide"
        width={750}
        height={780}
        className="max-sm:hidden mt-8"
      />
      <img
        src={fold3_pic_mobile}
        alt="fold3_pic_mobile"
        width={375}
        height={400}
        className="sm:hidden mt-8"
      />
    </section>
  )
}

export default Tokens