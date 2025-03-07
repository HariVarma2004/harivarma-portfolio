import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 - Present",
    degree: "B.E Computer Science and Engineering",
    institution: "[College Name]",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education",
    institution: "[School Name]",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School Education",
    institution: "[School Name]",
  },
];

const Education = () => {
  return (
    <section className="education-section bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
      <div className="max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-box bg-white p-5 my-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-semibold text-gray-700">{edu.year}</p>
            <p className="text-lg text-gray-600">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;