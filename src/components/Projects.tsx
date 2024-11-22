import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Application Deployment on Kubernetes Platform using EKS',
    description: 'Built a scalable Kubernetes infrastructure on AWS EKS for automated application deployment.',
    tech: ['Kubernetes', 'AWS EKS', 'Helm', 'Prometheus']
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Implemented fully automated CI/CD pipelines with advanced security scanning and testing.',
    tech: ['Jenkins', 'GitLab', 'SonarQube', 'Ansible']
  }
];

export default function Projects() {
  return (
    <div id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}