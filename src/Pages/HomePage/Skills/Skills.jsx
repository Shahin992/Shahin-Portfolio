
import { useEffect, useState } from "react";
 


const Skills = () => {
    
    const [skill,setSkill] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/skills')
            .then(res => res.json())
            .then(data => {
                setSkill(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(skill);
    
   
    
    return (
        <div>
           <div className="max-w-[1100px] mx-auto my-10">
           <h1 className=" text-3xl font-semibold mb-3">Skills</h1>
            <p className=" text-4xl font-medium text-gray-400 mb-10">MY TOP SKILLS</p>

          <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 gap-10  justify-center items-center ">
                {
                    skill.map((data,index)=> <div key={index}>
                       <div className="bg-slate-100 w-[450px] rounded-xl p-5 h-44 ">
                       <div className=" flex justify-end">
                       <p className=" font-bold text-xl">More</p>
                       <img className="w-7 h-7" src="https://antu-portfolio.netlify.app/static/media/fast-forward.026dd689d2426687a430.png" alt="" />
                       </div>
                       <div className="flex  justify-center items-center gap-x-10">
                       <div className="w-10 h-10">
                            {/* image */}
                            <img className="" src={data.image} alt="" />



                        </div>
                        <div className="w-[300px]">
                            {/* text */}
                            <h3 className="text-xl font-bold mb-1">{data.name}</h3>
                            <p>{data.title}</p>


                        </div>
                       </div>
                       </div>

                    </div>)
                }
            </div>
          </div>

           </div>
        </div>
    );
};

export default Skills;