import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PrivacyPolicy.css";
import {
  FaUserShield,
  FaInfoCircle,
  FaDatabase,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaLock,
  FaUserCheck,
  FaEnvelope,
  FaBuilding
} from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="privacy-policy container py-5">
      {/* HEADER */}
      <h1 className="text-center mb-2" data-aos="fade-down">
        <FaUserShield className="me-2" />
        Privacy Policy
      </h1>

      <p className="text-center text-muted mb-4" data-aos="fade-up">
        <strong>Fintradify HR Portal</strong> – Simplifying Workforce Management
      </p>

      <div className="text-center mb-5" data-aos="fade-up">
        <p><strong>Effective Date:</strong> 17 December 2025</p>
        <p><strong>Last Updated:</strong> 17 December 2025 at 11:41 IST</p>
        <small className="text-muted">
          Auto updates daily • Next update in 12h 18m
        </small>
      </div>

      {/* INTRO */}
      <section data-aos="fade-up">
        <h4><FaInfoCircle className="me-2" /> Introduction</h4>
        <p>
          This Privacy Policy explains how Fintradify (“we”, “our”, “us”) collects,
          uses, stores, and protects user information through our HR application
          and portal <strong>https://hr.fintradify.com</strong>.
        </p>
      </section>

      {/* INFORMATION COLLECT */}
      <section data-aos="fade-up">
        <h4><FaDatabase className="me-2" /> 1. Information We Collect</h4>
        <ul>
          <li><strong>Personal Data:</strong> Name, email, phone number, employee ID, profile photo</li>
          <li><strong>Employment Data:</strong> Attendance, leave, designation, salary records</li>
          <li><strong>Financial Data:</strong> Bank details, tax and payroll information</li>
          <li><strong>Technical Data:</strong> IP address, device details, browser, login timestamps</li>
          <li>
            <strong>Location Data:</strong> Approximate or device-based location used only for
            attendance validation, security verification, and compliance
          </li>
        </ul>
      </section>

      {/* DATA USAGE */}
      <section data-aos="fade-up">
        <h4><FaUserCheck className="me-2" /> 2. How We Use Your Data</h4>
        <ul>
          <li>Manage HR operations and employee records</li>
          <li>Process payroll and statutory compliance</li>
          <li>Verify attendance and authorized workplace access</li>
          <li>Ensure application security and prevent misuse</li>
          <li>Communicate official updates and notices</li>
        </ul>
      </section>

      {/* LOCATION */}
      <section data-aos="fade-up">
        <h4><FaMapMarkerAlt className="me-2" /> 3. Location Data Usage & Consent</h4>
        <p>
          Our application may access approximate or device-based location
          <strong> only with user permission</strong>.
        </p>
        <ul>
          <li>Used strictly for HR attendance and security validation</li>
          <li>Not continuously tracked</li>
          <li>Never sold or used for advertising</li>
          <li>User-controlled via device settings</li>
        </ul>
      </section>

      {/* SHARING */}
      <section data-aos="fade-up">
        <h4><FaExchangeAlt className="me-2" /> 4. Data Sharing</h4>
        <p>We do not sell or rent user data. Data may be shared only with:</p>
        <ul>
          <li>Payroll banks and statutory compliance authorities</li>
          <li>Secure cloud infrastructure providers</li>
          <li>Government authorities when legally required</li>
        </ul>
      </section>

      {/* SECURITY */}
      <section data-aos="fade-up">
        <h4><FaLock className="me-2" /> 5. Data Security</h4>
        <ul>
          <li>Encrypted storage and secure transmission</li>
          <li>Role-based access control</li>
          <li>Regular security audits and monitoring</li>
        </ul>
      </section>

      {/* RIGHTS */}
      <section data-aos="fade-up">
        <h4><FaUserShield className="me-2" /> 6. Your Rights</h4>
        <ul>
          <li>Access and correction of personal data</li>
          <li>Request deletion of non-required data</li>
          <li>Withdraw consent for location access</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section data-aos="fade-up">
        <h4><FaEnvelope className="me-2" /> 7. Contact Information</h4>
        <p>Email: <strong>hr@fintradify.com</strong></p>
      </section>

      {/* ADDRESS */}
      <section data-aos="fade-up">
        <h4><FaBuilding className="me-2" /> Company Details</h4>
        <p>
          <strong>Fintradify</strong><br />
          C-6, Sector 12,<br />
          Noida, Uttar Pradesh, India
        </p>
        <p className="text-muted">
          India (Governed by IT Act & Digital Personal Data Protection Act, 2025)
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
 