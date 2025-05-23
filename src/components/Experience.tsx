
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 0,
    date: 'June 2024 - July 2024',
    title: 'Geeks for Geeks Summer Training Course',
    company: 'GeeksforGeeks',
    description: 'Intensive training on data structures and algorithms, with practical application in real-world problems.\n\nGeeks for Geeks Summer Training Course Certificate',
    responsibilities: [
      'Gained hands-on experience in Data Structures & Algorithms',
      'Worked on real-world projects to apply theoretical knowledge in practical scenarios',
      'Followed best coding practices and optimized performance for better efficiency',
      'Presented the project, demonstrating practical application of learned concepts',
      'Successfully completed assessments and earned certification from GeeksforGeeks'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-data-lightGray">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-subtitle">
            My professional journey and experiences
          </div>
        </motion.div>

        <div className="mt-10 relative max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3 px-3 py-1 bg-data-blue/10 text-data-blue rounded-full text-sm inline-block">
                {exp.date}
              </div>
              
              <div className="w-full">
                <div className="data-card h-full">
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-data-blue font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{exp.description}</p>
                  {exp.responsibilities && (
                    <>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                        {exp.responsibilities.map((point: string, i: number) => (
                          <li key={i} className="text-sm">{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 max-w-lg mx-auto">
            I'm continuously seeking new opportunities to apply my data analysis skills in real-world scenarios.
            If you have a project or position that aligns with my experience, let's connect!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
