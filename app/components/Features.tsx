import feature1 from "../../public/assets/feature-1.svg";
import feature2 from "../../public/assets/feature-2.svg";
import feature3 from "../../public/assets/feature-3.svg";
import CheckMark from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";
import Image from "next/image";

export default function Features() {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]' id="features">
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={feature1}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium text-[#0085ff] text-[20px] lg:text-[18px]'>
          Product Lifecycle Simplified
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
          Streamline Your Path from Concept to Market
          </h1>
          <Image
            src={feature1}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
          Access a suite of tools that streamline your product development from ideation to launch. Simplify stakeholder collaboration, track real-time progress of your startup, and turn vision into market success with unmatched efficiency.There is no need for spending tens of thousands dollars on development before knowing if it is worth to.
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-3 text-[#36585C] '>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Idea validation with AI
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
             Concept roasting by seasoned entrepreneurs
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Idea Mapping and Collaborative brainstorming tools
            </li>
          </ul>
          {/* <p className='flex items-center gap-x-3 text-[#0085FF] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={BlueButton} alt='BlueButton' />
            </span>
          </p> */}
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row'>
        <Image
          src={feature2}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
          <h3 className='font-medium text-[#4aaf48] text-[20px] lg:text-[18px]'>
            Progress tracking and Agile Roadmapping
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
            Interactive Workspaces  to create projects,milestones and gamified progress map for better optimization
          </h1>
          <Image
            src={feature2}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
            Once you created the workspace, added projects and created progress maps, invite other teams or members to optimize product building,sales and marketing operations in one unified environment. Decide who is involved in which part and make the product journey transparent
          </p>

          <ul className='flex flex-col gap-y-4 lg:text-[18px]'>
            <li className='flex items-center gap-x-3 text-[#36585C] '>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Generate  progress maps from steps to track progress
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C]'>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Analyze and share analytics of each achieved milestone across teams
            </li>
            <li className='flex items-center gap-x-3 text-[#36585C] '>
              <span>
                <Image src={CheckMark} alt='Checkmark' />
              </span>
              Create roadmap of milestones that suits your startup goals
            </li>
          </ul>
          {/* <p className='flex items-center gap-x-3 text-[#58b35f] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={GreenButton} alt='BlueButton' />
            </span>
          </p> */}
        </div>
      </div>

      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={feature3}
          alt='Feature 1 image'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium text-[#0085ff] text-[20px] lg:text-[18px]'>
            Time to sell to your customers
          </h3>
          <h1 className='pt-[13px] text-1xl font-medium text-[#172026] lg:text-[43px] lg:lead lg:gap-y-[10px]'>
            Generate the sales pipeline and
            create marketing campaigns with AI that actually works
          </h1>
          <Image
            src={feature3}
            alt='feature1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36585C] lg:text-[18px]'>
            And now with your idea being validated and product strategy laid out, you can start creating your sales and marketing campaigns, generate pipelines,optimize and send cold emails to your audience. Reach the first revenues without writing ANY LINE OF CODE. 
          </p>

          <div className='flex w-full gap-x-[24px]  pt-[25px]'>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#36585C]">10+</h3>
              <p className="text-[#36585C]">Startups building out</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#36585C]">12+</h3>
              <p className="text-[#36585C]">Investors and Accelerators</p>
            </div>
          </div>
          {/* <p className='flex items-center gap-x-3 text-[#ff007b] pt-[24px] font-medium lg:text-[18px]'>
            Learn More
            <span>
              <Image src={PinkButton} alt='BlueButton' />
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}
