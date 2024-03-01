import { fold2_fig1, fold2_fig2, fold2_text1, fold2_text2 } from "../assets/images"

const Innovation = () => {
  return (
   <section id="innovation" className="max-container">
   <div className="">
    <h2 className="text-4xl text-gray font-publicsans font-bold max-sm:text-3xl text-center">
      Innovation in Capital Returns
    </h2>
    <div className="flex max-sm:flex-col  flex-row gap-10 items-center justify-center padding-y">
      <div>
        <img
          src={fold2_text1}
          alt="fold2_text1"
          width={549}
          height={655}
        />
      </div>
      <div>
        <img
          src={fold2_fig1}
          alt="fold2_fig1"
          width={555}
          height={440}
        />
      </div>
    </div>
    <div className="flex max-sm:flex-col-reverse  flex-row gap-10 items-center justify-center padding-y">
      <div>
        <img
          src={fold2_fig2}
          alt="fold2_fig2"
          width={555}
          height={440}
        />
      </div>
      <div>
        <img
          src={fold2_text2}
          alt="fold2_text2"
          width={549}
          height={640}
        />
      </div>
    </div>
   </div>
   </section>
  )
}

export default Innovation