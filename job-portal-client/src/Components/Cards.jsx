import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiMapPin, FiPhoneCall, FiPhoneForwarded, FiPhoneIncoming } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const Cards = ({ data }) => {
  const {
    issuer,
    companyLogo,
    jobTitle,
    salary,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    phone,
    neededdate,
  } = data;
  return (
    <section className="card rounded-3xl">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img className="min-h-28 min-w-28 max-h-28 " src={companyLogo} alt="" />
        <div>
            
            <h3 className="text-xl font-bold mb-2">{jobTitle}</h3>
            <div className="text-primary/70 text-base flex flex-wrap gap-3 mb-2">
                <span className="flex items-center gap-1"> <FiMapPin/>{jobLocation}</span>
                <span className="flex items-center gap-1"> <FiClock/>{employmentType}</span>
                <span className="flex items-center gap-1"> <BsPersonWorkspace />{experienceLevel}</span>
                <span className="flex items-center gap-1"> <FaIndianRupeeSign/>{salary}</span>
                <span className="flex items-center gap-1"> <FiPhoneCall/>{phone}</span>
                <span className="flex items-center gap-1"> <FiCalendar/>{postingDate}</span>
            </div>
            <p className="pt-1">{description}</p>
        
            <h4 className="text-primary text-base mb-1 font-medium pt-3"> <span className="text-blue">Posted By : {issuer}</span>  </h4>  
            {/* <h4 className="text-primary text-base mb-1 font-medium ">Phone Number: {phone}</h4>  */}
        </div>
      </Link>
    </section>

  );
};

export default Cards;
