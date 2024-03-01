import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="subscribe" className="max-container flex flex-1 flex-col justify-center items-center">
      <h2 className="text-3xl text-gray font-publicsans font-bold max-sm:text-3xl text-center max-sm:leading-tight">
      Join our <span className="text-red font-kalam text-[32px]  ">exclusive</span> waitlist today
      </h2>
      <p className="text-gray leading-normal sm:w-1/2 text-center mt-4 mb-2">
      Be the first to know about <span className="text-red font-bold">upcoming opportunities and token offers</span>. Get early access reserved for RMINT community members.
      </p>
      <p className="text-gray leading-normal sm:w-2/3 text-center mt-2 mb-6">
      Subscribe now and be at the forefront of innovation.
      </p>
      <Button btnText="Subscribe" />
    </section>
  )
}

export default Subscribe