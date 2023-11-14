import cl from "classnames";

interface ISection {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: ISection) => {
  return (
    <section id={id} className={cl("mb-16", className)}>
      {children}
    </section>
  );
};

export default Section;
