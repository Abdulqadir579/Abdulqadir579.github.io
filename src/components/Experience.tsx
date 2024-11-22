import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Code, Lock } from 'lucide-react';

const experiences = [
  {
    title: 'System Maintenance and Network Engineer',
    company: 'Swap.Space',
    period: '2024 - Present',
    description: 'Led cloud migration initiatives and implemented CI/CD pipelines reducing deployment time by 70%.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins']
  },
  {
    title: 'DevOps Engineer',
    company: 'Dastgyr B2B',
    period: '2023 - 2024',
    description: 'Designed and maintained multi-cloud infrastructure serving 1M+ users.',
    skills: ['Azure', 'Docker', 'Ansible', 'GitLab CI']
  }
];

const skills = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    items: ['AWS', 'Azure', 'GCP', 'Digital Ocean']
  },
  {
    icon: Code,
    title: 'Infrastructure as Code',
    items: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet']
  },
  {
    icon: Server,
    title: 'Containerization',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'ECS']
  },
  {
    icon: Lock,
    title: 'Security & Monitoring',
    items: ['Vault', 'Prometheus', 'Grafana', 'ELK Stack']
  }
];

export default function Experience() {
  return (
    <div id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-16 text-center">Experience & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-emerald-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-emerald-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                <h3 className="text-lg font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}