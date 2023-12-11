const About = () => {
    return (
        <div className="bg-sky-100 my-3 py-10 ">
           <div className="lg:pl-32">
           <h1 className=" text-4xl font-medium mb-3">About</h1>
            <p className=" text-4xl font-medium text-gray-400 mb-3">Hello My Name Is Shahin Alam.</p>

            <div className="flex justify-center items-center">
            <div className="  border-neutral-950 border-2 w-[400px]  rounded-br-[150px]">
                <p className="text-lg p-5 ">
                I am a full-stack web developer from Chittagong Bangladesh. My expertise is in the are of React JS & Responsive Design. With every line of code, I strive to make the web a beautiful place. Feel free to take a look at my latest projects on the web portfolio page. Thank you.
                </p>
                <button className="ml-5 btn w-48 mb-10 text-2xl bg-slate-900 hover:bg-slate-200 hover:text-black  text-white font-medium border-neutral-950 border-2 rounded-br-[50px] ">Contact</button>
            </div>
            </div>

           </div>
        </div>
    );
};

export default About;