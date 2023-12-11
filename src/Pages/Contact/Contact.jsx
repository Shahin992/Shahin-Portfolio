import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Contact = () => {
    return (
        <div id="contact">
            <div className="w-full max-w-[1100px] mx-auto my-10">
            <div data-aos="fade-down">
            <h1 className=" text-3xl text-white font-semibold mb-5 pt-7 ">Contact</h1>
            <p className=" text-4xl font-medium text-gray-400 mb-10">GET IN TOUCH</p>
            </div>

           <div className="flex justify-center items-start">
           <div data-aos="fade-right" className="w-1/2">
                <form className="w-full">
                <div className="my-6  flex flex-col gap-6 items-center justify-center">
            <input 
              type="text"
              placeholder="Your Name"
              className="text-3xl font-semibold input input-bordered input-lg h-32 w-full"
            />
            <input
              type="text"
              placeholder="Your email"
              className="text-3xl font-semibold input input-bordered input-lg h-32 w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="text-3xl font-semibold input input-bordered input-lg h-32 w-full"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="text-3xl font-semibold input input-bordered input-xl h-[162px] w-full"
            />
            <button type="submit" className="ml-5 btn w-48 mb-10 text-2xl bg-slate-200 text-black   font-medium border-neutral-950 border-2 rounded-br-[50px] ">Contact</button>
          </div>
          



                </form>
            </div>

            <div data-aos="fade-left" className="w-1/2">
                
                <div className="flex justify-center items-center gap-8 my-6">
                    <figure ><img className="w-8 h-8" src="https://antu-portfolio.netlify.app/static/media/gmail.a2f2146f929409405da0.png" alt="" /></figure>
                    <p className="text-white text-2xl ">shahinkhan5979@gmail.com</p>
                 </div> 
                <div className="flex  lg:ml-[88px] items-center gap-8 my-6">
                    <figure ><img className="w-8 h-8" src="https://antu-portfolio.netlify.app/static/media/whatsapp.97b90b6e3f8c70254204.png" alt="" /></figure>
                    <p className="text-white text-2xl ">+8801580391983</p>
                 </div> 
                <div className="flex lg:ml-[88px] items-center gap-8 my-6">
                    <figure ><img className="w-8 h-8" src="https://antu-portfolio.netlify.app/static/media/linkedin.d21b834035baa551e886.png" alt="" /></figure>
                    <a href="https://www.linkedin.com/in/992-shahin-khan" className="text-white text-2xl ">Linkedin</a>
                 </div> 
            
            </div>
           </div>

            





            </div>
            
            
        </div>
    );
};

export default Contact;