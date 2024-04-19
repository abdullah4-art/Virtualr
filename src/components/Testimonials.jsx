import { testimonials } from "../constants"



const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial,index)=>(
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-md tracking-tight">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-center">
                <img className="w-12 h-12 mr-6 border border-neutral-500 rounded-full" 
                  src={testimonial.image} 
                  alt={testimonial.user} 
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal text-neutral-600 italic">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials