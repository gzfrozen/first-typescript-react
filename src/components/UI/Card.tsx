import './Card.css';

type ChildrenProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: ChildrenProps) => {
  const classes = 'card ' + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
