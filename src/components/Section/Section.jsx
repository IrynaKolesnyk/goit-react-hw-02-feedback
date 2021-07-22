import React from "react";
import PropTypes from "prop-types";
import SectionStyled from "./SectionStyled";

const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
